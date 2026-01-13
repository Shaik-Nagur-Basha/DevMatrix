import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeepSeek from "./components/DeepSeek/DeepSeek";
import DeepSeek1 from "./components/DeepSeek/DeepSeek1";
import DeepSeek2 from "./components/DeepSeek/DeepSeek2";
import ChatGpt from "./components/ChatGpt/ChatGpt";
import Grok from "./components/Grok/Grok";
import Home from "./components/Home";
import GitHubCopilot from "./components/GitHubCopilotAgentMode/GitHubCopilot";
import MicrosoftCopilot from "./components/Copilot/MicrosoftCopilot";
import DeepSeek3 from "./components/DeepSeek/DeepSeek3";
import ChatGpt1 from "./components/ChatGpt/ChatGpt1";
import MicrosoftCopilot1 from "./components/Copilot/MicrosoftCopilot1";
import GitHubCopilot1 from "./components/GitHubCopilotAgentMode/GitHubCopilot1";
import GitHubCopilot2 from "./components/GitHubCopilotAgentMode/GitHubCopilot2";
import GC3SignUpPage from "./components/GitHubCopilotAgentMode/GC3SignUpPage";
import GC3SignInPage from "./components/GitHubCopilotAgentMode/GC3SignInPage";
import ErrorPage from "./components/ErrorPage";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio/Portfolio";
import Portfolio1 from "./components/Portfolio/Portfolio1";
import Portfolio2 from "./components/Portfolio/Portfolio2";
import ChatDashboard from "./components/ChatDashboard/ChatDashboard";
import ChatDashboard1 from "./components/ChatDashboard/ChatDashboard1";
import ExpenseDashboard from "./components/ExpenseDashboard/ExpenseDashboard";
import MarketDashboard from "./components/MarketDashboard/MarketDashboard";
import StellarMarket from "./components/StellarMarket/StellarMarket";
import FocusLightSpinner from "./components/FocusLightSpinner";
import StellarMarket_v2 from "./components/StellarMarket_v2/StellarMarket_v2";
import ShootingGameMain from "./components/ShootingGame/ShootingGameMain";

export default function App() {
  const contentArray = [
    {
      title: "ErrorPage",
      type: "video",
      madeBy: "Agent Mode With C 3.5 S",
    },
    {
      title: "StellarMarket_v2",
      type: "video",
      madeBy: "Agent Mode With C 3.5 S",
    },
    {
      title: "StellarMarket",
      type: "video",
      madeBy: "Agent Mode With C 3.5 S",
    },
    {
      title: "FocusLightSpinner",
      type: "video",
      madeBy: "Agent Mode With C 3.5 S",
    },
    {
      title: "ExpenseDashboard",
      type: "video",
      madeBy: "Agent Mode With C 3.5 S",
    },
    {
      title: "MarketDashboard",
      type: "video",
      madeBy: "Agent Mode With C 3.5 S",
    },
    {
      title: "GC3SignUpPage",
      type: "video",
      madeBy: "GC3SignUpPage",
    },
    {
      title: "GC3SignInPage",
      type: "video",
      madeBy: "GC3SignInPage",
    },
    {
      title: "GitHubCopilot2",
      type: "video",
      madeBy: "GitHubCopilot2",
    },
    { title: "DeepSeek2", type: "image", madeBy: "DeepSeek2" },
    { title: "DeepSeek3", type: "video", madeBy: "DeepSeek3" },
    { title: "DeepSeek", type: "image", madeBy: "DeepSeek" },
    { title: "DeepSeek1", type: "image", madeBy: "DeepSeek1" },
    {
      title: "GitHubCopilot1",
      type: "video",
      madeBy: "GitHubCopilot1",
    },
    {
      title: "Portfolio",
      type: "video",
      madeBy: "Agent Mode With C 3.5 S",
    },
    { title: "Portfolio1", type: "video", madeBy: "ChatGPT" },
    { title: "Portfolio2", type: "video", madeBy: "ChatGPT" },
    { title: "ChatGpt1", type: "video", madeBy: "ChatGpt1" },
    {
      title: "MicrosoftCopilot1",
      type: "image",
      madeBy: "MicrosoftCopilot1",
    },
    {
      title: "MicrosoftCopilot",
      type: "image",
      madeBy: "MicrosoftCopilot",
    },
    { title: "ChatGpt", type: "image", madeBy: "ChatGpt" },
    {
      title: "GitHubCopilot",
      type: "image",
      madeBy: "GitHubCopilot",
    },
    { title: "Grok", type: "image", madeBy: "Grok" },
    { title: "ChatDashboard1", type: "image", madeBy: "ChatGPT" },
    { title: "ChatDashboard", type: "image", madeBy: "ChatGPT" },
    { title: "ShootingGame", type: "game", madeBy: "GitHub Copilot" },
  ];

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/DevMatrix"
          element={<Home contentArray={contentArray} />}
        />
        <Route
          path="/DevMatrix/MicrosoftCopilot"
          element={<MicrosoftCopilot />}
        />
        <Route
          path="/DevMatrix/MicrosoftCopilot1"
          element={<MicrosoftCopilot1 />}
        />
        <Route path="/DevMatrix/ChatGpt" element={<ChatGpt />} />
        <Route path="/DevMatrix/ChatGpt1" element={<ChatGpt1 />} />
        <Route path="/DevMatrix/DeepSeek" element={<DeepSeek />} />
        <Route path="/DevMatrix/DeepSeek1" element={<DeepSeek1 />} />
        <Route path="/DevMatrix/DeepSeek2" element={<DeepSeek2 />} />
        <Route path="/DevMatrix/DeepSeek3" element={<DeepSeek3 />} />
        <Route path="/DevMatrix/GitHubCopilot" element={<GitHubCopilot />} />
        <Route path="/DevMatrix/GitHubCopilot1" element={<GitHubCopilot1 />} />
        <Route path="/DevMatrix/GitHubCopilot2" element={<GitHubCopilot2 />} />
        <Route path="/DevMatrix/GC3SignUpPage" element={<GC3SignUpPage />} />
        <Route path="/DevMatrix/GC3SignInPage" element={<GC3SignInPage />} />
        <Route path="/DevMatrix/Grok" element={<Grok />} />
        <Route path="/DevMatrix/Portfolio" element={<Portfolio />} />
        <Route path="/DevMatrix/Portfolio1" element={<Portfolio1 />} />
        <Route path="/DevMatrix/Portfolio2" element={<Portfolio2 />} />
        <Route path="/DevMatrix/ChatDashboard" element={<ChatDashboard />} />
        <Route path="/DevMatrix/ChatDashboard1" element={<ChatDashboard1 />} />
        <Route
          path="/DevMatrix/ExpenseDashboard"
          element={<ExpenseDashboard />}
        />
        <Route
          path="/DevMatrix/MarketDashboard"
          element={<MarketDashboard />}
        />
        <Route path="/DevMatrix/StellarMarket" element={<StellarMarket />} />
        <Route
          path="/DevMatrix/FocusLightSpinner"
          element={<FocusLightSpinner />}
        />
        <Route
          path="/DevMatrix/StellarMarket_v2"
          element={<StellarMarket_v2 />}
        />
        <Route path="/DevMatrix/ShootingGame" element={<ShootingGameMain />} />
        <Route path="/DevMatrix/ErrorPage" element={<ErrorPage />} />

        {/* Error page - catches all undefined routes */}
        <Route
          path="*"
          element={<ErrorPage code="404" message="Page not found" />}
        />
      </Routes>
    </Router>
  );
}
