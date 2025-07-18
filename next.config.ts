import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a minimal server output suitable for Cloud Run
  output: "standalone",
};

export default nextConfig;
