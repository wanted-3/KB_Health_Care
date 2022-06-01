import { AxiosResponse } from 'axios'
import { useDispatch } from 'react-redux'
import { useMount } from 'react-use'

import { getDataApi } from 'services/getData'
import { setHealthPoint, setPredictPoint, setPrice, setYearPoint } from 'states/graph'
import HealthPoint from './HealthPoint'
import YearHealth from './YearHealth'

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
      그래프
      <HealthPoint />
      <YearHealth />
    </div>
  )
}

export default GraphItem
