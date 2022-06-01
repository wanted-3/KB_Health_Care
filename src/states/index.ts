import { configureStore } from '@reduxjs/toolkit'
import graph from './graph'
import userInfo from './userInfo'

export const store = configureStore({
  reducer: { userInfo, graph },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
