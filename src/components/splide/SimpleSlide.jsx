import Button from "../../atoms/Button";

const SimpleSlide = ({ label, img, buttonLabel, handleOnClick }) => {
  return (
    <>
      <div className="slide relative w-full h-full" 
           style={{ 
            background: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
      >
        <div className="text-sm sm:text-lg lg:text-xl absolute flex flex-col gap-4 py-4 px-3 rounded-lg w-[70%] lg:max-w-lg z-10 bg-white opacity-[0.8] top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
          <h1 className="text-center py-2 text-xl">{label}</h1>
          <div className="flex justify-center">
            <Button label={buttonLabel} handleOnClick={handleOnClick}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleSlide;
