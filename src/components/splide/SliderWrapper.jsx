import { Splide, SplideTrack } from '@splidejs/react-splide';
import Slides from './Slides';
import { useRef } from 'react';

const SliderWrapper = () => {
  const currentSlide = useRef(null)

  const handleActiveSlide = (_e, some) => {
    // Se encarga de ponerle stop al video del slide anterior (si lo hay) al cargarse un nuevo slide
    if(currentSlide.current) {
      currentSlide.current.pause()
      currentSlide.current.currentTime = 0  
    }

    currentSlide.current = some.slide.querySelector("[data-splide-is-video-value]")

    // Cuando la slide actual contiene un video le pone play
    if(currentSlide.current) {
      currentSlide.current.play()
    }
  }

  return (
    <>
      <div className="w-full h-full flex justify-center bg-slate-100">
        <Splide
          onActive={handleActiveSlide}
          className="w-full md:w-full h-auto sm:h-[40vh] md:h-[50vh] xl:h-[60vh] 2xl:h-[70vh] overflow-hidden" 
          options={{
            rewind: true,
            drag: true,
            lazyLoad: true,
            // autoplay: true,
            interval: 5000
          }}
          aria-label="Hello world"
          hasTrack={false}
        >
          <SplideTrack className="w-full h-full">
            <Slides/>
          </SplideTrack>
        </Splide>
      </div>
    </>
  )
}

export default SliderWrapper;
