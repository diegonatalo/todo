import logo from '../../assets/logo.svg'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do ToDo" />
    </header>
  )
}
