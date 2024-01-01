import React, { useState, useEffect, useRef } from 'react';
import styles from "./Navbar.module.css";
import logo from "../assets/image/logo.png";
import profile from "../assets/image/HABIB.jpeg";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 788) { 
                setIsOpen(true);
                if (document.removeEventListener) {
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            } else {
                setIsOpen(false);
                if (document.addEventListener) {
                    document.addEventListener('mousedown', handleClickOutside);
                }
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (document.removeEventListener) {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, []);

    return (
        <div className={styles.navContainer}>
            <nav ref={navbarRef} className={styles.navbar}>
                <div className={styles.navbarBrand}>
                    <img className={styles.logo} src={logo} alt="halal-jibika" />
                </div>

                <div className={styles.searchbar}>
                    <input className={styles.search} type="text" placeholder='Search here .......' />
                </div>

                <div className={styles.hamburger}>
                    {isOpen ? (
                        <AiFillCloseSquare className={styles.menu} onClick={toggleMenu} />
                    ) : (
                        <BsFillMenuButtonWideFill className={styles.menu} onClick={toggleMenu} />
                    )}
                </div>

                {isOpen && (
                    <ul className={styles.navbarLinks}>
                        <li><NavLink className={styles.links} to="/">Home</NavLink></li>
                        <li><NavLink className={styles.links} to="/jobs">Jobs</NavLink></li>
                        <li><NavLink className={styles.links} to="/about">About</NavLink></li>
                        <li><NavLink className={styles.links} to="/contact">Contact</NavLink></li>
                        <li><NavLink className={styles.links} to="/favorite">Favorite</NavLink></li>
                        <li className={styles.dropdown}>
                            <div className={`${styles.dropProfile} ${styles.signLinks}`}>
                                <NavLink style={{color: "#fff"}} to="/favorite">
                                    SignUp/SignIn    
                                </NavLink>
                            </div>
                            <ul className={`${styles.signBtn}`}>
                                <li>
                                    <NavLink className={styles.signlinkss} to="/signup">
                                        <img className={styles.signUpImg} src="https://www.freeiconspng.com/thumbs/sign-up-button-png/sign-up-button-png-33.png" alt="" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" className={styles.signlinkss}>
                                        <img className={styles.signUpImg} src="https://static.vecteezy.com/system/resources/thumbnails/008/480/184/small/login-click-with-cursor-3d-icon-model-cartoon-style-concept-render-illustration-png.png" alt="" />
                                    </NavLink>
                                </li>
                            </ul>
                            {/* <div className={styles.dropProfile}><img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={profile} alt="" /></div>
                            <ul className={styles.dropdownContent}>
                                <li><img style={{ width: "100px" }} src={profile} alt="" /></li>
                                
                                <li><NavLink>Sign Out</NavLink></li>
                            </ul> */}
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    );
}

export default NavBar;
