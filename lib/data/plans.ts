export interface Plan {
  id: string
  slug: string
  name: string
  type: 'individual' | 'familiar' | 'mei' | 'empresarial'
  audience: string
  description: string
  features: string[]
  price: string
  priceNote?: string
  isPopular?: boolean
  badge?: string
  coverage: string[]
  networkSize: string
  waitingPeriod: string
}

export const plans: Plan[] = [
  {
    id: '1',
    slug: 'plano-individual',
    name: 'Plano Individual',
    type: 'individual',
    audience: 'Pessoa fisica',
    description: 'Para quem quer cobertura consistente sem entrar em uma estrutura familiar ou empresarial.',
    features: [
      'Consultas e exames de rotina',
      'Internacao hospitalar',
      'Urgencia e emergencia 24h',
      'Telemedicina',
      'Rede nacional selecionada',
    ],
    coverage: [
      'Consultas medicas',
      'Exames laboratoriais',
      'Exames de imagem',
      'Internacao hospitalar',
      'Pronto-socorro 24h',
      'Telemedicina',
      'Cobertura nacional',
    ],
    price: 'R$ 129',
    priceNote: '/mes',
    networkSize: '2.500+ medicos',
    waitingPeriod: '24h urgencia e ate 180 dias para procedimentos eletivos',
  },
  {
    id: '2',
    slug: 'plano-familiar',
    name: 'Plano Familiar',
    type: 'familiar',
    audience: 'Familias',
    description: 'Estrutura pensada para concentrar dependentes, organizar cobertura e reduzir custo por vida.',
    features: [
      'Tudo do individual',
      'Cobertura pediatrica',
      'Maternidade',
      'Programas preventivos',
      'Gestao de saude da familia',
    ],
    coverage: [
      'Consultas e exames',
      'Pediatria e ginecologia',
      'Internacao e parto',
      'Fisioterapia',
      'Telemedicina',
      'Programas de prevencao',
      'Cobertura nacional',
    ],
    price: 'R$ 289',
    priceNote: '/mes',
    networkSize: '3.200+ medicos',
    waitingPeriod: 'Ate 300 dias para parto e ate 180 dias para cirurgias',
    isPopular: true,
    badge: 'Maior procura no comparativo',
  },
  {
    id: '3',
    slug: 'plano-mei-autonomo',
    name: 'Plano MEI e Autonomo',
    type: 'mei',
    audience: 'MEI e profissional liberal',
    description: 'Alternativa para quem precisa de custo mais competitivo sem abrir mao de cobertura relevante.',
    features: [
      'Modelo coletivo por adesao',
      'Consultas e exames',
      'Internacao hospitalar',
      'Psicologia online em operadoras selecionadas',
      'Descontos em farmacias parceiras',
    ],
    coverage: [
      'Consultas medicas',
      'Exames laboratoriais',
      'Internacao hospitalar',
      'Telemedicina',
      'Psicologia online',
      'Descontos em farmacias',
      'Cobertura nacional',
    ],
    price: 'R$ 189',
    priceNote: '/mes',
    networkSize: '2.800+ medicos',
    waitingPeriod: 'Ate 180 dias para procedimentos eletivos',
  },
  {
    id: '4',
    slug: 'plano-empresarial',
    name: 'Plano Empresarial',
    type: 'empresarial',
    audience: 'Empresa com 2+ vidas',
    description: 'Modelo consultivo para atracao, retencao e previsibilidade de beneficio em pequenas e medias empresas.',
    features: [
      'Condicoes por numero de vidas',
      'Rede ampla e modular',
      'Apoio para RH',
      'Gestao de beneficiarios',
      'Leitura de sinistralidade e renovacao',
    ],
    coverage: [
      'Planos customizaveis',
      'Cobertura nacional',
      'Rede premium sob criterio',
      'Gestao de vidas',
      'Suporte ao RH',
      'Relatorios de uso',
      'Renovacao assistida',
    ],
    price: 'Sob consulta',
    networkSize: '4.000+ medicos',
    waitingPeriod: 'Negociavel conforme operadora e historico',
  },
]

export const getPlanBySlug = (slug: string): Plan | undefined => {
  return plans.find((plan) => plan.slug === slug)
}

export const getPlansByType = (type: Plan['type']): Plan[] => {
  return plans.filter((plan) => plan.type === type)
}

export const getPopularPlans = (): Plan[] => {
  return plans.filter((plan) => plan.isPopular)
}
