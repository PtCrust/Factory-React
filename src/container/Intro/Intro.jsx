import React from 'react';

import './Intro.css';

const Intro = () => (
  <section className='app__intro '>
    <div className='greyy section__padding'>
        <div className='app__intro-left'>
          <h1>Free consultation with exceptional quality</h1>
          <p>Just one call away: <a href="tel:+8411022703">+8411022703</a></p>
        </div>
        <div className='app__intro-right'>
          <a href="/">Get your consultation</a>
        </div>
    </div>
  </section>
);

export default Intro;
