import { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/custom.css'
import '../styles/themefisher-font/style.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
