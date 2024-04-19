import { useState } from "react";
import Button from "../../atoms/Button";

const Title = ({ handleOnFormActive, isActive }) => {
  const RUSSIAN = 0, SPANISH = 1
  const [currentState, setCurrentState] = useState(RUSSIAN)

  const handleToRussian = () => {
    setCurrentState(RUSSIAN)
  }

  const handleToSpanish = () => {
    setCurrentState(SPANISH)
  }

  const content = [
    {
      author: "Латиноc",
      title: "День Латинской Америки",
      topic: "",
      description: "25 Апреля\n\n" +
          "13:00 - 17:00  Спортивный день \n               Турнир по футболу\n\n" +
          "26 Апреля\n\n" +
          "16:00 - 17:00 Выставка \"Латинская Америка\"  \n" +
          "17:00 - 19:00 Концерт \"День Латинской Америки\"\n",
      register: "Хочу присутствовать!"
    },
    {
      author: "LATINOS",
      title: "DIA DE LATINOAMERICA",
      topic: "",
      description: "25 DE ABRIL\n\n" +
          "13:00 - 17:00  Jornada deportiva\n" +
          "Torneo relámpago de futbol\n\n" +
          "26 DE ABRIL\n\n" +
          "16:00 - 17:00 Pabellón \"America Latina\" \n" +
          "17:00 - 19:00 Concierto \"Día de Latinoamérica\"\n",
      register: "Quiero Asistir!"
    }
  ]

  return (
    <>
      <div className="carousel-title" key={content[currentState].title}>
        <div className="content absolute z-[1000] max-w-sm sm:max-w-[600px] top-[30px] md:top-[5%] left-[30px] lg:left-[50%] text-white">
          <article className={`${isActive ? "" : "hidden"} lg:block`}>
            <div className="show-text-animation my-5">
              {currentState === SPANISH ?
                  <button className="bg-slate-100 px-3 py-2 rounded text-black hover:underline" onClick={handleToRussian}> Читать на русском </button>
                  : <button className="bg-slate-100 px-3 py-2 rounded text-black hover:underline" onClick={handleToSpanish} > Leer en Español </button>}
            </div>
          </article>
          <div className="show-text-animation author" style={{animationDelay: "1.2s"}}>{content[currentState].author}</div>
          <div className="show-text-animation title text-4xl lg:text-6xl" style={{animationDelay: "1.4s"}}>{content[currentState].title}</div>
          <div className="show-text-animation topic" style={{animationDelay: "1.6s"}}>{content[currentState].topic}</div>
          <article className={`${isActive ? "" : "hidden"} lg:block`}>
            <div className="show-text-animation max-w-sm des text-md sm:text-[17px] sm:block mt-5">
              <pre>{content[currentState].description}</pre>
              <div className="lg:hidden mt-5">
                <Button label={content[currentState].register} handleOnClick={handleOnFormActive} removeHover/>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Title;
