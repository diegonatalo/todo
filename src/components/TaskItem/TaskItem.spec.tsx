import { render, screen } from '@testing-library/react'
import { v4 as uuidv4 } from 'uuid'
import { TaskItem } from './'

const task = {
  id: uuidv4(),
  content: 'test',
  isDone: false
}

describe('TaskItem', () => {
  it('should able to render TaskItem', () => {
    render(<TaskItem task={task} />)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
