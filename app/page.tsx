"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={styles.main}>
      <motion.img
        animate={{ y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="banner-main-image"
        src="/winnie.png"
      />
    </main>
  );
}
