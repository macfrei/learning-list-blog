import ImageTeaser from './ImageTeaser'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const author = { name: 'Harry Potter', gitHub: 'github.com/harrypotter' }

describe('ImageTeaser', () => {
  it('should render an image with props', () => {
    render(
      <ImageTeaser
        imgUrl="https://source.unsplash.com/random"
        onShowDetails={() => console.log('clicked')}
        altText="Hello world"
        author={author}
      />
    )
    expect(screen.getByAltText(/world/i)).toBeInTheDocument()
    expect(screen.getByAltText(/world/i)).toHaveAttribute(
      'src',
      'https://source.unsplash.com/random'
    )
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('should call a callback function on a click', () => {
    const callback = jest.fn()
    render(
      <ImageTeaser
        imgUrl="https://source.unsplash.com/random"
        onShowDetails={callback}
        altText="Hello world"
        author={author}
      />
    )
    userEvent.click(screen.getByAltText(/world/i))
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should show details if flip is true', () => {
    const { rerender } = render(
      <ImageTeaser
        imgUrl="https://source.unsplash.com/random"
        onShowDetails={() => {}}
        altText="Hello world"
        author={author}
        flip={false}
      />
    )
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    rerender(
      <ImageTeaser
        imgUrl="https://source.unsplash.com/random"
        onShowDetails={() => {}}
        altText="Hello world"
        author={author}
        flip
      />
    )
    expect(screen.queryByRole('heading')).toBeInTheDocument()
    expect(screen.queryByRole('link')).toBeInTheDocument()
    expect(screen.queryByAltText(/world/i)).not.toBeInTheDocument()
  })
})
