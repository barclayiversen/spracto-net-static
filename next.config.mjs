/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["storage.googleapis.com"],
  },
};

export default nextConfig;
