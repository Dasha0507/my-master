import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import database from '../../config';
import { collection, getDocs, query } from 'firebase/firestore';

const SinglePage = () => {
    const {title} = useParams();
    const [articlePage, setArticlePage] = useState([]);

    const dbArticleRef = collection(database, "articles");

    useEffect(async () => {
        const qArticle = query(dbArticleRef)
        const dataArticle = await getDocs(qArticle)
        // const data = await dbArticlesRef.getDocs();
        dataArticle.docs.forEach(item => {
            setArticlePage([...articlePage,item.data()])
        })
    }, [title]);


    return (
        <div>
           {articlePage && (
            <>
                  <h2 className="article-name">{articlePage.title}</h2>
            {/* <section className="begeviy">
                <div className="container">
                    <h2 className="article-name">{article.title}</h2>
                    <div className="action-icons">
                        <div className="icon">
                            <img src="" className="" alt="share"/>
                        </div>
                        <div className="icon">
                            <img src="" className="" alt="favotire"/>
                        </div>
                        <div className="icon">
                            <img src="" className="" alt="download"/>
                        </div>
                    </div>
                    <div className="article-grids">
                        <div className="photo-block">
                            <div className="article-photo">
                                <img src="" className="" alt=""/> 
                                <span className="photo-desc">фото 1</span>
                            </div>
                            <div className="article-photo">
                                <img src="" className="" alt=""/> 
                                <span className="photo-desc">фото 1</span>
                            </div>
                            <div className="article-photo">
                                <img src="" className="" alt=""/> 
                                <span className="photo-desc">фото 1</span>
                            </div>
                            
                        </div>
                        <div className="article-block">
                        <p>{article.text}</p>
                        <div className="tags">
                            <span>Теги по статье: 
                                <a href="">#водныересурсы</a>
                                <a href="">#вода</a>
                                <a href="">#водабеларусь</a>
                            </span>
                        </div>
                        <div className="abbreviature">
                            <span>Пояснения по тексту:</span>
                               
                                <span className="abbreviations-values"><a href="#abbreviations-modal1" className="modal-link">СС,</a></span>
                                <span className="abbreviations-values"><a href="#abbreviations-modal" className="modal-link">брыгадэфюрэр</a></span> 
                           
                        </div>
                        </div>
                    </div>
                </div>
                
            </section> */}
            </>
           )}
        </div>
    )
}

export default SinglePage;