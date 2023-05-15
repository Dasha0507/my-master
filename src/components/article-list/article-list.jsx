import React, { useEffect, useState } from 'react';
import './article-list.css';
import ArticleCard from '../article-card/article-card';
import database from '../../config';
import { collection, getDocs, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function ArticleList(props) {
    const [articlesList, setArticles] = useState([]);
    const dbArticlesRef = collection(database, "articles");

    const fetchDataList = async () => {
        const dataArticles = await getDocs(dbArticlesRef)
        console.log("Articles-list ", dataArticles);
        return dataArticles.docs.map((doc) => ({...doc.data()}))
     }
     useEffect( () => {
        fetchDataList().then((res)=> {setArticles(res)});
     }, []);
 


    return (
       
        <section className="begeviy">
            <div className="container">
                <div className="article-container">
                    <div className="bel-articles">
                    {
                       articlesList.map(article => {
                            return  (
                                <Link key={article.title} to={`/articles/${article.title}`}> 
                                    <ArticleCard title={article.title} imgUrl={article.imgUrl} shortDesc={article.shortDesc} />
                                </Link>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </section>
       

    )
}

export default ArticleList;