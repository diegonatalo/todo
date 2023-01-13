import { produce } from 'immer'
import { Task } from '../../@types/Task'
import { ActionTypes } from './actions'

export function TaskReducer(tasks: Task[], action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_TASK: {
      return produce(tasks, (draft) => {
        Array.from(draft).push(action.payload.task)
      })
    }

    case ActionTypes.DELETE_TASK: {
      return produce(tasks, (draft) => {
        const taskToDelete = tasks.findIndex(
          (task) => task.id === action.payload.taskId
        )

        Array.from(draft).splice(taskToDelete, 1)
      })
    }

    case ActionTypes.MARK_TASK_AS_DONE: {
      return produce(tasks, (draft) => {
        const taskToMark = tasks.findIndex(
          (task) => task.id === action.payload.taskId
        )

        Array.from(draft)[taskToMark].isDone = !draft[taskToMark].isDone
      })
    }

    default:
      console.log('cheguei no default')
      return tasks
  }
}
