import { configureStore } from '@reduxjs/toolkit'
// import fetchReducer from '../features/counter/counterSlice'
import  fetchReducer  from '../reducer/reducer'

export const store = configureStore({
  reducer: {
    bookslist: fetchReducer,
  },
})