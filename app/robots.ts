import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://apex-org.vercel.app/sitemap.xml',
    host: 'https://apex-org.vercel.app',
  }
}
