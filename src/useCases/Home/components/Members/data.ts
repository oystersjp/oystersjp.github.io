export const members: Readonly<
  Array<
    Record<'name' | 'image', string> &
      Partial<Record<'x' | 'github' | 'website', string | undefined>>
  >
> = [
  {
    name: 'O2',
    image: '02.jpg',
    x: 'cocoeyes02',
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
    x: 'cureseven',
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
    x: 'okashoi',
    github: 'okashoi',
    website: 'https://blog.okashoi.net'
  },
  {
    image: 'pinkumohikan.jpg',
    name: 'pinkumohikan',
    x: 'pinkumohikan',
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
    x: 'int_sorarinu',
    github: 'Sorarinu',
    website: 'https://sorarinu.dev'
  },
  {
    name: 'yu',
    image: 'yu.jpg',
    x: 'azu369yu',
    github: 'Yu0614'
  },
  {
    name: 'zoe',
    image: 'zoe.jpg',
    x: 'for__3',
    github: 'IkezoeMakoto',
    website: 'https://blog.zoe.tools'
  },
  {
    name: 'zundamaru',
    image: 'zundamaru.png'
  }
] as const
