import { useTasks } from '@hooks/useTask'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './styles.module.scss'

export function NewTask() {
  const [content, setContent] = useState('')
  const { createTask } = useTasks()

  function handleNewTaskContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value)
  }

  function handleCreateNewTask(content: string) {
    event?.preventDefault()

    createTask({
      id: uuidv4(),
      content: content,
      isDone: false
    })

    setContent('')
  }

  return (
    <form
      onSubmit={() => handleCreateNewTask(content)}
      className={styles.container}
      role="form"
    >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskContent}
        value={content}
        required
      />

      <button type="submit">
        <strong>Criar</strong>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
