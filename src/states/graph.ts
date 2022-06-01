import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface DateState {
  healthPoint: {
    hscore_peer: string
    wHscore: string
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
    hscore_peer: '',
    wHscore: '',
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
    setPredictPoint: (state, action) => {
      state.predictPoint = action.payload
    },
    setPrice: (state, action) => {
      state.price = action.payload
    },
  },
})

export const { setHealthPoint, setPredictPoint, setPrice } = systemSlice.actions

export default systemSlice.reducer

export const getHealthPoint = (state: RootState) => state.graph.healthPoint
export const getPredictPoint = (state: RootState) => state.graph.predictPoint
export const getPrice = (state: RootState) => state.graph.price
