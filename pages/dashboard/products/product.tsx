import GlobalButton from '@/components/common/button/globalButton'
import GlobalImage from '@/components/common/image/globalImage'
import ProductList from '@/components/productList/productList'
import StoreContainer from '@/components/stores/container'
import { FC } from 'react'

const Products: FC = () => {
  return (
    <div>
      <section className='flex justify-between items-center'>
        <div className='flex flex-row items-center gap-3'>
          <GlobalImage src='/icons/delivery-box.svg' />
          <h1 className=' font-[700] text-[16px]'>Recent Products (100)</h1>
        </div>
        <div className='flex flex-row items-center gap-5'>
          <GlobalButton
            htmlType='button'
            icon={<GlobalImage src='/icons/filters.svg' />}
            className='border border-gray-300 rounded-lg bg-inherit h-[48px] w-[48px]'
          />
          <GlobalButton
            htmlType='button'
            icon={<GlobalImage src='/icons/arrange.svg' />}
            className='border border-gray-300 rounded-lg bg-inherit h-[48px] w-[48px]'
          />
        </div>
      </section>
      <div className='flex lg:flex-row gap-1 mt-10 flex-col'>
        <section className='lg:w-[70%] w-[100%]'>
          <ProductList />
          <div className='flex justify-center'>
            <GlobalButton
              className=' font-semibold  bg-inherit border border-gray-300 h-[48px] w-[161px]'
              icon={<GlobalImage src='/icons/exp-down.svg' />}
            >
              Load More
            </GlobalButton>
          </div>
        </section>
        <section className='lg:w-[30%] w-[100%] mt-5 lg:mt-0'>
          <StoreContainer />
        </section>
      </div>
    </div>
  )
}

export default Products
