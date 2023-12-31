import React, { useEffect } from 'react';
import MainPage from './MainPage/MainPage';
import AppStyle from "./NavBar/Navbar.module.css";

const App = () => {
  
  return (
    <div className={AppStyle.container}>
      <MainPage />
    </div>
  );
}

export default App;
