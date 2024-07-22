import { useWindowSize } from '@/helpers/interfaceSize'
import { product } from '@/lib/api/products/productsEndpoints'
import { useRouter } from 'next/router'
import { FC } from 'react'
import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'

interface ProductCardProps {
  className?: string
  isStore?: boolean
  saved?: boolean
  key?: string
  product?: product
}

const ProductCard: FC<ProductCardProps> = ({
  className,
  isStore,
  saved,
  key,
  product,
}) => {
  const router = useRouter()

  const navigate = (id?: string) => {
    router.push(`/dashboard/products/${id}`)
  }

  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <div
      className={` ${className} lg:w-[370px] w-[100%]  mr-5 mb-5   border-gray-300 border-[1px] rounded-xl hover:cursor-pointer`}
      key={key}
      onClick={() => navigate(product?.id)}
    >
      <GlobalImage
        src={product?.thumbnail[0] || '/icons/icon.svg'}
        className='w-full h-full object-cover'
        width={isMobile ? '100%' : 370}
        height={isMobile ? 300 : 256}
      />
      <div className='flex justify-between  p-5 '>
        <section>
          <p className='font-[500] lg:text-[14px] text-[12px]'>
            {product?.name || 'Product 1'}
          </p>
          {isStore ? (
            <p className='font-[700] lg:text-[16px] text-[13px] text-[#C1CF16] leading-[20px]'>
              {product?.unitPrice || '9,000'} <span>Rwf</span>
            </p>
          ) : (
            <p className='font-[700] lg:text-[16px] text-[13px] text-[#C1CF16]'>
              {product?.unitPrice || '9,000'} Rwf
              <span className='text-[#DBDBDB] lg:text-[14px] text-[12px] pl-3 line-through'>
                12,000 Rwf
              </span>
            </p>
          )}
        </section>
        <section className='flex flex-row gap-5 items-center'>
          {isStore ? (
            <GlobalButton
              htmlType='button'
              icon={<GlobalImage src='/icons/favourite.svg' />}
              className='border border-gray-300 bg-inherit h-[48px] w-[48px] header-b-c'
            />
          ) : (
            <>
              <GlobalButton
                htmlType='button'
                icon={<GlobalImage src='/icons/shopping.svg' />}
                className='border border-gray-300 bg-inherit h-[48px] w-[48px] header-b-c'
              />
              <GlobalButton
                htmlType='button'
                icon={
                  <GlobalImage
                    src={`/icons/${saved ? 'heart-s' : 'favourite'}.svg`}
                  />
                }
                className='border border-gray-300 bg-inherit h-[48px] w-[48px] header-b-c'
              />
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default ProductCard
