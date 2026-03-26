import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/data/blog-posts'
import { siteConfig } from '@/lib/site-config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/blog', '/planos', '/simulacao', '/sobre', '/privacidade', '/termos']

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  })) satisfies MetadataRoute.Sitemap

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: post.featured ? 0.8 : 0.6,
  })) satisfies MetadataRoute.Sitemap

  return [...staticEntries, ...blogEntries]
}
