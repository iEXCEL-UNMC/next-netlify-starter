import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/next.svg" alt="Next.js logo" className={styles.logo} /> for you
      </footer>
    </>
  )
}
