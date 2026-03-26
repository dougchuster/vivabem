import type { Metadata, Viewport } from 'next'
import { siteConfig } from '@/lib/site-config'
import { SkipLink } from '@/components/common/SkipLink'
import { FloatingWhatsApp } from '../components/ui/FloatingWhatsApp'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0b3b2c',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Consultoria em Planos de Saude com Curadoria Humana`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: '/manifest.json',
  keywords: [
    'plano de saude',
    'planos de saude',
    'corretora de planos de saude',
    'comparar planos de saude',
    'plano de saude individual',
    'plano de saude familiar',
    'plano de saude empresarial',
    'plano de saude mei',
    'simulacao de plano de saude',
    'cotacao de plano de saude',
    'convenio medico',
    'plano de saude barato',
    'melhor plano de saude',
    'planos de saude sao paulo',
    'planos de saude brasil',
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Consultoria em Planos de Saude com Curadoria Humana`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Planos de Saude`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Consultoria em Planos de Saude com Curadoria Humana`,
    description: siteConfig.description,
    images: ['/images/og-image.svg'],
    creator: '@vivabemsaude',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: 'Saude',
  verification: {
    // Adicione códigos de verificação do Google Search Console e Bing
    // google: 'seu-codigo-google',
    // bing: 'seu-codigo-bing',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': siteConfig.name,
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#00A878',
    'msapplication-tap-highlight': 'no',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.svg`,
  description: siteConfig.description,
  foundingDate: '2018',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: `+${siteConfig.phoneDigits}`,
      contactType: 'customer service',
      availableLanguage: ['Portuguese'],
      areaServed: 'BR',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
    },
    {
      '@type': 'ContactPoint',
      telephone: `+${siteConfig.phoneDigits}`,
      contactType: 'customer service',
      availableLanguage: ['Portuguese'],
      areaServed: 'BR',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    },
  ],
  sameAs: [
    siteConfig.socialLinks.instagram,
    siteConfig.socialLinks.linkedin,
    siteConfig.socialLinks.facebook,
    siteConfig.socialLinks.youtube,
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '15000',
    bestRating: '5',
    worstRating: '1',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: siteConfig.legalName,
  image: `${siteConfig.url}/images/logo.svg`,
  '@id': siteConfig.url,
  url: siteConfig.url,
  telephone: `+${siteConfig.phoneDigits}`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.address.latitude,
    longitude: siteConfig.address.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Brazil',
  },
  serviceType: [
    'Plano de Saúde Individual',
    'Plano de Saúde Familiar',
    'Plano de Saúde MEI',
    'Plano de Saúde Empresarial',
    'Consultoria de Planos de Saúde',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.legalName,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/blog?busca={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.legalName,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/logo.svg`,
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//images.pexels.com" />
        <link rel="dns-prefetch" href="//wa.me" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  var isLocalhost = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);

                  if (isLocalhost) {
                    navigator.serviceWorker.getRegistrations()
                      .then(function(registrations) {
                        return Promise.all(registrations.map(function(registration) {
                          return registration.unregister();
                        }));
                      })
                      .then(function() {
                        if ('caches' in window) {
                          return caches.keys().then(function(cacheNames) {
                            return Promise.all(cacheNames.map(function(cacheName) {
                              return caches.delete(cacheName);
                            }));
                          });
                        }
                      })
                      .catch(function(cleanupError) {
                        console.log('SW cleanup failed: ', cleanupError);
                      });

                    return;
                  }

                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className="bg-neutral-50 font-sans text-neutral-900 antialiased">
        <SkipLink />
        <div id="main-content">
          {children}
        </div>
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
