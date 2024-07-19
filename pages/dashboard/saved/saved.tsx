import ProductCard from '@/components/card/card'
import { FC } from 'react'

const SavedPage: FC = () => {
  return (
    <div className='w-[100%] flex justify-center'>
      <section className='flex lg:flex-wrap w-[100%] flex-col lg:flex-row'>
        <ProductCard className='lg:w-[377px]  mr-0 lg:mr-5' saved={true} />
        <ProductCard className='lg:w-[377px]  mr-0 lg:mr-5' saved={true} />
        <ProductCard className='lg:w-[377px]  mr-0 lg:mr-5' saved={true} />
        <ProductCard className='lg:w-[377px]  mr-0 lg:mr-5' saved={true} />
        <ProductCard className='lg:w-[377px]  mr-0 lg:mr-5' saved={true} />
        <ProductCard className='lg:w-[377px]  mr-0 lg:mr-5' saved={true} />
        <ProductCard className='lg:w-[377px]  mr-0 lg:mr-5' saved={true} />
        <ProductCard className='lg:w-[377px]  mr-0 lg:mr-5' saved={true} />
      </section>
    </div>
  )
}

export default SavedPage
