import Head from 'next/head'
import { Header } from '../components/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Learning List Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Learning List Blog" />
    </>
  )
}
