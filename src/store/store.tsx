import { Task } from '@/@types/task'
import { api } from '@/lib/axios'
import { create } from 'zustand'

type Store = {
  tasks: Task[]
  getTasks: () => Promise<void>
  amountOfTasks: number
  amountOfDoneTasks: number
}

export const useStore = create<Store>()((set) => ({
  tasks: [],
  getTasks: async () => {
    const { data } = await api.get('api/tasks')
    set((state) => ({ tasks: data.tasks }))
  },
  amountOfDoneTasks: 0,
  amountOfTasks: 0
}))

useStore.subscribe((state) => {
  state.amountOfTasks = state.tasks.length
})

useStore.subscribe((state) => {
  state.amountOfDoneTasks = state.tasks.reduce(
    (acc: number, task: Task) => (task.isDone ? acc + 1 : acc),
    0
  )
})
