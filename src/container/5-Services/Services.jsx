import React from 'react';
import './Services.css';

const Services = () => {


  const cards = [
    {
      icon: "icon-shopping_bag",
      title: "Custom Plastic Bag Manufacturing"
    },
    {
      icon: "icon-leaf",
      title: "Eco-Friendly Options"
    },
    {
      icon: "icon-package",
      title: "Bulk Order Solutions"
    },
    {
      icon: "icon-handshake-o",
      title: "Packaging Consultation"
    },
    {
      icon: "icon-drawing",
      title: "Custom Printing"
    },
    {
      icon: "icon-truck",
      title: "Delivery and Distribution"
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
