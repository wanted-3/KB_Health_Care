import styles from './layout.module.scss'

const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
