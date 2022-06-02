import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'

interface ITag {
  tagId: string
  tag1: string
  tag2: string
  tag3: string
}

export interface IHealthData {
  name: string
  firstText?: string
  text?: string
  tags: string[]
  value?: string
  title: string
  textList: string[]
  coverage?: string
  unit?: string
}

interface HealthState {
  value: {
    [key: string]: IHealthData
  }
  score: {
    wMymaxHscore: number
  }
}

const INITIAL_STATE = {
  value: {
    resBMI: {
      name: '체질량지수',
      firstText: '체질량 지수는',
      tags: [],
      value: '0',
      title: '',
      textList: [],
      coverage: '정상 : 18.5 ~ 22.9 kg/㎡',
      unit: 'kg/m²',
    },
    resBloodPressure: {
      name: '혈압',
      firstText: '혈압은',
      tags: [],
      value: '0',
      title: '',
      textList: [],
      coverage: '정상 : 이완 60~79 / 수축 90~119 mmHg',
      unit: 'mmHg',
    },
    resTotalCholesterol: {
      name: '총 콜레스테롤',
      firstText: '총 콜레스테롤은',
      tags: [],
      value: '0',
      title: '',
      textList: [],
      coverage: '200 mg/dL 이하',
      unit: 'mg/dL',
    },
    smkQty: { text: '비흡연 중입니다.', name: '흡연', tags: [], title: '', textList: [] },
    resFastingBloodSuger: {
      name: '식전혈당',
      firstText: '식전혈당은',
      tags: [],
      value: '0',
      title: '',
      textList: [],
      coverage: '69~99 mg/dL',
      unit: 'mg/dL',
    },
    drnkQty: { name: '음주', text: '1주일간 음주를 하지 않고 있습니다.', tags: [], title: '', textList: [] },
    exerciQty: { name: '운동량', text: '1주일간 운동을 하지 않고 있습니다.', tags: [], title: '', textList: [] },
    resGFR: {
      name: '신사구체여과물',
      firstText: '신사구체여과물은',
      tags: [],
      value: '0',
      title: '',
      textList: [],
      coverage: '60 mL/min 이상',
      unit: 'mL/min',
    },
  },

  score: {
    wMymaxHscore: 0,
  },
}

const CARE_GROUP_NAME = [
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
    setHealthData: (state, action) => {
      state.score.wMymaxHscore = action.payload.wxcResultMap.wMymaxHscore

      const tagGroup = action.payload.healthTagList.filter((item: ITag) => CARE_GROUP_NAME.includes(item.tagId))

      tagGroup.forEach((item: ITag) => {
        const arr1 = Object.values(item)
          .slice(1)
          .filter((tagName: string) => tagName !== '')

        state.value[item.tagId].tags = arr1
      })

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

export const { setHealthData } = systemSlice.actions

export default systemSlice.reducer

export const getHealthData = (state: RootState) => state.healthData.value
export const getHealthScore = (state: RootState) => state.healthData.score
