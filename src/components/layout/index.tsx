import { ReactNode, useRef } from 'react'
import { TopArrow } from 'assets/svgs'

import styles from './layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScrollToTop = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <h1 className={styles.title} ref={scrollRef}>
          마이헬스
        </h1>
        {children}
      </main>
      <button className={styles.toTopBtn} onClick={handleScrollToTop} type='button'>
        <TopArrow />
      </button>
    </div>
  )
}

export default Layout
