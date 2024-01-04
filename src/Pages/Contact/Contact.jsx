import React from 'react';
import styles from "./Contact.module.css";
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactHero}>
        <h1 className={styles.directPath}>
          <NavLink to="/" style={{ color: "rgb(255, 147, 7)" }}>Home </NavLink>/ Contact
        </h1>
      </div>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116803.8702545189!2d90.38420984432221!3d23.81429789406411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1704347391611!5m2!1sbn!2sbd" style={{ border: 0, width: "100%", height: "300px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className={styles.contactHead}>Contact</h3>
          <p className={styles.infoTitle}>
            <strong className={styles.infoTitle}>Phone</strong>:<br />
            <a className={styles.infoLink} href="tel:8801972-279431">01972-279431</a>
          </p>
          <p>
            <strong className={styles.infoTitle}>Email</strong>:<br />
            <a className={styles.infoLink} href="mailto:isa@isahalal.com">habibullah162470@gmail.com</a>
          </p>
          <p>
            <strong  className={styles.infoTitle}>Main Office Address: </strong>
            <br />
            <a className={styles.infoLink} href="tel:1-319-362-0480">
              4362 16th Ave&nbsp;SW
              <br />
              Cedar Rapids, Iowa 52404
            </a>
          </p>
          <p>
            <strong  className={styles.infoTitle}>Mailing Address:</strong>
          </p>
          <p>
            <a className={styles.infoLink} href="tel:1-319-362-0480">
              P. O. Box&nbsp; 8268&nbsp;
              <br />
              Cedar Rapids, Iowa
              <br />
              52408-8268
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
