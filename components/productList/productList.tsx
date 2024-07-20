import { product } from '@/lib/api/products/productsEndpoints'
import { FC, Fragment } from 'react'
import ProductCard from '../card/card'

interface ProductListProps {
  products: Array<product> | undefined
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <section className='flex  lg:flex-wrap flex-col lg:flex-row'>
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
