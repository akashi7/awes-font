import Form from 'antd/lib/form'
import { FC } from 'react'
import GlobalInput from '../common/input/globalInput'
import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'

const OpenStoreForm: FC = () => {
  const [form] = Form.useForm()
  return (
    <Form name='store-form' form={form} style={{ zIndex: 2000 }}>
      <div className='flex lg:flex-row lg:items-center lg:gap-5 flex-col gap-1  w-[100%]'>
        <GlobalInput
          name='email'
          placeholder='Enter your Email'
          inputType='email'
          icon='/icons/mail.svg'
          styles='bg-[#0C0C0D0A] border-none text-black text-[14px] lg:w-[600px] w-[100%]  rounded-xl pl-4  mt-3 '
        />
        <GlobalButton
          icon={<GlobalImage src='/icons/arrow-r.svg' />}
          iconPlacement='right'
          className='h-[48px] lg:w-[138px] w-[100%] rounded-lg'
        >
          Submit
        </GlobalButton>
      </div>
    </Form>
  )
}

export default OpenStoreForm
