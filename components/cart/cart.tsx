import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'
import GlobalInput from '../common/input/globalInput'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Dropdown from 'antd/lib/dropdown'
import { useWindowSize } from '@/helpers/interfaceSize'

const CartItem = () => {
  const { width } = useWindowSize()
  const isScreenSmall = width <= 1024

  const FiltersDropdown = () => (
    <div
      className='w-fit rounded shadow-md  bg-white p-4 mt-6 flex flex-col gap-4'
      style={{ zIndex: 4000 }}
    >
      <section className='flex flex-col gap-2'>
        <GlobalButton className=' bg-inherit h-[48px] w-[100%]'>-</GlobalButton>
        <GlobalInput inputType='number' styles='w-[120px] bg-[#0C0C0D0A] ' />
        <GlobalButton className=' bg-inherit  h-[48px] w-[100%] '>
          +
        </GlobalButton>
        <GlobalButton
          icon={<GlobalImage src='/icons/delete.svg' />}
          className='rounded-[8px] border-[1.5px] border-[#DBDBDB] h-[48px] w-[100%] bg-white '
        />
      </section>
    </div>
  )

  return (
    <div className='flex lg:justify-between flex-row gap-[30px] lg:gap-0 items-center px-5 py-2 border border-[#DBDBDB] w-[100%] '>
      <p>1</p>
      <section className='flex flex-row gap-3 items-center w-[500px] lg:w-fit'>
        <GlobalImage src='/icons/cart1.svg' width={isScreenSmall ? 40 : 80} />
        <div>
          <p className=' font-semibold lg:text-[16px] text-[#1C2834] text-[13px]'>
            Product 1
          </p>
          <p className='text-[#495D69] font-[500] lg:text-[14px] text-[12px]'>
            9,000 Rwf
          </p>
        </div>
      </section>

      <section className='lg:flex flex-row items-center gap-3 mt-5 hidden'>
        <GlobalButton className=' bg-inherit h-[48px] w-[48px]'>-</GlobalButton>
        <GlobalInput
          inputType='number'
          styles='w-[120px] bg-[#0C0C0D0A] mt-4'
        />
        <GlobalButton className=' bg-inherit  h-[48px] w-[48px] '>
          +
        </GlobalButton>
        <GlobalButton
          icon={<GlobalImage src='/icons/delete.svg' />}
          className='rounded-[8px] border-[1.5px] border-[#DBDBDB] h-[48px] w-[48px] bg-white'
        />
      </section>
      <div className=' flex justify-end'>
        <Dropdown
          overlay={FiltersDropdown}
          trigger={['click']}
          className='block lg:hidden'
        >
          <BsThreeDotsVertical className='cursor-pointer' />
        </Dropdown>
      </div>
    </div>
  )
}

export default CartItem
