import Form from 'antd/lib/form'
import { FC } from 'react'
import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'
import GlobalInput from '../common/input/globalInput'

interface HeaderFormProps {
  isStore?: boolean
}

const HeaderForm: FC<HeaderFormProps> = ({ isStore }) => {
  const [form] = Form.useForm()
  return (
    <Form name='filter-form' form={form}>
      <GlobalInput
        name='filter'
        placeholder={` ${
          isStore ? 'Search Store' : 'What are you looking for?'
        } `}
        inputType='text'
        icon='/icons/search-f.svg'
        styles={` ${
          isStore
            ? 'bg-[#0C0C0D0A] filter-store '
            : 'bg-[#FFFFFF0A] focus:bg-[#FFFFFF0A] hover:bg-[#FFFFFF0A] filter-input  '
        }    border-none rounded-xl pl-4  focus:border-none outline-none  lg:w-[100%] w-[100%]  `}
        isSuffixButton={true}
        suffixButton={
          <GlobalButton
            htmlType='submit'
            className=' border-none search-b-c bg-transparent hover:bg-transparent'
            form='filter-form'
            iconPlacement='right'
            icon={
              <GlobalImage
                src={`/icons/${isStore ? 'filter-sto' : 'filter-vertical'}.svg`}
              />
            }
          />
        }
      />
    </Form>
  )
}

export default HeaderForm
