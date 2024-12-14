import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">О сайте: Roadmap in Programming</h1>
        <p className="about-mission">Наша миссия — помочь вам выбрать направление в программировании и достичь успеха.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Почему стоит выбрать нас?</h2>
          <ul>
            <li>Удобная навигация и структурированная информация.</li>
            <li>Подбор направлений по вашим интересам.</li>
            <li>Советы от экспертов по выбору программирования.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Что мы предлагаем?</h2>
          <p>
            Мы создаем персонализированные дорожные карты обучения, чтобы вы могли освоить программирование шаг за шагом.
          </p>
          <p>
            На сайте вы найдете популярные курсы, рекомендации, тесты и готовые учебные материалы.
          </p>
        </div>
      </div>

      <div className="about-buttons">
        <button className="about-btn" onClick={() => navigate("/explore")}>
          Изучить направления
        </button>
        <button className="about-btn" onClick={() => navigate("/recommendations")}>
          Получить рекомендации
        </button>
      </div>
    </div>
  );
}

export default About;
