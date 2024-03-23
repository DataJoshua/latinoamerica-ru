const SimpleSlide = ({ description, label, img }) => {
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
        <div className="absolute py-4 px-3 rounded-lg max-w-md z-10 bg-white opacity-[0.8] top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
          <h1 className="text-xl text-center py-2">{label}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default SimpleSlide;
