import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/agenticaifirst",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
