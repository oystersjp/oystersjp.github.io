import Head from 'next/head'

const organizationName = 'Oysters'
const organizationDescription = '若手ものづくり集団 Oysters'
const siteUrl = 'https://oystersjp.github.io'
const ogpImagePath = siteUrl + '/images/ogp.jpg'
const metaList = [
  { name: 'description', content: organizationDescription },
  { name: 'author', content: organizationName },
  { property: 'og:title', content: organizationName },
  { property: 'og:type', content: 'article' },
  { property: 'og:description', content: organizationDescription },
  { property: 'og:url', content: siteUrl },
  { property: 'og:image', content: ogpImagePath },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: organizationName },
  { name: 'twitter:description', content: organizationDescription },
  { name: 'twitter:image:src', content: ogpImagePath },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' }
]

export default function Home(): JSX.Element {
  const title = `${organizationName} | ${organizationDescription}`
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />

        {metaList.map((item) => (
          <meta
            key={item.content}
            name={item.name}
            property={item.property}
            content={item.content}
          />
        ))}
      </Head>
    </>
  )
}
