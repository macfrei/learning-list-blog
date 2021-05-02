import ImageTeaser from './ImageTeaser'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('ImageTeaser', () => {
  it('should render an image with props', () => {
    render(
      <ImageTeaser
        imgUrl="https://source.unsplash.com/random"
        onShowDetails={() => console.log('clicked')}
        altText="Hello world"
      />
    )
    expect(screen.getByAltText(/world/i)).toBeInTheDocument()
    expect(screen.getByAltText(/world/i)).toHaveAttribute(
      'src',
      'https://source.unsplash.com/random'
    )
  })

  it('should call a callback function on a click', () => {
    const callback = jest.fn()
    render(
      <ImageTeaser
        imgUrl="https://source.unsplash.com/random"
        onShowDetails={callback}
        altText="Hello world"
      />
    )
    userEvent.click(screen.getByAltText(/world/i))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
