import { FC } from 'react'
import Products from './product'
import LayoutWrapper from '@/components/Layout'
import PrivateComponentWrapper from '@/components/routes/private'

const Index: FC = () => {
  return (
    <LayoutWrapper>
      <Products />
    </LayoutWrapper>
  )
}

export default PrivateComponentWrapper(Index)
