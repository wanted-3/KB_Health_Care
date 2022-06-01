import { AxiosResponse } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useMount } from 'react-use'
import { getDataApi } from 'services/getData'
import { getHealthPoint, getPredictPoint, getPrice, setHealthPoint, setPredictPoint, setPrice } from 'states/graph'

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
  console.log(first, second, third)
  return <div> 그래프</div>
}

export default GraphItem
