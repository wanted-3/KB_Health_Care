import { useMemo } from 'react'
import { useAppSelector } from 'hooks/useAppSelector'
import { getHealthData, getTestData } from 'states/healthData'
import {
  ResBMIIcon,
  ResBloodPressureIcon,
  ResTotalCholesterolIcon,
  SmkQtyIcon,
  ResFastingBloodSugarIcon,
  DrnkQtyIcon,
  ResGFRIcon,
  ExerciQtyIcon,
} from 'assets/svgs'
import TestComponent from './TestComponent'

import styles from './healthItem.module.scss'

const HealthItem = () => {
  const test = useAppSelector(getHealthData)
  const qweqwe = useAppSelector(getTestData)

  const component = useMemo(() => {
    return [
      { id: 1, icon: <ResBMIIcon />, props: test.resBMI },
      { id: 2, icon: <ResBloodPressureIcon />, props: test.resBloodPressure },
      { id: 3, icon: <ResTotalCholesterolIcon />, props: test.resTotalCholesterol },
      { id: 4, icon: <SmkQtyIcon />, props: test.smkQty },
      { id: 5, icon: <ResFastingBloodSugarIcon />, props: test.resFastingBloodSuger },
      { id: 6, icon: <DrnkQtyIcon />, props: test.drnkQty },
      { id: 7, icon: <ResGFRIcon />, props: test.resGFR },
      { id: 8, icon: <ExerciQtyIcon />, props: test.exerciQty },
    ]
  }, [test])

  return (
    <div className={styles.qweqwe}>
      <span>오케어와 함께 건강을 관리해보세요.</span>
      <span>건강점수를 최대 {qweqwe.wMymaxHscore}점까지 올릴 수 있어요.</span>

      {component.map((item) => (
        <TestComponent key={item.id} icon={item.icon} id={item.id} {...item.props} />
      ))}
    </div>
  )
}

export default HealthItem
