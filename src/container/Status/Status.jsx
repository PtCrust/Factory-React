import React from 'react';
import './Status.css';

const Status = () => {
  const cards =[
    {
      icon:"icon-handshake-o",
      number:84,
      title:"Happy Clients"
    },
    {
      icon:"icon-design_services",
      number:123,
      title:"Projects Completed"
    },
    {
      icon:"icon-trophy",
      number:37,
      title:"Awards Win"
    },
    {
      icon:"icon-office",
      number:30,
      title:"Years in Business"
    },
  ]

  return (
    <section id='status' className='app__status section__padding'>
      <div className='app__status-cards'>
        {
          cards.map((card) =>(
            <div className='app__status-card' key={card.title}>
                <span className={card.icon} />
                <div className='app__status-card_content'>
                  <h1>{card.number}</h1>
                  <div className='app__status-card-heading'>
                    <div className='status__line' />
                    <p>{card.title}</p>
                  </div>
                </div>
            </div>
          ))
        }
      </div>
      <div className='app__status-right'>
        <h1>30 Years Experience</h1>
        <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
        <a href='#contactus'>Contact Us</a>
      </div>
    </section>
  )
};

export default Status;
