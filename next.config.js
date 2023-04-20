/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'aiimagegeneratorse70b42e.blob.core.windows.net',
        port: '',
      },
    ],
    domains: ["https://aiimagegeneratorse70b42e.blob.core.windows.net", "aiimagegeneratorse70b42e.blob.core.windows.net"]
  },
  async rewrites(){
    return [{
      source: '/api/:path*',
      destination: 'http://127.0.0.1:7071:path*'

    }]
  }
}

module.exports = nextConfig
