import { Check, Trash } from 'phosphor-react'
import { Task } from '../../@types/Task'
import styles from './styles.module.scss'

interface TaskItemProps {
  task: Task
  onCheckTask: (id: number) => void
  onDeleteTask: (id: number) => void
}

export function TaskItem({ task, onCheckTask, onDeleteTask }: TaskItemProps) {
  function handleCheckTask() {
    onCheckTask(task.id)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <div className={styles.container}>
      <button
        className={`${styles.checkButton} ${
          task.isDone && styles.checkDoneButton
        }`}
        onClick={handleCheckTask}
      >
        {task.isDone && <Check size={10} weight="bold" />}
      </button>

      <span
        className={`${styles.content} ${task.isDone && styles.contentDone}`}
      >
        {task.content.charAt(0).toUpperCase() + task.content.slice(1)}
      </span>

      <button className={styles.trashButton} onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  )
}
