import React from 'react';
import './article-card.css';
// import { useParams } from 'react-router-dom';

function ArticleCard({title, shortDesc, imgUrl}) {


    return (
       
        <div className="bel-article">
        <div className="preview-photo">
            <img className="" src={imgUrl} alt=""/>
        </div>
        <div className="bel-article-info">
            <h3 className="bel-article-name">{title}</h3>
            <p className="bel-article-description">
                {shortDesc}
            </p>
            <a className="link-to-full" href="">Подробнее</a>
        </div>
    </div>   
       
       

    )
}

export default ArticleCard