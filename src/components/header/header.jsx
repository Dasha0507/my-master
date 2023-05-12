import React, { useState } from 'react'; 
import { Link, useSearchParams } from 'react-router-dom';
import './header.css'; 

function Header() {

  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();

  // const postQuery = searchParams.get('post') || '';

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;

  //   const query = form.search.value;

  //   setSearchParams({article: query})
  // }

return (
  <>
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
          <Link to={`/`}>Беларуская<br/>энцыклапедыя</Link>
      </div>
        <ul className="menu" id="menu">
          <li><a href="#">Беларусь</a></li>
          <li><a href="#">Темы</a></li>
          <li><Link to={`/articles`}><p>Словник</p></Link></li>
          <li><a href="#">Персоналии</a></li>
          <li><a href="#">Проекты</a></li>
        </ul>
        
        <div id="symb" className="symbols">
            <img  onClick={() => setIsVisibleSearch(!isVisibleSearch)} className="header_img" src="search main.png" alt="search"/>
            <img className="header_img" src="bookmark fav.png" alt="bookmark"/>
            <img className="eye_img" src="account.png" alt="eye"/>
        </div>
      </div>
    </div>
  </nav>
  {
    isVisibleSearch && (
      <section className="search-section begeviy">
        <div className="container">
            <form className="header-search" >
                <input type="search" name='search' className="main-search"/>
                <input type="submit" value="Поиск" className="btn-main-search"/>
            </form>
        </div>
    </section>
    )
  }

  
  </>
);


}

export default Header;