import { useMemo } from 'react'
import { useAppSelector } from 'hooks/useAppSelector'
import { getHealthData, getTestData } from 'states/healthData'
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
    <div className={styles.healthWrap}>
      <h2>
        오케어와 함께 건강을 관리해보세요. <br />
        건강점수를 최대 <mark>{qweqwe.wMymaxHscore}점</mark>까지 올릴 수 있어요.
      </h2>

      {component.map((item) => (
        <TestComponent key={item.id} icon={item.icon} id={item.id} {...item.props} />
      ))}
    </div>
  )
}

export default HealthItem
