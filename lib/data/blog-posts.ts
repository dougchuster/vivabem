export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image?: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'como-escolher-plano-de-saude-para-familia',
    title: 'Como escolher um plano de saude para a familia sem cair em comparacoes rasas',
    excerpt:
      'Entenda como rede, carencia, fase de vida e custo total pesam mais do que a menor mensalidade aparente.',
    content: `
## O erro mais comum

Muita gente compara apenas o valor de entrada. Em saude suplementar, isso quase nunca basta.

## O que realmente precisa entrar na decisao

### 1. Rede util para a rotina

Nao adianta uma lista enorme de hospitais se os nomes que importam para sua familia nao aparecem nela.

### 2. Carencia e momento de vida

Parto, cirurgias, acompanhamento infantil e doencas em curso mudam completamente o tipo de plano que faz sentido.

### 3. Custo total

Mensalidade, coparticipacao, deslocamento e risco de usar fora da rede precisam entrar na conta.

## Como simplificar

Monte um recorte com:

- cidade principal de uso
- hospitais ou laboratorios desejados
- numero de vidas
- teto de investimento
- necessidade clinica mais sensivel

## Conclusao

Comparar plano de saude com clareza exige contexto. Se voce quiser acelerar esse processo, a simulacao organiza esses filtros em poucos minutos.
    `,
    author: 'Mariana Silva',
    date: '2026-03-10',
    readTime: '6 min',
    category: 'Familia',
    tags: ['plano familiar', 'rede credenciada', 'carencia'],
    featured: true,
  },
  {
    id: '2',
    slug: 'plano-empresarial-ou-adesao-o-que-muda',
    title: 'Plano empresarial ou adesao: o que realmente muda para pequenas operacoes',
    excerpt:
      'Nem toda empresa pequena precisa da mesma estrutura. Veja quando cada modalidade faz sentido e onde costuma haver confusao.',
    content: `
## Dois caminhos parecidos, mas nao iguais

Empresarial e adesao podem parecer proximos no discurso comercial, mas mudam elegibilidade, negociacao e estabilidade.

## Quando o empresarial costuma ganhar

- empresa com duas ou mais vidas
- visao de beneficio para reter equipe
- necessidade de negociar estrutura no medio prazo

## Quando o adesao pode ser melhor

- autonomo ou MEI
- operacao enxuta
- urgencia para contratar com menos atrito

## Ponto central

O melhor produto nao depende so de CNPJ. Depende da configuracao real da operacao e do objetivo de uso.
    `,
    author: 'Ricardo Mendes',
    date: '2026-03-08',
    readTime: '5 min',
    category: 'Empresas',
    tags: ['plano empresarial', 'adesao', 'MEI'],
    featured: true,
  },
  {
    id: '3',
    slug: 'carencia-em-plano-de-saude-como-ler',
    title: 'Carencia em plano de saude: como ler sem ansiedade e sem letra miuda',
    excerpt:
      'Carencia nao e so uma tabela. Ela precisa ser entendida dentro do seu momento de vida e da urgencia de uso.',
    content: `
## O que e carencia

Carencia e o intervalo entre contratacao e uso integral de determinadas coberturas.

## Onde mora a confusao

O problema nao e a existencia da carencia. O problema e contratar sem entender:

- o que entra em 24h
- o que depende de 30 dias
- o que costuma ir para 180 dias
- quando parto exige janela maior

## Como analisar

Cruze carencia com sua necessidade mais sensivel. Se existe urgencia clinica, o produto certo muda.
    `,
    author: 'Carolina Oliveira',
    date: '2026-03-05',
    readTime: '5 min',
    category: 'Guia',
    tags: ['carencia', 'cobertura', 'ANS'],
    featured: false,
  },
  {
    id: '4',
    slug: 'mei-pode-ter-plano-de-saude-com-custo-viavel',
    title: 'MEI pode ter plano de saude com custo viavel? Sim, mas o filtro certo importa',
    excerpt:
      'Cidade, elegibilidade e modalidade contratual definem o que realmente cabe no bolso do autonomo.',
    content: `
## O mito do plano inacessivel

Muitos MEIs descartam a ideia antes mesmo de comparar. O mercado tem caminhos mais viaveis do que parece.

## O que mais influencia preco

- faixa etaria
- cidade
- modalidade
- rede desejada
- numero de vidas

## O que muda com consultoria

Em vez de procurar produtos aleatorios, voce parte de um recorte que combina elegibilidade e orcamento.
    `,
    author: 'Fernanda Lima',
    date: '2026-03-01',
    readTime: '6 min',
    category: 'MEI',
    tags: ['MEI', 'autonomo', 'plano por adesao'],
    featured: true,
  },
  {
    id: '5',
    slug: 'telemedicina-o-que-avaliar-no-plano',
    title: 'Telemedicina no plano: o que avaliar antes de tratar isso como bonus',
    excerpt:
      'Nem toda telemedicina tem a mesma utilidade. Entenda quais elementos fazem diferenca de verdade no dia a dia.',
    content: `
## Telemedicina nao e detalhe

Para muitas familias e profissionais, ela ja virou parte relevante do uso.

## O que observar

- horario de atendimento
- especialidades disponiveis
- facilidade para evoluir para rede presencial
- qualidade da plataforma

## A boa pergunta

Nao pergunte apenas se existe telemedicina. Pergunte se ela funciona no seu contexto real.
    `,
    author: 'Roberto Almeida',
    date: '2026-02-25',
    readTime: '4 min',
    category: 'Tecnologia',
    tags: ['telemedicina', 'saude digital'],
    featured: false,
  },
]

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug)
}

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category)
}

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.featured)
}

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export const getAllCategories = (): string[] => {
  return [...new Set(blogPosts.map((post) => post.category))]
}

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostBySlug(currentSlug)

  if (!currentPost) {
    return []
  }

  return blogPosts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        (post.category === currentPost.category ||
          post.tags.some((tag) => currentPost.tags.includes(tag)))
    )
    .slice(0, limit)
}
