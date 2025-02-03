import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry'
  },
  projects: ['dark', 'light'].flatMap((colorScheme) => [
    // PC
    ...[
      { name: 'Desktop Chrome', device: 'Desktop Chrome' },
      { name: 'Desktop Safari', device: 'Desktop Safari' }
    ].flatMap(({ name, device }) =>
      [640, 768, 1024, 1280, 1536].flatMap((width) => ({
        name: `${name}/W${width}px/${colorScheme}`,
        use: { ...devices[device], viewport: { width, height: 1080 } },
        colorScheme
      }))
    ),
    // Mobile
    ...[
      { name: 'Mobile Chrome', device: 'Pixel 7' },
      { name: 'Mobile Safari', device: 'iPhone 13 Mini' }
    ].flatMap(({ name, device }) => [
      {
        name: `${name}/Portrait/${colorScheme}`,
        use: devices[device],
        colorScheme
      },
      {
        name: `${name}/Landscape/${colorScheme}`,
        use: devices[`${device} landscape`],
        colorScheme
      }
    ])
  ]),
  webServer: {
    command: 'npm run build && npm run preview',
    url: 'http://localhost:4321',
    reuseExistingServer: false
  }
})
