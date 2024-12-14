import React, { useState } from "react";


const recommendationsData = [
  {
    id: 1,
    title: "Веб-разработка",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    resources: [
      { name: "Курс на freeCodeCamp", link: "https://www.freecodecamp.org/" },
      { name: "JavaScript для начинающих", link: "https://learn.javascript.ru/" },
    ],
  },
  {
    id: 2,
    title: "Data Science",
    skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
    resources: [
      { name: "Python для анализа данных", link: "https://stepik.org/" },
      { name: "Курс Coursera: Data Science", link: "https://www.coursera.org/" },
    ],
  },
  {
    id: 3,
    title: "Мобильная разработка",
    skills: ["Kotlin", "Swift", "Flutter", "React Native"],
    resources: [
      { name: "Разработка на Kotlin", link: "https://kotlinlang.org/" },
      { name: "Руководство по Flutter", link: "https://flutter.dev/" },
    ],
  },
];

function Recommendations() {
  const [showRecommendations, setShowRecommendations] = useState(true);

  const handleRetry = () => {
    setShowRecommendations(false);
    setTimeout(() => {
      setShowRecommendations(true);
    }, 500);
  };

  return (
    <div className="recommendations-container">
      <h1 className="recommendations-title">Ваши персонализированные рекомендации</h1>
      {showRecommendations ? (
        <div className="recommendations-list">
          {recommendationsData.map((rec) => (
            <div className="recommendation-card" key={rec.id}>
              <h2>{rec.title}</h2>
              <p><strong>Необходимые навыки:</strong> {rec.skills.join(", ")}</p>
              <div>
                <strong>Полезные ресурсы:</strong>
                <ul>
                  {rec.resources.map((res, index) => (
                    <li key={index}>
                      <a href={res.link} target="_blank" rel="noopener noreferrer">
                        {res.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading-text">Загружаем рекомендации...</p>
      )}
      <button className="retry-btn" onClick={handleRetry}>
        Попробовать еще раз
      </button>
    </div>
  );
}

export default Recommendations;
