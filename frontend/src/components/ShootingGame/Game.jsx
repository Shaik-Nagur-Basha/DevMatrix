import React, { useEffect, useRef, useState, useCallback } from "react";
import ScoreBoard from "./ScoreBoard";
import { motion } from "framer-motion";
import styles from "./ShootingGame.module.css";

const Game = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const targetsRef = useRef([]);
  const lastTimeRef = useRef(0);

  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameSpeed, setGameSpeed] = useState(1);
  const [highScores, setHighScores] = useState([]);

  const createParticle = useCallback((x, y, color) => {
    return {
      x,
      y,
      color,
      velocity: {
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() - 0.5) * 8,
      },
      alpha: 1,
    };
  }, []);

  const spawnTarget = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (targetsRef.current.length < level + 2) {
      const newTarget = {
        x: Math.random() * (canvas.width - 40),
        y: 0,
        width: 40,
        height: 40,
        speed: 2 * gameSpeed,
      };
      targetsRef.current = [...targetsRef.current, newTarget];
    }
  }, [level, gameSpeed]);

  const handleClick = useCallback(
    (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      targetsRef.current.forEach((target, index) => {
        if (
          x > target.x &&
          x < target.x + target.width &&
          y > target.y &&
          y < target.y + target.height
        ) {
          // Create explosion effect
          for (let i = 0; i < 8; i++) {
            particlesRef.current.push(createParticle(x, y, "#FFD700"));
          }

          // Remove target and update score
          targetsRef.current = targetsRef.current.filter((_, i) => i !== index);
          setScore((prev) => {
            const newScore = prev + 100;
            // Level up mechanics
            if (newScore > level * 1000) {
              setLevel((l) => l + 1);
              setGameSpeed((s) => s * 1.2);
            }
            return newScore;
          });
        }
      });
    },
    [level, createParticle]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Set initial canvas size
    const updateCanvasSize = () => {
      canvas.width = 800;
      canvas.height = 600;
    };
    updateCanvasSize();

    const animate = (currentTime) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const deltaTime = currentTime - lastTimeRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        particle.alpha -= 0.01;

        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return particle.alpha > 0;
      });

      // Update and draw targets
      targetsRef.current = targetsRef.current
        .map((target) => {
          target.y += target.speed;
          ctx.fillStyle = "#FF4444";
          ctx.fillRect(target.x, target.y, target.width, target.height);
          return target;
        })
        .filter((target) => target.y < canvas.height);

      if (deltaTime > 1000) {
        spawnTarget();
        lastTimeRef.current = currentTime;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    canvas.addEventListener("click", handleClick);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      canvas.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array since we're using refs

  // Save high scores when game ends
  useEffect(() => {
    return () => {
      if (score > 0) {
        const newHighScore = {
          score,
          timestamp: new Date().toISOString(),
        };
        setHighScores((prev) =>
          [...prev, newHighScore].sort((a, b) => b.score - a.score).slice(0, 10)
        );
      }
    };
  }, [score]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.gameContainer}
    >
      <div className={styles.gameHeader}>
        <h2>Level: {level}</h2>
        <h2>Score: {score}</h2>
      </div>
      <canvas ref={canvasRef} className={styles.gameCanvas} />
      <ScoreBoard score={score} highScores={highScores} />
    </motion.div>
  );
};

export default Game;
