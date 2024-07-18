import ProductCard from '@/components/card/card'
import GlobalButton from '@/components/common/button/globalButton'
import GlobalImage from '@/components/common/image/globalImage'
import GlobalInput from '@/components/common/input/globalInput'
import LayoutWrapper from '@/components/Layout'
import { FC } from 'react'

const SingleProduct: FC = () => {
  return (
    <LayoutWrapper isDetailsPage={true}>
      <div>
        <section className='flex flex-row items-center gap-5'>
          <GlobalImage src='/icons/arrow-left.svg' />
          <p className='font-[500] text-[14px]'>
            Home <span className=' pl-2'>/</span>
          </p>
          <p className='font-[500] text-[14px]'>
            Products <span className=' pl-2'>/</span>
          </p>
          <p className='font-[500] text-[14px]'>
            Vectors <span className=' pl-2'>/</span>
          </p>
          <p className='font-[300] text-[#495D69] text-[14px]'>Product 1</p>
        </section>
        <div className='flex lg:flex-row items-center gap-5 mt-5 flex-col'>
          <section className='lg:h-[674px] lg:w-[682px] w-[90%] '>
            <div className=' border-gray-300 border-[1px] rounded-xl '>
              <GlobalImage
                src='/icons/icon5.svg'
                className='pt-[0.8px] w-[100%]'
              />
              <div className='flex flex-row items-center gap-3  p-5 '>
                <GlobalImage
                  src='/icons/icon1sm.svg'
                  className='border-[4px] border-[#C1CF16] rounded-lg'
                />
                <GlobalImage src='/icons/icon1sm.svg' />
                <GlobalImage src='/icons/icon1sm.svg' />
                <GlobalImage src='/icons/icon1sm.svg' />
                <GlobalImage src='/icons/icon1sm.svg' />
              </div>
            </div>
          </section>
          <section className='h-[674px]  border-gray-300 border-[1px] rounded-xl relative w-[90%]  lg:max-w-custom'>
            <div>
              <section className='flex lg:justify-between  lg:items-center flex-col lg:flex-row lg:p-[40px] p-5 h-[88px]'>
                <div className='flex flex-row items-center gap-5'>
                  <h1 className=' font-semibold lg:text-[16px] text-[12px] leading-[20px]'>
                    Product Details
                  </h1>
                  <div className='bg-[#F4F5F6] lg:p-[10px] p-[5px] '>
                    IN STOCK
                  </div>
                </div>
                <div className='flex flex-row items-center gap-5'>
                  <GlobalButton
                    htmlType='button'
                    icon={<GlobalImage src='/icons/favourites.svg' />}
                    className=' font-semibold bg-inherit  lg:text-[14px] text-[10px] text-[#141C24] lg:h-[48px] h-[28px]  lg:w-[121px] w-[50%] rounded-lg'
                  >
                    Save
                  </GlobalButton>
                  <GlobalImage src='/icons/more.svg' />
                </div>
              </section>
              <div className='border-t-[1px] border-gray-300 ' />
            </div>
            <div>
              <section className='p-[40px]'>
                <p className='font-bold  text-[24px]'>Product 5</p>
                <p className='font-[700] text-[16px] text-[#C1CF16]'>
                  9,000 Rwf{' '}
                  <span className='text-[#DBDBDB] text-[14px] pl-3 line-through'>
                    12,000 Rwf
                  </span>
                </p>
                <h2 className=' font-semibold  text-[16px]  leading-[20px] mt-10'>
                  Description
                </h2>
                <p className='font-[300] text-[14px] text-[#495D69] leading-[24px] mt-5'>
                  A cozy boutique offering a curated selection of unique,
                  high-quality clothing and accessories for fashion-forward
                  individuals.
                </p>
                <h3 className=' font-semibold  text-[16px]  leading-[20px] mt-10'>
                  Reviews
                </h3>
                <section className=' flex flex-row items-center gap-3 mt-5'>
                  <div className='flex flex-row items-center gap-2'>
                    <GlobalImage src='/icons/star.svg' />
                    <p className=' font-semibold  text-[16px]  leading-[20px] text-[#495D69]'>
                      4.9
                    </p>
                  </div>
                  <p className='font-[300] text-[14px] leading-[24px] text-[#495D69]'>
                    (14 Reviews)
                  </p>
                </section>
                <section className='flex flex-row items-center gap-3 mt-5'>
                  <GlobalButton className=' bg-inherit h-[48px] w-[48px]'>
                    -
                  </GlobalButton>
                  <GlobalInput
                    inputType='number'
                    styles='w-[120px] bg-[#0C0C0D0A] mt-4'
                  />
                  <GlobalButton className=' bg-inherit  h-[48px] w-[48px] '>
                    +
                  </GlobalButton>
                  <GlobalButton
                    className='h-[48px] w-[168px]  font-bold text-[14px] text-[#1C2834] rounded-lg border-none login-button'
                    icon={<GlobalImage src='/icons/cart-sh.svg' />}
                  >
                    Add to Cart
                  </GlobalButton>
                </section>
              </section>
            </div>
            <div className=' items-center  border-t-[1px] border-gray-300   absolute bottom-0 w-[100%]'>
              <section className='flex justify-between items-center  p-[40px] h-[88px]'>
                <div className='flex flex-row items-center gap-5'>
                  <h1 className=' font-semibold text-[16px] leading-[20px]'>
                    Store info:
                  </h1>
                  <div className='flex flex-row items-center gap-2 '>
                    <GlobalImage src='/icons/icon6.svg' />
                    <p className='font-[500] text-[14px]  leading-[18px]'>
                      Awesome Shop 1
                    </p>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-5'>
                  <GlobalButton
                    htmlType='button'
                    icon={<GlobalImage src='/icons/call.svg' />}
                    iconPlacement='left'
                    className=' font-semibold bg-inherit  text-[14px] text-[#141C24] h-[48px] w-[186px] rounded-lg'
                  >
                    Contact store
                  </GlobalButton>
                </div>
              </section>
            </div>
          </section>
        </div>
        <div className='mt-10'>
          <h2 className=' font-bold text-[24px]  leading-[30px]'>
            You might also like
          </h2>
          <section className='flex lg:flex-row flex-col items-center gap-[20px] mt-5 '>
            <ProductCard className='lg:w-[377px] w-[90%] ' />
            <ProductCard className='lg:w-[377px] w-[90%] ' />
            <ProductCard className='lg:w-[377px] w-[90%] ' />
            <ProductCard className='lg:w-[377px] w-[90%] ' />
          </section>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default SingleProduct
