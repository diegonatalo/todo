import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'

interface NewTaskProps {
  onCreateNewTask: (content: string) => void
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [content, setContent] = useState('')

  function handleNewTaskContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value)
  }

  function handleCreateNewTask() {
    onCreateNewTask(content)
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.container}>
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
