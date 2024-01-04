import React, { useState, useEffect, useRef, useContext } from 'react';
import styles from "./Navbar.module.css";
import logo from "../assets/image/logo.png";
import profile from "../assets/image/HABIB.jpeg";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { AuthProvider } from '../ContextAPI/ContextProvider';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../FireBase/Firebase.config';
import Swal from 'sweetalert2';

const NavBar = () => {
    const {count} = useContext(AuthProvider)
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);

    const auth = getAuth(app)
    const logout = () => {
        signOut(auth).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Logged Out Successfully'
            });
        }).catch((error) => {
            console.error('Logout Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Logout Failed',
                text: error.message
            });
        });
    };

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

    console.log(auth.currentUser)
    return (
        <div className={styles.navContainer}>
            <nav ref={navbarRef} className={styles.navbar}>
                <div className={styles.navbarBrand}>
                    <img className={styles.logo} src={logo} alt="halal-jibika" />
                </div>
                <div></div>

                <div className={styles.searchbar}>
                    <input className={styles.search} type="text" placeholder='Search here .......' />
                </div>

                <div className={styles.hamburger}>
                    {isOpen ? (
                        <div style={{fontSize: "30px"}}><AiFillCloseSquare className={styles.menu} onClick={toggleMenu} /></div>
                    ) : (
                        <div style={{fontSize: "30px"}}><BsFillMenuButtonWideFill className={styles.menu} onClick={toggleMenu} /></div>
                    )}
                </div>

                {isOpen && (
                    <ul className={styles.navbarLinks}>
                        <li><NavLink className={styles.links} to="/">Home</NavLink></li>
                        <li><NavLink className={styles.links} to="/jobs">Jobs</NavLink></li>
                        <li><NavLink className={styles.links} to="/about">About</NavLink></li>
                        <li><NavLink className={styles.links} to="/contact">Contact</NavLink></li>
                        <li><NavLink className={styles.links} to="/favorite"><p className={styles.carts}>{count}</p>Favorite</NavLink></li>
                        <li className={styles.dropdown}>
                        {auth?.currentUser ? (
                           <div className={styles.signInUser}>
                             <img className={styles.profilePic} src={auth?.currentUser.photoURL} alt="" />
                             <div className={styles.userInformation}>
                             <img className={styles.detailsprofilePic} src={auth?.currentUser.photoURL} alt="" />
                             <p className={styles.singleInfo}>{auth?.currentUser.displayName}</p>
                             <p className={styles.singleInfo}>{auth?.currentUser.email}</p>
                             <li  onClick={logout}><NavLink>Sign Out</NavLink></li>
                             </div>
                           </div>                      
                            
                            ) : (
                                
                                <div>
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
                                </div>
                                

                            )} 
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    );
}

export default NavBar;
