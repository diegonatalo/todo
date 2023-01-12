import { useTasks } from '@hooks/useTask'
import { Empty } from '../Empty'
import { NewTask } from '../NewTask'
import { Summary } from '../Summary'
import { TaskItem } from '../TaskItem'
import styles from './styles.module.scss'

export function Main() {
  const { tasks, tasksQuantity } = useTasks()

  return (
    <main className={styles.container}>
      <NewTask />

      <Summary />

      {tasksQuantity > 0 ? (
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </main>
  )
}
