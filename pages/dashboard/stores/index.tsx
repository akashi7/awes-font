import LayoutWrapper from '@/components/Layout'
import { FC } from 'react'
import Stores from './store'
import PrivateComponentWrapper from '@/components/routes/private'

const Index: FC = () => {
  return (
    <LayoutWrapper isStore={true}>
      <Stores />
    </LayoutWrapper>
  )
}

export default PrivateComponentWrapper(Index)
