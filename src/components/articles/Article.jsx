import React from 'react';
import '../../styles/Article.css';
import Button from "../../atoms/Button";

const Article = ({ imgSrc, title, author, tag, description }) => (
    <article className="article-wrapper">
        <img src={imgSrc} alt={title} />
        <div className="text-container">
            <h2 className="heading">{title}</h2>
            <div className="author-tag-container">
                <p>{author}</p>
                <span className="separator"> | </span>
                <p>{tag}</p>
            </div>
            <p>{description}</p>
            <Button label="Historia Completa"/>
        </div>
    </article>
);

export default Article;
