import React from 'react';

function ThumbnailItem({ image, title }) {
    return (
        <div className="item">
            <img src={image} alt={title} />
            <div className="content">
                <div className="title">{title}</div>
            </div>
        </div>
    );
}

export default ThumbnailItem;
