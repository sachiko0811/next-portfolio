import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'

import { motion } from "framer-motion";

import styles from '../styles/Home.module.css'

import PageHeader from '../widgets/PageHeader'
// import About from '../pages/about'

export default function Home() {
  return (
    <div 
    // className={styles.container}
    >
      <Head>
        <title>Frontend Developer SACHIKO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <PageHeader />
        {/* <About /> */}


        <div>
          Hello World!
        </div>

        <main className={styles.main}>
          
        </main>

        <footer className={styles.footer}>
          &copy; 2021 sachiko
        </footer>
      </motion.div>
    </div>
  )
}
