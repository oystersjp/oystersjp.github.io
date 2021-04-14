import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useRouterScroll = ({
  left = 0,
  top = 0,
  behavior = 'smooth'
}: ScrollToOptions = {}): void => {
  const router = useRouter()
  useEffect(() => {
    const handleHashChangeComplete = () => {
      window.scrollTo({ left, top, behavior })
    }

    router.events.on('hashChangeComplete', handleHashChangeComplete)
    return () => {
      router.events.off('hashChangeComplete', handleHashChangeComplete)
    }
  }, [left, top, behavior])
}
