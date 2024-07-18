import { FC, ReactNode } from 'react'
import Header from './header'
import HomeFooter from '../stores/footer'
import SavedHeader from './savedHeader'
import Footer from './footer'

interface ContentWrapperProps {
  children: ReactNode
  isDetailsPage?: boolean
  isStore?: boolean
  isSavedPage?: boolean
}

const ContentWrapper: FC<ContentWrapperProps> = ({
  children,
  isDetailsPage,
  isStore,
  isSavedPage,
}) => {
  return (
    <section className='h-[100%] overflow-y-auto flex flex-col scroll'>
      <div className='lg:px-10 px-3 '>
        {isSavedPage ? (
          <SavedHeader />
        ) : (
          !isDetailsPage && <Header isStore={isStore} />
        )}
      </div>
      <div className='mt-10  h-[100%] '>
        <div className='lg:px-10 px-3 '>
          {children}
          <HomeFooter />
        </div>
        <div className='mt-10'>
          <Footer />
        </div>
      </div>
    </section>
  )
}

export default ContentWrapper
