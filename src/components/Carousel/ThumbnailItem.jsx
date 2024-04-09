import React from 'react';

function ThumbnailItem({ image, title }) {
    return (
        <div className="item">
            <img src={image} alt={title} />
            <div className="text-white absolute bottom-5 left-2 font-bold">
                <div className="title">{title}</div>
            </div>
        </div>
    );
}

export default ThumbnailItem;
