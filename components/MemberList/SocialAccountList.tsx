import { Member } from '@/types/Member'
import { FC, useMemo, useState } from 'react'

const useSocialAccountLinks = ({ twitter, github, website }: Member) => {
  const [links, setLinks] = useState<
    Array<{
      href: string
      title: string
      icon: string
    }>
  >([])

  useMemo(() => {
    const links = [
      twitter
        ? {
            href: `https://twitter.com/${twitter}`,
            title: 'twitter',
            icon: 'tf-ion-social-twitter'
          }
        : null,
      github
        ? {
            href: `https://github.com/${github}`,
            title: 'Github',
            icon: 'tf-ion-social-github'
          }
        : null,
      website
        ? {
            href: website,
            title: 'ウェブサイト',
            icon: 'tf-ion-ios-world'
          }
        : null
    ].filter((link) => link)

    setLinks(links)
  }, [twitter, github, website])

  return links
}

export const SocialAccountMemberList: FC<{ member: Member }> = ({ member }) => {
  const socialAccountLinks = useSocialAccountLinks(member)

  if (socialAccountLinks.length === 0) {
    return null
  }

  return (
    <ul className="list-inline mt-2 mb-0" role="group">
      {socialAccountLinks.map((link) => (
        <li key={link.href} className="list-inline-item">
          <a
            href={link.href}
            className="btn btn-outline-dark py-0 px-1"
            title={link.title}
            rel="noreferrer noreferrer"
            target="_blank"
          >
            <i className={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialAccountMemberList
