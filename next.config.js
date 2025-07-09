/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: 'export',
  // Add trailing slashes for better compatibility with Netlify
  trailingSlash: true,
  
  // Disable type checking during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image optimization configuration
  images: {
    // Required for static export
    unoptimized: true,
    // Allow SVG images
    dangerouslyAllowSVG: true,
    // Allowed image domains
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'github.com',
      'avatars.githubusercontent.com',
      'media.licdn.com',
      'media.istockphoto.com',
      'i.ibb.co',
      'i.imgur.com',
      'img.freepik.com',
      'www.w3.org',
      'raw.githubusercontent.com',
      'camo.githubusercontent.com',
    ],
  },
  
  // Webpack configuration for handling SVGs
  webpack(config) {
    // Get the file loader rule
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    // Add SVGR loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // Exclude SVGs from the default file loader
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i
    }

    return config
  },
  
  // Generate a static build ID
  generateBuildId: async () => {
    return 'netlify-static-build';
  },
  
  // Define the path map for static export
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      // Add other static paths here if needed
    };
  },
}

module.exports = nextConfig
