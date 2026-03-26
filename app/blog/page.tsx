import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/common/FloatingCTA'
import { SmoothScrollProvider } from '@/components/common/SmoothScrollProvider'
import { Button } from '@/components/ui/button'
import { blogPosts, getAllCategories } from '@/lib/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guias e artigos da VivaBem para ajudar voce a entender rede, carencia, modalidades e comparacao de planos de saude.',
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: 'Guias e artigos da VivaBem para ajudar voce a entender rede, carencia, modalidades e comparacao de planos de saude.',
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: `Blog - ${siteConfig.name}`,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | ${siteConfig.name}`,
    description: 'Guias e artigos da VivaBem para ajudar voce a entender rede, carencia, modalidades e comparacao de planos de saude.',
    images: ['/images/og-image.svg'],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog VivaBem Saúde',
  description: 'Guias e artigos da VivaBem para ajudar voce a entender rede, carencia, modalidades e comparacao de planos de saude.',
  url: `${siteConfig.url}/blog`,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.legalName,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/logo.svg`,
    },
  },
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.content.split(' ').length,
    timeRequired: post.readTime,
  })),
}

const images = [
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=900&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&h=800&fit=crop',
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1000&h=800&fit=crop',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&h=800&fit=crop',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&h=800&fit=crop',
]

export default function BlogPage() {
  const categories = getAllCategories()
  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0]
  const otherPosts = blogPosts.filter((post) => post.id !== featuredPost.id)

  return (
    <SmoothScrollProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="space-y-5">
                <p className="eyebrow">Biblioteca editorial</p>
                <h1 className="section-heading max-w-3xl">
                  Conteudo criado para reduzir duvida, nao para ocupar espaco no site.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-neutral-700">
                  O blog acompanha a nova proposta visual e editorial da marca: menos
                  ruido, mais criterio e artigos que ajudam a destravar a decisao.
                </p>
              </div>

              <div className="panel">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white">
                    Todos
                  </span>
                  {categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-medium text-neutral-700"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[var(--color-surface-muted)]">
          <div className="container-custom">
            <article className="panel overflow-hidden p-0">
              <Link href={`/blog/${featuredPost.slug}`} className="grid lg:grid-cols-[1.04fr_0.96fr]">
                <div className="relative min-h-[340px]">
                  <Image
                    src={images[0]}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between p-8 lg:p-10">
                  <div>
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Destaque
                    </span>
                    <h2 className="mt-5 font-heading text-4xl leading-tight text-neutral-950">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-neutral-600">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-neutral-500">
                      {formatDate(featuredPost.date)} • {featuredPost.author}
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      <Clock3 className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h2 className="font-heading text-3xl text-neutral-950">Mais leituras</h2>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/simulacao">
                  Ir para simulacao
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {otherPosts.map((post, index) => (
                <article key={post.id} className="panel overflow-hidden p-0">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative min-h-[220px]">
                      <Image
                        src={images[(index + 1) % images.length]}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <span className="inline-flex rounded-full bg-accent/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                        {post.category}
                      </span>
                      <h3 className="mt-4 font-heading text-2xl leading-tight text-neutral-950">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-neutral-600">{post.excerpt}</p>
                      <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-4">
                        <span className="text-sm text-neutral-500">{formatDate(post.date)}</span>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                          Ler artigo
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </SmoothScrollProvider>
  )
}
