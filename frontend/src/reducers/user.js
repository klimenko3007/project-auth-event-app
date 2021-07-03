import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: null,
  accessToken: null,
  
  errors: null
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (store, action) => {
      store.userId = action.payload
    },
    setUserName: (store, action) => {
      store.userName = action.payload
    },
    setAccessToken: (store, action) => {
      store.accessToken= action.payload
    },
    setErrors: (store, action) => {
      store.errors = action.payload;
  }
  }
})

export default user