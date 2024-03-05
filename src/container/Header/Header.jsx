import React, { useState } from 'react';

import './Header.css';

const Header = () => {
  const subHeading = [
    "The National University of Architecture1",
    "The National University of Architecture2",
    "The National University of Architecture3"
  ]

  const [index, setIndex] = useState(0);
  const [paragraph, setParagraph] = useState(subHeading[index]);

  const handleNext = () => {
    if (index < subHeading.length - 1) {
      setIndex(index + 1);
      setParagraph(subHeading[index + 1]);
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
      setParagraph(subHeading[index - 1]);
    }
  };

  return (
    <section className='app__header ' id='home'>
      <div className='app__header-left'>
        <h1 className='app__header-heading'>Building things is our mission.</h1>
      </div>
      <div className='app__header-right'>
        <h1 className='flex__center app__header-right_heading'>Feature Projects</h1>
        <div className='flex__center app__header-right_subheading'>
          <p>{paragraph}</p>
        </div>
        <div className='app__header-right_buttons'>
          <div className='left__button'>
            <button onClick={() => {handleBack()}
            }>Back</button>
          </div>
          <div className='line' />
          <div className='right__button'>
            <button onClick={() => {handleNext()}
            }>Next</button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Header;
