import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for output: 'export' (GitHub Pages)
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Base path for GitHub Pages project site
  basePath: process.env.NODE_ENV === "production" ? "/NewPathLogistics" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/NewPathLogistics" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? "/NewPathLogistics" : "",
  },
};

export default nextConfig;
