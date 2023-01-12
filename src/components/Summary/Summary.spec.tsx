import { render, screen } from '@testing-library/react'
import { Summary } from './'

describe('Summary', () => {
  it('should able to render Summary', () => {
    render(<Summary />)
    expect(screen.getByText(/concluídas/i)).toBeInTheDocument()
  })
})
