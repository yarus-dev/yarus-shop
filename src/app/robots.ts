import type { MetadataRoute } from 'next'
import { getOriginUrl } from '@/lib/utils'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: getOriginUrl('/sitemap.xml'),
  }
}
