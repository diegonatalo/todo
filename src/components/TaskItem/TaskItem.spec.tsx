import { render, screen } from '@testing-library/react'
import { TaskItem } from './'

const task = {
  id: 1,
  content: 'test',
  isDone: false
}

describe('TaskItem', () => {
  it('should able to render TaskItem', () => {
    render(<TaskItem task={task} />)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
