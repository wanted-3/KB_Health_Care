import { useAppSelector } from 'hooks/useAppSelector'
import { getPredictPoint } from 'states/healthScoreData'

import styles from './chart.module.scss'
import Chart from './Chart'
import { IResults } from 'types/chartData.d'

const Predict10Year = () => {
  const compareScore = useAppSelector(getPredictPoint)
  const wHscoreDyArr = compareScore.wHscoreDy.replace(/\[|\]/g, '').split(', ')

  const chartData = [
    { x: '나', y: compareScore.wHscore },
    { x: '10년 후', y: Number(wHscoreDyArr[wHscoreDyArr.length - 1]) },
  ]

  const difference = Number(wHscoreDyArr[wHscoreDyArr.length - 1]) - compareScore.wHscore

  const comment = (title: string) => {
    const results: IResults = {
      isHigh: (
        <>
          10년 후 예상 건강점수는 현재보다
          <br /> <mark>{difference}점 높아요</mark>
        </>
      ),
      isLow: (
        <>
          10년 후 예상 건강점수는 현재보다
          <br />
          <mark> {-1 * difference}점 낮아요</mark>
        </>
      ),
      isEqual: (
        <>
          10년 후 예상 건강 점수와 <br />
          <mark>같아요</mark>
        </>
      ),
    }
    return results[title]
  }

  return (
    <div className={styles.wrap}>
      <p>
        {difference > 0 && comment('isHigh')}
        {difference < 0 && comment('isLow')}
        {difference === 0 && comment('isEqual')}
      </p>
      <Chart chartData={chartData} />
    </div>
  )
}

export default Predict10Year
