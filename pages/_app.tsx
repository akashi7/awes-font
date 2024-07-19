import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/lib/redux/store'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})
