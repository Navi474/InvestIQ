import styles from './AuthForm.module.css'

export function AuthForm() {
  return (
    <form className={styles.form}>
      <p className={styles.text}> Або увійти за допомогою ел. пошти та паролю після реєстрації:</p>

      <div className={styles.field}>
        <label className={styles.label}>Електронна пошта:</label>
        <input type="email" placeholder="your@email.com" className={styles.input} />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Пароль:</label>
        <input type="password" placeholder="Пароль" className={styles.input}/>
      </div>

      <div className={styles.buttons}>
        <button type="submit" className={styles.loginBtn}>Увійти
        </button>
        <button type="button" className={styles.regBtn}>Реєстрація
        </button>
      </div>
    </form>
  )
}
