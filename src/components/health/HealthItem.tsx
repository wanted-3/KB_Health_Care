import { useAppSelector } from 'hooks/useAppSelector'
import { getHealthData, temp } from 'states/healthData'

const HealthItem = () => {
  const test = useAppSelector(getHealthData)
  console.log(test)

  return (
    <div>
      <div>{test.resBMI.title}</div>
      <div>{test.resBMI.value}</div>
      <div>{test.resBMI.coverage}</div>
      <div>{test.resBMI.tag.tag1}</div>
      <div>{test.resBMI.textList[0]}</div>
      <div>{test.resBMI.textList[1]}</div>
    </div>
  )
}

export default HealthItem
