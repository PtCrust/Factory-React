import React from 'react';
import './Footer.css';
import logo from "../../assets/logo-high-resolution-logo.png";

const Footer = () => (
  <footer className='app__footer'>
    <div className='app__footer-main'>
      <div className='app__footer-main-left'>
        <h3><span className='blue__style'>Address:</span> 6391 Elgin St. Celina, Delaware 10299</h3>
        <h3><span className='blue__style'>Phone:</span> +84 1102 2703</h3>
        <h3><span className='blue__style'>Email:</span> hello@thebox.com</h3>
        <img src={logo} alt="Logo" />
      </div>
      <div className='app__footer-main-right'>
        <h3 className='blue__style'>Newsletter:</h3>
        <form className='app__footer-main-right_form'>
          <input type="email" required name='SubscribeEmail' placeholder='Your Email here' />
          <a href="/" className='app__subscribe'>Subscribe</a>
        </form>
        <h3 className='blue__style'>Social:</h3>
        <div className='app__footer-icons'>
          <a href="/"><span className='icon-facebook2' /></a>
          <a href="/"><span className='icon-instagram' /></a>
          <a href="/"><span className='icon-whatsapp' /></a>
          <a href="/"><span className='icon-linkedin' /></a>
        </div>
      </div>
    </div>
    <div className='app__footer-copyrights'>
      <p>TheBox Company © 2022. All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
