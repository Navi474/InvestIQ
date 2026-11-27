import '../../../app/styles/variables.css'
import '../../../app/styles/global.css'
import bgBottom from '../../../shared/assets/bg-bottom.png'
import { AuthForm } from '../../../features/auth-by-email'
import { GoogleButton } from '../../../features/auth-by-google'
import { Header } from '../../../widgets/header'
import styles from './AuthPage.module.css'

export function AuthPage() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.bgTop}></div>

      <main className={styles.content}>
        <div className={styles.heroBlock}>
          <h1 className={styles.brandTitle}>InvestIQ</h1>
          <p className={styles.brandSub}>SMART FINANCE</p>
        </div>
        <div className={styles.authCard}>
          <div className={styles.googleBox}>
            <p className={styles.googleText}>Ви можете авторизуватися за допомогою акаунта Google:</p>
            <GoogleButton />
          </div>
          <AuthForm />
        </div>
      </main>
      <img src={bgBottom} alt="" className={styles.bottomDecor} />
    </div>
  )
}
