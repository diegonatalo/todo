import { Header } from './components/Header'
import { Main } from './components/Main'
import { TasksProvider } from './contexts/TasksContext'
import './global.css'

export function App() {
  return (
    <TasksProvider>
      <Header />

      <Main />
    </TasksProvider>
  )
}
