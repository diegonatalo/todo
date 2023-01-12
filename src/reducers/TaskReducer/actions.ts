import { Task } from 'types/Task'

export enum ActionTypes {
  CREATE_TASK = 'CREATE_TASK',
  DELETE_TASK = 'DELETE_TASK',
  MARK_TASK_AS_DONE = 'MARK_TASK_AS_DONE'
}

export function createTaskAction(task: Task) {
  return {
    type: ActionTypes.CREATE_TASK,
    payload: {
      task
    }
  }
}

export function deleteTaskAction(taskId: number) {
  return {
    type: ActionTypes.DELETE_TASK,
    payload: {
      taskId
    }
  }
}

export function markTaskAsDoneAction(taskId: number) {
  return {
    type: ActionTypes.MARK_TASK_AS_DONE,
    payload: {
      taskId
    }
  }
}
