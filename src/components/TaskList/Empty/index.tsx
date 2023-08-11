import { IoClipboardOutline } from 'react-icons/io5'

export const Empty = () => {
  return (
    <div className="container">
      <div className="flex w-full flex-col items-center justify-around gap-3 border-t border-zinc-300 dark:border-zinc-800">
        <IoClipboardOutline
          className="mt-16 text-zinc-400 dark:text-zinc-500"
          size={56}
        />
        <div className="text-zinc-400 dark:text-zinc-500">
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p className="text-center text-sm">
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>
    </div>
  )
}
