import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo-high-resolution-logo.png";
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [appNav, setAppNav] = useState("app__nav");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true); // Set scrolled state to true when scrolled down 100px
        setAppNav("app__navSmall");
      } else {
        setIsScrolled(false); // Set scrolled state to false when scrolled to top
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
          <a href="/"><img src={logo} alt='Logo' /></a>
        </div>
        <ul className='app__nav-links flex__center '>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contactus">Contact Us</a></li>
        </ul>
        <div className='menu'>
          <span className='overlay__close icon-th-menu' onClick={() => {
            if (toggleMenu) {
              setToggleMenu(false);
            } else {
              setToggleMenu(true);
            }
          }} />
          {
            toggleMenu && (
              <div className='flex__center app__nav-menu'>
                {/* <button onClick={() => { setToggleMenu(false) }} className='overlay__close' >Menu</button> */}
                <ul className='app__nav-menu_links'>
                  <li><a href="/">Home</a></li>
                  <li><a href="#aboutus">About Us</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contactus">Contact Us</a></li>
                </ul>
              </div>
            )
          }
        </div>
      </nav>
    </header>
  )
};

export default Navbar;
