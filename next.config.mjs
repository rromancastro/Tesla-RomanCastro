/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['digitalassets-shop.tesla.com'],
      remotePatterns: [
        {
          hostname: 'static-assets.tesla.com',
        },
      ],
    },
  }


export default nextConfig;
