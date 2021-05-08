import Head from 'next/head'
import Header from '../components/Header/Header'
import Navigation from '../components/AppNavigation/AppNavigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Learning List Blog</title>
      </Head>

      <Header title="Learning List Blog" />
      <Navigation />
    </>
  )
}
