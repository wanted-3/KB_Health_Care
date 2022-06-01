import styles from './testComponent.module.scss'

interface TestComponentProps {
  id: any
  icon: any
  name: any
  value?: any
  coverage?: any
  firstText?: any
  text?: any
  unit?: any
  title: any
  tags: any
  textList: any
}

const TestComponent = ({
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
}: TestComponentProps) => {
  return (
    <div className={styles.tempWrapper}>
      {icon}
      <span className={styles.number}>0{id}</span>
      <h1 className={styles.title}>{name}</h1>

      <p className={styles.intro}>{value ? `${firstText} ${value}${unit} 로 ${title} 입니다.` : text}</p>

      <p className={styles.coverage}>{coverage}</p>

      <ul className={styles.tags}>
        {tags.map((item: any) => (
          <li key={item} className={styles.tag}>
            #{item}
          </li>
        ))}
      </ul>

      <hr className={styles.line} />

      <h2 className={styles.subTitle}>이렇게 관리해 보세요!</h2>
      <ul className={styles.textLists}>
        {textList.map((item: string) => (
          <li className={styles.textLi} key={`${item}-temp`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TestComponent
