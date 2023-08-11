import { Details } from '@/components/Details'
import { NewTaskForm } from '@/components/NewTaskForm'
import { TaskList } from '@/components/TaskList'

export default function Home() {
  return (
    <>
      <NewTaskForm />
      <Details />
      <TaskList />
    </>
  )
}
