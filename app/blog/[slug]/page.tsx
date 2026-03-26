import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, MessageCircle, User } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { FloatingCTA } from '@/components/common/FloatingCTA'
import { SmoothScrollProvider } from '@/components/common/SmoothScrollProvider'
import { Button } from '@/components/ui/button'
import { getPostBySlug, getRelatedPosts, blogPosts } from '@/lib/data/blog-posts'
import { createWhatsAppUrl, siteConfig } from '@/lib/site-config'
import { formatDate, getInitials } from '@/lib/utils'

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Artigo nao encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/og-image.svg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'pt_BR',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      images: ['/images/og-image.svg'],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags,
    authors: [{ name: post.author }],
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  return (
    <SmoothScrollProvider>
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="bg-gradient-to-br from-primary-light/50 to-white py-12 lg:py-16">
          <div className="container-custom">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o blog
            </Link>

            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {post.category}
              </span>
              <h1 className="mb-6 font-heading text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} de leitura
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-4">
              <div className="lg:col-span-3">
                <article className="prose prose-lg max-w-none">
                  <div
                    className="space-y-6 leading-relaxed text-neutral-700"
                    dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
                  />
                </article>

                <div className="mt-12 border-t border-neutral-200 pt-8">
                  <h4 className="mb-3 font-medium text-neutral-900">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8">
                  <h3 className="mb-3 font-heading text-xl font-semibold text-neutral-900">
                    Gostou do conteudo?
                  </h3>
                  <p className="mb-6 text-neutral-600">
                    Nossos especialistas podem ajudar voce a encontrar o plano de saude ideal
                    para o seu perfil.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link href="/simulacao">
                      <Button className="group rounded-xl">
                        Fazer simulacao gratuita
                        <span className="ml-2 transition-transform group-hover:translate-x-1">
                          -&gt;
                        </span>
                      </Button>
                    </Link>
                    <a
                      href={createWhatsAppUrl(
                        `Ola! Li o artigo "${post.title}" e gostaria de receber uma simulacao de plano de saude.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="rounded-xl">
                        <MessageCircle className="mr-2 h-4 w-4 text-green-500" />
                        Falar no WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <div className="rounded-2xl bg-neutral-50 p-6">
                    <h4 className="mb-4 font-medium text-neutral-900">Autor</h4>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-semibold text-white">
                        {getInitials(post.author)}
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">{post.author}</p>
                        <p className="text-sm text-neutral-500">Especialista em Saude</p>
                      </div>
                    </div>
                  </div>

                  {relatedPosts.length > 0 && (
                    <div className="rounded-2xl bg-neutral-50 p-6">
                      <h4 className="mb-4 font-medium text-neutral-900">Artigos relacionados</h4>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                          <Link
                            key={relatedPost.id}
                            href={`/blog/${relatedPost.slug}`}
                            className="group block"
                          >
                            <h5 className="mb-1 line-clamp-2 font-medium text-neutral-900 transition-colors group-hover:text-primary">
                              {relatedPost.title}
                            </h5>
                            <span className="text-sm text-neutral-500">
                              {relatedPost.readTime} de leitura
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="section-padding bg-neutral-50">
            <div className="container-custom">
              <h2 className="mb-8 font-heading text-2xl font-bold text-neutral-900">
                Voce tambem pode gostar
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id}>
                    <Link href={`/blog/${relatedPost.slug}`} className="group block">
                      <h3 className="mb-2 font-heading text-lg font-semibold text-neutral-900 transition-colors group-hover:text-primary">
                        {relatedPost.title}
                      </h3>
                      <p className="mb-3 line-clamp-2 text-sm text-neutral-600">
                        {relatedPost.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                        Ler artigo
                        <span>-&gt;</span>
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingCTA />
    </SmoothScrollProvider>
  )
}
