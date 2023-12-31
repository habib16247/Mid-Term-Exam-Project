import React from 'react'
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <div className={styles.text}>
          <h1 className={styles.h1}>Your Guide to the Global Halal Jobs Market<sup>®</sup> </h1>
          <p className={styles.lead}>"When it comes to job opportunities, Halal Jibika stands out as a leader in catering to positions and roles within the Halal industry."</p>
          <a className={styles.certiBtn} href="#">Become Certified</a>
        </div>
    </div>
  )
}

export default Home