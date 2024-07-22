import requiredField from '@/helpers/requiredField'
import { SignupDTO } from '@/lib/api/auth/authEndpoints'
import Col from 'antd/lib/col'
import Form, { FormInstance } from 'antd/lib/form'
import Row from 'antd/lib/row'
import { FC, useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'
import GlobalInput from '../common/input/globalInput'

interface SignUpFormProps {
  form: FormInstance
  onFinish: (values: SignupDTO) => void
}

const SignUpForm: FC<SignUpFormProps> = ({ form, onFinish }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const TogglePassword = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <Form name='signup-form' form={form} onFinish={onFinish}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row mt-1' xs={24} sm={12}>
          <GlobalInput
            name='email'
            label='Email'
            placeholder='Enter email'
            inputType='email'
            icon='/icons/mail.svg'
            styles='bg-[#0C0C0D0A] login-input'
            rules={requiredField('Email')}
          />
        </Col>
        <Col className='gutter-row mt-1' xs={24} sm={12}>
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
        </Col>
        <Col className='gutter-row mt-1' xs={24} sm={12}>
          <GlobalInput
            name='firstName'
            label='First name'
            placeholder='First name'
            inputType='text'
            reactIcon={<MdDriveFileRenameOutline className='text-[#C1CF16]' />}
            styles='bg-[#0C0C0D0A] login-input'
            rules={requiredField('First name')}
          />
        </Col>
        <Col className='gutter-row mt-1' xs={24} sm={12}>
          <GlobalInput
            name='lastName'
            label='Last name'
            placeholder='Last name'
            inputType='text'
            reactIcon={<MdDriveFileRenameOutline className='text-[#C1CF16]' />}
            styles='bg-[#0C0C0D0A] login-input'
            rules={requiredField('Last name')}
          />
        </Col>
        <Col className='gutter-row mt-1' xs={24} sm={12}>
          <GlobalInput
            name='phoneNumber'
            label='Phone'
            placeholder='Enter phone'
            inputType='text'
            reactIcon={<FaPhoneAlt className='text-[#C1CF16]' />}
            styles='bg-[#0C0C0D0A] login-input'
            rules={requiredField('Phone')}
          />
        </Col>
      </Row>
    </Form>
  )
}

export default SignUpForm
