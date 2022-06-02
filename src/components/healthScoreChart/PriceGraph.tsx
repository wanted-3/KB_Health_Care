import { useAppSelector } from 'hooks/useAppSelector'
import { getPrice } from 'states/healthScoreData'
import { IResults } from 'types/chartData'

import styles from './chart.module.scss'
import Chart from './Chart'

const PriceGraph = () => {
  const comparePrice = useAppSelector(getPrice)
  const futurePrice = comparePrice.mediDy.replace(/\[|\]/g, '').split(', ')

  const chartData = [
    { x: '나', y: comparePrice.medi },
    { x: '10 년후', y: Number(futurePrice[futurePrice.length - 1]) },
  ]

  const difference = Number(futurePrice[futurePrice.length - 1]) - comparePrice.medi

  const comment = (title: string) => {
    const results: IResults = {
      isHigh: (
        <>
          10년 후 예상 의료비는 현재보다
          <br /> <mark>{difference.toLocaleString()}원 많아요</mark>
        </>
      ),
      isLow: (
        <>
          10년 후 예상 의료비는 현재보다
          <br />
          <mark> {(-1 * difference).toLocaleString()}원 적어요</mark>
        </>
      ),
      isEqual: (
        <>
          10년 후 예상 의료비는 현재와 <br />
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
export default PriceGraph
