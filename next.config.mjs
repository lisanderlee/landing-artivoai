/** @type {import('next').NextConfig} */

// Your base Next.js configuration
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', // leave this blank unless a port is specified in image URLs
      },
      {
        protocol: 'https',
        hostname: 'teyvwpcti8fmipca.public.blob.vercel-storage.com',
        port: '', // leave this blank unless a port is specified in image URLs
      },
    ],
  },
}

// Export wrapped configp
export default nextConfig
