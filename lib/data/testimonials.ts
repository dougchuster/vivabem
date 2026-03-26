export interface Testimonial {
  id: string
  name: string
  age: number
  occupation: string
  location: string
  content: string
  rating: number
  planType: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos M.',
    age: 38,
    occupation: 'Autonomo',
    location: 'Goiania, GO',
    content:
      'Eu estava comparando sozinho e so ficava mais confuso. Quando a consultoria mostrou rede, carencia e preco final lado a lado, consegui decidir sem medo de errar.',
    rating: 5,
    planType: 'Plano Individual',
  },
  {
    id: '2',
    name: 'Fernanda L.',
    age: 34,
    occupation: 'Analista de marketing',
    location: 'Sao Paulo, SP',
    content:
      'Minha familia precisava de cobertura seria, nao de um plano barato qualquer. A equipe traduziu o mercado em linguagem simples e chegamos a uma decisao muito melhor.',
    rating: 5,
    planType: 'Plano Familiar',
  },
  {
    id: '3',
    name: 'Rafael S.',
    age: 29,
    occupation: 'Programador',
    location: 'Recife, PE',
    content:
      'Eu tinha tentado contratar direto com operadora e so encontrei burocracia. Aqui o processo foi objetivo, rapido e com explicacao clara do que realmente estava sendo contratado.',
    rating: 5,
    planType: 'Plano Individual',
  },
  {
    id: '4',
    name: 'Mariana T.',
    age: 42,
    occupation: 'Empresaria',
    location: 'Belo Horizonte, MG',
    content:
      'Nosso desafio era montar beneficio para uma equipe pequena sem explodir o caixa. A leitura empresarial trouxe uma estrutura viavel e bem mais madura do que eu esperava.',
    rating: 5,
    planType: 'Plano Empresarial',
  },
  {
    id: '5',
    name: 'Joao P.',
    age: 31,
    occupation: 'Designer freelancer',
    location: 'Florianopolis, SC',
    content:
      'Como MEI, eu nao sabia nem por onde comecar. O atendimento foi paciente, direto e me mostrou opcoes que realmente cabiam na minha realidade.',
    rating: 5,
    planType: 'Plano MEI',
  },
  {
    id: '6',
    name: 'Ana Carolina R.',
    age: 45,
    occupation: 'Professora',
    location: 'Curitiba, PR',
    content:
      'A diferenca foi o pos-venda. Nao sumiram depois da adesao. Continuaram acompanhando e tirando duvidas com uma atencao muito rara nesse mercado.',
    rating: 5,
    planType: 'Plano Familiar',
  },
  {
    id: '7',
    name: 'Pedro Henrique',
    age: 52,
    occupation: 'Engenheiro civil',
    location: 'Rio de Janeiro, RJ',
    content:
      'Eu precisava entender cobertura e custo de verdade, nao so ouvir promessa de vendedor. A comparacao trouxe seguranca para fechar.',
    rating: 5,
    planType: 'Plano Individual',
  },
  {
    id: '8',
    name: 'Luciana M.',
    age: 36,
    occupation: 'Medica veterinaria',
    location: 'Porto Alegre, RS',
    content:
      'Conseguimos contratar para a familia toda com uma visao muito mais clara de rede e cobertura. Isso mudou completamente minha percepcao sobre o processo.',
    rating: 5,
    planType: 'Plano Familiar',
  },
]

export const getTestimonialsByPlanType = (planType: string): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.planType.includes(planType))
}

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.slice(0, 5)
}
