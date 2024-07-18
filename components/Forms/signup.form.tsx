import Col from 'antd/lib/col'
import Form, { FormInstance } from 'antd/lib/form'
import Row from 'antd/lib/row'
import { FC } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import GlobalInput from '../common/input/globalInput'

interface SignUpFormProps {
  form: FormInstance
}

const SignUpForm: FC<SignUpFormProps> = ({ form }) => {
  return (
    <Form name='signup-form' form={form}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row mt-1' xs={24} sm={12}>
          <GlobalInput
            name='email'
            label='Email'
            placeholder='Enter email'
            inputType='email'
            icon='/icons/mail.svg'
            styles='bg-[#0C0C0D0A] login-input'
          />
        </Col>
        <Col className='gutter-row mt-1' xs={24} sm={12}>
          <GlobalInput
            name='password'
            label='Password'
            styles='bg-[#0C0C0D0A] login-input'
            placeholder='Enter Password'
            inputType='password'
            icon='/icons/lockp.svg'
            suffixIcon='/icons/view.svg '
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
          />
        </Col>
      </Row>
    </Form>
  )
}

export default SignUpForm
