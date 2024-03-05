import React from 'react';
import './OurReputation.css'; 

const OurReputation = () => {

  const cards = [
    {
      icon: "icon-group",
      link: "",
      title: 'Best Services',
      subtitle: 'Lorem Null am senectus porttitor in eget. Eget rutrum leo interdum.',
    },
    {
      icon: "icon-group",
      link: "",
      title: 'Best Teams',
      subtitle: 'Cursus semper tellus volutpat aliquet lacus. ',
    },
    {
      icon: "icon-design_services",
      link: "",
      title: 'Best Designs',
      subtitle: 'Ultricies at ipsum nunc, tristique nam lectus.',
    }
  ]

  return (
    <div className='app__reputation section__padding'>
      <h1 className='app__reputation-heading'>Our Reputation</h1>
      <div className='app__reputation-cards'>
        {
          cards.map((card) => (
            <div className='app__reputation-card' key={card.title}>
              <a href="/"><span className={card.icon} /></a>
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
