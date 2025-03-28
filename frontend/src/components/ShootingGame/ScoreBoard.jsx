import React from "react";
import { motion } from "framer-motion";
import styles from "./ShootingGame.module.css";

const ScoreBoard = ({ score, highScores }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <motion.div
      className={styles.scoreBoard}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2>High Scores</h2>
      <div className={styles.scoresContainer}>
        {highScores.map((entry, index) => (
          <motion.div
            key={entry.timestamp}
            className={styles.scoreEntry}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className={styles.scoreValue}>{entry.score}</span>
            <span className={styles.scoreTime}>
              {formatDate(entry.timestamp)}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ScoreBoard;
