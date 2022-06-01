import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryVoronoiContainer, VictoryBar } from 'victory'

interface ChartProps {
  chartData: number[]
}
const Chart = ({ chartData }: ChartProps) => {
  const colors = ['#FFC000', '#BFBFBF']

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={700}
      height={240}
      domainPadding={{ x: 30 }}
      containerComponent={<VictoryVoronoiContainer />}
    >
      <VictoryAxis
        scale='time'
        standalone={false}
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          grid: { stroke: 'transparent' },
          tickLabels: { fontSize: 12, padding: 5, fill: '#94A2AD' },
        }}
      />
      <VictoryLine
        standalone={false}
        animate={{
          duration: 2000,
          onLoad: { duration: 500 },
        }}
        style={{
          data: { stroke: '#4FADF7' },
          parent: { border: '1px solid #ccc' },
        }}
        data={chartData}
      />
      <VictoryBar
        scale={{ x: 'time', y: 'linear' }}
        standalone={false}
        animate={{
          duration: 2000,
          onLoad: { duration: 500 },
        }}
        data={chartData}
      />
    </VictoryChart>
  )
}
export default Chart
