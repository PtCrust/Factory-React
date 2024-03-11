import React, { useState, useEffect } from 'react';
import logo1 from "../../assets/logo.png"
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [appNav, setAppNav] = useState("app__nav");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setAppNav("app__navSmall");
      } else {
        setAppNav("app__nav");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header >
      <nav className={appNav}>
        <div className='app__nav-logoImg'>
          <a href="/"><img src={logo1} alt='Logo' /></a>
          <div className='app__nav-logo-content'>
            <h1>Nile & Four Brothers</h1>
            <h1>S.A.E</h1>
          </div>
        </div>
        <ul className='app__nav-links flex__center '>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contactus">Contact Us</a></li>
        </ul>

        <span className='overlay__close icon-th-menu' onClick={() => {
          if (toggleMenu) {
            setToggleMenu(false);
          } else {
            setToggleMenu(true);
          }
        }} />

        {
          toggleMenu && (
            <div className='menu'>
              <div className='flex__center app__nav-menu'>
                <ul className='app__nav-menu_links'>
                  <li><a href="/">Home</a></li>
                  <li><a href="#aboutus">About Us</a></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contactus">Contact Us</a></li>
                </ul>
              </div>
            </div>
          )
        }
      </nav>
    </header>
  )
};

export default Navbar;
