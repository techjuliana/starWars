import Link from 'next/link'
export default function Navbar() {
  return (
    <>
      <h1>imagem</h1>
      <Link href="/filmesLista">
          <h1>Filmes</h1>
        </Link>
        <Link href="/sobre">
          <h1>Sobre</h1>
        </Link>
    </>
  );
}