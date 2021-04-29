import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  it('should render the header with a title', () => {
    render(<Header title="This is the title" />)
    expect(screen.getByText('This is the title')).toBeInTheDocument()
  })
  it('should render the subtitle when provided', () => {
    render(<Header title="The title" subtitle="This is the subtitle" />)
    expect(screen.getByText('This is the subtitle')).toBeInTheDocument()
  })
  it('should render a date when provided', () => {
    render(
      <Header
        title="The title"
        subtitle="This is the subtitle"
        date="13.03.21"
      />
    )
    expect(screen.getByText('13.03.21')).toBeInTheDocument()
  })
  it('should render the title as h2 if level=2 is provided', () => {
    render(<Header title="The title" level={2} />)
    expect(screen.getByRole('heading')).toContainHTML('h2')
  })
})
