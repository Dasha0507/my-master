import React, { useEffect } from 'react'; 
import './photo-article.css'; 

function PhotoAtricle(props) {
useEffect(()=>{
 console.log("URL ", props.imgUrl)
}, [])
return (
    <div className="article-photo">
        <img src={props.imgUrl} className="" alt=""/> 
        <span className="photo-desc">{props.imgDesc}</span>
        <h1>ФОто</h1>
    </div>
)

}

export default PhotoAtricle;