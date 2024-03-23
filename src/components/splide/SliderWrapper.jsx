import { Splide, SplideTrack } from '@splidejs/react-splide';
import Slides from './Slides';

const SliderWrapper = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center bg-slate-100 sm:px-2 sm:py-4">
        <Splide
          className="w-full md:w-[1000px] h-[35vh] sm:h-[50vh] rounded-lg overflow-hidden" 
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
        </Splide>
      </div>
    </>
  )
}

export default SliderWrapper;
