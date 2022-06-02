import { useRef } from 'react'

import { getUserInfo } from 'states/userInfo'
import { useAppSelector } from 'hooks/useAppSelector'

import styles from './userHealthInfo.module.scss'
import { InfoIcon, TopArrow } from 'assets/svgs'
import CircleChart from './CircleChart'

const formatDate = (date: string) => {
  const formatted = date.split('')
  formatted.splice(4, 0, '.')
  formatted.splice(7, 0, '.')

  return formatted.join('')
}

const UserHealthInfo = () => {
  const userInformation = useAppSelector(getUserInfo)

  const scrollRef = useRef<HTMLDivElement>(null)

  const userSex = userInformation.sex === '1' ? '남성' : '여성'

  const handleScrollToTop = () => {
    scrollRef.current?.scrollIntoView()
  }

  return (
    <div className={styles.userHealthInfoWrapper} ref={scrollRef}>
      <h1 className={styles.title}>마이헬스</h1>

      <div className={styles.healthScoreWrap}>
        <div className={styles.healthScoreTitle}>
          <h1>김헬스님의 건강점수</h1>
          <InfoIcon />
        </div>

        <div className={styles.healthScore}>
          <CircleChart score={userInformation.healthScore} />
        </div>

        <p>{formatDate(userInformation.healthDate)}</p>

        <button className={styles.healthResult} type='button'>
          건강검진결과 가져오기 &gt;
        </button>

        <dl className={styles.userInfo}>
          <dt>기본정보</dt>
          <div className={styles.userInfoDetail}>
            <dd>{userSex}</dd>
            <dd>{userInformation.age}</dd>
            <dd>{userInformation.resHeight}cm</dd>
          </div>
        </dl>

        <button className={styles.toTopBtn} onClick={handleScrollToTop} type='button'>
          <TopArrow />
        </button>
      </div>
    </div>
  )
}

export default UserHealthInfo
