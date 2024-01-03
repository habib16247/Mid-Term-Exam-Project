import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import styles from "./MainPage.module.css"
import Footer from '../Footer/Footer'

const MainPage = () => {
  return (
    <div>
        <NavBar />
         <ScrollRestoration />
        <div className={styles.outlet}>
            <Outlet/>
            <Footer />
        </div>
    </div>
  )
}

export default MainPage