const path = require('path')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  }
}
module.exports = withPlugins(
  /**
   * next-optimized-images
   * https://github.com/cyrilwanner/next-optimized-images#configuration
   */
  [optimizedImages],
  nextConfig
)
