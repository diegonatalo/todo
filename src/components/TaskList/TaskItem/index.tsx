'use client'

import { Task } from '@/@types/task'
import { api } from '@/lib/axios'
import { IoCheckmarkSharp, IoTrashOutline } from 'react-icons/io5'

type TaskItemProps = {
  task: Task
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const handleDeleteTask = async (id: string) => {
    try {
      await api.delete(`/api/tasks/${id}`, { params: { id } })
    } catch (err) {
      console.log(err)
    }
  }

  const handleToggleTaskIsDone = async (id: string) => {
    try {
      await api.patch(
        `/api/tasks/${id}`,
        { isDone: !task.isDone },
        { params: { id } }
      )
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex w-full flex-row items-center justify-between gap-3 rounded-lg border border-solid border-zinc-200 bg-zinc-50 p-4 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
      <button
        className={`rounded-lg border border-solid  p-1 hover:cursor-pointer 
        ${
          task.isDone
            ? 'border-emerald-600 bg-emerald-600'
            : 'border-zinc-400 bg-transparent'
        }`}
        onClick={() => handleToggleTaskIsDone(task.id)}
      >
        <IoCheckmarkSharp
          size={16}
          className={task.isDone ? 'text-white' : 'text-transparent'}
        />
      </button>
      <p
        className={task.isDone ? 'flex-1 text-zinc-400 line-through' : 'flex-1'}
      >
        {task.title}
      </p>
      <div className="self-start">
        <IoTrashOutline
          className="transition-colors hover:cursor-pointer hover:text-pink-600"
          size={20}
          onClick={() => handleDeleteTask(task.id)}
        />
      </div>
    </div>
  )
}
