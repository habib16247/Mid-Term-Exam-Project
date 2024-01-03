import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/image/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className="column">
          <div className={styles.describe}>
            <img src={logo} alt="ISA Log Inversed" width="200" height="105" />
            <p>
              Halal certification and auditing services has made Islamic
              Services of America (ISA) a globally recognized symbol of Halal
              integrity.
            </p>

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
              <a
                target="_blank"
                href="https://www.facebook.com/isahalal/"
                title="facebook"
                alt="facebook icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </a>

              <a
                target="_blank"
                href="https://twitter.com/isahalal"
                title="twitter"
                alt="twitter icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#03a9f4"
                    d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"
                  ></path>
                </svg>
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/company/islamic-services-of-america-isa/"
                title="LinkedIn"
                alt="LinkedIn icon"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#0288d1" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"></path>
                </svg>
              </a>

              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=O3h7FVNG2Cs"
                title="Islamic Services of America Halal Certification"
                alt="Islamic Services of America Halal Certification icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FF3D00"
                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                  ></path>
                  <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="column">
          <div>
            <h3>Contact</h3>
            <p>
              <strong>Phone</strong>:<br />
              <a href="tel:8801972-279431">01972-279431</a>
            </p>

            <p>
              <strong>Email</strong>:<br />
              <a href="mailto:isa@isahalal.com">habibullah162470@gmail.com</a>
            </p>

            <p>
              <strong>Main Office Address: </strong>
              <br />
              <a href="tel:1-319-362-0480">
                4362 16th Ave&nbsp;SW
                <br />
                Cedar Rapids, Iowa 52404
              </a>
            </p>

            <p>
              <strong>Mailing Address:</strong>
            </p>

            <p>
              <a href="tel:1-319-362-0480">
                P. O. Box&nbsp; 8268&nbsp;
                <br />
                Cedar Rapids, Iowa
                <br />
                52408-8268
              </a>
            </p>

            <p>&nbsp;</p>
          </div>
        </div>

        <div className="column">
          <h3>Navigation</h3>
          <ul className={styles.nav}>
            <li>
              <NavLink to="/" target="_self">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs" target="_self">
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" target="_self">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorite" target="_self">
                Favorite
              </NavLink>
            </li>
            <li>
              <a href="#" target="_self">
                Halal Information
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                News &amp; Events
              </a>
            </li>
            <li>
              <NavLink to="/contact" target="_self">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.privacy}>
        Copyright © 2023 Islamic Services of America. All Rights Reserved. Web
        Application by{" "}
        <a href="https://www.informaticsinc.com/" target="_blank">
          Informatics, Inc.
        </a>
        <span>&nbsp;172.17.0.2</span>
      </p>
    </div>
  );
};

export default Footer;
