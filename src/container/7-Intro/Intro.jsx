import React from 'react';

import './Intro.css';

const Intro = () => (
  <section className='app__intro '>
    <div className='greyy section__padding'>
        <div className='app__intro-left'>
          <h1>Feel free to reach us anytime</h1>
          <p>Just one call away: <a href="tel:+201122223206">+201122223206</a></p>
        </div>
        <div className='app__intro-right'>
          <a href="#contactus">Contact Us</a>
        </div>
    </div>
  </section>
);

export default Intro;
