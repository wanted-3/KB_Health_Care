import styles from './graphItem.module.scss'
import Predict10Year from './Predict10Year'
import HealthPoint from './HealthPoint'
import PriceGraph from './PriceGraph'
import YearHealth from './YearHealth'

const GraphItem = () => {
  return (
    <div>
      <h1 className={styles.title}>나의 건강점수 분석결과</h1>
      <YearHealth />
      <HealthPoint />
      <Predict10Year />
      <PriceGraph />
    </div>
  )
}

export default GraphItem
