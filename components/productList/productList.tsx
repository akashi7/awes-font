import { product } from '@/lib/api/products/productsEndpoints'
import { FC, Fragment } from 'react'
import ProductCard from '../card/card'

interface ProductListProps {
  products: Array<product> | undefined
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <section className='grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  grid-cols-1 '>
      {products?.map((product: product, key: number) => {
        return (
          <Fragment key={key}>
            <ProductCard product={product} />
          </Fragment>
        )
      })}
    </section>
  )
}

export default ProductList
