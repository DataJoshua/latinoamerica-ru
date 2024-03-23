import { useEffect, useRef } from "react"

const SlideVideo = ({ video }) => {
  const videoRef = useRef()

  useEffect(() => {
    videoRef.current.play()
  }, [])

  return (
    <>
      <div className="relative">
        <video className="absolute z-0" width="inherit" height="inherit" ref={videoRef} muted loop>
          <source src={video} />
        </video>
        <div className="absolute bg-slate-300 inset-0">
          <h1>afsiohfhip</h1>
        </div>
      </div>
    </>
  )
}

export default SlideVideo;
