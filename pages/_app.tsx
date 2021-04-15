import { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/styles/custom.css'
import '@/styles/themefisher-font/style.css'
import { useRouterScroll } from '@/hooks/useRouterScroll'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  useRouterScroll()
  return <Component {...pageProps} />
}

export default MyApp
