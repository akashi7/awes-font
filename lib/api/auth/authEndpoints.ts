import { baseAPI } from '../api'

export interface LoginDTO {
  email: string
  password: string
}

export interface SignupDTO extends LoginDTO {
  firstName: string
  lastName: string
  phoneNumber: string
}

export interface AuthResponse {
  status: number
  message: string
  data: {
    id: string
    email: string
    phoneNumber: string
    firstName: string
    lastName: string
    isActive: boolean
    shippingAddress: null | string
    currency: string
    roles: [
      {
        id: string
        name: string
        createdAt: string
        updatedAt: string
      }
    ]
  }
}

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginDTO>({
      query: (DTO) => ({
        url: `auth/login`,
        method: 'POST',
        body: DTO,
      }),
    }),
    signup: builder.mutation<AuthResponse, SignupDTO>({
      query: (DTO) => ({
        url: `auth/signup`,
        method: 'POST',
        body: DTO,
      }),
    }),
  }),
})

export const { useLoginMutation, useSignupMutation } = authApi
