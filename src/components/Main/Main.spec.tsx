import { render, screen } from '@testing-library/react'
import { Main } from './'

describe('Main', () => {
  it('should able to render Main', () => {
    render(<Main />)
    expect(screen.getByText(/criar/i)).toBeInTheDocument()
  })
})
