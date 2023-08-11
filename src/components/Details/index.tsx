'use client'

import { useStore } from '@/store/store'

export const Details = () => {
  const { amountOfTasks, amountOfDoneTasks } = useStore()

  return (
    <div className="container mt-16 h-20 flex-row items-center justify-between gap-2">
      <div className="flex items-center justify-between gap-2 font-bold text-sky-500">
        Tarefas criadas
        <span className="rounded-full bg-zinc-200 px-1 py-0.5 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300">
          {amountOfTasks}
        </span>
      </div>
      <div className="flex items-center justify-between gap-2 font-bold text-indigo-500">
        Concluídas
        <span className="rounded-full bg-zinc-200 px-1 py-0.5 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300">
          {amountOfDoneTasks}
        </span>
      </div>
    </div>
  )
}
