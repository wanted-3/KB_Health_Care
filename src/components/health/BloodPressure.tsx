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

import styles from './BloodPressure.module.scss'

const BloodPressure = () => {
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
    <div className={styles.itemWrapper}>
      {/* <ResBMIIcon /> */}
      <h1>01. 혈압</h1>
      <p>
        혈압은 {test.resBloodPressure.value} 이며 {test.resBloodPressure.title}입니다.
      </p>
      <span>{test.resBloodPressure.coverage}</span>

      <div>
        <span>{test.resBloodPressure.tag.tag1}</span>
        <span>{test.resBloodPressure.tag.tag2}</span>
        <span>{test.resBloodPressure.tag.tag3}</span>
      </div>
      <br />
      <h2>이렇게 관리해 보세요!</h2>
      <ul>
        {test.resBloodPressure.textList.map((item: any) => (
          <li key={`textList_${item}`}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default BloodPressure
