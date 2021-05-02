import Head from 'next/head'
import Header from '../components/Header/Header'
import Link from 'next/link'
import AboutUsTeaser from '../components/AboutUsTeaser/AboutUsTeaser'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Header title="About" />
      <Link href="/">Home</Link>

      <AboutUsTeaser />
    </>
  )
}
