import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as S from "./styled";

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
      <S.CardContainer>
        <S.Grid>
          {film.map((item, index) => (
            <S.Card key={index}>
              <h3>{item.title}</h3>
              <img
                src={`https://starwars-visualguide.com/assets/img/films/${item.episode_id}.jpg`}
                width="250px"
                height="290px"
              />
              <p>{item.opening_crawl}</p>
              <S.ContainerBtn>
                <Link href={`detalhes/${item.episode_id}`}>
                  <h1>Ver detalhes</h1>
                </Link>
              </S.ContainerBtn>
            </S.Card>
          ))}
        </S.Grid>
      </S.CardContainer>
    );
  }
}
