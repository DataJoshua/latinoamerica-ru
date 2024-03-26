import React from 'react';
import Article from './Article';

const ArticlesList = ({ articles }) => (
    <ul className="articles-grid">
        {articles.map((article, index) => (
            <li className={index === 0 ? "one_third" : "one_third secondary-article"} key={index}>
                <Article {...article} />
            </li>
        ))}
    </ul>
);

export default ArticlesList;
