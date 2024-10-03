import ProductCard from '@/components/card/card'
import { FC } from 'react'

const SavedPage: FC = () => {
  return (
    <div className='w-[100%] flex justify-center'>
      <section className='w-[100%] grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  grid-cols-1  '>
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
