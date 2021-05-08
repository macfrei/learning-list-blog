import Head from 'next/head'
import styled from 'styled-components/macro'
import Navigation from '../components/AppNavigation/AppNavigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Learning List Blog</title>
      </Head>

      <Header>
        <h1>Learning List Blog</h1>
        <Navigation />
      </Header>
    </>
  )
}

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
`
