/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd', 'rc-util', '@ant-design', 'rc-pagination', 'rc-picker'],
  publicRuntimeConfig: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

module.exports = nextConfig;