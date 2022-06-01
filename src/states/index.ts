import { configureStore } from '@reduxjs/toolkit'
import graph from './graph'
import userInfo from './userInfo'
import healthData from './healthData'

export const store = configureStore({
  reducer: { userInfo, graph, healthData },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
