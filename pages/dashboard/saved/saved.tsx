import ProductCard from '@/components/card/card'
import { useGetProductsQuery } from '@/lib/api/products/productsEndpoints'
import { FC, Fragment, useEffect, useState } from 'react'

const SavedPage: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const size = 9

  const { data, refetch, isFetching } = useGetProductsQuery({
    page: currentPage,
    size,
  })

  useEffect(() => {
    refetch()
  }, [refetch])

  return (
    <div className='w-[100%] flex justify-center'>
      <section className='w-[100%] grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  grid-cols-1  '>
        {data?.data.products?.map((product, key: number) => {
          return (
            <Fragment key={key}>
              <ProductCard
                product={product}
                className='lg:w-[377px]  mr-0 lg:mr-5'
                saved={true}
              />
            </Fragment>
          )
        })}
      </section>
    </div>
  )
}

export default SavedPage
