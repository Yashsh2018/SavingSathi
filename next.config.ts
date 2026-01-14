// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Netlify 相关配置
  output: 'standalone', // 或 'export' 对于静态站点
  images: {
    unoptimized: true, // Netlify 上需要关闭图片优化
  },
}

module.exports = nextConfig