import React from 'react'
import styles from "./About.module.css"
import { NavLink } from 'react-router-dom'
import logo from "../../assets/image/logo.png"
import profile from "../../assets/image/HABIB.jpeg"

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHero}>
          <h1 className={styles.directPath}><NavLink to="/"  style={{color: "rgb(255, 147, 7)"}}>Home </NavLink>/ About</h1>
      </div>
      <div className={styles.authorityContent}>
        <h1 className={styles.authorIntro}>About of <br /> <img src={logo} alt="" /></h1>
        <div className={styles.authorprofile}>
          <img className={styles.author} src={profile} alt="" />
          <div className={styles.position}>
            <h2 style={{lineHeight: 0}} className={styles.ceopanel}>MD Habibullah</h2>
            <h2 className={styles.ceopanel}>CEO & Founder of Halal Jibika</h2>
          </div>
          </div>
          <p>Halal Jibika is a comprehensive online platform meticulously crafted to champion the cause of halal livelihoods in today's intricate economic milieu. Rooted deeply in the tenets of Islamic finance and ethical practices, our website offers a diverse array of meticulously vetted opportunities, ranging from job placements and entrepreneurial ventures to sharia-compliant investment options. Each listing undergoes a rigorous evaluation process to ensure its authenticity and alignment with halal standards, giving users the confidence to pursue opportunities that resonate with their faith. But Halal Jibika is more than just a listings platform; it's a vibrant knowledge ecosystem. We provide an extensive array of resources, articles, and educational materials, designed to empower users with a deep understanding of halal business practices, financial instruments, and ethical considerations. Our community-centric approach fosters connections among like-minded individuals, facilitating knowledge-sharing, networking, and mentorship. With cutting-edge tools and features, Halal Jibika simplifies the complexities of halal finance and commerce, making it accessible and actionable for users of all backgrounds. By embracing a holistic vision of halal living, Halal Jibika aspires to be the trusted partner and guide for individuals and businesses seeking to navigate the world of halal-compliant opportunities, fostering prosperity, integrity, and community development.</p>
        
      </div>
    </div>
  )
}

export default About