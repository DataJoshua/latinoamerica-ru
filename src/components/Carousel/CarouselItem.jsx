import React from 'react';

function CarouselItem({ image, title }) {
    return (
        <div className="item">
            <img src={image} alt={title} />
        </div>
    );
}

export default CarouselItem;
