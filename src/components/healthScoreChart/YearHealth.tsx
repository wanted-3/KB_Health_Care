import { useAppSelector } from 'hooks/useAppSelector'
import { getYearPoint } from 'states/healthScoreData'

import styles from './chart.module.scss'
import Chart from './Chart'

const YearHealth = () => {
  const compareScore = useAppSelector(getYearPoint)

  const chartData = compareScore.healthScoreList.slice(1).map((item) => ({
    x: item.SUBMIT_DATE.slice(0, 4),
    y: Number(item.SCORE),
  }))

  // const difference = chartData
  //   .slice(-2)
  //   .map((v) => v.y)
  //   .reduce((a, b) => a - b)

  // console.log(difference)
  // const difference = chartData[chartData.length - 1].y - chartData[chartData.length - 2].y

  // const comment = (title: string) => {
  //   const results: IResults = {
  //     isHigh: (
  //       <>
  //         건강 점수는 총점이 지난해 보다
  //         <br /> <mark>{difference || 0}점 높아요</mark>
  //       </>
  //     ),
  //     isLow: (
  //       <>
  //         건강 점수는 총점이 지난해 보다
  //         <br />
  //         <mark> {-1 * difference || 0}점 낮아요</mark>
  //       </>
  //     ),
  //     isEqual: (
  //       <>
  //         건강 점수는 총점이 지난해와 <br />
  //         <mark>같아요</mark>
  //       </>
  //     ),
  //   }
  //   return results[title]
  // }

  return (
    <div className={styles.wrap}>
      <p>
        {/* {difference > 0 && comment('isHigh')}
        {difference < 0 && comment('isLow')}
        {difference === 0 && comment('isEqual')} */}
      </p>
      <Chart chartData={chartData} />
    </div>
  )
}

export default YearHealth
