import { AxiosResponse } from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { useMount } from 'react-use'
import { getDataApi } from 'services/getData'
import { getHealthPoint, getPredictPoint, getPrice, setHealthPoint, setPredictPoint, setPrice } from 'states/graph'
import Chart from './Graph'
import GraphPredict from './GraphPredict'

const GraphItem = () => {
  const dispatch = useDispatch()
  useMount(() => {
    getDataApi().then((res: AxiosResponse<any, any>) => {
      dispatch(
        setHealthPoint({ hscore_peer: res.data.wxcResultMap.hscore_peer, wHscore: res.data.wxcResultMap.wHscore })
      )
      dispatch(setPredictPoint({ wHscore: res.data.wxcResultMap.wHscore, wHscoreDy: res.data.wxcResultMap.wHscoreDy }))
      dispatch(setPrice({ medi: res.data.wxcResultMap.medi, mediDy: res.data.wxcResultMap.mediDy }))
    })
  })

  const first = useSelector(getHealthPoint)
  const second = useSelector(getPredictPoint)
  const third = useSelector(getPrice)

  // feat: joon 데이터 처리
  const { wHscore, wHscoreDy } = second
  const wHscoreDyArr = wHscoreDy.replace(/\[|\]/g, '').split(', ')
  const wHscoreNum = Number(wHscore)
  const wHscoreDyNum = Number(wHscoreDyArr[wHscoreDyArr.length - 1])

  return (
    <div>
      {' '}
      그래프
      <GraphPredict chartData={[wHscoreNum, wHscoreDyNum]} />
    </div>
  )
}

export default GraphItem
