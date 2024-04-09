import React from 'react';

function CarouselItem({ image, author, title, topic, description }) {
    return (
        <div className="item">
            <img src={image} alt={title} />
            <div className="content absolute max-w-[500 px] top-[50px] md:top-[20%] left-[50px] md:left-[50%] text-white">
                <div className="author">{author}</div>
                <div className="title text-4xl md:text-6xl">{title}</div>
                <div className="topic">{topic}</div>
                <div className="des hidden sm:block">{description}</div>
            </div>
        </div>
    );
}

export default CarouselItem;
