import { getHealthPoint } from 'states/healthScoreData'
import { useAppSelector } from 'hooks/useAppSelector'
import { getUserInfo } from 'states/userInfo'
import { IResults } from 'types/chartData'

import styles from './chart.module.scss'
import Chart from './Chart'

const HealthPoint = () => {
  const compareScore = useAppSelector(getHealthPoint)
  const userInfo = useAppSelector(getUserInfo)

  const sex = userInfo.sex === '1' ? '남' : '여'
  const age = userInfo.age.slice(0, 1)

  const chartData = [
    { x: '나', y: compareScore.wHscore },
    { x: `${age}0대 ${sex}성`, y: compareScore.hscore_peer },
  ]

  const difference = compareScore.wHscore - compareScore.hscore_peer

  const comment = (title: string) => {
    const results: IResults = {
      isHigh: (
        <>
          {age}0대 {sex}성 평균 점수보다
          <br /> <mark>{difference}점 높아요</mark>
        </>
      ),
      isLow: (
        <>
          {age}0대 {sex}성 평균 점수보다
          <br />
          <mark> {-1 * difference}점 낮아요</mark>
        </>
      ),
      isEqual: (
        <>
          {age}0대 {sex}성 평균 점수와 <br />
          <mark>같아요</mark>
        </>
      ),
    }
    return results[title]
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.contents}>
        <p>
          {difference > 0 && comment('isHigh')}
          {difference < 0 && comment('isLow')}
          {difference === 0 && comment('isEqual')}
        </p>
        <p className={styles.hscorePercent}>상위 {Math.round(Number(compareScore.hscorePercent) * 10) / 10}%</p>
      </div>
      <Chart chartData={chartData} />
    </div>
  )
}

export default HealthPoint
