import { FC, ReactNode } from 'react'
import Header from './header'
import HomeFooter from '../stores/footer'
import SavedHeader from './savedHeader'

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
      {isSavedPage ? (
        <SavedHeader />
      ) : (
        !isDetailsPage && <Header isStore={isStore} />
      )}
      <div className='mt-10  h-[100%] '>
        {children}
        <HomeFooter />
      </div>
    </section>
  )
}

export default ContentWrapper
