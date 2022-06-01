import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { getYearPoint } from 'states/graph'
import { IDataChart } from 'types/chartData.d'
import { IHealthScoreList } from 'types/dummyData.d'

import Graph from './Graph'
import styles from './graph.module.scss'

const YearHealth = () => {
  const items = useSelector(getYearPoint)
  const data: IDataChart[] = []
  if (items.healthScoreList && items.healthScoreList) {
    items.healthScoreList
      .slice(-4, items.healthScoreList.length)
      .forEach((item: IHealthScoreList) =>
        data.push({ x: dayjs(item.SUBMIT_DATE).format('YYYY'), y: Number(item.SCORE), label: `${item.SCORE}점` })
      )
    const difference = data[data.length - 1].y - data[data.length - 2].y
    return (
      <div className={styles.wrap}>
        {(difference > 0 && (
          <p>
            3건강 점수는 총점이 지난해 보다 <br /> <mark>{difference}점 높아요</mark>
          </p>
        )) ||
          (difference < 0 && (
            <p>
              건강 점수는 총점이 지난해 보다 <br /> <mark>{-1 * difference}점 낮아요</mark>
            </p>
          )) ||
          (difference === 0 && <p>30대 남성 평균과 같아요</p>)}
        <Graph chartData={data} />
      </div>
    )
  }
  return null
}

export default YearHealth
