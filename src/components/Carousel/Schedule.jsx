import "./Schedule.css"

const Schedule = ({ localeState }) => {
  const RUSSIAN = 0, SPANISH = 1

  const eventsRussian = [{
      date: "18 мая 2024 г.",
      title: "«мини – футбол»",
      place: "КСК КФУ УНИКС (спортивный зал)",
      address: "г. Казань, улица Профессора Нужина, 2",
      description: "Регистрация для гостей и зрителей до 12 мая 2024 г до 20:00",
      activities: [{hour: "в 11:30", description: "спортивное мероприятие «мини – футбол»"}]
    },
    {
      date: "24 мая 2024 г.",
      title: "«Путешествие по Латинской Америке»",
      place: "Института филологии и межкультурной коммуникации КФУ (актовый зал)",
      address: "г. Казань, улица Татарстан, 2.",
      description: "Регистрация для гостей и зрителей до 19 мая 2024 г до 20:00",
      activities: [{hour: "в 15:30", description: "Интерактивная выставка: Знакомство с Латинской Америкой"}, {hour: "в 16:30", description: "праздничный концерт"}]
    },
    {
      date: "29 мая 2024 г.",
      title: "SOME SOME",
      place: "Институт психологии и образования КФУ, аудитория 105",
      address: "г. Казань, улица Межлаука 1.",
      description: "Регистрация для гостей и зрителей до 19 мая 2024 г до 20:00",
      activities: [{hour: "в 16:00", description: "круглый стол: «Основные проблемы, с которыми сталкиваются студенты из Латинской Америки в процессе адаптации в России» в рамках X Международного форума по педагогическому образованию в КФУ (гибридный формат - с последовательным переводом)"}]
    }
  ]

  return(
    <>
      <table>
        {eventsRussian.map(val => (
          <>
            <thead>
              <tr>
                <th>{val.date}</th>
                <th>{val.title}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Place: </th>
                <td>{val.place}</td>
              </tr>
              <tr>
                <th>Address: </th>
                <td>{val.address}</td>
              </tr>
              <tr>
                <td colSpan={2}>{val.description}</td>
              </tr>
              {val.activities.map(activity => (
                <tr>
                  <th>{activity.hour}</th>
                  <td>{activity.description}</td>
                </tr>
              ))}
            </tbody>
          </>
        ))}
      </table>   
    </>
  )
}

export default Schedule;