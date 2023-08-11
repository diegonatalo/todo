'use client'

import { Task } from '@/@types/task'
import { useStore } from '@/store/store'
import { useCallback, useEffect, useState } from 'react'
import { Empty } from './Empty'
import { TaskItem } from './TaskItem'
import { TaskItemSkeleton } from './TaskItemSkeleton'

export const TaskList = () => {
  const { tasks, getTasks } = useStore()
  const [isLoading, setIsLoading] = useState(true)

  const fillTasks = useCallback(async () => {
    await getTasks()
    setIsLoading(false)
  }, [getTasks])

  useEffect(() => {
    fillTasks()
  }, [tasks, fillTasks])

  return (
    <div className="container mt-6 flex-col items-center justify-center gap-3">
      {isLoading ? (
        <TaskItemSkeleton />
      ) : tasks.length === 0 ? (
        <Empty />
      ) : (
        tasks.map((task: Task) => <TaskItem key={task.title} task={task} />)
      )}
    </div>
  )
}
