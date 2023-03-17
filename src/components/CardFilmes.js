import Image from "next/image";

export async function getStaticProps() {
  const response = fetch(`https://swapi.dev/api/films/`);
  const film = response.json();
  // console.log("testeeee",  film);
  return {
    props: {film}
   }
  }

export default function CardFilmes({film}) {
  return (
    <div>
    <ul>
    {film?.map((film) => (
      <li key={film?.id}>
      <h3>{film?.title}</h3>
      <Image
        src={`https://starwars-visualguide.com/assets/img/films/${film?.id}.jpg`}
        width="200"
        height="200"
        alt={film?.title}
      />
      </li>
    ))}
    </ul>
    </div>
  );
}
