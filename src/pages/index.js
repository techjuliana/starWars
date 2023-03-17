import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>home</h1>
      <Link href="/filmesLista/detalhesFilme">
        <h1>detalhes filme + COMPONENTES</h1>
      </Link>
    </>
  );
}
