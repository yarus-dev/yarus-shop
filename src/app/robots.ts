import { getOriginUrl } from "@/lib/utils";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/robots.txt", "/humans.txt", "/sitemap.xml"],
      disallow: ["/", "/admin"],
    },
    sitemap: getOriginUrl("/sitemap.xml"),
  };
}
