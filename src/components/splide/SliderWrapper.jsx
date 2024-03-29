import { Splide, SplideTrack } from '@splidejs/react-splide';
import Slides from './Slides';

const SliderWrapper = () => {
  const handleActiveSlide = (_e, activeSlide) => {
    const slide = activeSlide.slide.querySelector("[data-splide-is-video-value]")
    // Cuando la slide actual contiene un video le pone play
    slide?.play()
  }

  const handleInactiveSlide = (_e, inactiveSlide) => {
    const slide = inactiveSlide.slide.querySelector("[data-splide-is-video-value]")
    
    // Pone stop en la slide inactiva si en esta encuentra un tag de <video/>
    if(slide) {
      slide.pause()
      slide.currentTime = 0
    }
  }

  return (
    <>
      <div className="w-full h-full flex justify-center bg-slate-100">
        <Splide
          onInactive={handleInactiveSlide}
          onActive={handleActiveSlide}
          className="w-full md:w-full h-[40vh] md:h-[50vh] xl:h-[60vh] 2xl:h-[70vh] overflow-hidden" 
          options={{
            rewind: true,
            drag: true,
            lazyLoad: true,
            autoplay: true,
            interval: 5000
          }}
          aria-label="Hello world"
          hasTrack={false}
        >
          <SplideTrack className="w-full h-full">
            <Slides/>
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev"></button>
            <button className="splide__arrow splide__arrow--next"></button>
          </div>
        </Splide>
      </div>
    </>
  )
}

export default SliderWrapper;
