import { useState } from "react";
import Button from "../../atoms/Button";
import Schedule from "./Schedule";

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
      title: "Дни латиноамериканской культуры в КФУ",
      topic: "",
      description: "18 мая 2024 г. в 11:30 спортивное мероприятие «мини – футбол» \n\n" +
          "Место проведения: КСК КФУ УНИКС (спортивный зал) Адрес: г. Казань, улица Профессора Нужина, 2\n" +
          "Регистрация для гостей и зрителей до 12 мая 2024 г до 20:00 \n\n" +
          "24 мая 2024 г. Гала - концерт «Путешествие по Латинской Америке»\n\n" +
          "в 15:30 Интерактивная выставка \"Знакомство с Латинской Америкой\"\n" +
          "в 16:30 – праздничный концерт \n" +
          "Место проведения: Института филологии и межкультурной коммуникации КФУ (актовый зал) Адрес: г. Казань, улица Татарстан, 2.\n" +
          "Регистрация для гостей и зрителей до 19 мая 2024 г до 20:00 \n\n" +
          "29 мая 2024 г.  в 16:00 - круглый стол: «Основные проблемы, с которыми сталкиваются студенты из Латинской Америки в процессе адаптации в России» в рамках X Международного форума по педагогическому образованию в КФУ (гибридный формат - с последовательным переводом)\n" +
          "Место проведения: Институт психологии и образования КФУ, аудитория 105 Адрес: г. Казань, улица Межлаука 1.  \n" ,
      register: "Хочу присутствовать!"
    },
    {
      author: "LATINOS",
      title: "Días de la Cultura Latinoamericana en KFU ",
      topic: "",
      description: "18 de mayo de 2024 a las 11:30 evento deportivo “mini fútbol\n\n" +
          "Lugar: KSK KFU UNICS (sala para deportes) Dirección: Kazán, calle Profesor Nuzhin, 2 \n" +
          "Inscripciones para invitados y espectadores hasta el 12 de mayo de 2024 a las 20:00 horas\n\n" +
          "24 de mayo de 2024 Gala - concierto “Viaje por América Latina”\n\n" +
          "15:30 Exposicion interactiva \"Un viaje por América Latina\" \n" +
          "16:30 Concierto de celebracion\n" +
          "Lugar: Instituto de Filología y Comunicación Intercultural de la KFU (salón de actos) Dirección: Kazán, calle Tatarstán, 2.\n" +
          "Inscripciones para invitados y espectadores hasta el 19 de mayo de 2024 a las 20:00 horas \n\n" +
          "29 de mayo de 2024 a las 16:00 - mesa redonda: “Los principales problemas que enfrentan los estudiantes de América Latina en el proceso de adaptación a Rusia” " +
          "en el marco del X Foro Internacional de Formación Docente en la KFU (formato híbrido - con traducción consecutiva )\n\n" +
          "Lugar: Instituto de Psicología y Educación KFU, auditorio 105 Dirección: Kazán, calle Mezhlauka 1.\n",


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
            <div className="show-text-animation text-md sm:text-[17px] sm:block mt-5">
              <Schedule/>
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
