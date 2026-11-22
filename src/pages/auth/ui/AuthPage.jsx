import { useState } from 'react'
import { Header } from '../../../widgets/header'
import styles from './AuthPage.module.css'

export function AuthPage(){
  return(
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}></main>
    </div>
  )
}