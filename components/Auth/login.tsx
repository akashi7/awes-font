import Form from 'antd/lib/form'
import { FC } from 'react'
import LoginForm from '../Forms/login.form'
import AuthContainer from './container'
import { LoginDTO, useLoginMutation } from '@/lib/api/auth/authEndpoints'
import { useRouter } from 'next/router'
import handleAPIRequests from '@/helpers/handleApiRequests'

const Login: FC = () => {
  const [form] = Form.useForm()
  const [login, { isLoading }] = useLoginMutation()

  const router = useRouter()

  const onSuccess = (res: any): void => {
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
