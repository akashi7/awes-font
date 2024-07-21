import GlobalButton from '@/components/common/button/globalButton'
import GlobalImage from '@/components/common/image/globalImage'
import ProductList from '@/components/productList/productList'
import StoreContainer from '@/components/stores/container'
import {
  product,
  useGetProductsQuery,
} from '@/lib/api/products/productsEndpoints'
import { useGetStoresQuery } from '@/lib/api/stores/storesEndpoints'
import { FC, useEffect, useState } from 'react'

const Products: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [products, setProducts] = useState<Array<product>>([])
  const [name, setName] = useState<string>('')

  const size = 9
  const { data, refetch, isFetching } = useGetProductsQuery({
    page: currentPage,
    size,
  })

  const { data: storeData, refetch: storeRefetch } = useGetStoresQuery({
    name,
  })

  useEffect(() => {
    refetch()
    storeRefetch()
  }, [refetch, storeRefetch])

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    if (data?.data.products) {
      setProducts((prevProducts) => [...prevProducts, ...data.data.products])
    }
  }, [data])

  return (
    <div>
      <section className='flex justify-between items-center'>
        <div className='flex flex-row items-center gap-3'>
          <GlobalImage src='/icons/delivery-box.svg' />
          <h1 className=' font-[700] text-[16px]'>
            Recent Products ({data?.data.pagination.totalRecords})
          </h1>
        </div>
        <div className='flex flex-row items-center gap-5'>
          <GlobalButton
            htmlType='button'
            icon={<GlobalImage src='/icons/filters.svg' />}
            className='border border-gray-300 rounded-lg bg-inherit h-[48px] w-[48px] header-b-c'
          />
          <GlobalButton
            htmlType='button'
            icon={<GlobalImage src='/icons/arrange.svg' />}
            className='border border-gray-300 rounded-lg bg-inherit h-[48px] w-[48px] header-b-c'
          />
        </div>
      </section>
      <div className='flex lg:flex-row gap-1 mt-10 flex-col'>
        <section className='lg:w-[70%] w-[100%]'>
          <ProductList products={products} />
          <div className='flex justify-center'>
            <GlobalButton
              className=' font-semibold  bg-inherit border border-gray-300 h-[48px] w-[161px] header-b-c h-tex-c'
              icon={<GlobalImage src='/icons/exp-down.svg' />}
              htmlType='button'
              onClick={handleLoadMore}
              loading={isFetching}
            >
              Load More
            </GlobalButton>
          </div>
        </section>
        <section className='lg:w-[30%] w-[100%] mt-5 lg:mt-0'>
          <StoreContainer stores={storeData?.data.stores} setName={setName} />
        </section>
      </div>
    </div>
  )
}

export default Products
