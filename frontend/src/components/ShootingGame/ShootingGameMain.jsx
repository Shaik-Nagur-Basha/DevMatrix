import React from "react";
import Game from "./Game";
import { motion } from "framer-motion";
import styles from "./ShootingGame.module.css";

const ShootingGameMain = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.gameContainer}
    >
      <Game />
    </motion.div>
  );
};

export default ShootingGameMain;
