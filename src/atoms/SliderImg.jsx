const SliderImg = ({ src, alt = "img" }) => {
  return (
    <>
      <div>
        <img className="w-[150px] h-[300px]" src={src} alt={alt} />
      </div>  
    </>
  )
}

export default SliderImg;