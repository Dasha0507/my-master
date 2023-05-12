import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Slider from './components/slider/slider';
import PopularCards from './components/popular-cards/popular-cards';
import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import database from './config';
import ArticleList from './components/article-list/article-list';
import ArticleCard from './components/article-card/article-card';
import SinglePade from './pages/main/SinglePage';


function App() {
  const articlesCollectionRef = collection(database, "articles");
  const getArticles = async () => {
    const data = await getDocs(articlesCollectionRef);
    return data;
  }

  useEffect( ()=>{
   getArticles().then((data) => console.log(data));
  }, [])
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route
          path="/"
          element={
            <Fragment>
              <Slider/>
              <PopularCards/>
            </Fragment>
          }
        />
        <Route path='/articles' element={<ArticleList/>}/>
        <Route path='/articles/:title' element={<SinglePade/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
