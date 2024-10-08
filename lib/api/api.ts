import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getFromLocal } from '../../helpers/handleStorage'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers: Headers): Headers => {
      const localToken = getFromLocal<string>('token')

      if (localToken) {
        headers.set('authorization', `Bearer ${localToken}`)
      }
      return headers
    },
  }),
  tagTypes: ['Products', 'Stores', 'OneProduct'] as const,
  endpoints: () => ({}),
})
