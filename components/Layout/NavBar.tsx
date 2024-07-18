import Drawer from 'antd/lib/drawer'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import CartItem from '../cart/cart'
import GlobalButton from '../common/button/globalButton'
import GlobalImage from '../common/image/globalImage'
import CustomModal from '../common/modal/modal'
import { useWindowSize } from '@/helpers/interfaceSize'

export default function NavBar() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false)

  const navigate = (route: string) => {
    router.push(route)
  }

  const isActive = (route: string) => {
    return router.pathname === route
  }

  const handleCancel = () => {
    setIsVisible(false)
  }

  const toggleDrawer = () => {
    setDrawerVisible((prev) => !prev)
  }

  return (
    <>
      <CustomModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        width={1000}
        handleCancel={handleCancel}
        footerContent={
          <>
            <div className='border-t-[1px] border-gray-300 ' />
            <div className='flex lg:justify-between flex-col lg:flex-row lg:items-center w-[100%] p-10 '>
              <div className='text-left'>
                <p className='font-[300] text-[14px]  text-[#1C2834] '>
                  Total:
                </p>
                <p className='font-bold lg:text-[24px] text-[16px]'>
                  36,000 Rwf
                </p>
              </div>
              <GlobalButton
                icon={<GlobalImage src='/icons/dollar.svg' />}
                className='rounded-[8px] h-[48px] lg:w-[156px] w-[140px] text-[#1C2834] font-bold text-[14px]'
              >
                Checkout
              </GlobalButton>
            </div>
          </>
        }
      >
        <div className='lg:p-10 p-5'>
          {[...Array(6)].map((_, index) => (
            <section key={index} className='mb-5'>
              <CartItem />
            </section>
          ))}
        </div>
      </CustomModal>

      <Drawer
        placement='left'
        onClose={toggleDrawer}
        closeIcon={false}
        open={drawerVisible}
        zIndex={9000}
        title={
          <section className='flex justify-between items-center'>
            <div className='flex flex-row items-center gap-[10px]'>
              <GlobalImage src='/icons/mark8.svg' width={40} />
              <div>
                <p className='font-[700] text-[#0C0D0D] leading-[20.83px] text-[16px]'>
                  Mark8
                </p>
                <p className='font-[300] text-[12px] leading-[24px] text-[#495D69]'>
                  By Awesomity Lab
                </p>
              </div>
            </div>
            <GlobalImage
              src='/icons/close.svg'
              onClick={toggleDrawer}
              width={30}
              className='cursor-pointer'
            />
          </section>
        }
      >
        <section className='flex flex-col gap-[25px]'>
          <NavItem
            route='/dashboard'
            isActive={isActive}
            navigate={navigate}
            iconActive='home-h'
            iconInactive='homes'
            label='Home'
          />
          <NavItem
            route='/dashboard/stores'
            isActive={isActive}
            navigate={navigate}
            iconActive='store-h'
            iconInactive='store'
            label='Stores'
          />
          <div
            className='flex flex-row items-center gap-2 cursor-pointer'
            onClick={() => {
              setIsVisible(true)
              toggleDrawer()
            }}
          >
            <GlobalImage src='/icons/cart-02.svg' width={28} />
            <p className='text-[#495D69] leading-[15.62px] text-[16px] font-[400]'>
              My Cart
            </p>
            <p className='w-1 h-1 bg-red-500 rounded-full'></p>
          </div>
          <NavItem
            route='/dashboard/saved'
            isActive={isActive}
            navigate={navigate}
            iconActive='heart-s'
            iconInactive='heart'
            label='Saved'
          />
          <GlobalButton
            htmlType='button'
            className='font-bold text-[14px] leading-[18.23px] h-[48px] w-[180px] rounded-lg text-[#141C24] bg-white'
            iconPlacement='right'
            icon={<GlobalImage src='/icons/store-02.svg' />}
          >
            Open a Store
          </GlobalButton>
        </section>
      </Drawer>

      <nav className='flex justify-between items-center px-10 py-5 border-b-[1px] border-[#DBDBDB] h-[68px]'>
        <CiMenuBurger
          className='text-[#C1CF16] block lg:hidden cursor-pointer'
          size={25}
          onClick={toggleDrawer}
        />
        <section className='lg:flex flex-row items-center gap-[60px] hidden'>
          <div className='flex flex-row items-center gap-[10px]'>
            <GlobalImage src='/icons/mark8.svg' width={40} height={40} />
            <div>
              <p className='font-[700] text-[#0C0D0D] leading-[20.83px] text-[16px]'>
                Mark8
              </p>
              <p className='font-[300] text-[12px] leading-[24px] text-[#495D69]'>
                By Awesomity Lab
              </p>
            </div>
          </div>
          <NavItem
            route='/dashboard'
            isActive={isActive}
            navigate={navigate}
            iconActive='home-h'
            iconInactive='homes'
            label='Home'
          />
          <NavItem
            route='/dashboard/stores'
            isActive={isActive}
            navigate={navigate}
            iconActive='store-h'
            iconInactive='store'
            label='Stores'
          />
        </section>
        <section className='lg:flex flex-row items-center gap-[40px] hidden'>
          <GlobalImage src='/icons/search-01.svg' />
          <div
            className='flex flex-row items-center gap-2 cursor-pointer'
            onClick={() => setIsVisible(true)}
          >
            <GlobalImage src='/icons/cart-02.svg' />
            <p className='text-[#495D69] leading-[15.62px] text-[12px] font-[400]'>
              My Cart
            </p>
            <p className='w-1 h-1 bg-red-500 rounded-full'></p>
          </div>
          <NavItem
            route='/dashboard/saved'
            isActive={isActive}
            navigate={navigate}
            iconActive='heart-s'
            iconInactive='heart'
            label='Saved'
          />
          <GlobalButton
            htmlType='button'
            className='font-bold text-[14px] leading-[18.23px] h-[48px] w-[180px] rounded-lg text-[#141C24] bg-white'
            iconPlacement='right'
            icon={<GlobalImage src='/icons/store-02.svg' />}
          >
            Open a Store
          </GlobalButton>
        </section>
      </nav>
    </>
  )
}

interface NavItemProps {
  route: string
  isActive: (route: string) => boolean
  navigate: (route: string) => void
  iconActive: string | JSX.Element
  iconInactive: string
  label: string
}

const NavItem = ({
  route,
  isActive,
  navigate,
  iconActive,
  iconInactive,
  label,
}: NavItemProps) => {
  const { width } = useWindowSize()
  const isScreenSmall = width <= 1024

  return (
    <div
      className='flex flex-row items-center gap-2 cursor-pointer'
      onClick={() => navigate(route)}
    >
      <GlobalImage
        src={`/icons/${isActive(route) ? iconActive : iconInactive}.svg`}
        width={isScreenSmall ? 28 : 16}
      />
      <p className='text-[#495D69] leading-[15.62px] text-[16px] lg:text-[12px] font-[400]'>
        {label}
      </p>
    </div>
  )
}
