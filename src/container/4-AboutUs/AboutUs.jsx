import React from 'react';
import './AboutUs.css';
import img from "../../assets/aboutUsImg.jpg";

const AboutUs = () => (
  <section id='aboutus' className='app__aboutus section__padding'>
    <div className='app__aboutus-img'>
      <img src={img} alt="AboutUsImage" />
    </div>
    <div className='app__aboutus-content'>
      <h1 className='app__aboutus-content_heading'>About Us</h1>
      <p className='app__aboutus-content_subheading'>For over 35 years, we've been dedicated to excellence in the plastic industry, providing top-quality products and shipping solutions across Africa. With our extensive experience, we ensure reliable service and unmatched expertise in meeting your plastic needs.</p>
      <p className='app__aboutus-content_subheading'>We started small and expanded to five facilities, dedicated to meet your needs. Now, we're ready to serve you wherever you are with quality and reliability.</p>
    </div>
  </section>
);

export default AboutUs;
