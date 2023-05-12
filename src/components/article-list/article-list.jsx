import React, { useEffect, useState } from 'react';
import './article-list.css';
import ArticleCard from '../article-card/article-card';
import database from '../../config';
import { collection, getDocs, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';



function ArticleList(props) {
    // const {title} = useParams();    
    const [articlesList, setArticles] = useState([]);
    const dbArticlesRef = collection(database, "articles");

    const fetchDataList = async () => {
        const qArticles = query(dbArticlesRef)
        const dataArticles = await getDocs(qArticles)
        // const data = await dbArticlesRef.getDocs();
        dataArticles.docs.forEach(item => {
            setArticles([...articlesList,item.data()])
        })
     }
     useEffect( () => {
        fetchDataList();
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