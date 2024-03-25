import { useMemo } from "react";
import { SplideSlide } from '@splidejs/react-splide';
import img1 from "../../assets/images/foto1.png";
import SimpleSlide from "./SimpleSlide";
import SlideVideo from "./SlideVideo";

const Slides = () => {
  const images = useMemo(()=> [
    {
      label: "Slide 2",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat iste asperiores numquam, suscipit delectus placeat nulla et labore error ducimus.",
      img: img1,
      buttonLabel: "Click",
      handleOnClick: () => console.log("hello world")
    },
    {
      label: "Slide 3",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat iste asperiores numquam, suscipit delectus placeat nulla et labore error ducimus.",
      img: img1,
      buttonLabel: "sample"
    }
  ], []);

  return (
    <>
      {
        images.map(val => (
          <>
            <SplideSlide
              className="w-full h-full"
            >
              {val.video ? <SlideVideo video={val.video}/> : <SimpleSlide img={val.img} 
                                                                          label={val.label} 
                                                                          description={val.description}
                                                                          buttonLabel={val.buttonLabel}
                                                                          handleOnClick={val.handleOnClick}
                                                            />
              }
            </SplideSlide>
          </>
        ))
      }
    </>
  )
}

export default Slides;
