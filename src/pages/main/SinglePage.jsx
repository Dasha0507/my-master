import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import database from '../../config';
import PhotoAtricle from '../../components/photo-article/photo-article'
import { collection, getDocs, query, get} from 'firebase/firestore';
import '../main/SinglePage.css'

const SinglePage = () => {
    const {title} = useParams();
    const [articlePage, setArticlePage] = useState([]);
    const [imgs, setImgs] = useState([])

    const dbArticleRef = collection(database, "articles");

    const fetchArticle = async () => {
        const dataArticles = await getDocs(dbArticleRef);
        const article = dataArticles.docs
        .map((doc) => ({...doc.data()}))
        .find((articleDoc) => { return articleDoc.title === title});
         return article;
     }

    useEffect(() => {
        fetchArticle().then((res) => {
          setArticlePage(res);
          setImgs(res.imgs)});
    }, [title])


    return (
      <div>
          <section className="begeviy">
            <div className="container">
              <h2 className="article-name">{articlePage.title}</h2>
              <div className="action-icons">
                <div className="icon">
                  <img src="" className="" alt="share" />
                </div>
                <div className="icon">
                  <img
                    src="image/save-instagram 1.png"
                    className=""
                    alt="favotire"
                  />
                </div>
                <div className="icon">
                  <img
                    src="image/download (1) 1.png"
                    className=""
                    alt="download"
                  />
                </div>
              </div>
              <div className="article-grids">
                <div className="photo-block">
                  {imgs.map((element) => {
                    return <PhotoAtricle imgUrl={element.imgUrl} imgDesc={element.imgDesc}/>;
                  })}
                </div>
                <div className="article-block">
                  <p>{articlePage.text}</p>
                  <span>
                    Теги по статье:
                    <a href="">{articlePage.tags}</a>
                    {/* <a href="">#вода</a>
                                <a href="">#водабеларусь</a> */}
                  </span>
                  <div className="abbreviature">
                    <span>Пояснения по тексту:</span>

                    <span className="abbreviations-values">
                      <a href="#abbreviations-modal1" className="modal-link">
                        СС,
                      </a>
                    </span>
                    <span className="abbreviations-values">
                      <a href="#abbreviations-modal" className="modal-link">
                        брыгадэфюрэр
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    );
}

export default SinglePage;