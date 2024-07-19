import LayoutWrapper from '@/components/Layout'
import { FC } from 'react'
import SavedPage from './saved'
import PrivateComponentWrapper from '@/components/routes/private'

const Index: FC = () => {
  return (
    <LayoutWrapper isSavedPage={true}>
      <SavedPage />
    </LayoutWrapper>
  )
}

export default PrivateComponentWrapper(Index)
