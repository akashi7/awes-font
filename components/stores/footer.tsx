import { FC } from 'react'
import OpenStoreForm from '../Forms/open.store.form'

const HomeFooter: FC = () => {
  return (
    <div className='flex home-footer flex-col lg:flex-row items-center z-50 lg:h-[128px] h-[220px] bg-[#F7F8FB] rounded-[16px] lg:p-[40px] p-[15px] mt-10'>
      <h1
        className='w-[100%] font-bold  lg:text-[24px] text-[16px] text-[#C1CF16]'
        style={{ zIndex: 2000 }}
      >
        Open <span className='text-[#1C2834]'>your Store</span>
      </h1>
      <section
        className='w-[100%] flex lg:justify-end h-[100%] lg:items-center '
        style={{ zIndex: 2000 }}
      >
        <OpenStoreForm />
      </section>
    </div>
  )
}

export default HomeFooter
