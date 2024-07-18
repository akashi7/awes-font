import Form from 'antd/lib/form'
import { FC } from 'react'
import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'
import GlobalInput from '../common/input/globalInput'

const StoreSearchForm: FC = () => {
  const [form] = Form.useForm()
  return (
    <Form name='store-form' form={form} style={{ zIndex: 2000 }}>
      <GlobalInput
        name='store'
        placeholder='Search a store'
        inputType='text'
        icon='/icons/search-store.svg'
        styles='bg-[#FFFFFF] border-none text-black text-[14px]  search-s-input rounded-xl pl-4  '
        isSuffixButton={true}
        suffixButton={
          <GlobalButton
            htmlType='submit'
            className=' border-none bg-transparent hover:bg-transparent'
            form='ftore-form'
            iconPlacement='right'
            icon={<GlobalImage src='/icons/filter-sto.svg' />}
          />
        }
      />
    </Form>
  )
}

export default StoreSearchForm
