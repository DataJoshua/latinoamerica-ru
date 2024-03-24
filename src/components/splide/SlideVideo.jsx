const SlideVideo = ({ video }) => {
  return (
    <>
      <div className="relative">
        <video className="absolute inset-0" width="inherit" height="inherit" muted loop data-splide-is-video-value>
          <source src={video} />
        </video>
      </div>
    </>
  )
}

export default SlideVideo;
