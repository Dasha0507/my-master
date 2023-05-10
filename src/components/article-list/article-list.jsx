import React, { useEffect, useState } from 'react';
import './article-list.css';
import ArticleCard from '../article-card/article-card';
import database from '../../config';



function ArticleList(props) {
 const [articlesList, setArticle] = useState([]);

 useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async() => {
    const response = database.collection(database, "articles");
    const data = await response.getDocs();
    data.docs.forEach(item => {
        setArticle([...articlesList,item.data()])
    })
}

//     const articles = [{
//         imgUrl: 'Марк Шагал.png',
//         title: 'Марк Шагал',
//         shortDesc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam cupiditate, voluptates delectus officiis enim sed obcaecati ut officia ipsa consequuntur nostrum dolor fugiat magnam blanditiis, hic sapiente velit quod nobis.'
//     },
//     {
//         imgUrl: 'Марк Шагал.png',
//         title: 'Марк Шагал2',
//         shortDesc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam cupiditate, voluptates delectus officiis enim sed obcaecati ut officia ipsa consequuntur nostrum dolor fugiat magnam blanditiis, hic sapiente velit quod nobis.'
//     },
//     {
//         imgUrl: 'Марк Шагал.png',
//         title: 'Марк Шагал3',
//         shortDesc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam cupiditate, voluptates delectus officiis enim sed obcaecati ut officia ipsa consequuntur nostrum dolor fugiat magnam blanditiis, hic sapiente velit quod nobis.'
//     }
// ]

    return (
       
        <section className="begeviy">
            <div className="container">
                <div className="article-container">
                    <div className="bel-articles">
                    {
                        articlesList && articlesList.map(article => {
                            return <ArticleCard title={article.title} imgUrl={article.imgUrl} shortDesc={article.shortDesc}/>
                        })
                    }
                    </div>
                </div>
            </div>
        </section>
       

    )
}

export default ArticleList;