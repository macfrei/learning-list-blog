import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function ImageTeaser({
  imgUrl,
  onShowDetails,
  altText,
  author,
  flip,
}) {
  return (
    <>
      {flip ? (
        <Details>
          <h2>{author.name}</h2>
          <a href={author.gitHub} target="_blank" rel="noreferrer noopener">
            Find me on GitHub
          </a>
        </Details>
      ) : (
        <Image src={imgUrl} onClick={onShowDetails} alt={altText} />
      )}
    </>
  )
}

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    var(--primary-400) 0%,
    var(--secondary-400) 100%
  );
  border-radius: 50%;
  color: white;
  height: 15rem;
  width: 15rem;
`

const Image = styled.img`
  border-radius: 50%;
  height: 15rem;
  width: 15rem;
`

ImageTeaser.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  onShowDetails: PropTypes.func.isRequired,
  altText: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  flip: PropTypes.bool,
}
