import { configureStore } from '@reduxjs/toolkit'

import healthData from './healthData'
import userInfo from './userInfo'
import healthScoreData from './healthScoreData'

export const store = configureStore({
  reducer: { userInfo, healthScoreData, healthData },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
