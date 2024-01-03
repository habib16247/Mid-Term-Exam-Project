import React from 'react'
import styles from "./Contact.module.css"
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
        <div className={styles.contactHero}>
          <h1 className={styles.directPath}><NavLink to="/"  style={{color: "rgb(255, 147, 7)"}}>Home </NavLink>/ Contact</h1>
      </div>
    </div>
  )
}

export default Contact