import Button from "../../atoms/Button";

const SimpleSlide = ({ description, label, img, buttonLabel, handleOnClick }) => {
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
        <div className="absolute flex flex-col gap-4 py-4 px-3 rounded-lg max-w-md z-10 bg-white opacity-[0.8] top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
          <h1 className="text-md sm:text-xl text-center py-2">{label}</h1>
          <p className="text-sm sm:text-md">{description}</p>
          <div className="flex justify-center">
            <Button label={buttonLabel} handleOnClick={handleOnClick}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleSlide;
