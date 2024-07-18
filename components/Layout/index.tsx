import { FC, ReactNode } from 'react'
import ContentWrapper from './ContentWrapper'
import NavBar from './NavBar'
import Footer from './footer'

interface LayoutWrapperProps {
  children?: ReactNode
  isDetailsPage?: boolean
  isStore?: boolean
  isSavedPage?: boolean
}

const LayoutWrapper: FC<LayoutWrapperProps> = ({
  children,
  isDetailsPage,
  isStore,
  isSavedPage,
}) => {
  return (
    <div className='h-[100vh] w-[100%] relative flex flex-col'>
      <NavBar />
      <div
        className={`px-10  ${
          isDetailsPage ? 'py-2' : 'py-10'
        } h-[100%]  overflow-y-auto scroll  w-[100%]`}
      >
        <ContentWrapper
          isDetailsPage={isDetailsPage}
          isStore={isStore}
          isSavedPage={isSavedPage}
        >
          {children}
        </ContentWrapper>
      </div>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
