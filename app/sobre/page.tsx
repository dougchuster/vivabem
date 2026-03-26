import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  TrendingUp,
  UsersRound,
} from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/common/FloatingCTA'
import { SmoothScrollProvider } from '@/components/common/SmoothScrollProvider'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Sobre a VivaBem',
  description:
    'Conheca a VivaBem: uma consultoria para comparacao de planos de saude com processo claro, humano e orientado por criterio.',
  openGraph: {
    title: `Sobre a VivaBem | ${siteConfig.name}`,
    description: 'Conheca a VivaBem: uma consultoria para comparacao de planos de saude com processo claro, humano e orientado por criterio.',
    url: `${siteConfig.url}/sobre`,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: `Sobre a VivaBem - ${siteConfig.name}`,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Sobre a VivaBem | ${siteConfig.name}`,
    description: 'Conheca a VivaBem: uma consultoria para comparacao de planos de saude com processo claro, humano e orientado por criterio.',
    images: ['/images/og-image.svg'],
  },
  alternates: {
    canonical: `${siteConfig.url}/sobre`,
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre a VivaBem Saúde',
  description: 'Conheca a VivaBem: uma consultoria para comparacao de planos de saude com processo claro, humano e orientado por criterio.',
  mainEntity: {
    '@type': 'Organization',
    name: siteConfig.legalName,
    foundingDate: '2018',
    description: 'Corretora especializada em planos de saúde com processo consultivo e atendimento humanizado.',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '15',
    },
    award: [
      'Melhor consultoria de planos de saúde 2023',
      'Selo de qualidade ANS',
      'Certificação em atendimento humanizado',
    ],
    knowsAbout: [
      'Planos de saúde individuais',
      'Planos de saúde familiares',
      'Planos de saúde empresariais',
      'Planos de saúde MEI',
      'Consultoria em saúde suplementar',
    ],
  },
}

const principles = [
  {
    icon: HeartHandshake,
    title: 'Humano sem ser improvisado',
    description:
      'Atendimento proximo, mas com metodo. O usuario sente acolhimento e ao mesmo tempo percebe estrutura.',
  },
  {
    icon: Target,
    title: 'Comparacao orientada',
    description:
      'Nao jogamos dezenas de opcoes na tela. Primeiro recortamos o universo real de decisao.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparencia contratual',
    description:
      'Rede, carencia, elegibilidade e limitacoes entram na conversa cedo, sem mascara comercial.',
  },
  {
    icon: TrendingUp,
    title: 'Visao de longo prazo',
    description:
      'O objetivo e reduzir troca ruim, retrabalho e arrependimento alguns meses depois da adesao.',
  },
]

const journey = [
  {
    year: '2018',
    title: 'Inicio da operacao',
    description: 'A proposta nasceu para traduzir o mercado de saude em linguagem compreensivel.',
  },
  {
    year: '2020',
    title: 'Escala nacional',
    description: 'O atendimento digital consolidou a presenca fora do eixo de origem.',
  },
  {
    year: '2023',
    title: 'Metodo consultivo amadurecido',
    description: 'A comparacao passou a priorizar criterio de decisao, nao volume de ofertas.',
  },
  {
    year: '2026',
    title: 'Nova experiencia digital',
    description: 'O site foi reformulado para refletir melhor a maturidade da operacao.',
  },
]

export default function SobrePage() {
  return (
    <SmoothScrollProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="space-y-5">
                <p className="eyebrow">Sobre a operacao</p>
                <h1 className="section-heading max-w-3xl">
                  VivaBem e uma consultoria para quem precisa decidir melhor, nao apenas contratar mais rapido.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-neutral-700">
                  Trabalhamos em um tema sensivel, onde saude, familia, rede medica e
                  dinheiro se cruzam. O desenho da empresa parte dessa responsabilidade.
                </p>
              </div>

              <div className="panel">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { value: '8 anos', label: 'de operacao acompanhando decisoes de saude' },
                    { value: '12', label: 'operadoras observadas no recorte comercial' },
                    { value: '+15 mil', label: 'clientes atendidos ao longo da jornada' },
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
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow mb-4">Principios</p>
              <h2 className="section-heading">O que sustenta a experiencia que o cliente encontra.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {principles.map((principle) => (
                <article key={principle.title} className="panel h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <principle.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl text-neutral-950">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="panel-dark">
                <p className="eyebrow border-white/20 bg-white/5 text-white">Linha do tempo</p>
                <h2 className="mt-5 font-heading text-4xl text-white sm:text-5xl">
                  A evolucao foi menos sobre volume e mais sobre criterio.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/72">
                  Cada fase aumentou a capacidade de explicar melhor o mercado e reduzir ruido na jornada de decisao.
                </p>
              </div>

              <div className="panel">
                <div className="space-y-6">
                  {journey.map((item, index) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                          {item.year.slice(-2)}
                        </div>
                        {index < journey.length - 1 ? (
                          <div className="mt-2 h-full w-px bg-[var(--color-border)]" />
                        ) : null}
                      </div>
                      <div className="pb-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                          {item.year}
                        </p>
                        <h3 className="mt-2 font-heading text-2xl text-neutral-950">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-neutral-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[var(--color-surface-muted)]">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="panel">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <UsersRound className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Relacao com cliente
                    </p>
                    <p className="text-sm text-neutral-700">
                      O atendimento continua relevante depois da adesao.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-neutral-600">
                  Parte da confianca vem do acompanhamento posterior: ajuste de perfil,
                  duvidas de uso, revisao de contexto e apoio quando a escolha precisa ser reavaliada.
                </p>
              </div>

              <div className="panel-dark">
                <h2 className="font-heading text-4xl text-white sm:text-5xl">
                  Canais para iniciar a conversa.
                </h2>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-white">Endereco</p>
                      <p className="text-sm leading-6 text-white/72">
                        {siteConfig.address.street}, {siteConfig.address.district} - {siteConfig.address.city}, {siteConfig.address.region}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-white">Telefone</p>
                      <p className="text-sm leading-6 text-white/72">{siteConfig.phoneDisplay}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-white">E-mail</p>
                      <p className="text-sm leading-6 text-white/72">{siteConfig.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="cta" className="rounded-full">
                    <Link href="/simulacao">
                      Iniciar simulacao
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                    <Link href="/blog">Explorar conteudo</Link>
                  </Button>
                </div>
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
