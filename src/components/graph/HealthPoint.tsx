import { useSelector } from 'react-redux'

import { getHealthPoint } from 'states/graph'
import Graph from './Graph'
import styles from './graph.module.scss'

const HealthPoint = () => {
  const item = useSelector(getHealthPoint)
  if (item.wHscore && item.hscore_peer) {
    const data = [
      { x: '나', y: item.wHscore, label: `${item.wHscore}점` },
      { x: '30대 남성', y: item.hscore_peer, label: `${item.hscore_peer}점` },
    ]
    const difference = item.wHscore - item.hscore_peer
    return (
      <div className={styles.wrap}>
        <div className={styles.contents}>
          {(difference > 0 && (
            <p>
              30대 남성 평균 점수보다 <br /> <mark>{difference}점 높아요</mark>
            </p>
          )) ||
            (difference < 0 && (
              <p>
                30대 남성 평균 점수보다 <br /> <mark>{-1 * difference}점 낮아요</mark>
              </p>
            )) ||
            (difference === 0 && (
              <p>
                30대 남성 평균점수와 <br /> <mark>같아요</mark>
              </p>
            ))}
          <p className={styles.hscorePercent}>상위 {Math.round(Number(item.hscorePercent) * 10) / 10}%</p>
        </div>
        <Graph chartData={data} />
      </div>
    )
  }
  return null
}

export default HealthPoint
