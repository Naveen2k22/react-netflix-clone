import styles from './button.module.scss'

const Button = (props: any): JSX.Element => {
  return (
    <button className={styles.btn}>
      {props.children}
    </button>
  )
}

export default Button