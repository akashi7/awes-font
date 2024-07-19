import { LoginDTO } from '@/lib/api/auth/authEndpoints'
import Form, { FormInstance } from 'antd/lib/form'
import { FC } from 'react'
import GlobalInput from '../common/input/globalInput'
import requiredField from '@/helpers/requiredField'

interface LoginFormProps {
  form: FormInstance
  onFinish: (values: LoginDTO) => void
}

const LoginForm: FC<LoginFormProps> = ({ form, onFinish }) => {
  return (
    <Form name='login-form' form={form} onFinish={onFinish}>
      <GlobalInput
        name='email'
        label='Email'
        placeholder='Enter email'
        inputType='email'
        icon='/icons/mail.svg'
        styles='bg-[#0C0C0D0A] login-input'
        rules={requiredField('Email')}
      />
      <GlobalInput
        name='password'
        label='Password'
        styles='bg-[#0C0C0D0A] login-input'
        placeholder='Enter Password'
        inputType='password'
        icon='/icons/lockp.svg'
        suffixIcon='/icons/view.svg '
        rules={requiredField('Password')}
      />
    </Form>
  )
}

export default LoginForm
