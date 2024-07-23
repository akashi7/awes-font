import StoreCard from '@/components/card/storeCard'
import GlobalButton from '@/components/common/button/globalButton'
import GlobalImage from '@/components/common/image/globalImage'

const Stores = () => {
  return (
    <div>
      <section className='mb-5'>
        <StoreCard />
      </section>
      <section className='mb-5'>
        <StoreCard />
      </section>
      <section className='mb-5'>
        <StoreCard />
      </section>
      <div className='flex justify-center '>
        <GlobalButton
          className=' font-semibold  bg-inherit border border-gray-300 h-[48px] w-[161px] h-tex-c  header-b-c'
          icon={<GlobalImage src='/icons/exp-down.svg' />}
        >
          Load More
        </GlobalButton>
      </div>
    </div>
  )
}

export default Stores
