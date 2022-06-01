import styles from './graphItem.module.scss'

const GraphItem = () => {
  return (
    <div className={styles.healthAnalysisResult}>
      <h1>나의 건강점수 분석 결과</h1>
      <button type='button'>결과 자세히 보기 &gt;</button>
    </div>
  )
}

export default GraphItem
