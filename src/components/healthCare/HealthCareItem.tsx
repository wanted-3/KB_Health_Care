import { useMemo } from 'react'

import { getHealthData, getHealthScore } from 'states/healthData'
import { useAppSelector } from 'hooks/useAppSelector'

import {
  ResBMIIcon,
  ResBloodPressureIcon,
  ResTotalCholesterolIcon,
  ResFastingBloodSugarIcon,
  DrnkQtyIcon,
  ResGFRIcon,
  ExerciQtyIcon,
  SmkQtyIcon,
} from 'assets/svgs'

import styles from './healthCareItem.module.scss'
import HealthCareCard from './HealthCareCard'

const HealthCareItem = () => {
  const healthScore = useAppSelector(getHealthScore)
  const healthData = useAppSelector(getHealthData)

  const component = useMemo(() => {
    return [
      { id: 1, icon: <ResBMIIcon />, props: healthData.resBMI },
      { id: 2, icon: <ResBloodPressureIcon />, props: healthData.resBloodPressure },
      { id: 3, icon: <ResTotalCholesterolIcon />, props: healthData.resTotalCholesterol },
      { id: 4, icon: <SmkQtyIcon />, props: healthData.smkQty },
      { id: 5, icon: <ResFastingBloodSugarIcon />, props: healthData.resFastingBloodSuger },
      { id: 6, icon: <DrnkQtyIcon />, props: healthData.drnkQty },
      { id: 7, icon: <ResGFRIcon />, props: healthData.resGFR },
      { id: 8, icon: <ExerciQtyIcon />, props: healthData.exerciQty },
    ]
  }, [healthData])

  return (
    <div className={styles.healthWrap}>
      <h2>
        오케어와 함께 건강을 관리해보세요. <br />
        건강점수를 최대 <mark>{healthScore.wMymaxHscore}점</mark>까지 올릴 수 있어요.
      </h2>

      {component.map((item) => (
        <HealthCareCard key={item.id} icon={item.icon} id={item.id} {...item.props} />
      ))}
    </div>
  )
}

export default HealthCareItem
