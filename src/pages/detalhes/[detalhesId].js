import React from "react";

export const getStaticProps = async (context) => {
  const id = context.params.detalheId;

  const res = await fetch(`https://swapi.dev/api/films/${id}/`);

  const data = await res.json();

  return {
    props: { item: data.results },
  };
};

export default function Detalhes ()  {
//   const id = context.params.detalheId
//   const [item, setItem] = useState([]);

//   useEffect(() => {
//     fetch(`https://swapi.dev/api/films/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setItem(data.results);
//       });
//   }, []);

  return (
    <div>
      <div>
        {item.map((item) => (
          <div>
            <div>
              <h3>{item.title}</h3>
            </div>
            <img
              src={`https://starwars-visualguide.com/assets/img/films/${item.episode_id}.jpg`}
              width="250px"
              height="290px"
            />
            <p>{item.opening_crawl}</p>
            <Link href="/">
              <h1>Voltar</h1>
            </Link>
          </div>
        ))}
      </div>

      <div>
        <h2>Personagens:</h2>
        <ul>
          <img
            src={`https://starwars-visualguide.com/assets/img/films/${item.characters}.jpg`}
            width="250px"
            height="290px"
          />
        </ul>
      </div>
    </div>
  );
}
