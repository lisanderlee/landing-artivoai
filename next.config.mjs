/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

// Extend Next.js with next-intl plugin
const withNextIntl = createNextIntlPlugin({
  // Optional: Generate TypeScript declarations for message keys (safe to ignore for JS)
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  }
});

// Your base Next.js configuration
const nextConfig = {
  experimental: {
    appDir: true // Important: enables App Router
  },
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
      }
    ]
  }
};

// Export wrapped config
export default withNextIntl(nextConfig);
