import React from "react";
import Carousel from "../components/Carousel/Carousel";
import img1 from "../assets/imagesF/img1.jpeg";
import img2 from "../assets/imagesF/img2.jpeg";
import img3 from "../assets/imagesF/img3.jpeg";
import img4 from "../assets/imagesF/img4.jpeg";
import img5 from "../assets/imagesF/img5.jpeg";
import img6 from "../assets/imagesF/img6.jpeg";
import img7 from "../assets/imagesF/img7.jpeg";
import img8 from "../assets/imagesF/img9.jpeg";
import img9 from "../assets/imagesF/img10.jpeg";

import "../styles/Carousel.css";

const FormPage = () => {
    const images = [
        {
            image: img1,
            author: 'LATINOS',
            title: 'DIA DE LATINOAMERICA',
            topic: '',
            description:
                'Te esparamos, no faltes :)'
        },
        {
            image: img2,
            author: 'LATINOS',
            title: 'DIA DE LATINOAMERICA',
            topic: '',
            description:
                'Te esparamos, no faltes :)'
        },
        {
            image: img3,
            author: 'LATINOS',
            title: 'DIA DE LATINOAMERICA',
            topic: '',
            description:
                'Te esparamos, no faltes :)'
        },
        {
            image: img4,
            author: 'LATINOS',
            title: 'DIA DE LATINOAMERICA',
            topic: '',
            description:
                'Te esparamos, no faltes :)'
        },
        {
            image: img5,
            author: 'LATINOS',
            title: 'DIA DE LATINOAMERICA',
            topic: '',
            description:
                'Te esparamos, no faltes :)'
        },
        {
            image: img6,
            author: 'LATINOS',
            title: 'DIA DE LATINOAMERICA',
            topic: '',
            description:
                'Te esparamos, no faltes :)'
        },
        {
            image: img7,
            author: 'LATINOS',
            title: 'DIA DE lATINOAMERICA',
            topic: '',
            description:
                'Te esparamos, no faltes :)'
        },
        {
            image: img8,
            author: 'LATINOS',
            title: 'DIA DE lATINOAMERICA',
            topic: '',
            description:
                'Te esparamos, no faltes :)'
        },
        {
            image: img9,
            author: 'LATINOS',
            title: 'DIA DE lATINOAMERICA',
            topic: '',
            description:
                'Te esparamos, no faltes :)'
        },



    ];
    return (
        <div>
            <Carousel images={images}/>
        </div>
    );
}
export default FormPage;
