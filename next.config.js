/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Ensure Next infers the correct workspace root when multiple lockfiles exist
  outputFileTracingRoot: path.join(__dirname, '.'),
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'dev.to' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.hashnode.com' },
      { protocol: 'https', hostname: 'media.githubusercontent.com' },
    ],
  },
  webpack: (config) => {
    // Disable persistent webpack file cache to avoid corrupt pack files causing OOM
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
