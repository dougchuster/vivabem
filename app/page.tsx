import type { Metadata } from 'next'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ProfessionalLandingSection } from "@/components/sections/ProfessionalLandingSection"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `${siteConfig.name} | Compare Planos de Saude com Orientacao Especializada`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Compare Planos de Saude com Orientacao Especializada`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Planos de Saude`,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Compare Planos de Saude com Orientacao Especializada`,
    description: siteConfig.description,
    images: ['/images/og-image.svg'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Voces cobram pela consultoria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nao. A analise e gratuita. Voce so contrata o plano se fizer sentido para o seu momento.',
      },
    },
    {
      '@type': 'Question',
      name: 'Em quanto tempo eu recebo uma recomendacao?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na maioria dos casos enviamos as melhores opcoes no mesmo dia util, com comparativo claro e orientacao do consultor.',
      },
    },
    {
      '@type': 'Question',
      name: 'MEI pode contratar plano empresarial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Trabalhamos com opcoes para MEI e pequenas empresas, com explicacao das regras e documentacao necessaria.',
      },
    },
    {
      '@type': 'Question',
      name: 'O atendimento e so para Sao Paulo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nao. Atendemos em todo o Brasil e ajustamos a recomendacao conforme a rede credenciada da sua cidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona o acompanhamento apos a contratacao?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seguimos com voce apos a implantacao para apoiar inclusoes, ajustes e duvidas do dia a dia.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Consultoria de Planos de Saude',
  description: 'Servico de consultoria para comparar, selecionar e implantar planos de saude com apoio humano e analise tecnica.',
  provider: {
    '@type': 'Organization',
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brazil',
  },
  serviceType: 'Health Insurance Consulting',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BRL',
    description: 'Consultoria gratuita para comparar planos de saude com mais seguranca',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        <ProfessionalLandingSection />
      </main>
      <Footer />
    </>
  )
}
