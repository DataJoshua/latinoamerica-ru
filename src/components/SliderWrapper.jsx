import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import SliderImg from '../atoms/SliderImg';

const SliderWrapper = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center bg-slate-100 sm:px-2 py-4">
        <Splide
          className="bg-indigo-300 w-full md:w-[1000px] h-[500px] rounded-lg overflow-hidden" 
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
            <SplideSlide className="w-full h-full flex gap-5 flex-col items-center justify-center bg-no-repeat bg-center bg-[url(https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
              <h1>Ligula At Fermentum</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>Slide 2</h1>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
    </>
  )
}

export default SliderWrapper;
