import Graph from './Graph'

interface Props {
  data: {
    medi: string
    mediDy: string
  }
}

const PriceGraph = ({ data }: Props) => {
  const lastPrice = Number(data.mediDy.slice(71, 77))
  const presentPrice = Number(data.medi)
  const differencePrice = (lastPrice - presentPrice).toLocaleString()
  const arr = [presentPrice, lastPrice]
  return (
    <div>
      <div>{differencePrice}원</div>
      <Graph chartData={arr} />
    </div>
  )
}

export default PriceGraph
