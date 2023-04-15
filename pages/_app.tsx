import { AppProps } from 'next/app'
import { GoogleAnalytics } from '@/lib/googleAnalytics'
import { GoogleTagManager } from '@/lib/googleTagManager'
import '@/styles/globals.css'
import '@/styles/custom.css'
import '@/styles/themefisher-font/style.css'
import { useRouterScroll } from '@/hooks/useRouterScroll'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  useRouterScroll()
  return (
    <>
      <GoogleTagManager></GoogleTagManager>
      <GoogleAnalytics></GoogleAnalytics>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
