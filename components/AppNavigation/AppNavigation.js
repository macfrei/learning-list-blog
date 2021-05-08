import Link from 'next/link'
import styled from 'styled-components/macro'

export default function AppNavigation() {
  return (
    <Navigation>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Navigation>
  )
}

const Navigation = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  padding: 16px;
  gap: 16px;

  a {
    color: var(--primary-400);
  }
`
