import { IDataChart } from 'types/chartData'
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
  VictoryBar,
  VictoryTooltip,
  VictoryScatter,
  VictoryGroup,
} from 'victory'

interface ChartProps {
  chartData: IDataChart[]
}
const Chart = ({ chartData }: ChartProps) => {
  const colors = ['#FFC000', '#BFBFBF']

  return (
    <VictoryChart theme={VictoryTheme.material} width={500} height={240} domainPadding={{ x: 150 }}>
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
      <VictoryGroup data={chartData} color={colors[1]}>
        <VictoryLine
          standalone={false}
          style={{
            data: { stroke: '#4FADF7' },
            parent: { border: '1px solid #ccc' },
          }}
          labelComponent={<VictoryTooltip renderInPortal={false} />}
          data={chartData}
        />
        <VictoryScatter size={3} symbol='circle' />
      </VictoryGroup>
      <VictoryBar
        scale={{ x: 'time', y: 'linear' }}
        standalone={false}
        labels={({ datum }) => `${datum.y}`}
        data={chartData}
      />
    </VictoryChart>
  )
}
export default Chart
