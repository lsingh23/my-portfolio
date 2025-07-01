/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'my-portfolio'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  ...(isProd && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
}

module.exports = nextConfig