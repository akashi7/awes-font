import { FC } from 'react'
import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'
import ProductCard from '../card/card'

const ProductList: FC = () => {
  return (
    <section className='flex  lg:flex-wrap flex-col'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  )
}

export default ProductList
