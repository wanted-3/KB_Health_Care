import { useMemo } from 'react'
import { useAppSelector } from 'hooks/useAppSelector'
import { getHealthData } from 'states/healthData'
import {
  ResBMIIcon,
  ResBloodPressureIcon,
  ResTotalCholesterolIcon,
  SmkQtyIcon,
  ResFastingBloodSugerIcon,
  DrnkQtyIcon,
  ExerciQtyIcon,
  ResGFRIcon,
} from 'assets/svgs'

import styles from './healthItem.module.scss'

const HealthItem = () => {
  const test = useAppSelector(getHealthData)
  console.log(test)

  // const temp1 = useMemo(() => {
  //   const abc: any = {
  //     // resBMI: <ResBMIIcon />,
  //     // resBloodPressure: <ResBloodPressureIcon />,
  //     // resTotalCholesterol: <ResTotalCholesterolIcon />,
  //     // smkQty: <SmkQtyIcon />,
  //     // resFastingBlood: <ResFastingBloodSugerIcon />,
  //     // drnkQtyIcon: <DrnkQtyIcon />,
  //     // exerciQtyIcon: <ExerciQtyIcon />,
  //     // resGFR: <ResGFRIcon />,
  //   }

  //   return abc[test.tag.tagId]
  // }, [test])

  return (
    <div>
      <div className={styles.tempWrapper}>
        {/* <ResBMIIcon /> */}
        <h1 className={styles.title}>01. 체질량지수</h1>
        <p>
          현재 체질량 지수 {test.resBMI.value}이며 {test.resBMI.title}입니다.
        </p>
        <span>{test.resBMI.coverage}</span>
        <h1>01. {test.resBMI.title}</h1>
        <span className={styles.tag}>{test.resBMI.tag.tag1}</span>
        <hr />
        <h2 className={styles.subTitle}>이렇게 관리해 보세요!</h2>
        <div>{test.resBMI.textList[0]}</div>
        <div>{test.resBMI.textList[1]}</div>
        {/* {temp1} */}
      </div>
    </div>
  )
}

export default HealthItem
