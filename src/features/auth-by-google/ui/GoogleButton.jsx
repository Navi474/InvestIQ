import googleIcon from '../../../shared/assets/google-icon.svg'
import styles from './GoogleButton.module.css'

export function GoogleButton() {
  return (
    <button type="button" className={styles.googleBtn}>
      <img src={googleIcon} width="18" height="18" />
      Google
    </button>
  )
}
