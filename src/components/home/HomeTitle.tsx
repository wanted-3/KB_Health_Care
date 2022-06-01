import { useEffect, useRef } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { getDataApi } from 'services/getData'
import { setUserInfo, userInformation } from 'states/userInfo'
import { InfoIcon, TopArrow } from 'assets/svgs'
import CircleChart from './CircleChart'
import styles from './homeTitle.module.scss'

const HomeTitle = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const userInfos = useAppSelector(userInformation)

  const userSex = userInfos.sex === '1' ? '남성' : '여성'

  const formatDate = (date: string) => {
    const formatted = date.split('')
    formatted.splice(4, 0, '.')
    formatted.splice(7, 0, '.')

    return formatted.join('')
  }

  const handleScrollToTop = () => {
    scrollRef.current?.scrollIntoView()
  }

  useEffect(() => {
    getDataApi().then((res) => {
      const { userInfo } = res.data
      const { sex, resHeight, age } = res.data.wxcResultMap.paramMap
      const user = { ...userInfo, sex, resHeight, age }
      dispatch(setUserInfo(user))
    })
  }, [dispatch])

  return (
    <div className={styles.homeWrapper} ref={scrollRef}>
      <h1 className={styles.homeTitle}>마이헬스</h1>
      <div className={styles.healthScoreWrap}>
        <div className={styles.healthScoreTitle}>
          <h1>김헬스님의 건강점수</h1>
          <InfoIcon />
        </div>
        <div className={styles.healthScore}>
          <CircleChart score={userInfos.healthScore} />
        </div>
        <p>{formatDate(userInfos.healthDate)}</p>
        <button className={styles.healthResult} type='button'>
          건강검진결과 가져오기 &gt;
        </button>
        <dl className={styles.userInfo}>
          <dt>기본정보</dt>
          <div className={styles.userInfoDetail}>
            <dd>{userSex}</dd>
            <dd>{userInfos.age}</dd>
            <dd>{userInfos.resHeight}cm</dd>
          </div>
        </dl>
        <button className={styles.toTopBtn} onClick={handleScrollToTop} type='button'>
          <TopArrow />
        </button>
      </div>
    </div>
  )
}

export default HomeTitle
