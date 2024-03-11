import React from 'react';
import './OurReputation.css'; 

const OurReputation = () => {

  const cards = [
    {
      icon: "icon-clock",
      title: 'Timing',
      subtitle: "Delivering products on time is not just our promise; it's our commitment to your success and satisfaction.",
    },
    {
      icon: "icon-high_quality",
      title: 'Quality',
      subtitle: "Quality is not an act, it's a habit. At Nile & Four Brothers, it's our everyday commitment.",
    },
    {
      icon: "icon-currency-dollar",
      title: 'Pricing',
      subtitle: 'Where quality meets your budget.',
    }
  ]

  return (
    <div className='app__reputation section__padding'>
      <h1 className='app__reputation-heading'>Our Reputation</h1>
      <div className='app__reputation-cards'>
        {
          cards.map((card) => (
            <div className='app__reputation-card' key={card.title}>
              <span className={card.icon} />
              <h1 className='app__reputations-card_heading'>{card.title}</h1>
              <p className='app__reputations-card_subheading'>{card.subtitle}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OurReputation
