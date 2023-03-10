import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Task } from '../@types/Task'
import { TaskReducer } from '../reducers/TaskReducer'
import {
  createTaskAction,
  deleteTaskAction,
  markTaskAsDoneAction
} from '../reducers/TaskReducer/actions'

interface TasksContextData {
  tasksState: Task[]
  tasksQuantity: number
  totalDoneTasks: number
  createTask: (task: Task) => void
  markTaskAsDone: (taskId: string) => void
  deleteTask: (taskId: string) => void
}

export const TasksContext = createContext({} as TasksContextData)

interface TasksProviderProps {
  children: ReactNode
}

const TASKS_STORAGE_KEY = 'toDo:tasks'

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasksState, dispatch] = useReducer(TaskReducer, [], () => {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY)

    if (storedTasks) {
      return JSON.parse(storedTasks)
    }

    return []
  })

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksState))
  }, [tasksState])

  const tasksQuantity = tasksState.length
  const totalDoneTasks = tasksState.reduce(
    (total, task) => (total += task.isDone ? 1 : 0),
    0
  )

  function createTask(task: Task) {
    dispatch(createTaskAction(task))
  }

  function markTaskAsDone(taskId: string) {
    dispatch(markTaskAsDoneAction(taskId))
  }

  function deleteTask(taskId: string) {
    dispatch(deleteTaskAction(taskId))
  }

  return (
    <TasksContext.Provider
      value={{
        tasksState,
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
