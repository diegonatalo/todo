import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('should able to render App', () => {
    render(<App />)
    expect(screen.getByText(/você/i)).toBeInTheDocument()
  })
})
