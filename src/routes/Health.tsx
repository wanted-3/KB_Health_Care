import { useAppDispatch } from 'hooks/useAppDispatch'
import HealthItem from 'components/health/HealthItem'
import { temp } from 'states/healthData'
import { getDataApi } from 'services/getData'

const Health = () => {
  const dispatch = useAppDispatch()

  getDataApi().then((res) => {
    dispatch(temp({ wxcResultMap: res.data.wxcResultMap, healthTagList: res.data.healthTagList }))
  })

  return (
    <div>
      <HealthItem />
    </div>
  )
}

export default Health
