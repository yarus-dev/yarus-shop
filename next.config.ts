import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx"],
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
  },
}

export default nextConfig
