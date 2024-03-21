import { useMemo } from "react";
import { SplideSlide } from '@splidejs/react-splide';

const Slides = () => {

  const images = useMemo(()=> [
    {
      label: "Slide 1",
      url: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      label: "Slide 2",
      url: "https://images.unsplash.com/photo-1579169559034-4d5f2c407edc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ], []);
  
  return (
    <>
      {
        images.map(val => (
          <>
            <SplideSlide
              className="w-full h-full flex items-center justify-center"
              style={{ background: `url(${val.url})`, 
                       backgroundRepeat: "no-repeat",
                       backgroundPosition: "center" }}
            >
              <h1>{val.label}</h1>
            </SplideSlide>
          </>
        ))
      }
    </>
  )
}

export default Slides;