import React from 'react'
import NavBar from './NavBar/NavBar'
import AppStyle from "./NavBar/Navbar.module.css"
import G from './NavBar/g'
import MainPage from './MainPage/MainPage'

const App = () => {
  return (
    <div className={AppStyle.container}>
      <MainPage />
    </div>
  )
}

export default App