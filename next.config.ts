import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ Allow builds to succeed even with TS errors
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint during build
  },
};

export default nextConfig;
