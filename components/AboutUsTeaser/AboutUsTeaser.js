import { useState } from 'react'
import styled from 'styled-components/macro'
import ImageTeaser from '../ImageTeaser/ImageTeaser'

export default function AboutUsTeaser() {
  const [selected, setSelected] = useState('')
  const authors = [
    { name: 'Lene', gitHub: 'https://github.com/macfrei' },
    { name: 'Miriam', gitHub: 'https://github.com/miriamhaenle' },
  ]

  const showDetails = authorName => {
    setSelected(authorName)
  }
  return (
    <Teaser>
      {authors.map(author => (
        <ImageTeaser
          imgUrl="https://source.unsplash.com/random"
          onShowDetails={() => showDetails(author.name)}
          altText={`Click to read more about ${author.name}`}
          key={author.name}
          flip={selected === author.name}
          author={author}
        />
      ))}
    </Teaser>
  )
}

const Teaser = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2.5rem;
`
