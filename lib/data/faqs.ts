export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Posso contratar sem sair de casa?',
    answer:
      'Sim. O fluxo foi pensado para acontecer de forma digital, com coleta de dados, comparacao, envio de proposta e avancos de contratacao pelo celular ou computador.',
    category: 'Processo',
  },
  {
    id: '2',
    question: 'Quanto tempo leva para ativar o plano?',
    answer:
      'Depende da operadora e da analise cadastral, mas o mercado costuma trabalhar com janelas entre 24h e 48h uteis para casos mais simples. Modalidades empresariais podem exigir mais prazo.',
    category: 'Processo',
  },
  {
    id: '3',
    question: 'O que significa carencia na pratica?',
    answer:
      'Carencia e o periodo inicial do contrato em que algumas coberturas ainda nao podem ser usadas integralmente. Urgencia e emergencia entram primeiro; procedimentos eletivos tendem a exigir mais tempo.',
    category: 'Cobertura',
  },
  {
    id: '4',
    question: 'Qual a diferenca entre adesao e empresarial?',
    answer:
      'O empresarial costuma atender empresas com duas ou mais vidas e pode ter condicoes melhores. O adesao normalmente atende MEI, autonomos e profissionais liberais por meio de entidade elegivel.',
    category: 'Tipos de plano',
  },
  {
    id: '5',
    question: 'A consultoria tem algum custo para mim?',
    answer:
      'Nao. A etapa de comparacao e orientacao nao cobra taxa do cliente. O objetivo e encurtar a escolha e organizar uma proposta coerente com seu perfil.',
    category: 'Custo',
  },
  {
    id: '6',
    question: 'Atendem MEI e autonomo de verdade?',
    answer:
      'Sim. Essa e uma parte importante da operacao. O processo identifica elegibilidade, cidade, faixa de preco e operadoras possiveis para montar um recorte realista.',
    category: 'Publico',
  },
  {
    id: '7',
    question: 'Como verificam se minha rede favorita esta incluida?',
    answer:
      'A analise considera operadora, produto e regiao. Em vez de prometer cobertura generica, a equipe cruza a rede credenciada com a localidade e o perfil informado.',
    category: 'Rede',
  },
  {
    id: '8',
    question: 'Doenca preexistente impede contratacao?',
    answer:
      'Nao necessariamente. O ponto central e avaliar declaracao de saude, regras da operadora e condicoes de cobertura parcial temporaria. Cada caso pede leitura individual.',
    category: 'Cobertura',
  },
  {
    id: '9',
    question: 'Se eu atrasar pagamento, perco o plano na hora?',
    answer:
      'Nao. Existem etapas de aviso, suspensao e eventual cancelamento conforme regras do contrato e da operadora. O ideal e agir cedo para evitar interrupcao de uso.',
    category: 'Pagamento',
  },
  {
    id: '10',
    question: 'Depois da contratacao voces ainda acompanham?',
    answer:
      'Sim. A experiencia foi desenhada para nao acabar na adesao. Duvidas de uso, revisao de perfil e futuras mudancas tambem entram na jornada.',
    category: 'Pos-venda',
  },
]

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter((faq) => faq.category === category)
}

export const getFeaturedFAQs = (): FAQ[] => {
  return faqs.slice(0, 8)
}
