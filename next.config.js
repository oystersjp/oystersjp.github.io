const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: false,
  experimental: {
    images: { allowFutureImage: true }
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      '@': [path.resolve(__dirname, './')]
    }

    return webpackConfig
  }
}

module.exports = nextConfig
