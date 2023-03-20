import Navbar from './Navbar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>StarWars</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
    </>
  )
}