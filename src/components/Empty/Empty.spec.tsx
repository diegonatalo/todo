import { render, screen } from '@testing-library/react'
import { Empty } from './'

describe('Empty', () => {
  it('should able to render Empty', () => {
    render(<Empty />)
    expect(screen.getByText(/você/i)).toBeInTheDocument()
  })
})
