import React, { useEffect, useState } from 'react';
import './Gallery.css';
import projectCard from '../db';
import logoImg from "../../assets/logo.png"

const Gallery = () => {

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
    // eslint-disable-next-line
    getProject("project");
  },
    // eslint-disable-next-line
    []);

  const FileViewer = (cardimgS) => {
    const fileExtension = cardimgS.split('.').pop().toLowerCase();

    if (fileExtension === 'pdf') {
      return <iframe src={cardimgS} title='pdf' style={{ width: "70%", margin:"auto" }} allowFullScreen frameBorder={0} />;
    } else if (['jpg', 'jpeg', 'png', 'gif', "tiff", "raw", "psd", "eps", "ai", "indd"].includes(fileExtension)) {
      return <img src={cardimgS} alt="Preview" />;
    } else {
      return <img src={logoImg} alt='LogoImg' style={{ width: "70%", margin: "auto" }} />;
    }
  }

  return (
    <main id='products' className='app__main '>
      <div className='main__left-section'>
        <h1 className='app__main-heading'>Products</h1>
        <button className={active === "all" ? "active" : null} onClick={() => {
          setActive("all");
          getProject("project");
        }}><span style={{color:"#F9995D" ,fontSize:"1.4rem"}}>ALL </span>- Biodegradable</button>

        <button className={active === "GroceryBags" ? "active" : null} onClick={() => {
          setActive("GroceryBags");
          getProject("GroceryBags");
        }}>Grocery Bags</button>

        <button className={active === "TrashBags" ? "active" : null} onClick={() => {
          setActive("TrashBags");
          getProject("TrashBags");
        }}>Trash Bags</button>

        <button className={active === "PrintedBags" ? "active" : null} onClick={() => {
          setActive("PrintedBags");
          getProject("PrintedBags");
        }}>Printed Bags</button>

      </div>
      <div className='right-section'>

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