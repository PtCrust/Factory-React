import React from 'react';
import './Status.css';

const Status = () => {
  const cards =[
    {
      icon:"icon-mood-happy-outline",
      number:"+500",
      title:"Happy Clients"
    },
    {
      icon:"icon-truck",
      number:"+3500",
      title:"Deliverd products"
    },
    {
      icon:"icon-files",
      number:8,
      title:"Certificates"
    },
    {
      icon:"icon-office",
      number:35,
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
        <h1>35 Years Experience</h1>
        <p>Our company has been the leading plastic bags field globally since 1989.</p>
        <a href='#contactus'>Contact Us</a>
      </div>
    </section>
  )
};

export default Status;
