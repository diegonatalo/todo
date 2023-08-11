'use client'

import { api } from '@/lib/axios'
import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const newTaskFormSchema = z.object({
  title: z.string().min(3).max(150)
})

type NewTaskFormData = z.infer<typeof newTaskFormSchema>

export const NewTaskForm = () => {
  const { user } = useUser()

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting }
  } = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormSchema)
  })

  const onSubmit = async (data: NewTaskFormData) => {
    const { title } = data
    const newTask = {
      title,
      isDone: false,
      userId: user?.id
    }

    try {
      await api.post('/api/tasks', newTask)
      reset()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container -mt-7 flex-col items-center justify-between gap-3 sm:flex-row sm:gap-2"
    >
      <input
        className="w-full rounded-lg bg-zinc-50 p-4 text-zinc-700 focus:ring-sky-600 dark:bg-zinc-800 dark:text-zinc-300 invalid:[&:not(:placeholder-shown):not(:focus)]:text-pink-600 invalid:[&:not(:placeholder-shown):not(:focus)]:ring-pink-500"
        placeholder="Adicione uma nova tarefa"
        required
        min={3}
        max={150}
        maxLength={150}
        {...register('title')}
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-sky-600 p-4 font-bold text-zinc-100 sm:w-auto"
        disabled={isSubmitting}
      >
        Criar
      </button>
    </form>
  )
}
