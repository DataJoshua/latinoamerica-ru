import { useMemo } from "react";
import { SplideSlide } from '@splidejs/react-splide';
import img1 from "../../assets/images/foto1.png";
import video1 from "../../assets/videos/video1.mp4"
import SimpleSlide from "./SimpleSlide";
import SlideVideo from "./SlideVideo";

const Slides = () => {
  const images = useMemo(()=> [
    {
      label: "Slide 1",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat iste asperiores numquam, suscipit delectus placeat nulla et labore error ducimus.",
      img: img1,
      video: video1
    },
    {
      label: "Slide 2",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat iste asperiores numquam, suscipit delectus placeat nulla et labore error ducimus.",
      img: img1
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