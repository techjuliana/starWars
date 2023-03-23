import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as S from "./styled";
import { api } from "@/services";

export default function CardFilmes() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    api.get().then((res) => {
      setFilm(res.data.results);
    });
  }, []);

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
            <h>director: {item.director} </h>
            <S.ContainerBtn>
              <Link href={`detalhes/${item.episode_id}`}>Details</Link>
            </S.ContainerBtn>
          </S.Card>
        ))}
      </S.Grid>
    </S.CardContainer>
  );
}
