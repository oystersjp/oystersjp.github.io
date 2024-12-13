import { test } from '@playwright/test'
test.describe('Capture screenshots', () => {
  const workDir = '.reg'
  const actualDir = `${workDir}/actual`
  const expectedDir = `${workDir}/expected`

  test('Home', async ({ page }, info) => {
    for (const dir of [expectedDir, actualDir]) {
      const isExpectedDir = expectedDir === dir

      await page.goto(isExpectedDir ? 'https://oysters.dev' : '/')
      await page.screenshot({
        path: `${dir}/${info.title}/${info.project.name}.png`,
        fullPage: true,
        animations: 'disabled'
      })
    }
  })
})
