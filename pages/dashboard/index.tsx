import LayoutWrapper from '@/components/Layout'
import PrivateComponentWrapper from '@/components/routes/private'
import Products from './products/product'

const Dashboard = () => {
  return (
    <LayoutWrapper>
      <Products />
    </LayoutWrapper>
  )
}

export default PrivateComponentWrapper(Dashboard)
