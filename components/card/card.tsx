import { FC } from 'react'
import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'

interface ProductCardProps {
  className?: string
  isStore?: boolean
  saved?: boolean
}

const ProductCard: FC<ProductCardProps> = ({ className, isStore, saved }) => {
  return (
    <div
      className={` ${className} lg:w-[370px] w-[100%]  mr-5 mb-5  border-gray-300 border-[1px] rounded-xl`}
    >
      <GlobalImage src='/icons/icon.svg' className='pt-[0.8px]' />
      <div className='flex justify-between  p-5 '>
        <section>
          <p className='font-[500] text-[14px]'>Product 1</p>
          {isStore ? (
            <p className='font-[700] text-[16px] text-[#C1CF16] leading-[20px]'>
              9,000 Rwf
            </p>
          ) : (
            <p className='font-[700] text-[16px] text-[#C1CF16]'>
              9,000 Rwf{' '}
              <span className='text-[#DBDBDB] text-[14px] pl-3 line-through'>
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
              className='border border-gray-300 bg-inherit h-[48px] w-[48px]'
            />
          ) : (
            <>
              <GlobalButton
                htmlType='button'
                icon={<GlobalImage src='/icons/shopping.svg' />}
                className='border border-gray-300 bg-inherit h-[48px] w-[48px]'
              />
              <GlobalButton
                htmlType='button'
                icon={
                  <GlobalImage
                    src={`/icons/${saved ? 'heart-s' : 'favourite'}.svg`}
                  />
                }
                className='border border-gray-300 bg-inherit h-[48px] w-[48px]'
              />
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default ProductCard
