import React from 'react';
import '../../styles/Article.css';
import Button from "../../atoms/Button";
import { useNavigate } from 'react-router';

const Article = ({ imgSrc, title, author, tag, description, id, isSmallComponent = false }) => {
    const navigate = useNavigate();

    const handleOnClick = (_e) => {
        navigate(`/eventos/${id}`)
    }

    return (
        <article className={`${isSmallComponent ? "small-article-wrapper" : ""} article-wrapper flex-col gap-5 sm:flex-row text-sm sm:text-lg`}>
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
                <Button label="Historia Completa" handleOnClick={handleOnClick}/>
            </div>
        </article>
    )
}

export default Article;
