import type { MetadataRoute } from 'next'
import { getOriginUrl } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getOriginUrl(),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
