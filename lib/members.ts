import { Member } from '@/types/Member'

export function getMemberByFileNames(fileNames: string[]): Member[] {
  return fileNames.map((name) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const content = require(`@/content/members/${name}`).default
    return content
  })
}

export function getAllMembers(): string[] {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const context = require.context('@/content/members', true, /\.ts$/)
  return context.keys().map((path) => path.replace(/^.*?\/(.*?)\..*$/, '$1'))
}
