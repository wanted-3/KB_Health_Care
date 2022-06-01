import { useSelector } from 'react-redux'
import { getPrice } from 'states/graph'
import Graph from './Graph'

const PriceGraph = () => {
  const items = useSelector(getPrice)
  const futurePrice = Number(items.mediDy.slice(71, 77))
  const presentPrice = Number(items.medi)
  const differencePrice = futurePrice - presentPrice
  if (items.medi && items.mediDy) {
    const data = [
      { x: '나', y: presentPrice, label: presentPrice },
      { x: '10 년후', y: futurePrice, label: futurePrice },
    ]

    return (
      <div>
        {(differencePrice > 0 && (
          <p>
            10년 후 예상 의료비는 현재보다 <br /> <mark>{differencePrice.toLocaleString()}원 많아요</mark>
          </p>
        )) ||
          (differencePrice < 0 && (
            <p>
              10년 후 예상 의료비는 현재보다 <br /> <mark>{(-1 * differencePrice).toLocaleString()}원 적어요</mark>
            </p>
          )) ||
          (differencePrice === 0 && <p>10년 후 예상 의료비는 현재와 같아요</p>)}
        <Graph chartData={data} />
      </div>
    )
  }
  return null
}

export default PriceGraph
