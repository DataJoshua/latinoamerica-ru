import React, { useState, useEffect, useRef } from 'react';
import CarouselItem from './CarouselItem';
import ThumbnailItem from './ThumbnailItem';
import "../../styles/Carousel.css";
import Form from '../Form/Form';
import Title from './Title';

function Carousel({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextDomRef = useRef(null);
    const prevDomRef = useRef(null);
    const carouselDomRef = useRef(null);
    const SliderDomRef = useRef(null);
    const thumbnailBorderDomRef = useRef(null);

    const [isFormActive, setIsFormActive] = useState(false)
    const [isTitleActive, setIsTitleActive] = useState(true)

    const handleOnFormActive = () => {
        setIsFormActive(true)
        setIsTitleActive(false)
    }

    const handleOnFormDismiss = () => {
        setIsFormActive(false)
        setIsTitleActive(true)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [activeIndex, images.length]);

    useEffect(() => {
        const nextDom = nextDomRef.current;
        const prevDom = prevDomRef.current;
        const carouselDom = carouselDomRef.current;
        const SliderDom = SliderDomRef.current;
        const thumbnailBorderDom = thumbnailBorderDomRef.current;

        thumbnailBorderDom.appendChild(thumbnailBorderDom.querySelector('.item'));

        let timeRunning = 3000;
        let timeAutoNext = 5000;

        nextDom.onclick = function(){
            showSlider('next');
        }

        prevDom.onclick = function(){
            showSlider('prev');
        }

        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext)

        function showSlider(type){
            let  SliderItemsDom = SliderDom.querySelectorAll('.item');
            let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

            if(type === 'next'){
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            }else{
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }
            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext)
        }
    }, []);

    const showNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const showPrevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel" ref={carouselDomRef}>
            <Form isActive={isFormActive} handleOnFormDismiss={handleOnFormDismiss}/>
            <Title isActive={isTitleActive} handleOnFormActive={handleOnFormActive}/>
            <div className="list" ref={SliderDomRef}>
                {images.map((image, index) => (
                    <CarouselItem
                        key={index}
                        image={image.image}
                    />
                ))}
            </div>
            <div className="thumbnail" ref={thumbnailBorderDomRef}>
                {images.map((image, index) => (
                    <ThumbnailItem
                        key={index}
                        image={image.image}
                        title={image.title}
                    />
                ))}
            </div>
            <div className="arrows">
                <button onClick={showPrevSlide} ref={prevDomRef}>{'<'}</button>
                <button onClick={showNextSlide} ref={nextDomRef}>{'>'}</button>
            </div>
        </div>
    );
}

export default Carousel;


