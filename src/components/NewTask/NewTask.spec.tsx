import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { NewTask } from './'

describe('NewTask', () => {
  it('should able to render NewTask', () => {
    render(<NewTask />)
    expect(screen.getByText(/criar/i)).toBeInTheDocument()
  })

  it('should able to call fuction on form submit', () => {
    const handleSubmit = vi.fn(() => {})
    render(<NewTask />)

    const form = screen.getByRole('form')
    form.onsubmit = handleSubmit

    fireEvent.submit(form)
    expect(handleSubmit).toHaveBeenCalled()
  })
})
