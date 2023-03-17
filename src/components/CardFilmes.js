import React, { useState, useEffect } from "react";
export default function CardFilmes() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setFilm(data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Carregando...</div>;
  } else {
    return (
      <div>
        {film.map((item) => (
          <div>
            <div>
              <h3>{item.title}</h3>
            </div>
            <img
              src={`https://starwars-visualguide.com/assets/img/films/${item.episode_id}.jpg`}
              width="250px"
              height="290px"
            />
          </div>
        ))}
      </div>
    );
  }
}
