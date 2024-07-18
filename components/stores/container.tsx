import GlobalImage from '../common/image/globalImage'
import StoreSearchForm from '../Forms/store.search.form'
import List from './list'

const StoreContainer = () => {
  return (
    <div className='rounded-xl  border  border-gray-300 '>
      <section className='flex justify-between items-center p-[20px] h-[64px]'>
        <div className='flex flex-row items-center gap-4'>
          <GlobalImage src='/icons/store-0.svg' />
          <p className=' font-semibold text-[16px]'>Top 10 Stores</p>
        </div>
        <GlobalImage src='/icons/export.svg' />
      </section>
      <section className=' search-section  py-5 bg-[#F7F8FB] p-[20px] h-[100px] '>
        <StoreSearchForm />
      </section>
      <section className='p-[20px]'>
        <List />
      </section>
    </div>
  )
}

export default StoreContainer
