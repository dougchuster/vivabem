import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Clock3, UsersRound } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/common/FloatingCTA'
import { SmoothScrollProvider } from '@/components/common/SmoothScrollProvider'
import { Button } from '@/components/ui/button'
import { plans } from '@/lib/data/plans'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Planos de Saude',
  description:
    'Compare as modalidades de plano da VivaBem: individual, familiar, MEI e empresarial, com uma leitura mais clara de rede, carencia e custo.',
  openGraph: {
    title: `Planos de Saude | ${siteConfig.name}`,
    description: 'Compare as modalidades de plano da VivaBem: individual, familiar, MEI e empresarial, com uma leitura mais clara de rede, carencia e custo.',
    url: `${siteConfig.url}/planos`,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: `Planos de Saude - ${siteConfig.name}`,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Planos de Saude | ${siteConfig.name}`,
    description: 'Compare as modalidades de plano da VivaBem: individual, familiar, MEI e empresarial.',
    images: ['/images/og-image.svg'],
  },
  alternates: {
    canonical: `${siteConfig.url}/planos`,
  },
}

const planosSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Planos de Saúde VivaBem',
  description: 'Modalidades de planos de saúde disponíveis na VivaBem',
  itemListElement: plans.map((plan, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: plan.name,
      description: plan.description,
      offers: {
        '@type': 'Offer',
        price: plan.price.replace('R$ ', '').replace('.', '').replace(',', '.'),
        priceCurrency: 'BRL',
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: siteConfig.legalName,
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1',
      },
    },
  })),
}

export default function PlanosPage() {
  return (
    <SmoothScrollProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(planosSchema) }}
      />
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="section-padding relative overflow-hidden">
          <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="container-custom relative">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <div className="space-y-5">
                <p className="eyebrow">Pagina de comparacao</p>
                <h1 className="section-heading max-w-3xl">
                  Modalidades organizadas para voce entender o que muda em cada escolha.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-neutral-700">
                  Aqui o objetivo nao e empilhar promessas. E mostrar como individual,
                  familiar, MEI e empresarial se comportam em estrutura, custo e perfil de uso.
                </p>
              </div>

              <div className="panel">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { value: '4', label: 'modalidades centrais no comparativo' },
                    { value: '12', label: 'operadoras monitoradas no recorte comercial' },
                    { value: '2h', label: 'janela comum para receber analise inicial' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-heading text-3xl text-neutral-950">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[var(--color-surface-muted)]">
          <div className="container-custom">
            <div className="grid gap-6 xl:grid-cols-2">
              {plans.map((plan) => (
                <article key={plan.id} className="panel flex h-full flex-col gap-6">
                  <div className="flex flex-col gap-4 border-b border-[var(--color-border)] pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        {plan.audience}
                      </p>
                      <h2 className="mt-2 font-heading text-3xl text-neutral-950">{plan.name}</h2>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-600">
                        {plan.description}
                      </p>
                    </div>

                    <div className="rounded-[24px] bg-white px-5 py-4 shadow-sm">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                        Entrada
                      </p>
                      <p className="mt-1 font-heading text-3xl text-neutral-950">{plan.price}</p>
                      {plan.priceNote ? (
                        <p className="text-sm text-neutral-500">{plan.priceNote}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <p className="mb-3 text-sm font-semibold text-neutral-900">
                        O que aparece com frequencia:
                      </p>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="mt-0.5 h-4 w-4 text-primary" />
                            <span className="text-sm leading-6 text-neutral-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[28px] bg-white p-5">
                      <p className="mb-3 text-sm font-semibold text-neutral-900">
                        Leitura operacional:
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <UsersRound className="mt-0.5 h-4 w-4 text-accent" />
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                              Rede
                            </p>
                            <p className="text-sm leading-6 text-neutral-700">{plan.networkSize}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock3 className="mt-0.5 h-4 w-4 text-accent" />
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                              Carencia
                            </p>
                            <p className="text-sm leading-6 text-neutral-700">{plan.waitingPeriod}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                            Cobertura recorrente
                          </p>
                          <p className="mt-2 text-sm leading-6 text-neutral-700">
                            {plan.coverage.slice(0, 4).join(', ')}.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="outline" className="flex-1 rounded-full">
                      <Link href="/sobre">Entender a consultoria</Link>
                    </Button>
                    <Button asChild className="flex-1 rounded-full">
                      <Link href="/simulacao">
                        Solicitar comparacao
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="panel-dark text-center">
              <p className="eyebrow mx-auto border-white/20 bg-white/5 text-white">
                Fechar proxima etapa
              </p>
              <h2 className="mt-5 font-heading text-4xl text-white sm:text-5xl">
                Se voce ja entendeu as modalidades, agora vale partir para o seu caso real.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/72">
                A simulacao organiza perfil, cidade, quantidade de vidas e contexto de uso
                para transformar a comparacao em recomendacao concreta.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild variant="cta" size="lg" className="rounded-full">
                  <Link href="/simulacao">
                    Fazer simulacao gratuita
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href="/blog">Ler guias antes de decidir</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </SmoothScrollProvider>
  )
}
