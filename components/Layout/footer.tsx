import GlobalImage from '../common/image/globalImage'

const Footer = () => {
  return (
    <footer className='px-10 py-5 footer bg-[#F4F5F6] flex lg:justify-between  flex-col lg:flex-row gap-10 lg:gap-0 items-center'>
      <div className='flex flex-row items-center gap-[10px]'>
        <GlobalImage src='/icons/mark8.svg' />
        <p className='font-[700] text-[16px] leading-[20.83px]'>Mark8</p>
      </div>
      <div>
        <p className='text-[14px] leading-[18.23px]  font-semibold'>
          &copy; 2024.Mark8{' '}
          <span className='text-[#495D69] leading-[24px] font-[300] pl-3'>
            By Awesomity Ltd
          </span>
        </p>
      </div>
      <div className='flex flex-row items-center gap-[16px]'>
        <GlobalImage src='/icons/twitter.svg' />
        <GlobalImage src='/icons/instagram.svg' />
        <GlobalImage src='/icons/youtube.svg' />
        <GlobalImage src='/icons/linkedin-02.svg' />
      </div>
    </footer>
  )
}

export default Footer
