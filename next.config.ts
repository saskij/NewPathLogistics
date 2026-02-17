import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  // Base path for GitHub Pages project site
  basePath: process.env.NODE_ENV === "production" ? "/NewPathLogistics" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/NewPathLogistics" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? "/NewPathLogistics" : "",
  },
};

export default nextConfig;
