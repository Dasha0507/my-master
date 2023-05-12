import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './search.css'; 

function Search() {
    const [activeSearch, setActiveSearch] = useState();

    return (
        <section className="search-section begeviy">
        <div className="container">
            <form className="header-search">
                <input type="search" className="main-search"/>
                <button type="submit" className="btn-main-search">Поиск</button>
            </form>
        </div>
    </section>
    )
}

export default Search;