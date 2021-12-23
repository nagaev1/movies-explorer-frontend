import React from 'react'
import './AboutProject.css'

export default function AboutProject() {
  return (
    <section className="about-project" id="project">
      <h2 className="about-project__header">О проекте</h2>
      <div className="about-project__stage-container">
        <div className="about-project__stage">
          <h3 className="about-project__stage-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__stage-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__stage">
          <h3 className="about-project__stage-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__stage-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline-container">
        <div className="about-project__timeline-part">
          <p className="about-project__timeline-time about-project__timeline-time_type_backend">1 неделя</p>
          <p className="about-project__timeline-description">Back-end</p>
        </div>
        <div className="about-project__timeline-part">
          <p className="about-project__timeline-time about-project__timeline-time_type_frontend">4 неделя</p>
          <p className="about-project__timeline-description">Front-end</p>
        </div>
      </div>
    </section>
  )
}