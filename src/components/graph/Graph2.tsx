import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryBar,
  VictoryGroup,
  VictoryStack,
  VictoryScatter,
  VictoryLegend,
} from 'victory'

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
      <VictoryStack colorScale={['#FFC000', '#BFBFBF']}>
        <VictoryBar standalone={false} data={[chartData[0]]} barWidth={20} />
        <VictoryBar standalone={false} data={[chartData[1]]} barWidth={20} />
      </VictoryStack>
      <VictoryGroup data={chartData} standalone={false}>
        <VictoryLine
          style={{
            data: {
              stroke: 'red',
              strokeWidth: 3,
            },
          }}
        />
        <VictoryScatter size={4} labels={chartData} style={{ data: { fill: 'blue' } }} />
      </VictoryGroup>
      <VictoryLegend
        x={100}
        y={220}
        orientation='horizontal'
        gutter={{ left: 50, right: 50 }}
        style={{
          border: { stroke: 'white' },
          title: { fontSize: 20 },
          labels: { fontSize: 12 },
        }}
        data={[
          {
            name: '나',
            symbol: { fill: 'red', type: 'square' },
          },
          {
            name: '10년 후',
            symbol: { fill: 'orange', type: 'square' },
          },
        ]}
      />
      {/* <VictoryGroup offset={20} data={chartData} style={{ data: { width: 20 } }} colorScale={['#FFC000', '#BFBFBF']}>
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
          // data={[chartData[0]]}
          // style={{
          //   data: { fill: '#BFBFBF' },
          // }}
        />
        <VictoryBar
          scale={{ x: 'time', y: 'linear' }}
          standalone={false}
          animate={{
            duration: 2000,
            onLoad: { duration: 500 },
          }}
          // data={[chartData[1]]}
          // style={{
          //   data: { fill: '#FFC000' },
          // }}
        />
      </VictoryGroup> */}
    </VictoryChart>
  )
}
export default Chart
