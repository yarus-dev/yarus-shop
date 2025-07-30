import { getOriginUrl } from "@/lib/utils"
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/robots.txt", "/humans.txt", "/sitemap.xml"],
      disallow: ["/"],
    },
    sitemap: getOriginUrl("/sitemap.xml"),
    host: getOriginUrl(),
  }
}
