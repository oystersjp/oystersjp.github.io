import { getAllMembers, getMemberByFileNames } from '@/lib/members'

import Head from 'next/head'
import MemberList from '@/components/MemberList'
import { GetStaticProps } from 'next'

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

export default function Home({ members }: { members: string[] }): JSX.Element {
  const memberList = getMemberByFileNames(members)
  const title = `${organizationName} | ${organizationDescription}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        {metaList.map((item) => (
          <meta
            key={item.content}
            name={item.name}
            property={item.property}
            content={item.content}
          />
        ))}
      </Head>
      <MemberList memberList={memberList} />
    </>
  )
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  return { props: { members: getAllMembers() } }
}
