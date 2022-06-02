import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
  VictoryBar,
  VictoryTooltip,
  VictoryScatter,
  VictoryGroup,
  VictoryLabel,
} from 'victory'

import { IDataChart } from 'types/chartData'

interface ChartProps {
  chartData: IDataChart[]
}

const Chart = ({ chartData }: ChartProps) => {
  return (
    <VictoryChart theme={VictoryTheme.material} width={650} height={320} domainPadding={{ x: 150 }}>
      <VictoryAxis
        scale='time'
        standalone={false}
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          grid: { stroke: 'transparent' },
          tickLabels: { fontSize: 20, padding: 5, fill: '#94A2AD' },
        }}
      />

      <VictoryBar
        standalone={false}
        style={{
          data: { fill: ({ datum }) => (datum.x === '나' || datum.x === '2021' ? '#FFC000' : '#fe833d') },
        }}
        labelComponent={
          <VictoryLabel
            style={[
              { fill: ({ datum }) => (datum.x === '나' || datum.x === '2021' ? '#fe833d' : '#666666'), fontSize: 25 },
            ]}
          />
        }
        data={chartData}
        labels={({ datum }) => String(datum.y)}
      />
      <VictoryGroup data={chartData} color='#BFBFBF'>
        <VictoryLine
          standalone={false}
          style={{
            data: { stroke: '#666666' },
            parent: { border: '1px solid #ccc' },
            labels: {
              fill: 'transparent',
            },
          }}
          labelComponent={<VictoryTooltip renderInPortal={false} />}
        />
        <VictoryScatter
          size={3}
          symbol='circle'
          style={{
            data: {
              fill: ({ datum }) => (datum.x === '나' || datum.x === '2021' ? 'white' : '#FFC000'),
              stroke: ({ datum }) => (datum.x === '나' || datum.x === '2021' ? '#666666' : '#FFC000'),
              fillOpacity: 1,
              strokeWidth: 1,
            },
            labels: {
              fill: 'transparent',
            },
          }}
        />
      </VictoryGroup>
    </VictoryChart>
  )
}
export default Chart
