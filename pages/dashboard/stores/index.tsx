import LayoutWrapper from '@/components/Layout'
import { FC } from 'react'
import Stores from './store'

const Index: FC = () => {
  return (
    <LayoutWrapper isStore={true}>
      <Stores />
    </LayoutWrapper>
  )
}

export default Index
