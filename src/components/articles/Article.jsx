import React from 'react';
import '../../styles/Article.css';
import Button from "../../atoms/Button";

const Article = ({ imgSrc, title, author, tag, description }) => (
    <article className="article-wrapper flex-col gap-5 sm:flex-row text-sm sm:text-lg">
        <div className="article-image-wrapper rounded-lg overflow-hidden">
            <img className="article-img" src={imgSrc} alt={title} />
        </div>
        <div className="text-container">
            <h2 className="heading text-xl lg:text-2xl">{title}</h2>
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
