import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SmoothScrollProvider } from '@/components/common/SmoothScrollProvider'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Politica de Privacidade',
  description: 'Saiba como a VivaBem trata dados pessoais e contatos enviados pelo site.',
  openGraph: {
    title: `Politica de Privacidade | ${siteConfig.name}`,
    description: 'Saiba como a VivaBem trata dados pessoais e contatos enviados pelo site.',
    url: `${siteConfig.url}/privacidade`,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: `Politica de Privacidade - ${siteConfig.name}`,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Politica de Privacidade | ${siteConfig.name}`,
    description: 'Saiba como a VivaBem trata dados pessoais e contatos enviados pelo site.',
    images: ['/images/og-image.svg'],
  },
  alternates: {
    canonical: `${siteConfig.url}/privacidade`,
  },
}

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Política de Privacidade',
  description: 'Saiba como a VivaBem trata dados pessoais e contatos enviados pelo site.',
  url: `${siteConfig.url}/privacidade`,
  mainEntity: {
    '@type': 'Article',
    headline: 'Política de Privacidade da VivaBem Saúde',
    description: 'Documento que descreve como a VivaBem Saúde coleta, usa e protege dados pessoais dos usuários.',
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
        name: 'Política de Privacidade',
        item: `${siteConfig.url}/privacidade`,
      },
    ],
  },
}

const sections = [
  {
    title: '1. Dados coletados',
    body: 'Coletamos informacoes enviadas por voce em formularios do site, como nome, telefone, email, cidade e preferencias relacionadas aos planos.',
  },
  {
    title: '2. Finalidade do uso',
    body: 'Esses dados sao usados para responder sua solicitacao, montar simulacoes personalizadas, entrar em contato por telefone, email ou WhatsApp e melhorar a experiencia do site.',
  },
  {
    title: '3. Compartilhamento',
    body: 'Os dados podem ser compartilhados com parceiros operacionais envolvidos na cotacao e contratacao, sempre de forma restrita ao necessario para a prestacao do servico.',
  },
  {
    title: '4. Armazenamento e seguranca',
    body: 'Adotamos medidas tecnicas e organizacionais para reduzir riscos de acesso indevido, vazamento ou uso inadequado das informacoes recebidas.',
  },
  {
    title: '5. Seus direitos',
    body: 'Voce pode solicitar confirmacao de tratamento, correcao, atualizacao ou exclusao dos seus dados, observadas as obrigacoes legais e regulatarias aplicaveis.',
  },
]

export default function PrivacidadePage() {
  return (
    <SmoothScrollProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="bg-gradient-to-br from-primary-light/50 to-white py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Transparencia e LGPD
              </span>
              <h1 className="mb-6 font-heading text-4xl font-bold text-neutral-900 sm:text-5xl">
                Politica de Privacidade
              </h1>
              <p className="text-lg text-neutral-600">
                Esta pagina resume como tratamos dados pessoais enviados pela plataforma
                VivaBem.
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

              <article className="rounded-2xl bg-neutral-50 p-6">
                <h2 className="mb-3 font-heading text-2xl font-semibold text-neutral-900">
                  Contato
                </h2>
                <p className="leading-7 text-neutral-600">
                  Para assuntos sobre privacidade, atualizacao de cadastro ou exercicio de
                  direitos, use os canais de atendimento informados no rodape do site.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
