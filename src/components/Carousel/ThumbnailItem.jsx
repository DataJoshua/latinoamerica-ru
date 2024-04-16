import React from 'react';

function ThumbnailItem({ image, title }) {
    return (
        <div className="item">
            <img src={image} alt="img" />
        </div>
    );
}

export default ThumbnailItem;
