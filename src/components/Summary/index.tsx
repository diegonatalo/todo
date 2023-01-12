import { useTasks } from '@hooks/useTask'
import styles from './styles.module.scss'

export function Summary() {
  const { tasksQuantity, totalDoneTasks } = useTasks()

  return (
    <div className={styles.container}>
      <div className={styles.created}>
        <span>Tarefas criadas</span>
        <div className={styles.counter}>{tasksQuantity}</div>
      </div>
      <div className={styles.done}>
        <span>Concluídas</span>
        <div className={styles.counter}>
          {totalDoneTasks} de {tasksQuantity}
        </div>
      </div>
    </div>
  )
}
