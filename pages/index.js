import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Learning List Blog</title>
      </Head>

      <Header title="Learning List Blog" />
      <Link href="/about">About</Link>
    </>
  )
}
