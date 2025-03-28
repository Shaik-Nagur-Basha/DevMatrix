document.getElementById("downloadBtn").addEventListener("click", async () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  try {
    // Execute script in the active tab to gather page content
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: async () => {
        // Get all CSS (from stylesheets and inline styles)
        const stylesheets = Array.from(document.styleSheets);
        let cssText = "";

        for (const sheet of stylesheets) {
          try {
            const rules = Array.from(sheet.cssRules);
            cssText += rules.map((rule) => rule.cssText).join("\n");
          } catch (e) {
            if (sheet.href) {
              try {
                const response = await fetch(sheet.href);
                const text = await response.text();
                cssText += text;
              } catch (fetchError) {
                console.error("Could not fetch stylesheet:", fetchError);
              }
            }
          }
        }

        // Create the standalone HTML
        const standaloneHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${document.title}</title>
    <style>
      ${cssText}
    </style>
</head>
<body>
    ${document.body.innerHTML}
</body>
</html>`;

        return standaloneHTML;
      },
    });

    // Create and download the file
    const htmlContent = result[0].result;
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    await chrome.downloads.download({
      url: url,
      filename: "page.html",
      saveAs: true,
    });

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading page:", error);
    alert("Error downloading page. Please check the console for details.");
  } finally {
    spinner.style.display = "none";
  }
});
