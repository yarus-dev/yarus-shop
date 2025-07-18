import type { NextConfig } from "next";

const host = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  metadataBase: new URL(host),
};

export default nextConfig;
