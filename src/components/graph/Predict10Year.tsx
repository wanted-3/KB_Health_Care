import { useSelector } from 'react-redux'
import { getPredictPoint } from 'states/graph'
import Graph from './Graph'
import styles from './graph.module.scss'

const Predict10Year = () => {
  const item = useSelector(getPredictPoint)
  const wHscoreDyArr = item.wHscoreDy.replace(/\[|\]/g, '').split(', ')
  const wHscoreNum = Number(item.wHscore)
  const wHscoreDyNum = Number(wHscoreDyArr[wHscoreDyArr.length - 1])

  if (item.wHscoreDy && item.wHscoreDy) {
    const data = [
      { x: '나', y: wHscoreNum, label: `${wHscoreNum}점` },
      { x: '10년 후', y: wHscoreDyNum, label: `${wHscoreDyNum}점` },
    ]

    const difference = wHscoreDyNum - wHscoreNum
    return (
      <div className={styles.wrap}>
        {(difference > 0 && (
          <p>
            10년 후 예상 건강점수는 현재보다
            <br /> <mark>{difference}점 높아요</mark>
          </p>
        )) ||
          (difference < 0 && (
            <p>
              10년 후 예상 건강점수는 현재보다 <br />
              <mark>{-1 * difference}점 낮아요</mark>
            </p>
          )) ||
          (difference === 0 && (
            <p>
              10년 후 예상 건강점수는 <br />
              <mark> 현재와 같아요</mark>
            </p>
          ))}
        <Graph chartData={data} />
      </div>
    )
  }
  return null
}
export default Predict10Year
