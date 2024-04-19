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
import img10 from "../assets/imagesF/img11.jpeg";

import "../styles/Carousel.css";

const FormPage = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    return (
        <div>
            <Carousel images={images}/>
        </div>
    );
}
export default FormPage;
