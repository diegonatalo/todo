import { render, screen } from '@testing-library/react'
import { Header } from './'

describe('Header', () => {
  it('should able to render Header', () => {
    render(<Header />)
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument()
  })
})
