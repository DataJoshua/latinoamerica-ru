const Event = ({ event }) => {
  return (
    <>
      <article style={{
                        background: `url(${event.imgSrc})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
              className="max-h-[50px] lg:min-h-[80%] lg:max-h-none flex items-end sm:items-center justify-center py-[200px]"
      >
        <div className="relative max-w-[800px] py-6 px-7 rounded-lg opacity-layer">
         <div className="text-container relative z-10">
          <h2 className="heading text-xl lg:text-2xl">{event.title}</h2>
            <div className="flex gap-3">
              <p>{event.author}</p>
              <span className="separator"> | </span>
              <p>{event.tag}</p>
            </div>
         </div>
        </div>
      </article>
      <div className="pt-[20px] px-[7%] sm:px-[10%] lg:px-[15%] xl:px-[25%] w-full">
        <p>{event.description}</p>
      </div>
    </>
  )
}

export default Event;
