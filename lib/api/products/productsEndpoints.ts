import { baseAPI } from '../api'

export interface PaginationDTO {
  page?: number
  size?: number
  categoryId?: string
}

export interface ProductsResponse {
  status: number
  message: string
  data: {
    products: Array<product>
    pagination: {
      totalPages: number
      totalRecords: number
      currentPage: number
      recordsPerPage: number
    }
  }
}

export interface Review {
  id: string
  rating: number
  comment: string
  createdAt: string
  updatedAt: string
}

export interface OneProductResponse {
  status: number
  message: string
  data: product
}

export interface product {
  id: string
  code: string
  name: string
  description: string
  category: {
    id: string
    name: string
    description: string
    createdAt: string
    updatedAt: string
  }
  unitPrice: number
  thumbnail: Array<string>
  createdAt: string
  updatedAt: string
  createdBy: {
    id: string
    email: string
    phoneNumber: string
    firstName: string
    lastName: string
    isActive: true
    createdAt: string
    updatedAt: string
    shippingAddress: string
    stripeAccountId: null | string
    currency: string
  }
  updatedBy: {
    id: string
    email: string
    phoneNumber: string
    firstName: string
    lastName: string
    isActive: true
    createdAt: string
    updatedAt: string
    shippingAddress: string
    stripeAccountId: null | string
    currency: string
  }
  inventories: []
  reviews: Array<Review>
}

interface oneProductDTO {
  id: string
}

const productsEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, PaginationDTO>({
      providesTags: ['Products'],
      query: ({ page, size, categoryId }) => ({
        url: `products?pageNumber=${page || ''}&recordsPerPage=${size || ''}${
          categoryId ? `&categoryId=${categoryId}` : ''
        }`,
        method: 'GET',
      }),
    }),
    oneProduct: builder.query<OneProductResponse, oneProductDTO>({
      providesTags: ['OneProduct'],
      query: ({ id }) => ({
        url: `products/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetProductsQuery, useOneProductQuery } = productsEndpoints
