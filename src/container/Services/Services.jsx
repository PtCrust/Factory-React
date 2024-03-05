import React from 'react';
import './Services.css';

const Services = () => {


  const cards = [
    {
      icon: "icon-design_services",
      title: "Construction"
    },
    {
      icon: "icon-globe",
      title: "Renovation"
    },
    {
      icon: "icon-files",
      title: "Consultation"
    },
    {
      icon: "icon-handshake-o",
      title: "Repair Services"
    },
    {
      icon: "icon-office",
      title: "Architecture"
    },
    {
      icon: "icon-electrical_services",
      title: "Electric"
    },
  ]

  return (
    <section className='app__services' id='services'>
      <h1 className='app__reputation-heading'>Services</h1>
      <div className='app__services-cards'>
        {
          cards.map((card) => (
            <div key={card.title} className='app__services-card'>
                <span className={card.icon} />
                <div className='app__services-cards_line' />
                <h2>{card.title}</h2>
            </div>
          ))
        }
      </div>
    </section>
  )
};

export default Services;
