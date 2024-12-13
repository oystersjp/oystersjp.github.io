import { test } from '@playwright/test'
test.describe('Capture screenshots', () => {
  const workDir = '.reg'
  const saveDir = `${workDir}/screenshots`

  test('Home', async ({ page }, info) => {
    await page.goto('/')
    await page.screenshot({
      path: `${saveDir}/${info.title}/${info.project.name}.png`,
      fullPage: true,
      animations: 'disabled'
    })
  })
})
