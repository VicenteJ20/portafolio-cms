const { withContentlayer } = require('next-contentlayer')

//** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vicentejorquera.dev',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  }
}

module.exports = withContentlayer(nextConfig)