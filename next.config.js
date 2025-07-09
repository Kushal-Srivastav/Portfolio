/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'github.com',
      'avatars.githubusercontent.com',
      'media.licdn.com',
      'lh3.googleusercontent.com',
      'platform-lookaside.fbsbx.com',
      'scontent.fdel1-4.fna.fbcdn.net',
      'scontent.fdel1-3.fna.fbcdn.net',
      'scontent.fdel1-2.fna.fbcdn.net',
      'scontent.fdel1-1.fna.fbcdn.net',
      'scontent.fccu2-4.fna.fbcdn.net',
      'scontent.fccu2-3.fna.fbcdn.net',
      'scontent.fccu2-2.fna.fbcdn.net',
      'scontent.fccu2-1.fna.fbcdn.net',
      'platform-lookaside.fbsbx.com',
      'res.cloudinary.com',
      'cdn.sanity.io',
      'vercel.com',
      'vercel.app',
      '*.vercel.app',
      '*.vercel.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
