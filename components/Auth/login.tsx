import Form from 'antd/lib/form'
import { FC } from 'react'
import LoginForm from '../Forms/login.form'
import AuthContainer from './container'

const Login: FC = () => {
  const [form] = Form.useForm()
  return (
    <AuthContainer
      title='Login'
      formComponent={<LoginForm form={form} />}
      formId='login-form'
      buttonText='Login'
      route={'/signup'}
    />
  )
}

export default Login
