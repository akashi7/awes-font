import Form from 'antd/lib/form'
import { FC } from 'react'
import SignUpForm from '../Forms/signup.form'
import AuthContainer from './container'

const SignUp: FC = () => {
  const [form] = Form.useForm()
  return (
    <AuthContainer
      title='Sign up'
      formComponent={<SignUpForm form={form} />}
      formId='signup-form'
      buttonText='Sign up'
      isSignup={true}
      route={'/'}
    />
  )
}

export default SignUp
