import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages project site
  basePath: process.env.NODE_ENV === "production" ? "/NewPathLogistics" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/NewPathLogistics" : "",
};

export default nextConfig;
