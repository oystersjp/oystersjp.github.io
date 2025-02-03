import { test } from '@playwright/test'
test.describe('Capture screenshots', () => {
  const workDir = '.reg'
  const actualDir = `${workDir}/actual`
  const expectedDir = `${workDir}/expected`

  test('Home', async ({ page }, info) => {
    for (const dir of [expectedDir, actualDir]) {
      const isExpectedDir = expectedDir === dir

      await page.goto(isExpectedDir ? 'https://oysters.dev' : '/')

      // loading='lazy'が指定されている画像を読み込む
      await page.evaluate(async () => {
        const browserHeight = window.innerHeight
        const pageHeight = document.body.scrollHeight

        for (let i = 0; i < pageHeight; i += browserHeight) {
          window.scrollTo(0, i)
          await new Promise((r) => window.setTimeout(r, 100))
        }
      })

      await page.screenshot({
        path: `${dir}/${info.title}/${info.project.name}.png`,
        fullPage: true,
        animations: 'disabled'
      })
    }
  })
})
