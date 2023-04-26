/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://oysters.dev/',
  changefreq: 'monthly',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  additionalPaths: async (config) => {
    const result = []
    result.push(
      {
        loc: '/podcast',
        changefreq: 'monthly',
        lastmod: new Date().toISOString(),
        priority: 0.7
      },
      {
        loc: '/podcast/episode/:page',
        changefreq: 'monthly',
        lastmod: new Date().toISOString(),
        priority: 0.7
      }
    )

    return result
  }
}
