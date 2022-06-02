import { PieChart } from 'react-minimal-pie-chart'

interface CircleChartProps {
  score: string
}

const CircleChart = ({ score }: CircleChartProps) => {
  return (
    <PieChart
      data={[
        {
          value: Number(score),
          color: '#fed303',
          name: 'score',
        },
      ]}
      reveal={Number(score) * 0.1}
      lineWidth={15}
      background='#f3f3f3'
      lengthAngle={300}
      startAngle={-240}
      animate
      animationDuration={2000}
      rounded
      label={({ dataEntry }) => dataEntry.value}
      labelStyle={{
        fontSize: '26px',
        fontWeight: '500',
        fill: '#333333',
      }}
      labelPosition={0}
    />
  )
}

export default CircleChart
