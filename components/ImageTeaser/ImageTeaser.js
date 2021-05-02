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
          <a href={author.gitHub}>Find me on GitHub</a>
        </Details>
      ) : (
        <Image src={imgUrl} onClick={onShowDetails} alt={altText} />
      )}
    </>
  )
}

const Details = styled.div`
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  border-radius: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
`

const Image = styled.img`
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
`

ImageTeaser.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  onShowDetails: PropTypes.func.isRequired,
  altText: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  flip: PropTypes.bool,
}
