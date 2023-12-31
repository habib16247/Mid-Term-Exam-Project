import React from 'react'
import styles from "./Footer.module.css"
import logo from "../assets/image/logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerContainer}>
            <div className="column">
                <div className={styles.describe}>
                    <img src={logo} alt="ISA Log Inversed" width="200" height="105"/>
                    <p>Halal certification and auditing services has made Islamic Services of America (ISA) a globally recognized symbol of Halal integrity.</p>
                    
                    <p className={styles.preheader}>
                        <a href="#">
                            <u>User Agreement Policy</u>
                        </a>
                    </p>
                    <p className={styles.preheader}>
                        <a href="#">
                            <u>Suspended, cancelled, terminated customer list</u>
                        </a>
                    </p>
                    <p className={styles.preheader}>
                        For Complaints, Appeals, or Comments, please use our 
                        <a href="#">contact inquiry form</a>
                    </p>
                    <div className={styles.social}>
                        <a target="_blank" href="https://www.facebook.com/isahalal/" title="facebook" alt="facebook icon">FaceBook</a>
                        <a target="_blank" href="https://twitter.com/isahalal" title="twitter" alt="twitter icon">Twitter</a>
                        <a target="_blank" href="https://www.linkedin.com/company/islamic-services-of-america-isa/" title="LinkedIn" alt="LinkedIn icon">LinkedIn</a>
                        <a target="_blank" href="https://www.youtube.com/watch?v=O3h7FVNG2Cs" title="Islamic Services of America Halal Certification" alt="Islamic Services of America Halal Certification icon">Youtube</a>
                    </div>
                </div>
            </div>
            
            <div className="column">
                <div>
                <h3>Contact</h3>
                <p><strong>Phone</strong>:<br />
                <a href="tel:1-319-362-0480">319-362-0480</a></p>
                
                <p><strong>Email</strong>:<br />
                <a href="mailto:isa@isahalal.com">isa@isahalal.com</a></p>
                
                <p><strong>Main Office Address: </strong><br />
                <a href="tel:1-319-362-0480">4362 16th Ave&nbsp;SW<br />
                Cedar Rapids, Iowa 52404</a></p>
                    
                <p><strong>Mailing Address:</strong></p>
                    
                <p><a href="tel:1-319-362-0480">P. O. Box&nbsp; 8268&nbsp;<br />
                Cedar Rapids, Iowa<br />
                52408-8268</a></p>
                    
                <p>&nbsp;</p>
                </div>
            </div>

            <div className="column">
                <h3>Navigation</h3>
                <ul className={styles.nav}>
                    <li><a href="#" target="_self">Home</a></li>
                    <li><a href="" target="_self">About ISA</a></li>
                    <li><a href="" target="_self">Global Halal Recognition</a></li>
                    <li><a href="#" target="_self">Services</a></li>
                    <li><a href="#" target="_self">Halal Information</a></li>
                    <li><a href="#" target="_self">News &amp; Events</a></li>
                    <li><a href="" target="_self">Contact</a></li></ul>
            </div>
        </div>
        <p style={{background: "#000", textAlign: "center", position: "absolute", width: "100vw", height: "5rem", display: "flex", alignItems: "center", justifyContent: "center"}}>Copyright © 2023 Islamic Services of America. All Rights Reserved. Web Application by <a href="https://www.informaticsinc.com/" target="_blank">Informatics, Inc.</a><span>&nbsp;172.17.0.2</span></p>
    </div>
  )
}

export default Footer