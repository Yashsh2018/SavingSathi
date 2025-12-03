// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   distDir: 'build', // changes from '.next' to 'build'
//   output: 'export', // Enable static export for Netlify
//   images: {
//     unoptimized: true, // Disable image optimization for static export
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    distDir: 'build', // Output directory for static export
    output: 'export', // Enable static HTML export
    images: {
        unoptimized: true, // Disable image optimization for static export
    },
    trailingSlash: true, // Add trailing slashes for better static hosting compatibility
    outputFileTracingRoot: path.join(__dirname),
    experimental: {
        
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;