import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://oysters.dev',
  integrations: [
    tailwind(),
    sitemap({
      customPages: ['https://oysters.dev/podcast']
    })
  ]
})
