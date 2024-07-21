import Form from 'antd/lib/form'
import { FC } from 'react'
import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'
import GlobalInput from '../common/input/globalInput'

interface StoreSearchFormProps {
  setName?: (name: string) => void
}

const StoreSearchForm: FC<StoreSearchFormProps> = ({ setName }) => {
  const [form] = Form.useForm()
  const onChange = (value: string) => {
    setName && setName(value)
  }
  return (
    <Form name='store-form' form={form} style={{ zIndex: 2000 }}>
      <GlobalInput
        name='name'
        placeholder='Search a store'
        inputType='text'
        icon='/icons/search-store.svg'
        styles='bg-[#FFFFFF] border-none text-black text-[14px]  search-s-input rounded-xl pl-4  '
        isSuffixButton={true}
        onChange={(e) => {
          onChange(e as string)
        }}
        suffixButton={
          <GlobalButton
            htmlType='submit'
            className=' border-none bg-transparent hover:bg-transparent'
            form='store-form'
            iconPlacement='right'
            icon={<GlobalImage src='/icons/filter-sto.svg' />}
          />
        }
      />
    </Form>
  )
}

export default StoreSearchForm
