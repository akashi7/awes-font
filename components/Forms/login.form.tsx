import requiredField from '@/helpers/requiredField'
import { LoginDTO } from '@/lib/api/auth/authEndpoints'
import Form, { FormInstance } from 'antd/lib/form'
import { FC, useState } from 'react'
import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'
import GlobalInput from '../common/input/globalInput'

interface LoginFormProps {
  form: FormInstance
  onFinish: (values: LoginDTO) => void
}

const LoginForm: FC<LoginFormProps> = ({ form, onFinish }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const TogglePassword = () => {
    setShowPassword((prev) => !prev)
  }

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
        inputType={showPassword ? 'text' : 'password'}
        icon='/icons/lockp.svg'
        suffixIcon='/icons/view.svg '
        suffixButton={
          <GlobalButton
            icon={<GlobalImage src='/icons/view.svg ' className='' />}
            className=' bg-inherit  border-none header-b-c'
            onClick={TogglePassword}
          />
        }
        rules={requiredField('Password')}
      />
    </Form>
  )
}

export default LoginForm
