import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.apexorder.xyz/sitemap.xml',
    host: 'https://www.apexorder.xyz',
  }
}
