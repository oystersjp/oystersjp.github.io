const path = require('path')
const withOptimizedImages = require('next-optimized-images')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: false,
  experimental: {
    images: { allowFutureImage: true }
  },
  images: {
    loader: 'custom',
    // エラー `TypeError: unsupported file type: undefined (file: undefined)` のワークアラウンド
    // https://github.com/cyrilwanner/next-optimized-images/issues/251
    disableStaticImages: true
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      '@': [path.resolve(__dirname, './')]
    }

    return webpackConfig
  }
}

module.exports = withOptimizedImages(nextConfig)
