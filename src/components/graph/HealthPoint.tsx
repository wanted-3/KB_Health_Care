import { useSelector } from 'react-redux'

import { getHealthPoint } from 'states/graph'
import Graph from './Graph'

const HealthPoint = () => {
  const item = useSelector(getHealthPoint)
  if (item.wHscore && item.hscore_peer) {
    const data = [
      { x: '나', y: item.wHscore, label: item.wHscore },
      { x: '30대 남성', y: item.hscore_peer, label: item.hscore_peer },
    ]
    const difference = item.wHscore - item.hscore_peer
    return (
      <div>
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
              30대 남성 평균점수와 <br /> 같아요
            </p>
          ))}
        <p>상위 {item.hscorePercent}%</p>
        <Graph chartData={data} />
      </div>
    )
  }
  return null
}

export default HealthPoint
