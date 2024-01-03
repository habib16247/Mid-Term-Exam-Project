import React from 'react'
import styles from "./Home.module.css"
import jobBoy from "../../assets/image/jobImg.svg"
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className={styles.content}>
    <div className={`${styles.homeContainer}`}>
    <div className={`${styles.text} text-animation`}>
        <h1 className={`${styles.h1}`}>Your Guide to the Global Halal Jobs Market<sup>®</sup></h1>
        <p className={`${styles.lead}`}>When it comes to job opportunities, Halal Jibika stands out as a leader in catering to positions and roles within the Halal industry.</p>
        <NavLink className={`${styles.certiBtn}`} to="/jobs" href="https://www.informaticsinc.com/">Find Jobs</NavLink>
    </div>
    <div className={`${styles.jobBg} img-animation`} style={{width: "26rem"}}>
        <img src={jobBoy} alt="" />
    </div>
</div>
    <section className={styles.trustedSecction}>
      <h2 className={styles.trustHead}>Trusted by Muslim Companies <br /> Around the World</h2>
      <div className={styles.trustedCompany}>
        <div className="company">
          <img className={styles.Clogo} src="https://www.muslimjobs.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhobrv2dy%2Fimage%2Fupload%2Fv1671735018%2Fcompany-logos%2Fmuslimaid.jpg&w=48&q=75" alt="" />
          <p className={styles.anim} style={{color: "#fff"}}>Tarteel AI</p>
        </div>
        <div className="company">
          <img className={styles.Clogo} src="https://www.muslimjobs.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhobrv2dy%2Fimage%2Fupload%2Fv1671735399%2Fcompany-logos%2Ftarteel-ai.png&w=48&q=75" alt="" />
          <p className={styles.anim} style={{color: "#fff"}}>MuslimAid</p>
        </div>
        <div className="company">
          <img className={styles.Clogo} src="https://www.muslimjobs.io/_next/image?url=https%3A%2F%2Fimagedelivery.net%2F3eLxm_4Kl53UF8z5FejLxw%2Fe8d7a3d3-4580-4308-edef-7ba99b848600%2Flogo&w=48&q=75" alt="" />
          <p className={styles.anim} style={{color: "#fff"}}>NZF Worldwide</p>
        </div> 
        <div className="company">
          <img className={styles.Clogo} src="https://www.muslimjobs.io/_next/image?url=https%3A%2F%2Fimagedelivery.net%2F3eLxm_4Kl53UF8z5FejLxw%2Fa5f8ce49-f3ad-4a59-a534-cece2c49c300%2Flogo&w=48&q=75" alt="" />
          <p className={styles.anim} style={{color: "#fff"}}>Takadao</p>
        </div>
        <div className="company">
          <img className={styles.Clogo} src="https://www.muslimjobs.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhobrv2dy%2Fimage%2Fupload%2Fv1671734996%2Fcompany-logos%2Fislamic-relief-usa.jpg&w=48&q=75" alt="" />
          <p className={styles.anim} style={{color: "#fff"}}>Islamic Relief</p>
        </div>       
        
      </div>
    </section>
    <section className={styles.jobSeeker}>
      <h2 className={styles.seekerHead}>JOB SEEKERS</h2>
      <div className={styles.deenCompro}>
        <img className={styles.picDemo} src="https://www.muslimjobs.io/_next/static/media/interview.11cf277b.svg" alt="" />
        <div className={styles.textIntro}>
          <h2 className={styles.textHead}>Find Jobs Without Compromising Your Deen</h2>
          <p className={styles.textInfo}>Find jobs in companies that align with your values and beliefs, and work with other Muslims.</p>
          <a className={styles.searchJob} href="#">Search Jobs &gt;</a>
        </div>
      </div>
      <div className={styles.deenCompro}>
        <div className={styles.textIntro}>
          <h2 className={styles.textHead}>Get Hired Faster By Joining Our Talent Network</h2>
          <p className={styles.textInfo}>Create a profile to showcase your skills and experience to employers. Let Muslim companies reach out to you instead.</p>
          <a className={styles.searchJob} href="#">Create Profile &gt;</a>
        </div>
        <img className={styles.picDemo} src="https://www.muslimjobs.io/_next/static/media/network.a1d870cf.svg" alt="" />
      </div>
      <div className="deenCompro">

      </div>
    </section>

    <section className={styles.employers}>
      <h2 className={styles.employHead}>EMPLOYERS</h2>
      <div className={styles.jobFindInfo}>
        <div className={styles.textIntro}>
          <h2 className={styles.jobHead}>Post Jobs and Find the Right Talent</h2>
          <p className={styles.textJobInfo}>Post jobs and get infront of 1000s of Muslim professionals looking for meaningful employment opportunities.</p>
          <a className={styles.postJob} href="#">Post Jobs &gt;</a>
        </div>
        <img className={styles.picDemo} src="https://www.muslimjobs.io/_next/static/media/online-cv.3de719db.svg" alt="" />
      </div>
      <div className={styles.jobFindInfo}>
        <img className={styles.picDemo} src="https://www.muslimjobs.io/_next/static/media/hire.e8d8fff3.svg" alt="" />
        <div className={styles.textIntro}>
          <h2 className={styles.jobHead}>Search for Talent Faster with our Candidate Database</h2>
          <p className={styles.textJobInfo}>Search our database of Muslim professionals and reach out to them directly. Find the right talent for your company.</p>
          <a className={styles.postJob} href="#">Start Hiring &gt;</a>
        </div>
      </div>
    </section>

    <section className={styles.reviews}>
      <p className={styles.reviewText}>
      “Muslimjobs helped me secure a fantastic remote summer internship in digital marketing. I highly recommend the platform to fellow muslim professionals looking for meaningful employment and internship opportunities.”
      </p>
      <p className={styles.reviewer}>
      Yasmine Jedidi
      </p>
      <p className={styles.jobCompany}>
      Digital Marketing Intern
      </p>
      
    </section>
    <section className={styles.startHiring}>
      <p className={styles.hireText}>
      Start Hiring Today. Find Your Next Hire on MuslimJobs.
      </p>
      
      <a href="#">
      I'm Ready To Start Hiring &gt;
      </a>
      
    </section>

    <section className={styles.subcribtion}>
      <div className={styles.w1}>
      <h2 className={styles.hireText}>
      Sign Up for Weekly Job Alerts and Updates
      </h2>
      <p className={styles.convence}>
      Get notified when new jobs are posted on Halal Jibika.
      </p>
      
      <div className={styles.subscribeInputBtn}>
        <input type="text" placeholder='Enter your email' className={styles.subInput}/>
        <button className={styles.subBtn}>
          subscribe
        </button>
      </div>
      </div>      
    </section>
  </section>

  </>
  )
}

export default Home