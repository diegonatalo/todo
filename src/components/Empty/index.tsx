import clipboard from '../../assets/Clipboard.svg'
import styles from './styles.module.scss'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus items a fazer</span>
    </div>
  )
}
