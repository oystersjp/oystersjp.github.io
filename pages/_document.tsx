import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleTagManagerInBody } from '@/lib/googleTagManager'

const DocumentComponent = (): JSX.Element => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <GoogleTagManagerInBody></GoogleTagManagerInBody>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default DocumentComponent
