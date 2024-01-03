import React from 'react'
import styles from "./About.module.css"
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHero}>
          <h1 className={styles.directPath}><NavLink to="/"  style={{color: "rgb(255, 147, 7)"}}>Home </NavLink>/ About</h1>
      </div>
    </div>
  )
}

export default About