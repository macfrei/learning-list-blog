import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function ImageTeaser({ imgUrl, onShowDetails, altText }) {
  return <Image src={imgUrl} onClick={onShowDetails} alt={altText} />
}

const Image = styled.img`
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
`

ImageTeaser.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  onShowDetails: PropTypes.func.isRequired,
  altText: PropTypes.string.isRequired,
}
