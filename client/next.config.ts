import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  // reactStrictMode: false,
};

export default nextConfig;
