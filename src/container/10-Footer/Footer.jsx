import React from 'react';
import './Footer.css';
import logo from "../../assets/logo.png";

const Footer = () => (
  <footer className='app__footer'>
    <div className='app__footer-main'>
      <div className='app__footer-main-left'>
        <h3><span className='blue__style'>Address:</span> Cario , Egypt</h3>
        <h3><span className='blue__style'>Phone:</span> +201122223206</h3>
        <h3><span className='blue__style'>Whatsapp:</span>+201128999222</h3>
        <h3><span className='blue__style'>Email:</span> Four-brothers175@outlook.com</h3>
        
      </div>
      <div className='app__footer-main-right'>
        <img src={logo} alt="Logo" />
        <p>Nile & Four Brothers S.A.E</p>
      </div>
    </div>
    <div className='app__footer-copyrights'>
      <p>Copyright © 2024 Nile & Four Brothers. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
