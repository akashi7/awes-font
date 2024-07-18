import ProductCard from '@/components/card/card'
import { FC } from 'react'

const SavedPage: FC = () => {
  return (
    <div className='w-[100%] flex justify-center'>
      <section className='flex flex-wrap w-[90%]'>
        <ProductCard className='w-[377px]' saved={true} />
        <ProductCard className='w-[377px]' saved={true} />
        <ProductCard className='w-[377px]' saved={true} />
        <ProductCard className='w-[377px]' saved={true} />
        <ProductCard className='w-[377px]' saved={true} />
        <ProductCard className='w-[377px]' saved={true} />
        <ProductCard className='w-[377px]' saved={true} />
        <ProductCard className='w-[377px]' saved={true} />
      </section>
    </div>
  )
}

export default SavedPage
