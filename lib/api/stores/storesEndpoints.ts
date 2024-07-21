import { baseAPI } from '../api'

export interface PaginationDTO {
  page?: number
  size?: number
  name?: string
}

export interface StoresResponse {
  status: number
  message: string
  data: {
    stores: Array<store>
    pagination: {
      totalPages: number
      totalRecords: number
      currentPage: number
      recordsPerPage: number
    }
  }
}

export interface store {
  id: string
  name: string
  description: string
  address: string
  image: string
  createdAt: string
  manager: {
    id: string
    email: string
    phoneNumber: string
    firstName: string
    lastName: string
    createdAt: string
    shippingAddress: string
  }
}

const storesEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStores: builder.query<StoresResponse, PaginationDTO>({
      providesTags: ['Stores'],
      query: ({ page, size, name }) => ({
        url: `store?name=${name || ''}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetStoresQuery } = storesEndpoints
