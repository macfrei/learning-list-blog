import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function ActiveLink({ path, title }) {
  const router = useRouter()
  const className = path === router.pathname ? 'active' : ''

  return (
    <Link href={path} passHref>
      <LinkStyled className={className}>{title}</LinkStyled>
    </Link>
  )
}

const LinkStyled = styled.a`
  color: var(--primary-400);
  text-decoration: none;

  &.active {
    border-bottom: 2px solid;
    font-weight: 600;
  }
`

ActiveLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
