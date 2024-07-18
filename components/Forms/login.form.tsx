import Form, { FormInstance } from 'antd/lib/form'
import { FC } from 'react'
import GlobalInput from '../common/input/globalInput'

interface LoginFormProps {
  form: FormInstance
}

const LoginForm: FC<LoginFormProps> = ({ form }) => {
  return (
    <Form name='login-form' form={form}>
      <GlobalInput
        name='email'
        label='Email'
        placeholder='Enter email'
        inputType='email'
        icon='/icons/mail.svg'
        styles='bg-[#0C0C0D0A] login-input'
      />
      <GlobalInput
        name='password'
        label='Password'
        styles='bg-[#0C0C0D0A] login-input'
        placeholder='Enter Password'
        inputType='password'
        icon='/icons/lockp.svg'
        suffixIcon='/icons/view.svg '
      />
    </Form>
  )
}

export default LoginForm
