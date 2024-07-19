import {
  AuthResponse,
  SignupDTO,
  useSignupMutation,
} from '@/lib/api/auth/authEndpoints'
import Form from 'antd/lib/form'
import { useRouter } from 'next/router'
import { FC } from 'react'
import SignUpForm from '../Forms/signup.form'
import AuthContainer from './container'
import handleAPIRequests from '@/helpers/handleApiRequests'

const SignUp: FC = () => {
  const [form] = Form.useForm()
  const [signup, { isLoading }] = useSignupMutation()
  const router = useRouter()

  const onSuccess = (res: AuthResponse): void => {
    if (res.data) {
      router.push('/dashboard')
    }
  }

  const onFinish = (values: SignupDTO) => {
    handleAPIRequests({
      request: signup,
      ...values,
      onSuccess: onSuccess,
      message: 'Signed up  successfully',
      notify: true,
    })
  }

  return (
    <AuthContainer
      title='Sign up'
      formComponent={<SignUpForm form={form} onFinish={onFinish} />}
      formId='signup-form'
      buttonText='Sign up'
      isSignup={true}
      route={'/'}
      loading={isLoading}
    />
  )
}

export default SignUp
