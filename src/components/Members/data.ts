export const members: Readonly<
  Array<
    Record<'name' | 'image', string> &
      Partial<Record<'twitter' | 'github' | 'website', string | undefined>>
  >
> = [
  {
    name: '02',
    image: '02.jpg',
    twitter: 'cocoeyes02',
    github: 'cocoeyes02',
    website: 'https://cocoeyes02.hatenadiary.jp'
  },
  {
    name: 'akki',
    image: 'akki.jpg'
  },
  {
    name: 'cureseven',
    image: 'cureseven.jpg',
    twitter: 'cureseven',
    github: 'cureseven',
    website: 'http://cureseven.tokyo'
  },
  {
    name: 'hirotaka',
    image: 'hirotaka.png'
  },
  {
    name: 'klack710',
    image: 'klack710.png'
  },
  {
    name: 'msm2',
    image: 'msm2.jpg'
  },
  {
    name: 'okashoi',
    image: 'okashoi.png',
    twitter: 'okashoi',
    github: 'okashoi',
    website: 'https://blog.okashoi.net'
  },
  {
    image: 'pinkumohikan.jpg',
    name: 'pinkumohikan',
    twitter: 'pinkumohikan',
    website: 'https://blog.pinkumohikan.com'
  },
  {
    name: 'shuzon',
    image: 'shuzon.png',
    github: 'shuzoN',
    website: 'https://namu-r21.hatenablog.com'
  },
  {
    name: 'Sorarinu',
    image: 'sorarinu.jpg',
    twitter: 'int_sorarinu',
    github: 'Sorarinu',
    website: 'https://sorarinu.dev'
  },
  {
    name: 'yu',
    image: 'yu.jpg',
    twitter: 'azu369yu',
    github: 'Yu0614'
  },
  {
    name: 'zoe',
    image: 'zoe.jpg',
    twitter: 'for__3',
    github: 'IkezoeMakoto',
    website: 'https://blog.zoe.tools'
  },
  {
    name: 'zundamaru',
    image: 'zundamaru.png'
  }
] as const
