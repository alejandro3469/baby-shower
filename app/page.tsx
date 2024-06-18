"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Poppins, Dancing_Script } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
const dancing_Script = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${poppins.className} ${styles.main}`}>
      <div>
        <motion.h1 animate={{ opacity: [0, 1] }} transition={{ duration: 3 }}>
          <div className="baby">Baby </div>
          <span className={`${dancing_Script.className} shower`}>shower</span>
        </motion.h1>
      </div>
      <motion.img
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="flower-image"
          src="/flower1.png"
        />
      
        <motion.img
          animate={{ y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="banner-main-image"
          src="/winnie3.png"
        />
      
    </main>
  );
}
