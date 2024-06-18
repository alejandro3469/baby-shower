"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Poppins, Dancing_Script } from 'next/font/google'
const poppins = Poppins({
  weight: ['400', '600', '700'],
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
          <div className="baby">Baby </div><span className={`${dancing_Script.className} shower`}>shower</span>
        </h1>
      </div>
      {<motion.img
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="banner-main-image"
        src="/winnie.png"
      />}
    </main>
  );
}
