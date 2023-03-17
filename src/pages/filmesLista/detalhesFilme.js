import Link from 'next/link'
export default function DetalhesFilme() {
  return (
    <>
      <h1>Detalhes do filme</h1>
      <Link href="/filmesLista">
          <h1>Voltar</h1>
        </Link>
    </>
  );
}
