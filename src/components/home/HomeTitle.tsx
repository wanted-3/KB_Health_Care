import { useEffect } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { getDataApi } from 'services/getData'
import { setUserInfo, userInformation } from 'states/userInfo'
import { InfoIcon } from 'assets/svgs'
import CircleChart from './CircleChart'
import styles from './homeTitle.module.scss'

const HomeTitle = () => {
  const dispatch = useAppDispatch()
  const userInfos = useAppSelector(userInformation)

  const userSex = userInfos.sex === '1' ? '남성' : '여성'

  useEffect(() => {
    getDataApi().then((res) => {
      const { userInfo } = res.data
      const { sex, resHeight, age } = res.data.wxcResultMap.paramMap
      const user = { ...userInfo, sex, resHeight, age }
      dispatch(setUserInfo(user))
    })
  }, [dispatch])

  return (
    <div className={styles.homeWrapper}>
      <h1 className={styles.homeTitle}>마이헬스</h1>
      <div className={styles.healthScoreWrap}>
        <div className={styles.healthScoreTitle}>
          <h1>김헬스님의 건강점수</h1>
          <InfoIcon className={styles.infoIcon} />
        </div>
        <div className={styles.healthScore}>
          <CircleChart score={userInfos.healthScore} />
        </div>
        <p>{userInfos.healthDate}</p>
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
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolores, at quos repellat saepe consectetur
        blanditiis impedit placeat beatae deserunt reprehenderit quam error, sed adipisci, voluptate sunt ea odio sequi.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolores, at quos repellat saepe consectetur
        blanditiis impedit placeat beatae deserunt reprehenderit quam error, sed adipisci, voluptate sunt ea odio sequi.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolores, at quos repellat saepe consectetur
        blanditiis impedit placeat beatae deserunt reprehenderit quam error, sed adipisci, voluptate sunt ea odio sequi.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolores, at quos repellat saepe consectetur
        blanditiis impedit placeat beatae deserunt reprehenderit quam error, sed adipisci, voluptate sunt ea odio sequi.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolores, at quos repellat saepe consectetur
        blanditiis impedit placeat beatae deserunt reprehenderit quam error, sed adipisci, voluptate sunt ea odio sequi.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolores, at quos repellat saepe consectetur
        blanditiis impedit placeat beatae deserunt reprehenderit quam error, sed adipisci, voluptate sunt ea odio sequi.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolores, at quos repellat saepe consectetur
        blanditiis impedit placeat beatae deserunt reprehenderit quam error, sed adipisci, voluptate sunt ea odio sequi.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolores, at quos repellat saepe consectetur
        blanditiis impedit placeat beatae deserunt reprehenderit quam error, sed adipisci, voluptate sunt ea odio sequi.
      </p>
    </div>
  )
}

export default HomeTitle
