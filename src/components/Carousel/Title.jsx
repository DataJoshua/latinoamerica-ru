const Title = () => {
  const messages = [
    {
      author: "Author Sample",
      title: "Title sample",
      topic: "Topic sample",
      description: "Some Description"
    }
  ]

  return (
    <>
      {messages.map(val => <>
        <div className="carousel-title">
          <div className="content absolute z-[1000] max-w-[600px] top-[50px] md:top-[20%] left-[50px] md:left-[50%] text-white">
            <div className="show-text-animation author" style={{animationDelay: "1.2s"}}>{val.author}</div>
            <div className="show-text-animation title text-4xl md:text-6xl" style={{animationDelay: "1.4s"}}>{val.title}</div>
            <div className="show-text-animation topic" style={{animationDelay: "1.6s"}}>{val.topic}</div>
            <div className="show-text-animation des hidden sm:block">{val.description}</div>
          </div>
        </div>
      </>)}
    </>
  )
}

export default Title;
