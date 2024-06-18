"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Poppins, Dancing_Script } from 'next/font/google'
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
const dancing_Script = Dancing_Script({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`${poppins.className} ${styles.main}`}>
      <div>
        <h1>
          <span className="baby">Baby </span><span className={`${dancing_Script.className} shower`}>shower</span>
        </h1>
      </div>
      {<motion.img
        animate={{ y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="banner-main-image"
        src="/winnie.png"
      />}
    </main>
  );
}
