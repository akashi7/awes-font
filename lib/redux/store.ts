import { configureStore } from '@reduxjs/toolkit'
import { baseAPI } from '../api/api'
import translationReducer from './slice'

export const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    translation: translationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
})
