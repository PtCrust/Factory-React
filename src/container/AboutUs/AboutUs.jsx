import React from 'react';
import './AboutUs.css';
import img from "../../assets/aboutUs.jpg";

const AboutUs = () => (
  <section id='aboutus' className='app__aboutus section__padding'>
    <div className='app__aboutus-img'>
      <img src={img} alt="AboutUsImage" />
    </div>
    <div className='app__aboutus-content'>
      <h1 className='app__aboutus-content_heading'>About Us</h1>
      <p className='app__aboutus-content_subheading'>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. </p>
      <p className='app__aboutus-content_subheading'>We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
      <a href='/' className='app__aboutus-content_button'>More on Our History</a>
    </div>
  </section>
);

export default AboutUs;
