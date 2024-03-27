import React from 'react';
import Article from './Article';
import img1 from "../../assets/images/foto1.png";
const ArticlesList = () => {
    const articles = [{
        imgSrc: img1,
        title: 'Per Inceptos Himenaeos Donec Lacinia Mollis Vel',
        author: 'Autor 1',
        tag: 'Etiqueta 1',
        description: 'Aliquam mauris morbi tristique orci sit amet sapien tincidunt ut rutrum dui tincidunt.\n' +
            '\n' +
            'Cras eget lacinia magna nunc ut est est cras aliquam erat sem at dapibus lorem luctus sed nunc sagittis leo in…\n',
        fullStoryLink: ''
    }];

    return (
        <ul className="articles-grid">
            {articles.map((article, index) => (
                <li className={index > 0 && "secondary-article"} key={index}>
                    <Article {...article} />
                </li>
            ))}
        </ul>
    );
};

export default ArticlesList;
