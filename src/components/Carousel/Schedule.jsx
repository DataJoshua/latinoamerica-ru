import { useEffect } from "react"
import "./Schedule.css"
import { initFlowbite } from 'flowbite'
import { nanoid } from "nanoid"

const Schedule = ({ localeState }) => {
  useEffect(()=> {
    initFlowbite()
  }, [])

  const events = [
    [{
      id: 1,
      date: "18 мая 2024",
      title: "«мини – футбол»",
      place: "Место проведения: КСК КФУ УНИКС (спортивный зал)",
      address: "Адрес: г. Казань, улица Профессора Нужина, 2",
      description: "Регистрация для гостей и зрителей до 12 мая 2024 г до 20:00",
      activities: [{hour: "в 11:30", description: "спортивное мероприятие «мини – футбол»"}]
    },
    {
      id: 2,
      date: "24 мая 2024",
      title: "«Путешествие по Латинской Америке»",
      place: "Место проведения: Института филологии и межкультурной коммуникации КФУ (актовый зал)",
      address: "Адрес: г. Казань, улица Татарстан, 2.",
      description: "Регистрация для гостей и зрителей до 19 мая 2024 г до 20:00",
      activities: [{hour: "в 15:30", description: "Интерактивная выставка: Знакомство с Латинской Америкой"}, {hour: "в 16:30", description: "праздничный концерт"}]
    },
    {
      id: 3,
      date: "29 мая 2024",
      title: "«Основные проблемы адаптации для иностранных студентов»",
      place: "Место проведения: Институт психологии и образования КФУ, аудитория 105",
      address: "Адрес: г. Казань, улица Межлаука 1.",
      description: "регистрация будет отправлена потом",
      activities: [{hour: "в 16:00", description: "круглый стол: «Основные проблемы, с которыми сталкиваются студенты из Латинской Америки в процессе адаптации в России» в рамках X Международного форума по педагогическому образованию в КФУ (гибридный формат - с последовательным переводом)"}]
    }
  ],
  [
    {
      id: 1,
      date: "18 de mayo de 2024",
      title: "«MiniFútbol»",
      place: "Lugar: KSK KFU UNICS (sala para deportes)",
      address: "Dirección: Kazan, calle Profesor Nuzhin, 2",
      description: "Registro para invitados y espectadores hasta el 12 de mayo de 2024 a las 20:00",
      activities: [
        {
          hour: "a las 11:30",
          description: "Evento deportivo de fútbol en miniatura"
        }
      ]
    },
    {
      id: 2,
      date: "24 de mayo de 2024",
      title: "«Viaje por América Latina»",
      place: "Lugar: Salón de Actos del Instituto de Filología y Comunicación Intercultural de la Universidad Federal de Kazán",
      address: "Dirección: Calle Tartaristán, 2, Kazán, Rusia",
      description: "Registro para invitados y espectadores hasta el 19 de mayo de 2024 a las 20:00",
      activities: [
        {
          hour: "a las 15:30",
          description: "Exposición interactiva: Conociendo América Latina"
        },
        {
          hour: "a las 16:30",
          description: "Concierto festivo"
        }
      ]
    },
    {
      id: 3,
      date: "29 de mayo de 2024",
      title: "«Principales problemas de adaptación para estudiantes extranjeros»",
      place: "Lugar: Auditorio 105 del Instituto de Psicología y Educación de la Universidad Federal de Kazán",
      address: "Dirección: Calle Mezhlauka, 1, Kazán, Rusia",
      description: "El registro se enviara despues",
      activities: [
        {
          hour: "a las 16:00",
          description: "Mesa redonda: Principales problemas que enfrentan los estudiantes de América Latina durante su adaptación en Rusia en el marco del X Foro Internacional de Educación Pedagógica en la Universidad Federal de Kazán (formato híbrido - con traducción secuencial)"
        }
      ]
    }
  ]]

  return(
    <>
      <div id="accordion-collapse" className="accordion-dev" data-accordion="collapse">
        {events[localeState].map((val, index) => (
          <>
            <h2 id={`accordion-collapse-heading-${index}`}>
              <button type="button" className={`flex items-center justify-between w-full p-5 font-medium border ${val.id === 3 ? "" : "border-b-0"} border-gray-200 ${index === 0 ? "rounded-t-md" : ""} focus:ring-4 focus:ring-gray-200 gap-3`} data-accordion-target={`#accordion-collapse-body-${index}`} aria-expanded="true" aria-controls={`accordion-collapse-body-${index}`}>
                <h1 className="text-white font-bold text-left">{val.date} {val.title}</h1>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </h2>
            <div id={`accordion-collapse-body-${index}`} className="hidden body-acc" aria-labelledby={`accordion-collapse-heading-${index}`}>
              <div className={`p-5 border  ${val.id === 3 ? "" : "border-b-0"} border-gray-200`}>
                <h2 className="text-gray-200">{val.place}</h2>
                <h3 className="text-gray-200">{val.address}</h3>
                <ul className="mt-4 text-white space-y-1 list-disc list-inside">
                  {val.activities.map((activity) => (
                    <li key={nanoid()}>
                      {activity.hour}, {activity.description}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-200 mt-4">{val.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Schedule;
