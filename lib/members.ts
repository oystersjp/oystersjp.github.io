import { importAll } from '@/lib/importAll'
import { Member } from '@/types/Member'

export function getAllMembers(): Promise<Member[]> {
  // refs: https://webpack.js.org/guides/dependency-management/#context-module-api
  const context = require.context('@/content/members', false, /^\.\/.*?.ts$/)
  return importAll<Member>(context)
}
