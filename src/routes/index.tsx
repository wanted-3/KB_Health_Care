import { setHealthPoint, setPredictPoint, setPrice, setYearPoint } from 'states/healthScoreData'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { setHealthData } from 'states/healthData'
import { getDataApi } from 'services/getData'
import { setUserInfo } from 'states/userInfo'

import HealthScoreChart from './HealthScoreChart'
import HealthScore from './HealthScore'
import Layout from 'components/layout'
import HealthCare from './HealthCare'

const App = () => {
  const dispatch = useAppDispatch()

  getDataApi().then((res) => {
    const { userInfo } = res.data
    const { sex, resHeight, age } = res.data.wxcResultMap.paramMap
    const user = { ...userInfo, sex, resHeight, age }

    dispatch(setUserInfo(user))

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
      })
    )

    dispatch(
      setPredictPoint({ wHscore: Number(res.data.wxcResultMap.wHscore), wHscoreDy: res.data.wxcResultMap.wHscoreDy })
    )

    dispatch(setPrice({ medi: Number(res.data.wxcResultMap.medi), mediDy: res.data.wxcResultMap.mediDy }))

    dispatch(setHealthData({ wxcResultMap: res.data.wxcResultMap, healthTagList: res.data.healthTagList }))
  })

  return (
    <Layout>
      <HealthScore />
      <HealthScoreChart />
      <HealthCare />
    </Layout>
  )
}

export default App
