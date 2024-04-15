const Title = () => {
  const messages = [
    {
      author: "LATINOS",
      title: "DIA DE LATINOAMERICA",
      topic: "",
      description: "25 DE ABRIL(25 Апреля)\n\n" +
          "10:00 - 13:00  Conferencia sobre salud mental. (Конференция о психическом здоровье)\n" +
          "13:00 - 17:00  Jornada deportiva (Спортивный день)\n" +
          "Torneo relámpago de futbol 5 y voleibol. (Молниеносный турнир по футболу 5 и волейболу)\n\n" +
          "26 DE ABRIL(26 Апреля)\n\n" +
          "16:00 - 17:00 Pabellón sobre la cultura latina. (Павильон о латиноамериканской культуре)\n" +
          "17:00 - 18:00 Festival \"Día de Latinoamérica\" (Фестиваль \"День Латинской Америки\")\n" +
          "Demostraciones culturales. (Культурные демонстрации)"

    }
  ];

  return (
      <>
        {messages.map(val => (
            <div className="carousel-title" key={val.title}>
              <div className="content absolute z-[1000] max-w-[600px] top-[50px] md:top-[20%] left-[50px] md:left-[50%] text-white">
                <div className="show-text-animation author" style={{animationDelay: "1.2s"}}>{val.author}</div>
                <div className="show-text-animation title text-4xl md:text-6xl" style={{animationDelay: "1.4s"}}>{val.title}</div>
                <div className="show-text-animation topic" style={{animationDelay: "1.6s"}}>{val.topic}</div>
                <div className="show-text-animation des hidden sm:block">
                  {val.description.split('\n\n').map((paragraph, index) => (
                      <p key={index}>
                        {paragraph.split('\n').map((line, idx) => (
                            <span key={idx}>
                      {line.startsWith(' ') ? line : <strong>{line}</strong>}
                              <br />
                    </span>
                        ))}
                      </p>
                  ))}
                </div>
              </div>
            </div>
        ))}
      </>
  );
};

export default Title;

