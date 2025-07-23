import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: false, // ❌ Fail build if ESLint has errors
  },
};

export default nextConfig;
