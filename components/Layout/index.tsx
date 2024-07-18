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
    <div className=' h-screen w-[100%]  flex flex-col '>
      <NavBar />
      <div
        className={` ${
          isDetailsPage ? 'pt-2' : 'pt-10'
        }  h-maxContainer  w-[100%]`}
      >
        <ContentWrapper
          isDetailsPage={isDetailsPage}
          isStore={isStore}
          isSavedPage={isSavedPage}
        >
          {children}
        </ContentWrapper>
      </div>
    </div>
  )
}

export default LayoutWrapper
