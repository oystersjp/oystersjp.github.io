import Script from 'next/script'

export const gaMeasurementId = 'G-WM91B782B2'

export const GoogleAnalytics = (): JSX.Element => (
  <>
    {
      <>
        <Script
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script
          defer
          id="ga-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());    
              gtag('config', '${gaMeasurementId}');
            `
          }}
          strategy="afterInteractive"
        />
      </>
    }
  </>
)
