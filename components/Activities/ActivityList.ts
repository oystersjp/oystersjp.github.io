import LearningTechSkills from '@/content/activities/LearningTechSkills'
import HoldingTechEvents from '@/content/activities/HoldingTechEvents'
import WritingATechBlog from '@/content/activities/WritingATechBlog'
import StreamingAPodcast from '@/content/activities/StreamingAPodcast'
import Activity from '@/types/Activity'

// note: activityの記事を追加するにはここに要素を追加する
export const activityList: ReadonlyArray<Activity> = [
  LearningTechSkills,
  HoldingTechEvents,
  WritingATechBlog,
  StreamingAPodcast
]
