import { createSlice, current } from '@reduxjs/toolkit'
import type { RootState } from '.'

interface ITag {
  tagId: string
  tag1: string
  tag2: string
  tag3: string
}

interface HealthState {
  value: {
    [key: string]: any

    // resBMI: { value: string; tag: ITag; contents: string }
    // resBloodPressure: { value: number; tag: ITag; contents: string }
    // resTotalCholesterol: { value: number; tag: ITag; contents: string }
    // smkQty: { value: number; tag: ITag; contents: string }
    // resFastingBloodSuger: { value: number; tag: ITag; contents: string }
    // drnkQty: { value: number; tag: ITag; contents: string }
    // exerciQty: { value: number; tag: ITag; contents: string }
    // resGFR: { value: number; tag: ITag; contents: string }
  }
}

const INITIAL_STATE = {
  value: {
    resBMI: { tag: {}, value: '0', title: '', textList: [], coverage: '정상 : 18.5 ~ 22.9 kg/㎡' }, // 체질량
    resBloodPressure: {
      tag: {},
      value: '0',
      title: '',
      textList: [],
      coverage: '정상 : 이완 60~79 / 수축 90~119 mmHg',
    },
    resTotalCholesterol: { tag: {}, value: '0', title: '', textList: [], coverage: '200 mg/dL 이하' }, // 총콜레스테롤
    smkQty: { tag: {}, title: '', textList: [] },
    resFastingBloodSuger: { tag: {}, value: '0', title: '', textList: [], coverage: '69~99 mg/dL' }, // 식전혈당
    drnkQty: { tag: {}, title: '', textList: [] },
    exerciQty: { tag: {}, title: '', textList: [] },
    resGFR: { tag: {}, value: '0', title: '', textList: [], coverage: '60 mL/min 이상' }, // 신사구체여과율
  },
}

const ttt = [
  'resBMI',
  'resBloodPressure',
  'resTotalCholesterol',
  'smkQty',
  'resFastingBloodSuger',
  'drnkQty',
  'exerciQty',
  'resGFR',
]

const systemSlice = createSlice({
  name: 'healthData',
  initialState: INITIAL_STATE as HealthState,
  reducers: {
    temp: (state, action) => {
      // const resBMI = action.payload.healthTagList.find((item: ITag) => item.tagId === 'resBMI')
      const tagGroup = action.payload.healthTagList.filter((item: ITag) => ttt.includes(item.tagId))

      tagGroup.forEach((item: ITag) => {
        state.value[item.tagId].tag = item
      })

      // state.value.resBMI.tag = action.payload.healthTagList.tagId

      console.log(action.payload.wxcResultMap.paramMap)
      const resBmiValue = action.payload.wxcResultMap.find

      // state.value.resBMI.value = action.payload.wxcResultMap.wMymaxHscore

      const resBMIGroup = action.payload.wxcResultMap.boj.resBMI.split(' - ')
      const resBloodPressureGroup = action.payload.wxcResultMap.boj.resBloodPressure.split(' - ')
      const resTotalCholesterolGroup = action.payload.wxcResultMap.boj.resTotalCholesterol.split(' - ')
      const smkQtyGroup = action.payload.wxcResultMap.boj.smkQty.split(' - ')
      const resFastingBloodSugerGroup = action.payload.wxcResultMap.boj.resFastingBloodSuger.split(' - ')
      const drnkQtyGroup = action.payload.wxcResultMap.boj.drnkQty.split(' - ')
      const exerciQtyGroup = action.payload.wxcResultMap.boj.exerciQty.split(' - ')
      const resGFRGroup = action.payload.wxcResultMap.boj.resGFR.split(' - ')

      state.value.resBMI.title = resBMIGroup[0]
      state.value.resBloodPressure.title = resBloodPressureGroup[0]
      state.value.resTotalCholesterol.title = resTotalCholesterolGroup[0]
      state.value.smkQty.title = smkQtyGroup[0]
      state.value.resFastingBloodSuger.title = resFastingBloodSugerGroup[0]
      state.value.drnkQty.title = drnkQtyGroup[0]
      state.value.resGFR.title = resGFRGroup[0]
      state.value.exerciQty.title = exerciQtyGroup[0]

      state.value.resBMI.textList = resBMIGroup.slice(1)
      state.value.resBloodPressure.textList = resBloodPressureGroup.slice(1)
      state.value.resTotalCholesterol.textList = resTotalCholesterolGroup.slice(1)
      state.value.smkQty.textList = smkQtyGroup.slice(1)
      state.value.resFastingBloodSuger.textList = resFastingBloodSugerGroup.slice(1)
      state.value.drnkQty.textList = drnkQtyGroup.slice(1)
      state.value.resGFR.textList = resGFRGroup.slice(1)
      state.value.exerciQty.textList = exerciQtyGroup.slice(1)

      state.value.resBMI.value = action.payload.wxcResultMap.paramMap.resBMI
      state.value.resBloodPressure.value = action.payload.wxcResultMap.paramMap.resBloodPressure
      state.value.resTotalCholesterol.value = action.payload.wxcResultMap.paramMap.resTotalCholesterol
      state.value.resFastingBloodSuger.value = action.payload.wxcResultMap.paramMap.resFastingBloodSuger
      state.value.resGFR.value = action.payload.wxcResultMap.paramMap.resGFR
    },
  },
})

export const { temp } = systemSlice.actions

export default systemSlice.reducer

export const getHealthData = (state: RootState) => state.healthData.value
