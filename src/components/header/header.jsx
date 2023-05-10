import React from 'react'; 
import { Link } from 'react-router-dom';
import './header.css'; 

function Header() {

  // const ShowSearchInput = () => {
  //   if(searchSection.classList.contains('search-section-active')) {
  //     searchSection.classList.remove('search-section-active');
  // } else {
  //     searchSection.classList.add('search-section-active');
  // }
  // }
return (
    <nav className="navbar">
    <div className="container">
      <div className="navbar__wrap">
        <div className="hamb">
          <div className="hamb__field" id="hamb">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div className="logo">
          <a href="">Беларуская<br/>энцыклапедыя</a>
      </div>
        <ul className="menu" id="menu">
          <li><a href="#">Беларусь</a></li>
          <li><a href="#">Темы</a></li>
          <li><Link to={`/articles`}><p>Словник</p></Link></li>
          <li><a href="#">Персоналии</a></li>
          <li><a href="#">Проекты</a></li>
        </ul>
        
        <div id="symb" className="symbols">
            <img  onClick={console.log('ssss')} className="header_img" src="search main.png" alt="search"/>
            <img className="header_img" src="bookmark fav.png" alt="bookmark"/>
            <img className="eye_img" src="account.png" alt="eye"/>
        </div>
      </div>
    </div>
  </nav>
);


}

export default Header;