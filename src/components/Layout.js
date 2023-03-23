import Head from 'next/head'
import Navbar from './navbar'

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