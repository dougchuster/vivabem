# 🏥 PROMPT COMPLETO — Redesign VivaBem Saúde

> **Objetivo**: Redesenhar completamente a landing page VivaBem Saúde com um visual premium, moderno e altamente conversivo, utilizando a melhor stack frontend disponível, animações sofisticadas, design system proprietário e conteúdo estratégico para geração de leads no mercado de planos de saúde.

---

## 📋 SUMÁRIO

1. [Visão Geral do Projeto](#1-visão-geral-do-projeto)
2. [Stack Tecnológica](#2-stack-tecnológica)
3. [Design System — Paleta, Tipografia e Tokens](#3-design-system)
4. [Estrutura de Seções da Landing Page](#4-estrutura-de-seções)
5. [Conteúdo e Copywriting por Seção](#5-conteúdo-e-copywriting)
6. [Animações e Efeitos Visuais](#6-animações-e-efeitos)
7. [Carrossel de Logos das Operadoras](#7-carrossel-de-logos)
8. [Imagens Gratuitas — Fontes e Sugestões](#8-imagens-gratuitas)
9. [Componentes Reutilizáveis](#9-componentes-reutilizáveis)
10. [Responsividade — Breakpoints e Regras](#10-responsividade)
11. [SEO e Performance](#11-seo-e-performance)
12. [CTAs Estratégicos](#12-ctas-estratégicos)
13. [Referências Visuais dos Concorrentes](#13-referências-visuais)
14. [Checklist de Entrega](#14-checklist-de-entrega)

---

## 1. VISÃO GERAL DO PROJETO

### Briefing

| Campo | Detalhe |
|---|---|
| **Projeto** | VivaBem Saúde — Consultoria de planos de saúde |
| **Público-alvo** | Famílias, MEIs, PMEs, autônomos e idosos (60+) buscando planos de saúde acessíveis e com cobertura nacional |
| **Tom de voz** | Acolhedor, profissional, confiável — "como um consultor amigo que entende de saúde" |
| **Objetivo principal** | Gerar leads qualificados via WhatsApp/formulário |
| **Proposta de valor** | Planos de saúde acessíveis com cobertura completa, atendimento humanizado e rede credenciada nacional |
| **Região de atuação** | Nacional, com foco em Brasília/DF e São Paulo |

### Filosofia de Design

O site deve transmitir:
- **Confiança** — através de prova social, selos e logos de operadoras
- **Modernidade** — gradientes sofisticados, glassmorphism, micro-animações
- **Acessibilidade** — textos legíveis, contraste WCAG AA, navegação intuitiva
- **Conversão** — CTAs estratégicos, formulários simplificados, urgência sutil

---

## 2. STACK TECNOLOGICA

### Framework Principal

```
Next.js 15+ (App Router)
├── React 19
├── TypeScript 5.x
├── Tailwind CSS v4
└── Server Components + Client Components
```

### Bibliotecas Obrigatórias

| Biblioteca | Versao | Finalidade |
|---|---|---|
| **Framer Motion** | 12+ | Animacoes declarativas e scroll reveals |
| **Tailwind CSS** | 4+ | Utility-first CSS com tokens modernos |
| **Radix UI + componentes locais** | latest | Base acessivel para accordion, dialog, sheet, tabs e afins |
| **Lucide React** | latest | Icones SVG leves e consistentes |
| **ImageSlider custom + next/image** | atual | Hero visual com imagens otimizadas sem depender de carousel externo |
| **React Hook Form** | 7+ | Formularios com validacao |
| **Zod** | 3+ | Schema de validacao |
| **next/font** | built-in | Carregamento otimizado de tipografia |
| **clsx / tailwind-merge / cva** | latest | Composicao e variacoes de classes |

### Bibliotecas Opcionais (para efeitos avançados)

| Biblioteca | Finalidade |
|---|---|
| **GSAP** | Motion mais autoral para transicoes ou storytelling |
| **Lenis** | Scroll suave quando fizer sentido para a experiencia |
| **react-intersection-observer** | Trigger de animacoes no scroll |
| **react-countup** | Contadores animados para prova numerica |
| **SWR / Zustand** | Estado e dados reativos para simulacoes e acompanhamento |

---

## 3. DESIGN SYSTEM

### 3.1 Paleta de Cores

#### Cores Primárias — Verde Institucional

```css
:root {
  /* === VERDES (Primária — Saúde, Confiança, Natureza) === */
  --green-50:  #EDFCF2;
  --green-100: #D3F9E0;
  --green-200: #AAF0C4;
  --green-300: #73E2A3;
  --green-400: #3CCB7F;
  --green-500: #16B364;   /* ← Principal */
  --green-600: #099250;
  --green-700: #087443;
  --green-800: #095C37;
  --green-900: #084C2E;
  --green-950: #02291A;

  /* === AZUIS (Secundária — Tecnologia, Seriedade, Calma) === */
  --blue-50:  #EFF6FF;
  --blue-100: #DBEAFE;
  --blue-200: #BFDBFE;
  --blue-300: #93C5FD;
  --blue-400: #60A5FA;
  --blue-500: #3B82F6;   /* ← Secundária */
  --blue-600: #2563EB;
  --blue-700: #1D4ED8;
  --blue-800: #1E40AF;
  --blue-900: #1E3A8A;
  --blue-950: #172554;

  /* === BRANCOS & NEUTROS === */
  --white:    #FFFFFF;
  --gray-50:  #FAFAFA;
  --gray-100: #F5F5F5;
  --gray-200: #E5E5E5;
  --gray-300: #D4D4D4;
  --gray-400: #A3A3A3;
  --gray-500: #737373;
  --gray-600: #525252;
  --gray-700: #404040;
  --gray-800: #262626;
  --gray-900: #171717;

  /* === ACENTOS === */
  --teal-500:   #14B8A6;   /* Para badges e destaques */
  --amber-500:  #F59E0B;   /* Para estrelas e alertas */
  --rose-500:   #F43F5E;   /* Para urgência e promoções */
}
```

#### Gradientes Proprietários

```css
:root {
  /* Hero principal */
  --gradient-hero: linear-gradient(135deg, #095C37 0%, #16B364 50%, #14B8A6 100%);

  /* Cards premium */
  --gradient-card: linear-gradient(180deg, #FFFFFF 0%, #EDFCF2 100%);

  /* CTA botões */
  --gradient-cta: linear-gradient(135deg, #16B364 0%, #099250 100%);
  --gradient-cta-hover: linear-gradient(135deg, #3CCB7F 0%, #16B364 100%);

  /* Seções escuras */
  --gradient-dark: linear-gradient(180deg, #02291A 0%, #084C2E 50%, #095C37 100%);

  /* Radial para backgrounds */
  --gradient-radial-green: radial-gradient(ellipse at 30% 20%, rgba(22,179,100,0.15) 0%, transparent 60%);
  --gradient-radial-blue: radial-gradient(ellipse at 70% 80%, rgba(59,130,246,0.10) 0%, transparent 60%);

  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.70);
  --glass-border: rgba(255, 255, 255, 0.30);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  --glass-blur: blur(16px);
}
```

### 3.2 Tipografia

Usar `next/font` do Google Fonts:

```typescript
// app/fonts.ts
import { Plus_Jakarta_Sans, DM_Sans, Outfit } from 'next/font/google';

// Display / Headings — moderna, geométrica, com personalidade
export const fontDisplay = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800'],
});

// Body — limpa, legível, profissional
export const fontBody = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

// Alternativa body — para blocos de texto mais densos
export const fontAlt = DM_Sans({
  subsets: ['latin'],
  variable: '--font-alt',
  weight: ['400', '500', '600', '700'],
});
```

#### Escala Tipográfica

```css
/* Desktop */
--text-hero:   clamp(3rem, 5vw, 4.5rem);     /* 48-72px */
--text-h1:     clamp(2.25rem, 4vw, 3.5rem);   /* 36-56px */
--text-h2:     clamp(1.875rem, 3vw, 2.5rem);  /* 30-40px */
--text-h3:     clamp(1.5rem, 2.5vw, 2rem);    /* 24-32px */
--text-h4:     clamp(1.25rem, 2vw, 1.5rem);   /* 20-24px */
--text-body:   1rem;                            /* 16px */
--text-body-lg: 1.125rem;                       /* 18px */
--text-small:  0.875rem;                        /* 14px */
--text-xs:     0.75rem;                         /* 12px */

/* Line Heights */
--leading-tight:  1.15;
--leading-snug:   1.3;
--leading-normal: 1.6;
--leading-relaxed: 1.75;
```

### 3.3 Espaçamento e Layout

```css
/* Container máximo */
--max-width: 1280px;
--max-width-narrow: 960px;

/* Seções */
--section-py: clamp(4rem, 8vw, 8rem);
--section-px: clamp(1rem, 5vw, 2rem);

/* Border Radius */
--radius-sm:  0.5rem;   /* 8px */
--radius-md:  0.75rem;  /* 12px */
--radius-lg:  1rem;     /* 16px */
--radius-xl:  1.5rem;   /* 24px */
--radius-2xl: 2rem;     /* 32px */
--radius-full: 9999px;

/* Shadows */
--shadow-sm:  0 1px 2px rgba(0,0,0,0.05);
--shadow-md:  0 4px 12px rgba(0,0,0,0.08);
--shadow-lg:  0 8px 24px rgba(0,0,0,0.12);
--shadow-xl:  0 16px 48px rgba(0,0,0,0.16);
--shadow-green: 0 4px 24px rgba(22,179,100,0.25);
--shadow-blue:  0 4px 24px rgba(59,130,246,0.20);
```

### 3.4 Configuração Tailwind Personalizada

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#EDFCF2',
          100: '#D3F9E0',
          200: '#AAF0C4',
          300: '#73E2A3',
          400: '#3CCB7F',
          500: '#16B364',
          600: '#099250',
          700: '#087443',
          800: '#095C37',
          900: '#084C2E',
          950: '#02291A',
        },
        accent: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        alt:     ['var(--font-alt)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #095C37 0%, #16B364 50%, #14B8A6 100%)',
        'gradient-cta':  'linear-gradient(135deg, #16B364 0%, #099250 100%)',
        'gradient-dark': 'linear-gradient(180deg, #02291A 0%, #084C2E 50%, #095C37 100%)',
        'gradient-radial-green': 'radial-gradient(ellipse at 30% 20%, rgba(22,179,100,0.15) 0%, transparent 60%)',
        'gradient-radial-blue': 'radial-gradient(ellipse at 70% 80%, rgba(59,130,246,0.10) 0%, transparent 60%)',
      },
      animation: {
        'scroll-left':  'scroll-left 30s linear infinite',
        'scroll-right': 'scroll-right 30s linear infinite',
        'fade-in':      'fade-in 0.6s ease-out forwards',
        'slide-up':     'slide-up 0.6s ease-out forwards',
        'float':        'float 6s ease-in-out infinite',
        'pulse-glow':   'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(22,179,100,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(22,179,100,0.6)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
```

---

## 4. ESTRUTURA DE SEÇÕES DA LANDING PAGE

A landing page deve seguir esta ordem estratégica (fluxo de conversão):

```
┌─────────────────────────────────────────────┐
│  01. NAVBAR (sticky, glassmorphism)         │
├─────────────────────────────────────────────┤
│  02. HERO SECTION (gradiente + imagem)      │
│      → CTA primário + WhatsApp              │
│      → Social proof rápida (badges)         │
├─────────────────────────────────────────────┤
│  03. BARRA DE CONFIANÇA                     │
│      → Logos operadoras em carrossel         │
│      → "+15 mil clientes" / "12 operadoras" │
├─────────────────────────────────────────────┤
│  04. BENEFÍCIOS / POR QUE ESCOLHER          │
│      → 4-6 cards com ícones animados        │
├─────────────────────────────────────────────┤
│  05. COMO FUNCIONA (Steps)                  │
│      → 3 passos simples com números         │
├─────────────────────────────────────────────┤
│  06. PLANOS POR PÚBLICO                     │
│      → Tabs: Individual | Familiar | MEI    │
│        | Empresarial | Sênior               │
│      → Card de cada categoria com features  │
├─────────────────────────────────────────────┤
│  07. TABELA COMPARATIVA DE PLANOS           │
│      → 3 planos: Essencial | Familiar       │
│        | Premium                            │
│      → Preços, coberturas, CTA por plano    │
├─────────────────────────────────────────────┤
│  08. OPERADORAS PARCEIRAS                   │
│      → Grid de logos com descrição breve     │
│      → Filtro por categoria                 │
├─────────────────────────────────────────────┤
│  09. DEPOIMENTOS / PROVA SOCIAL             │
│      → Carrossel com avatar, nome, nota     │
├─────────────────────────────────────────────┤
│  10. NÚMEROS / CONTADORES ANIMADOS          │
│      → +15 mil clientes, 12 operadoras,     │
│        2h cotação, 98% satisfação           │
├─────────────────────────────────────────────┤
│  11. FAQ (Accordion)                        │
│      → 8-10 perguntas frequentes            │
├─────────────────────────────────────────────┤
│  12. CTA FINAL / FORMULÁRIO                 │
│      → Seção escura com gradiente            │
│      → Formulário inline ou botão WhatsApp  │
├─────────────────────────────────────────────┤
│  13. FOOTER                                 │
│      → Links, contato, redes sociais        │
│      → Selos ANS, LGPD, SSL                │
└─────────────────────────────────────────────┘
```

---

## 5. CONTEÚDO E COPYWRITING POR SEÇÃO

### 5.1 HERO SECTION

**Badge superior:**
```
🩺 PLATAFORMA N°1 EM PLANOS DE SAÚDE
```

**Headline (H1):**
```
Seu plano de saúde vira uma decisão clara, segura e bem explicada.
```

**Sub-headline:**
```
A VivaBem compara operadoras, coberturas e preços em uma experiência simples
e consultiva para você escolher o melhor plano com confiança.
```

**CTA Primário:**
```
[🟢 Conhecer Planos] — botão gradient verde
```

**CTA Secundário:**
```
[📞 Falar com Consultor] — botão outline
```

**Micro social proof (abaixo dos CTAs):**
```
✓ Mais de 15 mil clientes atendidos
✓ Cotação em até 2h
✓ Consultores certificados ANS
```

**Estatísticas rápidas (badges):**
```
+15 mil         12            2h           ANS
Clientes      Operadoras    Cotação      Registro
atendidos     parceiras     média        regulado
```

### 5.2 BARRA DE CONFIANÇA (Logos)

**Título (pequeno, acima):**
```
PARCEIROS DE CONFIANÇA
```

**Subtítulo:**
```
Trabalhamos com as maiores operadoras do Brasil
```

**Logos para o carrossel infinito:**
```
Amil | Bradesco Saúde | SulAmérica | Unimed | Porto Seguro
Hapvida | NotreDame Intermédica | Qualicorp | MedSênior
One Health | Prevent Senior | São Cristóvão | Golden Cross
```

> As logos devem estar em `\vivabem-saude\public\images\logos_planos_saude\`

### 5.3 BENEFÍCIOS / POR QUE ESCOLHER A VIVABEM

**Título da seção:**
```
✦ POR QUE NOS ESCOLHER

Benefícios pensados para parecer produto premium
e continuar acessível.
```

**Cards (6 cards em grid 3x2):**

| Ícone | Título | Descrição |
|---|---|---|
| 🕐 | **Retorno comercial ágil** | A análise é rápida e completa. Até 2h no WhatsApp você já tem opções. |
| 💰 | **Preço justo, sem surpresa** | Comparamos mais de 12 operadoras para encontrar o melhor custo-benefício. |
| 🔍 | **Comparação clara e visual** | Planos lado a lado. Sem letras miúdas, sem confusão. |
| 🤝 | **Atendimento humanizado** | Com gente de verdade, de ponta a ponta. Nada de robôs. |
| 📋 | **Cobertura completa** | Consultas, exames, internações, cirurgias e atendimento 24h. |
| 🏥 | **Rede credenciada nacional** | Milhares de médicos e hospitais credenciados em todo o Brasil. |

### 5.4 COMO FUNCIONA

**Título:**
```
Como funciona nosso processo
```

**Subtítulo:**
```
Em 3 passos simples você encontra o plano ideal para sua realidade.
```

**Steps:**

```
PASSO 1 → Fale conosco
Envie uma mensagem pelo WhatsApp ou preencha o formulário.
Nosso consultor vai entender seu perfil.

PASSO 2 → Receba sua cotação personalizada
Comparamos operadoras, coberturas e valores.
Você recebe as melhores opções no seu WhatsApp.

PASSO 3 → Escolha e comece a usar
Contratação 100% digital, sem burocracia.
Seu plano ativo em até 24h.
```

### 5.5 PLANOS POR PÚBLICO (Tabs/Categorias)

**Título:**
```
Cada público entra em uma cena diferente e sai com a mesma clareza.
```

**Categorias (tabs horizontais com ícones):**

| Tab | Ícone | Público | Destaque |
|---|---|---|---|
| Individual | 👤 | Para quem mora sozinho e quer proteção básica | A partir de R$ 97/mês |
| Familiar | 👨‍👩‍👧‍👦 | Garanta a proteção de quem você mais ama | A partir de R$ 197/mês |
| MEI | 📄 | Use seu CNPJ para ter até 40% de desconto | A partir de R$ 149/mês |
| Empresarial | 🏢 | Ofereça saúde aos seus colaboradores | A partir de 2 vidas |
| Sênior (60+) | 🧓 | Planos com cobertura ampliada e sem carência | Condições especiais |

**Para cada tab, mostrar 1 card grande com:**
- Imagem contextual (família, profissional, etc.)
- 3-4 bullet points de benefícios
- Preço "a partir de"
- Botão CTA: "Simular meu plano →"

### 5.6 TABELA COMPARATIVA DE PLANOS

**Título:**
```
Escolha o plano perfeito para você
```

**Subtítulo:**
```
Planos a partir de R$ 97/mês com cobertura completa e rede credenciada nacional.
```

**Tabela / Cards lado a lado:**

| Feature | Essencial (R$ 97/mês) | Familiar (R$ 197/mês) ★ | Premium (R$ 297/mês) |
|---|---|---|---|
| Consultas médicas | ✓ Ilimitadas | ✓ Ilimitadas | ✓ Ilimitadas |
| Exames laboratoriais | ✓ Básicos | ✓ Completos | ✓ Completos + Imagem |
| Internações | ✓ Enfermaria | ✓ Apartamento | ✓ Apartamento + Suite |
| Pronto-socorro 24h | ✓ | ✓ | ✓ |
| Telemedicina | ✓ | ✓ | ✓ |
| Dependentes | — | Até 4 | Ilimitados |
| Check-up anual | — | ✓ | ✓ |
| Rede credenciada | Regional | Nacional | Nacional + Premium |
| Desconto farmácia | — | ✓ | ✓ |
| Cobertura internacional | — | — | ✓ |
| Concierge de saúde | — | — | ✓ |
| **CTA** | Começar Agora | ★ Escolher Familiar | Quero Premium |

> O card "Familiar" deve estar destacado (maior, badge "Recomendado", borda verde).

### 5.7 DEPOIMENTOS / PROVA SOCIAL

**Título:**
```
✦ VOZES REAIS

O que nossos clientes dizem
```

**Subtítulo:**
```
Histórias reais de quem escolheu cuidar da saúde com a gente.
```

**Depoimentos (mínimo 6 para o carrossel):**

```
1. "O VivaBem mudou minha vida. Consegui fazer todos os exames que precisava sem
   pagar nada a mais. O atendimento é rápido e eles me ajudaram muito."
   — Maria Santos, Professora ★★★★★

2. "Depois de pesquisar muito, escolhi a VivaBem e não me arrependo. A comparação
   dos planos é muito clara e nunca tive problemas com autorização."
   — João Oliveira, Engenheiro ★★★★★

3. "Minha família inteira está no plano. O atendimento dos dependentes é incrível,
   não diferencia nada. Recomendo para todos."
   — Ana Costa, Farmacêutica ★★★★★

4. "Como MEI, consegui um plano com 35% de desconto. Nem acreditei quando vi
   o valor. Atendimento de primeira."
   — Carlos Lima, Designer ★★★★★

5. "Para minha mãe de 68 anos, encontramos um plano sênior completo. A equipe
   foi muito paciente e explicou tudo com calma."
   — Fernanda Rocha, Administradora ★★★★★

6. "A página passa segurança e o atendimento entrega a mesma energia. Parece
   uma consultoria que realmente leu meu caso."
   — Carlos Simões, Empresário ★★★★★
```

### 5.8 NÚMEROS / CONTADORES

**Layout:** 4 colunas em linha, fundo com gradiente escuro

```
+15.000         12            2h            98%
Clientes      Operadoras    Tempo médio   Índice de
atendidos     parceiras     de cotação    satisfação
```

> Usar `react-countup` ou animação customizada com Framer Motion.
> Os números devem animar de 0 até o valor final quando entram na viewport.

### 5.9 FAQ

**Título:**
```
Tire suas dúvidas
```

**Subtítulo:**
```
Encontre respostas para as perguntas mais comuns sobre nossos planos.
```

**Perguntas (usar shadcn/ui Accordion):**

```
Q: Qual é a carência do plano de saúde?
A: Os prazos de carência variam por operadora e tipo de procedimento. Para consultas
e exames simples, geralmente é de 30 dias. Para procedimentos mais complexos como
internações, o prazo costuma ser de 180 dias. Para partos, 300 dias. Clientes vindos
de outros planos podem ter carências reduzidas mediante comprovação.

Q: Posso incluir dependentes no plano?
A: Sim! Cônjuges, filhos e dependentes legais podem ser incluídos. Nos planos
familiares, a inclusão é simplificada e pode gerar economia de até 30%.

Q: Como funciona a rede credenciada?
A: Você tem acesso a milhares de médicos, clínicas, laboratórios e hospitais
em todo o Brasil. A rede varia conforme o plano escolhido — nos planos Premium
e Familiar, a cobertura é nacional.

Q: O plano cobre exames e cirurgias?
A: Sim. Todos os nossos planos cobrem consultas, exames, internações e cirurgias
conforme determinação da ANS. Planos mais completos incluem cobertura adicional.

Q: Como faço para cancelar o plano?
A: O cancelamento pode ser solicitado a qualquer momento, sem multa. Basta entrar
em contato com nosso time pelo WhatsApp ou telefone.

Q: Existe plano sem coparticipação?
A: Sim, temos opções com e sem coparticipação. Planos com coparticipação têm
mensalidade menor, e você paga uma taxa simbólica ao usar o serviço.

Q: O que é portabilidade de plano?
A: Portabilidade permite trocar de operadora sem cumprir novas carências, desde
que o plano atual esteja ativo há mais de 2 anos (ou 3 para cobertura parcial).

Q: Vocês atendem empresas de que porte?
A: Atendemos desde MEIs e microempresas (a partir de 2 vidas) até grandes
corporações com centenas de funcionários. Cada porte tem condições diferenciadas.
```

### 5.10 CTA FINAL

**Título:**
```
Pronto para cuidar da sua saúde?
```

**Subtítulo:**
```
Entre em contato agora mesmo e receba uma cotação personalizada em minutos.
Nossos consultores estão prontos para ajudar você a escolher o melhor plano.
```

**Badges:**
```
✓ Atendimento humanizado | ✓ Cotação em até 2h | ✓ Compare diferentes planos
```

**CTAs:**
```
[🟢 Ligar Agora] — verde gradient
[⬜ Solicitar Cotação] — outline branco
```

**Informação adicional:**
```
Mais de 15 mil famílias e empresas já confiam na VivaBem.
Sua cotação é 100% gratuita e sem compromisso.
```

---

## 6. ANIMAÇÕES E EFEITOS VISUAIS

### 6.1 Filosofia de Animação

- **Performance first**: Animar apenas `transform` e `opacity` (GPU-accelerated)
- **Purposeful motion**: Toda animação deve guiar o olhar ou comunicar algo
- **Staggered reveals**: Elementos entram sequencialmente, não todos de uma vez
- **Easing natural**: Usar `ease-out` para entradas, `ease-in-out` para loops

### 6.2 Animações por Seção

```typescript
// Configuração base para animações Framer Motion

// Fade in ao entrar na viewport
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

// Stagger container
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  },
  viewport: { once: true }
};

// Stagger item
const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Scale in para cards
const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Slide in lateral
const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
};
```

### 6.3 Efeitos Especiais

#### Navbar com Glassmorphism (muda no scroll)

```typescript
// Navbar: transparente no topo, glassmorphism ao scrollar
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Classes condicionais:
// Sem scroll: bg-transparent
// Com scroll: bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg
```

#### Hero Background Animado

```css
/* Gradient mesh animado no hero */
.hero-bg {
  background:
    radial-gradient(ellipse at 20% 30%, rgba(22,179,100,0.2) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(59,130,246,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(20,184,166,0.1) 0%, transparent 60%),
    linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%);
  animation: gradientShift 8s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%, 100% 50%, 50% 50%;
  }
  50% {
    background-position: 30% 30%, 70% 80%, 50% 60%;
  }
}
```

#### Hover Effects nos Cards

```css
/* Card com elevação e glow ao hover */
.card-hover {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(22, 179, 100, 0.15);
}

/* Ícone do card rotaciona levemente */
.card-hover:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
  transition: transform 0.3s ease;
}
```

#### Botões com Shimmer Effect

```css
/* Efeito shimmer no CTA principal */
.btn-shimmer {
  position: relative;
  overflow: hidden;
}

.btn-shimmer::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 40%,
    rgba(255,255,255,0.3) 50%,
    transparent 60%
  );
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%   { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
```

#### Parallax Sutil nas Imagens

```typescript
// Parallax com Framer Motion
<motion.div
  style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
>
  <Image src="/hero-image.jpg" ... />
</motion.div>
```

---

## 7. CARROSSEL DE LOGOS DAS OPERADORAS

### Implementação — Scroll Infinito com CSS Puro

O carrossel deve ser um scroll horizontal infinito sem JavaScript de animação. Usa CSS `animation` com duplicação dos elementos.

```typescript
// LogoCarousel.tsx
'use client';

import Image from 'next/image';

const logos = [
  { src: '/images/logos_planos_saude/amil.png', alt: 'Amil' },
  { src: '/images/logos_planos_saude/bradesco.png', alt: 'Bradesco Saúde' },
  { src: '/images/logos_planos_saude/sulamerica.png', alt: 'SulAmérica' },
  { src: '/images/logos_planos_saude/unimed.png', alt: 'Unimed' },
  { src: '/images/logos_planos_saude/porto-seguro.png', alt: 'Porto Seguro' },
  { src: '/images/logos_planos_saude/hapvida.png', alt: 'Hapvida' },
  { src: '/images/logos_planos_saude/notredame.png', alt: 'NotreDame Intermédica' },
  { src: '/images/logos_planos_saude/qualicorp.png', alt: 'Qualicorp' },
  { src: '/images/logos_planos_saude/medsenior.png', alt: 'MedSênior' },
  { src: '/images/logos_planos_saude/one-health.png', alt: 'One Health' },
  { src: '/images/logos_planos_saude/prevent-senior.png', alt: 'Prevent Senior' },
  { src: '/images/logos_planos_saude/golden-cross.png', alt: 'Golden Cross' },
];

export function LogoCarousel() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 z-10 h-full w-24
                      bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24
                      bg-gradient-to-l from-white to-transparent" />

      {/* Track — duplicado para loop infinito */}
      <div className="flex animate-scroll-left gap-12 items-center">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 w-[140px] h-[60px] relative
                                   grayscale hover:grayscale-0 transition-all
                                   duration-300 opacity-60 hover:opacity-100">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
```

**Efeitos do carrossel:**
- Logos em grayscale por padrão, coloridas no hover
- Opacidade reduzida (60%), 100% no hover
- Fade gradient nas bordas esquerda e direita
- Velocidade: 30s para um ciclo completo
- Pausa no hover do container (opcional)

```css
/* Pausa no hover */
.logo-track:hover {
  animation-play-state: paused;
}
```

### Variação: Duas Linhas em Direções Opostas

Para efeito visual premium, usar 2 linhas de carrossel:
- **Linha 1**: scroll para esquerda (operadoras 1-6)
- **Linha 2**: scroll para direita (operadoras 7-12)

---

## 8. IMAGENS GRATUITAS — FONTES E SUGESTÕES

### Fontes de Imagens (todas com licença comercial gratuita)

| Fonte | URL | Tipo |
|---|---|---|
| **Unsplash** | https://unsplash.com/s/photos/health | Fotos HD grátis, sem atribuição |
| **Pexels** | https://www.pexels.com/search/health%20and%20wellness/ | Fotos e vídeos grátis |
| **Pixabay** | https://pixabay.com/pt/images/search/saude/ | Fotos, vetores, ilustrações |
| **Freepik** | https://www.freepik.com/free-photos/health | Fotos (requer atribuição no plano free) |
| **Undraw** | https://undraw.co/illustrations | Ilustrações SVG customizáveis |
| **Storyset** | https://storyset.com/ | Ilustrações animadas gratuitas |
| **Humaaans** | https://www.humaaans.com/ | Ilustrações de pessoas customizáveis |

### Sugestões de Busca por Seção

```
HERO:
  Unsplash: "family health care smiling"
  Pexels: "doctor patient consultation modern"
  Buscar: famílias diversas, sorridentes, cenário clínico moderno

BENEFÍCIOS:
  Unsplash: "digital health technology"
  Pexels: "stethoscope modern minimal"
  Buscar: objetos médicos em fundo clean, tecnologia saúde

PLANOS POR PÚBLICO:
  Individual: "young professional confident" / "jovem saudável"
  Familiar:   "happy family children playing" / "família parque"
  MEI:        "entrepreneur laptop cafe" / "empreendedor"
  Empresarial: "corporate team meeting" / "equipe escritório"
  Sênior:     "active senior couple walking" / "casal idoso ativo"

CTA FINAL:
  Unsplash: "woman smiling phone call"
  Pexels: "healthcare team professional"

BACKGROUNDS / TEXTURAS:
  Unsplash: "abstract green gradient"
  Buscar: texturas orgânicas verdes, patterns médicos sutis
```

### Imagens Recomendadas (Unsplash — IDs diretos)

Estas são sugestões de estilo. Busque imagens semelhantes:

```
Hero:       Hush Naidoo (médico moderno)
            National Cancer Institute (equipe médica)
Família:    Tyler Nix (família no parque)
            Jessica Rockowitz (mãe e filha)
Sênior:     Matt Bennett (casal idoso caminhando)
            Esther Ann (senhora sorridente)
Tecnologia: Ani Kolleshi (equipamento médico)
            Owen Beard (laptop saúde)
```

> **IMPORTANTE**: Sempre baixe as imagens e salve em `/public/images/`.
> Use `next/image` com `placeholder="blur"` para lazy loading elegante.
> Dimensões recomendadas: Hero 1920x1080, Cards 800x600, Avatars 200x200.

---

## 9. COMPONENTES REUTILIZÁVEIS

### Estrutura de Pastas

```
src/
├── app/
│   ├── layout.tsx          # Root layout com fontes e metadata
│   ├── page.tsx            # Landing page principal
│   └── globals.css         # CSS global + variáveis
│
├── components/
│   ├── ui/                 # shadcn/ui — componentes base
│   │   ├── button.tsx
│   │   ├── accordion.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   ├── sheet.tsx
│   │   └── dialog.tsx
│   │
│   ├── layout/             # Componentes estruturais
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   │
│   ├── sections/           # Cada seção da landing page
│   │   ├── HeroSection.tsx
│   │   ├── TrustBar.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── PlansByAudience.tsx
│   │   ├── PricingTable.tsx
│   │   ├── PartnersGrid.tsx
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── StatsCounter.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTAFinal.tsx
│   │
│   ├── shared/             # Componentes reutilizáveis genéricos
│   │   ├── LogoCarousel.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── PlanCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── BenefitCard.tsx
│   │   ├── StepCard.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── ScrollToTop.tsx
│   │
│   └── animations/         # Wrappers de animação Framer Motion
│       ├── FadeInView.tsx
│       ├── StaggerContainer.tsx
│       ├── SlideInView.tsx
│       └── ParallaxWrapper.tsx
│
├── lib/
│   ├── utils.ts            # cn() helper, formatters
│   └── constants.ts        # Dados estáticos (planos, depoimentos, FAQ)
│
├── hooks/
│   ├── useScrollPosition.ts
│   └── useIntersection.ts
│
└── types/
    └── index.ts            # TypeScript interfaces
```

### Componentes-Chave Detalhados

#### SectionHeader

```typescript
// Reutilizável em TODAS as seções
interface SectionHeaderProps {
  badge?: string;          // "✦ POR QUE NOS ESCOLHER"
  title: string;           // "Benefícios exclusivos..."
  subtitle?: string;       // Texto auxiliar
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
}
```

#### WhatsAppButton (3 variações)

```typescript
// 1. FLUTUANTE — canto inferior direito, sempre visível
<WhatsAppFloating />
// → Ícone + pulse animation + tooltip "Fale conosco"

// 2. CTA INLINE — dentro de seções
<WhatsAppCTA text="Solicitar Cotação" />
// → Botão verde WhatsApp com ícone

// 3. STICKY BAR MOBILE — fixo na parte inferior em mobile
<WhatsAppStickyBar />
// → Barra fixa com "Falar no WhatsApp" + ícone telefone
```

#### AnimatedCounter

```typescript
// Contador que anima de 0 ao valor final ao entrar na viewport
interface AnimatedCounterProps {
  end: number;           // 15000
  suffix?: string;       // "+"
  prefix?: string;       // "R$"
  duration?: number;     // 2 (segundos)
  label: string;         // "Clientes atendidos"
}
```

---

## 10. RESPONSIVIDADE

### Breakpoints Tailwind (Mobile-First)

```
Base:   0px+     → Mobile (padrão)
sm:     640px+   → Smartphone landscape
md:     768px+   → Tablets
lg:     1024px+  → Laptops
xl:     1280px+  → Desktop
2xl:    1536px+  → Large screens
```

### Regras Detalhadas por Breakpoint

#### Mobile (< 640px)

```
NAVBAR:
  - Logo reduzido
  - Hambúrguer menu → abre Sheet (shadcn/ui) lateral
  - CTA "Ligar" no header (ícone telefone)

HERO:
  - Layout vertical: texto → imagem abaixo
  - Texto centralizado
  - Font-size: clamp reduzido (~70% do desktop)
  - CTAs: stack vertical, full-width
  - Badges: 2x2 grid em vez de 4 colunas

CARDS:
  - Grid 1 coluna, full-width
  - Gap reduzido: 16px

TABELA DE PREÇOS:
  - Cards empilhados verticalmente (1 por vez)
  - Scroll horizontal opcional com Embla
  - Card "Recomendado" primeiro

TABS DE PLANOS:
  - Scroll horizontal nas tabs
  - Ou transformar em Accordion

CARROSSEL LOGOS:
  - Logos menores (100px wide)
  - Velocidade reduzida (40s)

FAQ:
  - Full-width accordion
  - Texto: 14px

CTA STICKY:
  - Barra fixa no bottom: 60px height
  - "Falar no WhatsApp" + ícone
  - z-index: 50

PADDING:
  - Lateral: 16px (1rem)
  - Vertical seções: 48px (3rem)
```

#### Tablet (640px - 1024px)

```
NAVBAR:
  - Links visíveis (sem hambúrguer)
  - CTA "Cotação Rápida" visível

HERO:
  - 2 colunas: 50/50
  - Imagem ao lado do texto

CARDS:
  - Grid 2 colunas
  - Gap: 24px

TABELA DE PREÇOS:
  - 2 cards visíveis + scroll para 3°
  - Ou 3 cards menores

PADDING:
  - Lateral: 24-32px
  - Vertical seções: 64px
```

#### Desktop (> 1024px)

```
NAVBAR:
  - Layout completo com todos os links
  - Botão CTA destacado à direita

HERO:
  - 2 colunas: 55% texto / 45% imagem
  - Badges em 4 colunas inline

CARDS:
  - Grid 3 colunas
  - Gap: 32px

TABELA DE PREÇOS:
  - 3 cards lado a lado
  - Card central elevado e maior

EFEITOS:
  - Hover effects ativados
  - Parallax ativado
  - Cursor effects (opcional)

PADDING:
  - Container: max-width 1280px centralizado
  - Lateral: 2rem
  - Vertical seções: clamp(4rem, 8vw, 8rem)
```

### Testes de Responsividade Obrigatórios

```
Mobile:
  - [ ] iPhone SE (375 x 667)
  - [ ] iPhone 14 (390 x 844)
  - [ ] Samsung Galaxy S21 (360 x 800)
  - [ ] iPhone 14 Pro Max (430 x 932)

Tablet:
  - [ ] iPad Mini (768 x 1024)
  - [ ] iPad Air (820 x 1180)
  - [ ] iPad Pro 12.9 (1024 x 1366)

Desktop:
  - [ ] MacBook Air 13" (1440 x 900)
  - [ ] Full HD (1920 x 1080)
  - [ ] 2K (2560 x 1440)
```

---

## 11. SEO E PERFORMANCE

### Meta Tags Completas

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://vivabem-saude.com.br'),
  title: {
    default: 'VivaBem Saúde | Planos de Saúde com Cobertura Nacional',
    template: '%s | VivaBem Saúde',
  },
  description: 'Compare planos de saúde das melhores operadoras do Brasil. Cotação gratuita em até 2h. Atendimento humanizado. Planos Individual, Familiar, MEI e Empresarial a partir de R$ 97/mês.',
  keywords: [
    'plano de saúde', 'planos de saúde', 'convênio médico',
    'cotação plano de saúde', 'plano de saúde familiar',
    'plano de saúde MEI', 'plano de saúde empresarial',
    'Amil', 'Bradesco Saúde', 'SulAmérica', 'Unimed',
    'plano de saúde Brasília', 'plano de saúde São Paulo',
    'plano de saúde barato', 'melhor plano de saúde 2026',
  ],
  openGraph: {
    title: 'VivaBem Saúde — Seu plano de saúde sem complicação',
    description: 'Compare operadoras e encontre o plano ideal para você e sua família. Cotação gratuita.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    locale: 'pt_BR',
    siteName: 'VivaBem Saúde',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VivaBem Saúde — Planos de Saúde',
    description: 'Compare e encontre o melhor plano de saúde para você.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://vivabem-saude.com.br' },
};
```

### Performance Targets

```
Core Web Vitals (obrigatório):
  ✓ LCP  < 2.5s   (Largest Contentful Paint)
  ✓ INP  < 200ms  (Interaction to Next Paint)
  ✓ CLS  < 0.1    (Cumulative Layout Shift)

Lighthouse Score (meta):
  ✓ Performance:   > 90
  ✓ Accessibility: > 95
  ✓ Best Practices: > 90
  ✓ SEO:           > 95
```

### Otimizações Técnicas

```
IMAGENS:
  ✓ next/image com formato WebP/AVIF automático
  ✓ Lazy loading nativo (loading="lazy")
  ✓ Placeholder blur (placeholder="blur")
  ✓ Sizes adequados para cada breakpoint
  ✓ Priority para imagem do hero (loading="eager")

FONTES:
  ✓ next/font (self-hosted, sem layout shift)
  ✓ font-display: swap
  ✓ Preload das fontes críticas

CSS:
  ✓ Tailwind purge automático (só classes usadas)
  ✓ CSS crítico inline (Next.js automático)
  ✓ Evitar @import em cascata

JAVASCRIPT:
  ✓ Code splitting por rota (App Router)
  ✓ Dynamic imports para componentes pesados
  ✓ 'use client' apenas onde necessário

ANIMAÇÕES:
  ✓ will-change nas propriedades animadas
  ✓ Apenas transform + opacity (GPU compositing)
  ✓ Carrossel: CSS-only animation (sem requestAnimationFrame)
  ✓ Intersection Observer para trigger (não scroll listener)
```

### Schema Markup (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "VivaBem Saúde",
  "description": "Consultoria especializada em planos de saúde com cobertura nacional",
  "url": "https://vivabem-saude.com.br",
  "logo": "https://vivabem-saude.com.br/images/logo.png",
  "telephone": "+55-71-XXXX-XXXX",
  "email": "contato@vivabem.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 1000",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01310-100",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-23.5505",
    "longitude": "-46.6333"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Brazil"
  },
  "priceRange": "R$ 97 - R$ 500",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://instagram.com/vivabem.saude",
    "https://facebook.com/vivabem.saude"
  ]
}
```

---

## 12. CTAs ESTRATÉGICOS

### Hierarquia de CTAs

| Nível | Tipo | Texto | Estilo | Localização |
|---|---|---|---|---|
| **Primário** | Botão gradient | "Conhecer Planos" | Verde gradient + shimmer | Hero, CTA Final |
| **Primário** | WhatsApp | "Falar com Consultor" | Verde WhatsApp + ícone | Hero, Flutuante |
| **Secundário** | Outline | "Simular meu plano →" | Outline verde, hover fill | Cards de planos |
| **Secundário** | Outline | "Ver cobertura completa →" | Link com seta | Tabela de preços |
| **Terciário** | Link | "Saiba mais →" | Texto verde, underline | Benefícios, FAQ |

### Regras de Posicionamento

```
1. ACIMA DA DOBRA:
   → Sempre 2 CTAs visíveis (primário + secundário)
   → Sem necessidade de scroll para encontrar ação

2. A CADA 2 SEÇÕES:
   → Inserir CTA intermediário (botão ou link)
   → Variar entre "Solicitar Cotação" e "Falar no WhatsApp"

3. DENTRO DOS CARDS DE PLANOS:
   → Cada card com seu próprio CTA
   → Card destacado: botão preenchido
   → Outros cards: botão outline

4. CTA FINAL:
   → Seção exclusiva com fundo escuro
   → Máximo impacto visual
   → Formulário OU botão WhatsApp (não ambos)

5. WHATSAPP FLUTUANTE:
   → Visível em TODAS as páginas
   → Canto inferior direito
   → Pulse animation sutil
   → Z-index alto (sobre tudo)

6. MOBILE STICKY BAR:
   → Aparece após scroll > 500px
   → Fixo na parte inferior
   → "Falar no WhatsApp" + ícone
   → Desaparece quando CTA Final está visível
```

### Textos Persuasivos para CTAs

```
Urgência sutil:
  "Cotação gratuita — sem compromisso"
  "Mais de 500 planos analisados este mês"
  "Atendimento disponível agora"

Benefício direto:
  "Encontrar meu plano ideal"
  "Comparar operadoras grátis"
  "Receber cotação personalizada"

Social proof:
  "Junte-se a +15 mil famílias"
  "98% de satisfação dos clientes"

Técnica de escassez (usar com moderação):
  "Últimas vagas com preço promocional"
  "Valores válidos até [data]"
```

---

## 13. REFERÊNCIAS VISUAIS DOS CONCORRENTES

### Análise dos 4 Sites de Referência

#### 1. Floripa Saúde (floripaps.com.br)

```
PONTOS FORTES:
  ✓ Paleta verde escuro elegante (#0F3D3E → #1A7431)
  ✓ Foto de consultor transmite confiança pessoal
  ✓ Carrossel de logos das operadoras (2 linhas)
  ✓ Seção "Garantimos sua tranquilidade" com imagem grande
  ✓ Cards de categorias (Empresarial, Familiar, MEI, Sênior)
  ✓ CTA WhatsApp bem posicionado
  ✓ Footer limpo e completo

O QUE ABSORVER:
  → Tom visual verde escuro premium
  → Foto humana transmitindo confiança
  → Estrutura de categorias por público
  → Badges "Cotação em 15 min" / "Corretores Certificados ANS"
```

#### 2. Planos de Saúde DF (planosdesaudedf.com.br)

```
PONTOS FORTES:
  ✓ Formulário de simulação direto no hero
  ✓ FAQ extenso (10+ perguntas)
  ✓ Grid de logos das operadoras (2 fileiras)
  ✓ Blog integrado com artigos SEO
  ✓ Seção de operadoras empresariais
  ✓ Contato com endereço + mapa
  ✓ Múltiplos CTAs ao longo da página

O QUE ABSORVER:
  → Formulário no hero (para conversão direta)
  → FAQ robusto (ajuda SEO e reduz dúvidas)
  → Grid de operadoras empresariais com descrição
```

#### 3. Plano de Saúde Brasília DF (planodesaudebrasiliadf.com.br)

```
PONTOS FORTES:
  ✓ Conteúdo SEO extremamente denso
  ✓ Tabs por tipo de plano (Individual, Familiar, MEI, Empresarial)
  ✓ Descrição detalhada de cada operadora
  ✓ Grid visual de logos das operadoras
  ✓ Calculadora de plano online
  ✓ Blog extenso com artigos

O QUE ABSORVER:
  → Profundidade do conteúdo SEO
  → Descrição por operadora (confiança)
  → Calculadora de plano (interatividade)
```

#### 4. VivaBem Atual (localhost:3001)

```
PONTOS FORTES ATUAIS:
  ✓ Estrutura de seções já definida
  ✓ Pricing table com 3 planos
  ✓ FAQ com accordion
  ✓ Depoimentos com avatar

O QUE PRECISA MELHORAR:
  ✗ Falta carrossel de logos (operadoras)
  ✗ Falta animações e micro-interações
  ✗ Gradientes e efeitos visuais ausentes
  ✗ Imagens estáticas, sem vida
  ✗ Hero fraco — sem imagem impactante
  ✗ Sem WhatsApp flutuante
  ✗ Sem sticky CTA no mobile
  ✗ Cores muito suaves, falta punch
  ✗ Sem números/contadores animados
  ✗ Sem seção "Como funciona"
  ✗ Sem seção de operadoras parceiras
```

### Mapa de Melhorias vs Concorrência

```
FUNCIONALIDADE              | Floripa | DF  | BSB | VivaBem Atual | VivaBem Novo
─────────────────────────── | ─────── | ─── | ─── | ───────────── | ────────────
Hero com imagem             |    ✓    |  ✓  |  ~  |       ~       |      ✓✓
Formulário no hero          |    ~    |  ✓  |  ✓  |       ✗       |      ✓
Carrossel logos operadoras  |    ✓    |  ✓  |  ✓  |       ✗       |      ✓✓
Cards por público           |    ✓    |  ~  |  ✓  |       ✗       |      ✓✓
Tabela comparativa          |    ✗    |  ~  |  ~  |       ✓       |      ✓✓
Depoimentos                 |    ✗    |  ✗  |  ✗  |       ✓       |      ✓✓
Contadores animados         |    ✗    |  ~  |  ✗  |       ✗       |      ✓✓
FAQ robusto                 |    ~    |  ✓  |  ~  |       ✓       |      ✓✓
WhatsApp flutuante          |    ✓    |  ✓  |  ✗  |       ✗       |      ✓✓
Animações scroll            |    ✗    |  ✗  |  ✗  |       ✗       |      ✓✓
Glassmorphism               |    ✗    |  ✗  |  ✗  |       ✗       |      ✓✓
Gradientes premium          |    ~    |  ✗  |  ✗  |       ~       |      ✓✓
Mobile-first                |    ✓    |  ~  |  ~  |       ✓       |      ✓✓
Performance (Lighthouse)    |    ~    |  ~  |  ~  |       ✓       |      ✓✓
```

---

## 14. CHECKLIST DE ENTREGA

### Fase 1 — Foundation (Dia 1-2)

- [ ] Setup Next.js 14 + TypeScript + Tailwind CSS
- [ ] Configurar Design System (cores, fontes, tokens)
- [ ] Instalar dependências (Framer Motion, shadcn/ui, Embla, etc.)
- [ ] Criar componentes base (Container, Section, SectionHeader)
- [ ] Configurar `tailwind.config.ts` com tokens customizados
- [ ] Setup `globals.css` com variáveis CSS

### Fase 2 — Core Sections (Dia 3-5)

- [ ] Navbar (sticky, glassmorphism, responsive menu)
- [ ] Hero Section (headline, CTAs, imagem, badges)
- [ ] Trust Bar (carrossel de logos infinito)
- [ ] Benefícios (6 cards animados com stagger)
- [ ] Como Funciona (3 steps com números)

### Fase 3 — Conversion Sections (Dia 6-8)

- [ ] Planos por Público (tabs interativos)
- [ ] Tabela Comparativa (3 cards com destaque)
- [ ] Operadoras Parceiras (grid com logos)
- [ ] Depoimentos (carrossel Embla)
- [ ] Contadores Animados (react-countup)

### Fase 4 — Polish & CTA (Dia 9-10)

- [ ] FAQ (accordion shadcn/ui)
- [ ] CTA Final (seção escura, formulário)
- [ ] Footer (links, contato, selos)
- [ ] WhatsApp flutuante + sticky bar mobile
- [ ] Scroll to top button

### Fase 5 — Animações & Efeitos (Dia 11-12)

- [ ] Framer Motion em todas as seções
- [ ] Shimmer nos botões CTA
- [ ] Parallax no hero
- [ ] Gradient mesh animado
- [ ] Hover effects refinados
- [ ] Counter animation on scroll

### Fase 6 — Responsividade & QA (Dia 13-14)

- [ ] Testar todos os breakpoints
- [ ] Ajustar mobile (375px)
- [ ] Ajustar tablet (768px)
- [ ] Lighthouse audit > 90
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Acessibilidade (WCAG AA)

### Fase 7 — Deploy (Dia 15)

- [ ] Build de produção sem erros
- [ ] Deploy Vercel / Netlify
- [ ] Configurar domínio
- [ ] Testar formulário em produção
- [ ] Testar WhatsApp link em produção
- [ ] Google Analytics / Tag Manager
- [ ] Monitorar Core Web Vitals

---

## NOTAS FINAIS

### Princípios Norteadores

```
1. "Uma landing de saúde que parece consultoria, não tabela fria."
2. "Cada pixel deve construir confiança."
3. "Mobile não é adaptação — é o design original."
4. "Animações guiam; nunca distraem."
5. "O melhor CTA é o que não parece CTA — parece o próximo passo natural."
```

### Diferencial Competitivo Visual

Enquanto os concorrentes usam templates WordPress genéricos com cores chapadas
e layouts previsíveis, o VivaBem deve se destacar por:

1. **Gradientes mesh animados** no background (não estático)
2. **Glassmorphism** refinado na navbar e cards premium
3. **Micro-interações** em cada hover (escala, glow, rotação sutil)
4. **Carrossel infinito** de logos suave e elegante (CSS puro)
5. **Contadores que animam** ao entrar na viewport
6. **Tipografia com personalidade** (Outfit + Plus Jakarta Sans)
7. **Paleta consistente** verde/azul/branco com acentos teal
8. **Responsividade impecável** testada em 10+ dispositivos
9. **Performance > 90** no Lighthouse
10. **Conteúdo persuasivo** que conversa, não apenas informa

---

*Prompt v1.0 — Março 2026*
*VivaBem Saúde — Redesign Completo*
*Criado com base em análise de 4 concorrentes + pesquisa de UX/CRO para saúde*
