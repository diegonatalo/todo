import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Task } from '../@types/Task'
import { TaskReducer } from '../reducers/TaskReducer'
import {
  createTaskAction,
  deleteTaskAction,
  markTaskAsDoneAction
} from '../reducers/TaskReducer/actions'

interface TasksContextData {
  tasks: Task[]
  tasksQuantity: number
  totalDoneTasks: number
  createTask: (task: Task) => void
  markTaskAsDone: (taskId: number) => void
  deleteTask: (taskId: number) => void
}

export const TasksContext = createContext({} as TasksContextData)

interface TasksProviderProps {
  children: ReactNode
}

const TASKS_STORAGE_KEY = 'toDo:tasks'

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, dispatch] = useReducer(TaskReducer, { tasks: [] }, () => {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY)

    if (storedTasks) {
      return JSON.parse(storedTasks)
    }

    return { tasks: [] }
  })

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const tasksQuantity = tasks.length
  const totalDoneTasks = Array.from(tasks).reduce(
    (total, task) => (total += task.isDone ? 1 : 0),
    0
  )

  function createTask(task: Task) {
    dispatch(createTaskAction(task))
  }

  function markTaskAsDone(taskId: number) {
    dispatch(markTaskAsDoneAction(taskId))
  }

  function deleteTask(taskId: number) {
    dispatch(deleteTaskAction(taskId))
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        markTaskAsDone,
        deleteTask,
        tasksQuantity,
        totalDoneTasks
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
