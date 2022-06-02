import { ReactElement } from 'react'
import { cx } from 'styles'

import { IHealthData } from 'states/healthData'

import styles from './healthCareCard.module.scss'

interface HealthCareCardProps extends IHealthData {
  id: number
  icon: ReactElement<any, any>
}

const HealthCareCard = ({
  id,
  icon,
  title,
  name,
  value,
  firstText,
  text,
  unit,
  coverage,
  tags,
  textList,
}: HealthCareCardProps) => {
  const COLOR_ID = `list${id}`

  return (
    <div className={styles.wrapper}>
      {icon}
      <span className={styles.number}>0{id}</span>
      <h1 className={cx(styles.title, styles[COLOR_ID])}>{name}</h1>

      <p className={styles.intro}>
        {value ? (
          <>
            {firstText} {value} {unit} 로 <strong>{title}</strong> 입니다.
          </>
        ) : (
          text
        )}
      </p>

      <p className={styles.coverage}>{coverage}</p>

      <ul className={styles.tags}>
        {tags.map((item) => (
          <li key={item} className={styles.tag}>
            #{item}
          </li>
        ))}
      </ul>

      <hr className={styles.line} />

      <h2 className={cx(styles.subTitle, styles[COLOR_ID])}>이렇게 관리해 보세요!</h2>
      <ul className={styles.textLists}>
        {textList.map((item) => (
          <li className={styles.textLi} key={`${item}-textKey`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HealthCareCard
