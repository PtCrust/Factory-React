import React, { useEffect, useState } from 'react';
import imgDemo from '../../assets/industry-construction-industrial-civil-works.jpg';
import './Gallery.css';

const Gallery = () => {
  const projectCard=[
    {
      id: 1,
      category: ["project"],
      title: "Wildstone Infra Hotel",
      desc: "2715 Ash Dr. San Jose, South Dakota",
      imgS: imgDemo,
      imgA: "ccna"
  },
  {
      id: 2,
      category: ["project"],
      title: "Wish Stone Building",
      desc: "2972 Westheimer Rd. Santa Ana, Illinois ",
      imgS: imgDemo,
      imgA: "backend img",
  },
  {
    id: 3,
    category: ["project"],
    title: "Mr. Parkinston’s House",
    desc: "3517 W. Gray St. Utica, Pennsylvania",
    imgS: imgDemo,
    imgA: "ccna"
},
{
    id: 4,
    category: ["project","Commercial"],
    title: "Oregano Height",
    desc: "2464 Royal Ln. Mesa, New Jersey ",
    imgS: imgDemo,
    imgA: "backend img",
},
  ]

  const [active, setActive] = useState("all");
  const [cards, setCards] = useState([]);

  const getProject = (categoryName) => {
    const data = projectCard.filter((item) => {

      const categoryArr = item.category.filter((categoryItem) => {
        return categoryItem === categoryName;
      })

      return categoryArr[0] === categoryName;
    });

    setCards(data);
  }
  useEffect(() => {
    getProject("project");
  }, []);

  const FileViewer = (cardimgS) => {
    const fileExtension = cardimgS.split('.').pop().toLowerCase();

    if (fileExtension === 'pdf') {
      return <iframe src={cardimgS} title='pdf' style={{ width: "100%", height: "60%" }} allowFullScreen frameBorder={0} />;
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
      return <img src={cardimgS} alt="Preview" width={"100%"} height={"60%"} />;
    } else {
      return <p>This file type is not supported for preview.</p>;
    }
  }

  return (
    <main id='projects' className='app__main '>
      <div className='main__left-section'>
      <h1 className='app__main-heading'>Projects</h1>
        <button className={active === "all" ? "active" : null} onClick={() => {
          setActive("all");
          getProject("project");
        }}>All</button>

        <button className={active === "Commercial" ? "active" : null} onClick={() => {
          setActive("Commercial");
          getProject("Commercial");
        }}>Commercial</button>

        <button className={active === "Residential" ? "active" : null} onClick={() => {
          setActive("Residential");
          getProject("Residential");
        }}>Residential</button>



        <button className={active === "Others" ? "active" : null} onClick={() => {
          setActive("Others");
          getProject("Others");
        }}>Others</button>

      </div>
      <div className='right-section'>
        {/* Looping on certificates */}
          {
            cards.map((card) => (

              <article className='card' key={card.id}>

                {FileViewer(card.imgS)}

                <div className='box'>
                  <h1 className='title'>{card.title}</h1>
                  <p className='sub-title'>{card.desc}</p>
                </div>
              </article>

            )
            )
          }
      </div>
    </main>
  )
}
export default Gallery;