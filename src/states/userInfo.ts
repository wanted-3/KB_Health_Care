import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface IUserInfo {
  userInfo: {
    healthScript: string
    healthScore: string
    healthDate: string
    sex: '1' | '2'
    age: string
    resHeight: string
  }
}

const INITIAL_STATE = {
  userInfo: {
    healthScript: '',
    healthScore: '0',
    healthDate: '',
    sex: '1',
    age: '',
    resHeight: '',
  },
}

const userSlice = createSlice({
  name: 'userInfo',
  initialState: INITIAL_STATE as IUserInfo,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
  },
})

export const { setUserInfo } = userSlice.actions

export default userSlice.reducer

export const getUserInfo = (state: RootState) => state.userInfo.userInfo
