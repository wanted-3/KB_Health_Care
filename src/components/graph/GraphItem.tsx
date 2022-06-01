import { AxiosResponse } from 'axios'
import { useDispatch } from 'react-redux'
import { useMount } from 'react-use'

import { getDataApi } from 'services/getData'
import { setHealthPoint, setPredictPoint, setPrice, setYearPoint } from 'states/graph'
import HealthPoint from './HealthPoint'
import Predict10Year from './Predict10Year'
import PriceGraph from './PriceGraph'
import YearHealth from './YearHealth'

import styles from './graphItem.module.scss'

const GraphItem = () => {
  const dispatch = useDispatch()
  useMount(() => {
    getDataApi().then((res: AxiosResponse<any, any>) => {
      dispatch(
        setHealthPoint({
          hscore_peer: Number(res.data.wxcResultMap.hscore_peer),
          wHscore: Number(res.data.wxcResultMap.wHscore),
          hscorePercent: Number(res.data.wxcResultMap.hscorePercent),
        })
      )
      dispatch(
        setYearPoint({
          healthScoreList: res.data.healthScoreList,
          paramMap: res.data.wxcResultMap.paramMap,
        })
      )
      dispatch(setPredictPoint({ wHscore: res.data.wxcResultMap.wHscore, wHscoreDy: res.data.wxcResultMap.wHscoreDy }))
      dispatch(setPrice({ medi: res.data.wxcResultMap.medi, mediDy: res.data.wxcResultMap.mediDy }))
    })
  })

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
