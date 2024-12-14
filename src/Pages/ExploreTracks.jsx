import React, { useState , useEffect } from "react";



function ExploreTracks() {
  const [filter, setFilter] = useState("");
  const [tracks,setTracks] = useState([]);

  useEffect(() => {
    fetch(`https://675af3a19ce247eb19352934.mockapi.io/Course`)
    .then(res=>res.json())
    .then(json=>setTracks(json))
  },[]);


  const filteredTracks = filter
    ? tracks.filter((track) =>
        filter === "popular" ? track.popular : track.difficulty === filter
      )
    : tracks;

  return (
    <div className="explore-container">
      <h1 className="explore-title">Выберите направление программирования</h1>
      <div className="filter-section">
        <button className="filter-btn" onClick={() => setFilter("")}>
          Все
        </button>
        <button className="filter-btn" onClick={() => setFilter("Легкая")}>
          Легкая
        </button>
        <button className="filter-btn" onClick={() => setFilter("Средняя")}>
          Средняя сложность
        </button>
        <button className="filter-btn" onClick={() => setFilter("Сложная")}>
          Сложная
        </button>
        <button className="filter-btn" onClick={() => setFilter("Трудная")}>
          Трудная
        </button>
        <button className="filter-btn" onClick={() => setFilter("popular")}>
          Популярные
        </button>
      </div>

      <div className="tracks-grid">
        {filteredTracks.map((track) => (
          <div className="track-card" key={track.id}>
            <h2>{track.title}</h2>
            <p>{track.description}</p>
            <p>
              <strong>Сложность:</strong> {track.difficulty}
            </p>
            <button className="details-btn">Подробнее</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreTracks;
