import * as S from "./styled";
import Image from "next/image";
export default function Sobre() {
  return (
    <S.Container>
      <h1>About the project:</h1>
      <h3>Developed by Juliana Bitencourt</h3>
      <p>
        StarWars Page is an App built on Next.js to consult movies and actors of
        this saga.
      </p>
      <Image
          src="/images/3.png"
          width="230"
          height="200"
          alt="Star Wars"
        />
    </S.Container>
  );
}
