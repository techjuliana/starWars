import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Detalhes() {
  const route = useRouter();
  const { detalhesId } = route.query;
  console.log(detalhesId, "testeee");

  return (
    <div>
      <div>
        <div>
          <div>
            <h3>{detalhesId.title}</h3>
          </div>
          {/* <img
              src={`https://starwars-visualguide.com/assets/img/films/${item.episode_id}.jpg`}
              width="250px"
              height="290px"
            />
            <p>{item.opening_crawl}</p> */}
          <Link href="/">
            <h1>Voltar</h1>
          </Link>
        </div>
      </div>

      {/* <div>
        <h2>Personagens:</h2>
        <ul>
          <img
            src={`https://starwars-visualguide.com/assets/img/films/${item.characters}.jpg`}
            width="250px"
            height="290px"
          />
        </ul>
      </div> */}
    </div>
  );
}
