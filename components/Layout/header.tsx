import { FC } from 'react'
import GlobalButton from '../common/button/globalButton'
import HeaderForm from '../Forms/header.search.form'

interface HeaderProps {
  isStore?: boolean
}

const Header: FC<HeaderProps> = ({ isStore }) => {
  return (
    <div
      className={`h-[300px] w-[100%]   ${
        isStore ? 'bg-[#F7F8FB] store-container ' : 'bg-[#1C2834]'
      } rounded-[16px] flex lg:justify-center  justify-start lg:p-[40px] p-[10px]`}
    >
      <section
        className={`lg:w-[60%] w-[100%]  z-[2000] ${
          isStore ? '  z-[2000]' : ''
        }`}
      >
        {isStore ? (
          <h1 className=' font-bold lg:text-[24px] text-[14px] leading-[31.25px] text-[#C1CF16] text-center'>
            Mark8 <span className=' text-black'>Stores</span>
          </h1>
        ) : (
          <h1 className=' font-bold lg:text-[24px] text-[14px]  leading-[31.25px] text-white text-center'>
            Welcome to <span className='text-[#C1CF16]'>Mark8</span>
          </h1>
        )}
        <p className='text-[#495D69] text-center mt-6 leading-[24px] font-[300] text-[14px]'>
          {isStore ? '54 Stores' : '12,932 Products'}
        </p>
        <div className='mt-6 w-[100%]'>
          <HeaderForm isStore={isStore} />
        </div>
        <div className='flex justify-center mt-10 w-[100%]'>
          <section
            className='lg:flex flex-row gap-[8px] items-center hidden'
            style={{ zIndex: 1000 }}
          >
            <GlobalButton
              htmlType='button'
              className={`bg-[#1C2834] bg-inherit  ${
                isStore
                  ? 'header-s-custom-button text-[#495D69]'
                  : 'header-custom-button text-[#79878F]'
              } rounded-[40px] w-[53px] h-[27px] px-[20px] py-[10px] border-[#79878F] text-[10px] font-[500] `}
            >
              All
            </GlobalButton>
            <GlobalButton
              htmlType='button'
              className={`bg-[#1C2834] bg-inherit ${
                isStore
                  ? 'header-s-custom-button text-[#495D69]'
                  : 'header-custom-button text-[#79878F]'
              } rounded-[40px] w-[77px] h-[27px] px-[20px] py-[10px] border-[#79878F] text-[10px] font-[500]`}
            >
              Vectors
            </GlobalButton>
            <GlobalButton
              htmlType='button'
              className={`bg-[#1C2834] bg-inherit ${
                isStore
                  ? 'header-s-custom-button text-[#495D69]'
                  : 'header-custom-button text-[#79878F]'
              }  rounded-[40px] w-[66px] h-[27px] px-[20px] py-[10px] border-[#79878F] text-[10px] font-[500]`}
            >
              Icons
            </GlobalButton>
            <GlobalButton
              htmlType='button'
              className={`bg-[#1C2834] bg-inherit ${
                isStore
                  ? 'header-s-custom-button text-[#495D69]'
                  : 'header-custom-button text-[#79878F]'
              }  rounded-[40px] w-[102px]  h-[27px] px-[20px] py-[10px] border-[#79878F] text-[10px] font-[500] `}
            >
              Backgrounds
            </GlobalButton>
          </section>
        </div>
        <section className='lg:hidden flex  flex-row gap-2 '>
          <div className=' flex flex-row items-center gap-2'>
            <GlobalButton
              htmlType='button'
              className={`bg-[#1C2834] bg-inherit  ${
                isStore
                  ? 'header-s-custom-button text-[#495D69]'
                  : 'header-custom-button text-[#79878F]'
              } rounded-[40px] w-[53px] h-[27px] px-[20px] py-[10px] border-[#79878F] text-[10px] font-[500]  `}
            >
              All
            </GlobalButton>
            <GlobalButton
              htmlType='button'
              className={`bg-[#1C2834] bg-inherit ${
                isStore
                  ? 'header-s-custom-button text-[#495D69]'
                  : 'header-custom-button text-[#79878F]'
              }  rounded-[40px] w-[66px] h-[27px] px-[20px] py-[10px] border-[#79878F] text-[10px] font-[500]`}
            >
              Icons
            </GlobalButton>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <GlobalButton
              htmlType='button'
              className={`bg-[#1C2834] bg-inherit ${
                isStore
                  ? 'header-s-custom-button text-[#495D69]'
                  : 'header-custom-button text-[#79878F]'
              } rounded-[40px] w-[77px] h-[27px] px-[20px] py-[10px] border-[#79878F] text-[10px] font-[500]`}
            >
              Vectors
            </GlobalButton>
            <GlobalButton
              htmlType='button'
              className={`bg-[#1C2834] bg-inherit ${
                isStore
                  ? 'header-s-custom-button text-[#495D69]'
                  : 'header-custom-button text-[#79878F]'
              }  rounded-[40px] w-[102px]  h-[27px] px-[20px] py-[10px] border-[#79878F] text-[10px] font-[500] `}
            >
              Backgrounds
            </GlobalButton>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Header
