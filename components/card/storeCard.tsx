import { FC } from 'react'
import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'
import ProductCard from './card'

const StoreCard: FC = () => {
  return (
    <div className='border-[1px] border-gray-300 rounded-xl'>
      <section className='lg:px-[40px] lg:py-[20px] px-[20px] py-[10px]  flex lg:justify-between  lg:flex-row  flex-col gap-2 lg:gap-0 lg:items-center'>
        <div className='flex flex-row items-center gap-3'>
          <GlobalImage src='/icons/icon1.svg' />
          <div>
            <p className='font-[500] text-[14px] leading-[18px] text-[#1C2834]'>
              Awesome Shop 2
            </p>
            <p className='font-[300] text-[12px] leading-[24px] text-[#495D69]'>
              134 Products
            </p>
          </div>
        </div>
        <div className='flex flex-row items-center gap-3'>
          <GlobalButton
            icon={<GlobalImage src='/icons/user.svg' />}
            className='w-[169px] font-bold leading-[18px] text-[14px] h-[48px]'
          >
            View Profile
          </GlobalButton>
          <GlobalButton
            icon={<GlobalImage src='/icons/callj.svg' />}
            className='w-[48px] bg-inherit border-[1.5px] border-gray-300 h-[48px]'
          />
          <GlobalButton
            icon={<GlobalImage src='/icons/favourite.svg' />}
            className='w-[48px] bg-inherit border-[1.5px] border-gray-300 h-[48px]'
          />
        </div>
      </section>
      <div className='border-t-[1px] border-gray-300 ' />
      <section className='mt-10 flex xl:flex-row  lg:flex-col flex-col sm:flex-col md:flex-col  gap-2  xl:items-center xl:px-[40px] xl:py-[20px] px-[20px] py-[10px]  lg:gap-5'>
        <div>
          <h2 className=' font-semibold text-[16px] leading-[20px] text-[#1C2834]'>
            About
          </h2>
          <p className=' font-[300] text-[14px] leading-[24px] text-[#495D69] mt-5'>
            A cozy boutique offering a curated selection of unique, high-quality
            clothing and accessories for fashion-forward individuals.
          </p>
          <h3 className=' font-semibold text-[16px] leading-[20px] text-[#1C2834] mt-5'>
            Categories
          </h3>
          <div className='flex flex-row items-center gap-3 mt-5'>
            <GlobalButton
              htmlType='button'
              className={`bg-[#1C2834] bg-inherit header-s-custom-button text-[#495D69] rounded-[40px] w-[77px] h-[27px] px-[20px] py-[10px] border-[#79878F] text-[10px] font-[500]`}
            >
              Vectors
            </GlobalButton>
            <GlobalButton
              htmlType='button'
              className={`bg-[#1C2834] bg-inherit header-s-custom-button text-[#495D69]  rounded-[40px] w-[102px]  h-[27px] px-[20px] py-[10px] border-[#79878F] text-[10px] font-[500] `}
            >
              Backgrounds
            </GlobalButton>
          </div>
          <h3 className=' font-semibold  text-[16px]  leading-[20px] mt-10 text-[#1C2834]'>
            Reviews
          </h3>
          <section className=' flex flex-row items-center gap-3 mt-5'>
            <div className='flex flex-row items-center gap-2'>
              <GlobalImage src='/icons/star.svg' />
              <p className=' font-semibold  text-[16px]  leading-[20px] text-[#495D69]'>
                4.9
              </p>
            </div>
            <p className='font-[300] text-[14px] leading-[24px] text-[#495D69]'>
              (14 Reviews)
            </p>
          </section>
          <GlobalButton
            icon={<GlobalImage src='/icons/store-02.svg' />}
            className=' bg-inherit font-semibold text-[14px] leading-[18px] text-[#141C24] border-[1px] border-[#DBDBDB] w-[207px] mt-5 h-[48px]'
          >
            Explore Products
          </GlobalButton>
        </div>
        <div className='flex xl:flex-row xl:items-center gap-2 lg:flex-row  flex-col mt-5 lg:mt-0  xl:flex-nowrap lg:w-[100%]'>
          <ProductCard className='xl:w-[350px] lg:w-[500px]' isStore={true} />
          <ProductCard className='xl:w-[350px] lg:w-[500px]  ' isStore={true} />
          <ProductCard className='xl:w-[350px] lg:w-[500px]  ' isStore={true} />
        </div>
      </section>
    </div>
  )
}

export default StoreCard
