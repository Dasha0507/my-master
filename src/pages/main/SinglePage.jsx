import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import database from '../../config';
import { collection, getDocs, query } from 'firebase/firestore';

const SinglePage = () => {
    const {title} = useParams();
    const [articlePage, setArticlePage] = useState([]);

    const dbArticleRef = collection(database, "articles");

    const fetchData = async () => {
        const qArticle = query(dbArticleRef)
        const dataArticle = await getDocs(qArticle)
        // const data = await dbArticlesRef.getDocs();
        dataArticle.docs.forEach(item => {
            setArticlePage([...articlePage,item.data()])
        })
     }
     useEffect( () => {
        fetchData();
     }, [title]);
 


    return (
        <div>
           {articlePage && (
            <>
                  <h2 className="article-name">{articlePage.title}</h2>
            
            </>
           )}
        </div>
    )
}

export default SinglePage;