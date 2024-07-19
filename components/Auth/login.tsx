import handleAPIRequests from '@/helpers/handleApiRequests'
import { setToLocal } from '@/helpers/handleStorage'
import {
  LoginAuthResponse,
  LoginDTO,
  useLoginMutation,
} from '@/lib/api/auth/authEndpoints'
import Form from 'antd/lib/form'
import { useRouter } from 'next/router'
import { FC } from 'react'
import LoginForm from '../Forms/login.form'
import AuthContainer from './container'

const Login: FC = () => {
  const [form] = Form.useForm()
  const [login, { isLoading }] = useLoginMutation()

  const router = useRouter()

  const onSuccess = (res: LoginAuthResponse): void => {
    setToLocal('token', res.data.accessToken)
    router.push('/dashboard')
  }

  const onFinish = (values: LoginDTO) => {
    handleAPIRequests({
      request: login,
      ...values,
      onSuccess: onSuccess,
      message: 'Login success',
      notify: true,
    })
  }

  return (
    <AuthContainer
      title='Login'
      formComponent={<LoginForm form={form} onFinish={onFinish} />}
      formId='login-form'
      buttonText='Login'
      route={'/signup'}
      loading={isLoading}
    />
  )
}

export default Login
