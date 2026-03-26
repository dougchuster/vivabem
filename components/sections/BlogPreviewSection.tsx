"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Sparkles, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getFeaturedPosts } from '@/lib/data/blog-posts'
import { formatDate } from '@/lib/utils'

const editorialImages = [
  '/images/site/blog_meal.png',
  '/images/site/blog_meditation.png',
  '/images/site/blog_tech.png',
]

export function BlogPreviewSection() {
  const posts = getFeaturedPosts()
  const [featuredPost, ...secondaryPosts] = posts

  if (!featuredPost) {
    return null
  }

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-stone-600 text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              Conteúdo para ajudar na decisão
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl">
              Artigos sobre planos de saúde, coberturas, carências e como escolher o melhor para você.
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="rounded-full px-6 py-5 border-2 border-stone-200 hover:border-emerald-600 hover:text-emerald-600">
              Ver todos os artigos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={editorialImages[0]}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-stone-600 mb-4 line-clamp-2">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-stone-500">
                <span>{formatDate(featuredPost.date)}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </span>
              </div>
            </Link>
          </motion.article>

          {/* Secondary Posts */}
          <div className="space-y-6">
            {secondaryPosts.slice(0, 2).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="flex gap-5">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={editorialImages[index + 1]}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 py-1">
                    <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 mt-2 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-stone-600 line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <span className="text-sm text-emerald-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ler artigo <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
