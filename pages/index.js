import Head from 'next/head'
import Header from '../components/Header/Header'
import Link from 'next/link'

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
