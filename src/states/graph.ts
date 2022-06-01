import { createSlice } from '@reduxjs/toolkit'
import { IHealthScoreList } from 'types/dummyData.d'

import type { RootState } from '.'

export interface DateState {
  healthPoint: {
    hscore_peer: number | null
    wHscore: number | null
    hscorePercent: number | null
  }
  yearPoint: {
    healthScoreList: IHealthScoreList[] | null
    paramMap: string | null
  }
  predictPoint: {
    wHscore: string
    wHscoreDy: string
  }
  price: {
    medi: string
    mediDy: string
  }
}

const INITIAL_STATE: DateState = {
  healthPoint: {
    hscore_peer: null,
    wHscore: null,
    hscorePercent: null,
  },
  yearPoint: {
    healthScoreList: null,
    paramMap: null,
  },
  predictPoint: {
    wHscore: '',
    wHscoreDy: '',
  },
  price: {
    medi: '',
    mediDy: '',
  },
}

const systemSlice = createSlice({
  name: 'graphData',
  initialState: INITIAL_STATE,
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

export const getHealthPoint = (state: RootState) => state.graph.healthPoint
export const getYearPoint = (state: RootState) => state.graph.yearPoint
export const getPredictPoint = (state: RootState) => state.graph.predictPoint
export const getPrice = (state: RootState) => state.graph.price
