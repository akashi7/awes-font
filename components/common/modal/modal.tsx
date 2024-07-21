import Modal from 'antd/lib/modal'
import { FC, ReactNode } from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import GlobalButton from '../button/globalButton'
import GlobalImage from '../image/globalImage'
import { useWindowSize } from '@/helpers/interfaceSize'

interface CustomModalProps {
  isVisible: boolean
  setIsVisible: (visible: boolean) => void
  footerWidth?: number
  footerContent?: ReactNode
  handleCancel?: () => void
  destroyOnClose?: boolean
  width?: number
  children?: ReactNode
}

const CustomModal: FC<CustomModalProps> = ({
  isVisible,
  setIsVisible,
  footerContent,
  handleCancel,
  destroyOnClose,
  width = 500,
  children,
}) => {
  const onCancel = () => {
    setIsVisible(false)
  }

  const { width: windowL } = useWindowSize()
  const isScreenSmall = windowL <= 1024

  return (
    <Modal
      title={
        <div className='lg:p-10  p-5'>
          <div
            className={`flex  lg:justify-between flex-row gap-3 lg:gap-0 items-center`}
          >
            <section className='flex flex-row gap-3 items-center'>
              <GlobalImage
                src='/icons/close.svg'
                onClick={onCancel}
                width={isScreenSmall ? 18 : 30}
                className='cursor-pointer'
              />
              <div>
                <p className=' font-semibold lg:text-[16px] text-[12px] text-[#1C2834] lg:block hidden'>
                  My cart (2)
                </p>
              </div>
            </section>
            <section className=' flex flex-row gap-3'>
              <GlobalButton
                icon={<CiHeart className='text-[#C1CF16]' />}
                className='bg-white  rounded-[8px] border-[1.5px] border-[#DBDBDB] h-[48px] lg:w-[219px] w-[150px] font-bold lg:text-[14px] text-[12px]'
              >
                Save Cart for Later
              </GlobalButton>
              <GlobalButton
                icon={<GlobalImage src='/icons/delete.svg' />}
                className='rounded-[8px] border-[1.5px] border-[#DBDBDB] h-[48px] w-[48px] bg-white'
              />
            </section>
          </div>
          <section className='flex flex-row items-center gap-2 bg-[#f7f8fb]  py-5 mt-5 px-2'>
            <IoIosInformationCircleOutline />
            <p className='font-[500] lg:text-[14px] text-[#495D69]  text-[11px]'>
              By proceeding you won’t be charged yet
            </p>
          </section>
        </div>
      }
      width={isScreenSmall ? '90%' : width}
      footer={footerContent ? <div>{footerContent}</div> : false}
      open={isVisible}
      onCancel={handleCancel || onCancel}
      centered
      zIndex={8000}
      closable={false}
      height={800}
      styles={{ body: { overflowY: 'auto' } }}
      destroyOnClose={destroyOnClose}
    >
      {children}
    </Modal>
  )
}

export default CustomModal
