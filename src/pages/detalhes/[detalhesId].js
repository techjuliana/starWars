import * as S from "./styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function Detalhes() {
  const [film, setFilm] = useState([]);
  const route = useRouter();
  const { detalhesId } = route.query;

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${detalhesId}`)
      .then((res) => res.json())
      .then((data) => {
        setFilm(data);
        setAtor(data.characters);
      });
  }, []);
  return (
    <S.Container>
      <div>
        <h1>{film.title}</h1>
        <S.Linha>
          <img
            src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`}
            width="250px"
            height="290px"
          />
          <p>{film.opening_crawl}</p>
        </S.Linha>
      </div>
      <S.Linha>
        <h5>director: {film.director}</h5>
        <h5>Producer: {film.producer}</h5>
      </S.Linha>
    </S.Container>
  );
}
