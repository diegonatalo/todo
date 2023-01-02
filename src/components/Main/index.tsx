import { useEffect, useState } from 'react'
import { Task } from '../../types/Task'
import { Empty } from '../Empty'
import { NewTask } from '../NewTask'
import { Summary } from '../Summary'
import { TaskItem } from '../TaskItem'
import styles from './styles.module.scss'

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem('@todo:tasks') || '[]')

    setTasks(storageTasks)
  }, [])

  function handleCreateNewTask(content: string) {
    const newTask = {
      id: Math.floor(Math.random() * 100),
      content,
      isDone: false
    }

    setTasks((oldState) => [...oldState, newTask])
    localStorage.setItem('@todo:tasks', JSON.stringify([...tasks, newTask]))
  }

  function handleCheckTask(id: number) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isDone: !task.isDone
          }
        : task
    )

    setTasks(newTasks)
    localStorage.setItem('@todo:tasks', JSON.stringify(newTasks))
  }

  function handleDeleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
    localStorage.setItem('@todo:tasks', JSON.stringify(newTasks))
  }

  const totalCreatedTasks = tasks.length
  const totalDoneTasks = tasks.reduce(
    (total, task) => (total += task.isDone ? 1 : 0),
    0
  )

  return (
    <main className={styles.container}>
      <NewTask onCreateNewTask={handleCreateNewTask} />

      <Summary
        totalCreatedTasks={totalCreatedTasks}
        totalDoneTasks={totalDoneTasks}
      />

      {tasks.length > 0 ? (
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onCheckTask={handleCheckTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </main>
  )
}
