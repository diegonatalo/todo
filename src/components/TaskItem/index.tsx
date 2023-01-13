import { useTasks } from '@hooks/useTask'
import { Check, Trash } from 'phosphor-react'
import { Task } from '../../@types/Task'
import styles from './styles.module.scss'

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  const { deleteTask, markTaskAsDone } = useTasks()

  function handleCheckTask(id: number) {
    markTaskAsDone(id)
  }

  function handleDeleteTask(id: number) {
    deleteTask(id)
  }

  return (
    <div className={styles.container}>
      <button
        className={`${styles.checkButton} ${
          task.isDone && styles.checkDoneButton
        }`}
        onClick={() => handleCheckTask(task.id)}
      >
        {task.isDone && <Check size={10} weight="bold" />}
      </button>

      <span
        className={`${styles.content} ${task.isDone && styles.contentDone}`}
      >
        {task.content.charAt(0).toUpperCase() + task.content.slice(1)}
      </span>

      <button
        className={styles.trashButton}
        onClick={() => handleDeleteTask(task.id)}
      >
        <Trash size={16} />
      </button>
    </div>
  )
}
