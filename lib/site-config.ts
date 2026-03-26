export const siteConfig = {
  name: 'VivaBem Saude',
  legalName: 'VivaBem Saude',
  url: 'https://vivabemsaude.com.br',
  description:
    'Compare planos de saude com consultoria humana, curadoria tecnica e suporte real do primeiro contato a implantacao.',
  phoneDigits: '551140001234',
  phoneDisplay: '(11) 4000-1234',
  email: 'contato@vivabemsaude.com.br',
  whatsappDefaultMessage:
    'Ola! Quero entender qual plano de saude faz mais sentido para meu perfil.',
  address: {
    street: 'Av. Paulista, 1000',
    district: 'Bela Vista',
    city: 'Sao Paulo',
    region: 'SP',
    postalCode: '01310-100',
    country: 'BR',
    latitude: -23.561684,
    longitude: -46.656139,
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/vivabemsaude',
    linkedin: 'https://www.linkedin.com/company/vivabemsaude',
    facebook: 'https://www.facebook.com/vivabemsaude',
    youtube: 'https://www.youtube.com/@vivabemsaude',
  },
} as const

export const createWhatsAppUrl = (message: string = siteConfig.whatsappDefaultMessage) =>
  `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(message)}`

interface LeadSummaryInput {
  planType?: string
  numberOfLives?: number
  state?: string
  city?: string
  fullName?: string
  email?: string
  phone?: string
  birthDate?: string
  coverages?: string[]
  message?: string
}

export const createLeadSummaryMessage = (lead: LeadSummaryInput) => {
  const lines = [
    'Ola! Quero uma simulacao de plano de saude.',
    lead.fullName ? `Nome: ${lead.fullName}` : null,
    lead.phone ? `Telefone: ${lead.phone}` : null,
    lead.email ? `Email: ${lead.email}` : null,
    lead.planType ? `Tipo de plano: ${lead.planType}` : null,
    lead.numberOfLives ? `Numero de vidas: ${lead.numberOfLives}` : null,
    lead.city || lead.state
      ? `Localidade: ${[lead.city, lead.state].filter(Boolean).join(' - ')}`
      : null,
    lead.birthDate ? `Nascimento: ${lead.birthDate}` : null,
    lead.coverages?.length ? `Coberturas prioritarias: ${lead.coverages.join(', ')}` : null,
    lead.message ? `Observacoes: ${lead.message}` : null,
  ]

  return lines.filter(Boolean).join('\n')
}
