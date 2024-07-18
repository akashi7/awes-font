import LayoutWrapper from '@/components/Layout'
import { FC } from 'react'
import SavedPage from './saved'

const Index: FC = () => {
  return (
    <LayoutWrapper isSavedPage={true}>
      <SavedPage />
    </LayoutWrapper>
  )
}

export default Index
