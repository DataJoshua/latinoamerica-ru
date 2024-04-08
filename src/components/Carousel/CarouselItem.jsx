import React from 'react';

function CarouselItem({ image, author, title, topic, description }) {
    return (
        <div className="item">
            <img src={image} alt={title} />
            <div className="content">
                <div className="author">{author}</div>
                <div className="title">{title}</div>
                <div className="topic">{topic}</div>
                <div className="des">{description}</div>

            </div>
        </div>
    );
}

export default CarouselItem;
