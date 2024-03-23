import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import Slides from './Slides';

const SliderWrapper = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center bg-slate-100">
        <Splide
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
