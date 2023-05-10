import React from 'react'; 
import './popular-cards.css'; 

function PopularCards() {

return (
    <section className="begeviy">
    <div className="container">
      <div className="articles-block">
        <div className="block-name">
          <p className="name">Популярные статьи</p>
          <p className="link-to-all"></p>
          <div className="decoration-element"></div>
        </div>  
        <div className="articles">
          <div className="article">
            <div className="article-photo">
              <img className="" src="каханне.png" alt="каханне"/>
            </div>
            <div className="article-information">
              <p className="aricle-name">Словник</p>
              <p className="aricle-description">А вы знали происхождение этого слова?</p>
            </div>
          </div>
          <div className="article">
            <div className="article-photo">
              <img className="" src="Марк Шагал.png" alt="Марк Шагал"/>
            </div>
            <div className="article-information">
              <p className="aricle-name">Персоналии</p>
              <p className="aricle-description">Марк Шагал и его творчество.
                Самые известные работы.</p>
            </div>
          </div>
          <div className="article">
            <div className="article-photo">
              <img className="" src="несв.png" alt="несвижский замок"/>
            </div>
            <div className="article-information">
              <p className="aricle-name">Беларусь</p>
              <p className="aricle-description">Несвижский замок и завораживающие легенды.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
) 

}

export default PopularCards;