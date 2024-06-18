"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Home() {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.main}
    >
      <motion.img
        animate={{ y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="banner-main-image"
        src="/winnie.png"
      />
    </motion.main>
  );
}
