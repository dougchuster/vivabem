import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SmoothScrollProvider } from '@/components/common/SmoothScrollProvider'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Condicoes gerais de uso do site e dos formularios da VivaBem.',
  openGraph: {
    title: `Termos de Uso | ${siteConfig.name}`,
    description: 'Condicoes gerais de uso do site e dos formularios da VivaBem.',
    url: `${siteConfig.url}/termos`,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: `Termos de Uso - ${siteConfig.name}`,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Termos de Uso | ${siteConfig.name}`,
    description: 'Condicoes gerais de uso do site e dos formularios da VivaBem.',
    images: ['/images/og-image.svg'],
  },
  alternates: {
    canonical: `${siteConfig.url}/termos`,
  },
}

const termsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Termos de Uso',
  description: 'Condicoes gerais de uso do site e dos formularios da VivaBem.',
  url: `${siteConfig.url}/termos`,
  mainEntity: {
    '@type': 'Article',
    headline: 'Termos de Uso da VivaBem Saúde',
    description: 'Documento que estabelece as condições gerais para utilização do site e serviços da VivaBem Saúde.',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: siteConfig.legalName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Termos de Uso',
        item: `${siteConfig.url}/termos`,
      },
    ],
  },
}

const sections = [
  {
    title: '1. Uso do site',
    body: 'O site da VivaBem tem finalidade informativa e comercial para cotacao e orientacao sobre planos de saude. O uso deve ocorrer de forma licita e de boa-fe.',
  },
  {
    title: '2. Informacoes e simulacoes',
    body: 'Valores, redes credenciadas e condicoes de contratacao podem variar por operadora, faixa etaria, regiao e regras vigentes no momento da proposta.',
  },
  {
    title: '3. Responsabilidade do usuario',
    body: 'Voce se compromete a informar dados verdadeiros e atualizados quando enviar formularios, solicitar contato comercial ou pedir uma simulacao.',
  },
  {
    title: '4. Propriedade intelectual',
    body: 'Conteudos, marcas, textos, elementos visuais e componentes do site nao podem ser reproduzidos sem autorizacao previa, salvo quando permitido por lei.',
  },
  {
    title: '5. Atualizacoes',
    body: 'Os termos podem ser revisados a qualquer momento para refletir mudancas legais, operacionais ou de produto. Recomendamos consulta periodica desta pagina.',
  },
]

export default function TermosPage() {
  return (
    <SmoothScrollProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="bg-gradient-to-br from-neutral-100 to-white py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white">
                Regras gerais de uso
              </span>
              <h1 className="mb-6 font-heading text-4xl font-bold text-neutral-900 sm:text-5xl">
                Termos de Uso
              </h1>
              <p className="text-lg text-neutral-600">
                Estas condicoes orientam o uso do site e das solicitacoes enviadas pela
                plataforma VivaBem.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl space-y-8">
              {sections.map((section) => (
                <article key={section.title} className="rounded-2xl border border-neutral-200 p-6">
                  <h2 className="mb-3 font-heading text-2xl font-semibold text-neutral-900">
                    {section.title}
                  </h2>
                  <p className="leading-7 text-neutral-600">{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
