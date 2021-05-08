import styled from 'styled-components/macro'
import ActiveLink from '../ActiveLink/ActiveLink'

export default function AppNavigation() {
  return (
    <Navigation>
      <ActiveLink path="/" title="Home" />
      <ActiveLink path="/about" title="About" />
    </Navigation>
  )
}

const Navigation = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  gap: 2rem;
`
