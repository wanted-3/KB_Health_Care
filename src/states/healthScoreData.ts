import { createSlice } from '@reduxjs/toolkit'
import { IHealthScoreList } from 'types/healthData.d'

import type { RootState } from '.'

export interface IHealthScoreState {
  healthPoint: {
    hscore_peer: number
    wHscore: number
    hscorePercent: number
  }
  yearPoint: {
    healthScoreList: IHealthScoreList[]
  }
  predictPoint: {
    wHscore: number
    wHscoreDy: string
  }
  price: {
    medi: number
    mediDy: string
  }
}

const INITIAL_STATE = {
  healthPoint: {
    hscore_peer: 0,
    wHscore: 0,
    hscorePercent: 0,
  },
  yearPoint: {
    healthScoreList: [],
  },
  predictPoint: {
    wHscore: 0,
    wHscoreDy: '',
  },
  price: {
    medi: 0,
    mediDy: '',
  },
}

const systemSlice = createSlice({
  name: 'healthScoreData',
  initialState: INITIAL_STATE as IHealthScoreState,
  reducers: {
    setHealthPoint: (state, action) => {
      state.healthPoint = action.payload
    },
    setYearPoint: (state, action) => {
      state.yearPoint = action.payload
    },
    setPredictPoint: (state, action) => {
      state.predictPoint = action.payload
    },
    setPrice: (state, action) => {
      state.price = action.payload
    },
  },
})

export const { setHealthPoint, setPredictPoint, setPrice, setYearPoint } = systemSlice.actions

export default systemSlice.reducer

export const getHealthPoint = (state: RootState) => state.healthScoreData.healthPoint
export const getYearPoint = (state: RootState) => state.healthScoreData.yearPoint
export const getPredictPoint = (state: RootState) => state.healthScoreData.predictPoint
export const getPrice = (state: RootState) => state.healthScoreData.price
