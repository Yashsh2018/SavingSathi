// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  

  output: 'standalone', 
  images: {
    unoptimized: true, // Netlify 上需要关闭图片优化
  },
}

module.exports = nextConfig