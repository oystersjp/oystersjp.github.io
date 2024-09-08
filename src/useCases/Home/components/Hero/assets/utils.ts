export const debounce = (callback: () => void, delaySec: number) => {
  type Timer = ReturnType<Window['setTimeout']> | null
  let timer: Timer = null

  const clear = (timer: Timer) => {
    if (timer) clearTimeout(timer)
    timer = null
  }

  return () => {
    clear(timer)
    timer = window.setTimeout(() => {
      callback()
      clear(timer)
    }, delaySec)
  }
}
