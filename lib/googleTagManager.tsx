import Script from 'next/script'

const googleTagManagerId = 'GTM-KH27S7S'

export const GoogleTagManager = (): JSX.Element => (
  <>
    {
      <Script
        id="gtm-init"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${googleTagManagerId}');
          `
        }}
        strategy="afterInteractive"
      />
    }
  </>
)

export const NoScript = (): JSX.Element => (
  <>
    {
      <noscript
        id="ns-init"
        dangerouslySetInnerHTML={{
          __html: `<iframe
            src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          />`
        }}
      />
    }
  </>
)
