import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setToken: (state, payload) => {
      state.token = payload
    }
  },
})

export const {setToken } = authSlice.actions