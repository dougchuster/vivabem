"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight, ShieldCheck, Briefcase, Heart, Users,
  Edit3, ClipboardCheck, CheckCircle2, Check,
  Building2, ChevronDown, PhoneCall, Stethoscope,
  Star, ArrowRight, ArrowLeft, Clock, MapPin,
  Zap, Award, TrendingUp, Smile, Baby, Activity,
} from "lucide-react"

/* ══ DATA ══════════════════════════════════════════════════════ */

const faqs = [
  {
    q: "A consultoria da VivaBem é realmente gratuita?",
    a: "Sim, 100% gratuita. Nossa remuneração vem diretamente das operadoras parceiras (Amil, Bradesco, SulAmérica, Unimed etc.) como corretagem oficial. Você não paga nada a mais — pelo contrário, muitas vezes conseguimos valores menores do que contratar direto com a operadora.",
  },
  {
    q: "Terei que cumprir carência se mudar de um plano para outro?",
    a: "Na grande maioria dos casos conseguimos o aproveitamento total ou parcial das carências do seu plano atual, permitindo transições seguras sem você ficar descoberto. Nosso time analisa cada situação individualmente.",
  },
  {
    q: "O meu CNPJ MEI precisa ter quantos meses ativos?",
    a: "Para liberação comercial com valores corporativos, a maioria das operadoras exige no mínimo 6 meses de ativação do CNPJ MEI e contratação a partir de 2 vidas (você + 1 familiar ou funcionário).",
  },
  {
    q: "Como funciona a coparticipação em planos empresariais?",
    a: "No modelo com coparticipação, a mensalidade fixa é significativamente menor. Paga-se uma taxa pequena e tabelada apenas quando utiliza serviços como consultas e exames, gerando enorme economia a longo prazo para empresa e colaboradores.",
  },
  {
    q: "Atendem em todo o Brasil?",
    a: "Sim! Atendemos em todo o território nacional via WhatsApp, e-mail e videochamada. A recomendação é sempre ajustada para a rede credenciada da sua cidade ou região.",
  },
  {
    q: "Quanto tempo leva para ativar um plano?",
    a: "Após a aprovação e envio da documentação, a maioria dos planos é ativada em 3 a 7 dias úteis. Para planos MEI e empresariais o processo pode levar até 10 dias úteis dependendo da operadora.",
  },
]

const partnerLogos = [
  { name: "Amil",           src: "/images/logos_planos_saude/amil.png",                   width: 100 },
  { name: "Bradesco Saúde", src: "/images/logos_planos_saude/bradesco-1.png",             width: 130 },
  { name: "MedSênior",      src: "/images/logos_planos_saude/logo-medsenior-brasilia.png", width: 140 },
  { name: "Select Saúde",   src: "/images/logos_planos_saude/logo_SelectSaude.png",        width: 110 },
  { name: "SulAmérica",     src: "/images/logos_planos_saude/sul-america-saude.png",       width: 130 },
  { name: "Tempmed",        src: "/images/logos_planos_saude/tempmed.png",                 width: 150 },
  { name: "Unimed",         src: "/images/logos_planos_saude/unimed.png",                  width: 120 },
]
const duplicatedLogos = [...partnerLogos, ...partnerLogos]
const shuffledLogos = [
  partnerLogos[4], // SulAmérica
  partnerLogos[0], // Amil
  partnerLogos[6], // Unimed
  partnerLogos[2], // MedSênior
  partnerLogos[5], // Tempmed
  partnerLogos[1], // Bradesco
  partnerLogos[3], // Select Saúde
]
const staggeredLogos  = [...shuffledLogos, ...shuffledLogos]

const planCards = [
  {
    title: "Plano Individual",
    icon: <Heart className="w-6 h-6" />,
    tag: "Cobertura Pessoal",
    subtitle: "Proteção completa para você, com acesso aos melhores especialistas e hospitais da sua região.",
    features: [
      "Consultas com especialistas",
      "Exames laboratoriais e imagem",
      "Pronto-socorro 24 horas",
      "Internações com acompanhante",
    ],
    price: "A partir de R$ 189/mês",
    color: "#EF4444",
    colorLight: "#FEF2F2",
    img: "/images/site/showcase_consultation.png",
  },
  {
    title: "Plano Familiar",
    icon: <Users className="w-6 h-6" />,
    tag: "Mais Escolhido",
    subtitle: "Para toda a família, com mensalidade que cabe no orçamento e cobertura premium em obstetrícia.",
    features: [
      "Ampla rede referenciada local",
      "Cobertura premium em obstetrícia",
      "Opções de coparticipação flexíveis",
      "Pediatria e neonatologia inclusas",
    ],
    price: "A partir de R$ 340/mês",
    color: "#C9952A",
    colorLight: "#FEF0E2",
    img: "/images/site/showcase_digital.png",
  },
  {
    title: "Vantagem MEI",
    icon: <ClipboardCheck className="w-6 h-6" />,
    tag: "Maior Economia",
    subtitle: "Um CNPJ ativo libera tabelas comerciais exclusivas com valores incrivelmente competitivos.",
    features: [
      "Tabelas exclusivas para MEI",
      "Carências significativamente menores",
      "A partir de 2 vidas",
      "Inclusão de dependentes",
    ],
    price: "A partir de R$ 220/mês",
    color: "#8B5CF6",
    colorLight: "#F5F3FF",
    img: "/images/site/showcase_wellness.png",
  },
  {
    title: "Empresarial PME",
    icon: <Briefcase className="w-6 h-6" />,
    tag: "Atração de Talentos",
    subtitle: "Redução de custos e implantação completa para RH, com gestão inteligente de sinistralidade.",
    features: [
      "Tabelas até 40% mais baratas",
      "Inclusão de diretores premium",
      "Gestão inteligente de sinistros",
      "Suporte dedicado ao RH",
    ],
    price: "A partir de R$ 290/vida/mês",
    color: "#3B82F6",
    colorLight: "#EFF6FF",
    img: "/images/site/hero_family.png",
  },
]

const testimonials = [
  {
    quote: "A VivaBem nos ajudou a encontrar o plano perfeito para nossa família. O atendimento foi impecável e conseguimos um valor 30% menor do que estávamos pagando antes. Recomendo de olhos fechados!",
    name: "Helena Souza",
    role: "Professora, São Paulo",
    rating: 5,
    img: "/images/site/avatar_1.png",
    plan: "Plano Familiar",
  },
  {
    quote: "Como MEI, eu não sabia que tinha acesso a tabelas tão boas. Minha família inteira agora tem plano premium pagando o que eu pagava sozinho antes. O processo foi rápido e sem burocracia.",
    name: "Ricardo Ferreira",
    role: "Designer Freelancer, Campinas",
    rating: 5,
    img: "/images/site/avatar_2.png",
    plan: "Vantagem MEI",
  },
  {
    quote: "Implantamos o plano empresarial para toda nossa equipe em menos de 2 semanas. A redução de custos foi imediata e os colaboradores ficaram muito satisfeitos com a rede credenciada.",
    name: "Mariana Costa",
    role: "Gestora de RH, 45 funcionários",
    rating: 5,
    img: "/images/site/avatar_3.png",
    plan: "Empresarial PME",
  },
  {
    quote: "Depois dos 60 anos fica difícil encontrar planos com preços justos. A VivaBem encontrou uma solução que inclui minha cardiologista preferida sem me arruinar financeiramente. Muito grato!",
    name: "João Alves",
    role: "Aposentado, Rio de Janeiro",
    rating: 5,
    img: "/images/site/avatar_1.png",
    plan: "Sênior 60+",
  },
]

const blogPosts = [
  {
    title: "Como escolher o plano de saúde ideal para sua família em 2025",
    excerpt: "Entenda os principais critérios: rede credenciada, coparticipação, carências e custo-benefício para tomar a melhor decisão.",
    category: "Guia Familiar",
    readTime: "8 min",
    date: "15 Jan 2025",
    img: "/images/site/blog_tech.png",
    accent: "#1A4A2E",
  },
  {
    title: "MEI: Tudo que você precisa saber para contratar plano empresarial",
    excerpt: "Requisitos, documentação, tempo mínimo de CNPJ e como aproveitar as melhores tabelas para autônomos e microempreendedores.",
    category: "Para MEI",
    readTime: "6 min",
    date: "28 Dez 2024",
    img: "/images/site/blog_meditation.png",
    accent: "#C9952A",
  },
  {
    title: "Plano coletivo vs individual: qual vale mais a pena?",
    excerpt: "Análise comparativa dos dois modelos: preços, reajustes, coberturas e quando cada formato é mais vantajoso para diferentes perfis.",
    category: "Educação",
    readTime: "5 min",
    date: "10 Dez 2024",
    img: "/images/site/blog_meal.png",
    accent: "#1A4A2E",
  },
]

const benefits = [
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Análise Totalmente Gratuita",    desc: "Sem taxa de consultoria, sem surpresas. Você só paga a mensalidade do plano que escolher." },
  { icon: <Clock className="w-6 h-6" />,       title: "Resposta em até 24h",            desc: "Enviamos sua cotação comparativa no mesmo dia útil, com análise detalhada por especialistas." },
  { icon: <TrendingUp className="w-6 h-6" />,  title: "Melhor Custo-Benefício",         desc: "Acesso a tabelas exclusivas e negociadas que não estão disponíveis ao público geral." },
  { icon: <MapPin className="w-6 h-6" />,      title: "Atendimento Nacional",           desc: "Recomendação ajustada para a rede credenciada da sua cidade em qualquer estado do Brasil." },
  { icon: <Smile className="w-6 h-6" />,       title: "Suporte Pós-Contratação",        desc: "Continuamos com você após a implantação para inclusões, ajustes e dúvidas do dia a dia." },
  { icon: <Zap className="w-6 h-6" />,         title: "Ativação Rápida",               desc: "Cuidamos de toda a burocracia. Ativamos seu plano em até 7 dias úteis após aprovação." },
]

/* ══ HELPERS ════════════════════════════════════════════════ */

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
})

const displayFont: React.CSSProperties = {
  fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
}

/* ══ SECTION LABEL ═════════════════════════════════════════ */
function SectionLabel({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="block w-10 h-0.5 bg-gradient-to-r from-[#C9952A] to-[#E8C86A] rounded-full" />
      <span className={`text-[11px] font-bold tracking-[0.22em] uppercase ${light ? "text-[#C9E8D5]" : "text-[#C9952A]"}`}>
        {label}
      </span>
    </div>
  )
}

/* ══ WHATSAPP ICON ═════════════════════════════════════════ */
function WAIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

/* ══ COUNTER HOOK ══════════════════════════════════════════ */
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

/* ══ STAT CARD ═════════════════════════════════════════════ */
function StatCard({
  icon, target, suffix, prefix, label, desc, accent, delay, divide10 = false,
}: {
  icon: React.ReactNode
  target: number
  suffix?: string
  prefix?: string
  label: string
  desc: string
  accent: string
  delay: number
  divide10?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const count = useCounter(target, 1800, visible)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col gap-5 p-8 rounded-3xl bg-white/5 backdrop-blur-md overflow-hidden group hover:-translate-y-1 hover:bg-white/10 transition-all duration-500"
      style={{ 
        borderColor: `${accent}80`,
        borderWidth: "1px",
        borderStyle: "solid",
        boxShadow: `0 0 30px -5px ${accent}40, inset 0 0 20px -10px ${accent}20` 
      }}
    >
      {/* Background glow */}
      <div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[60px] opacity-[0.25] group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{ background: accent }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg relative z-10"
        style={{ background: `linear-gradient(135deg, ${accent}, ${accent}99)` }}
      >
        {icon}
      </div>

      {/* Counter */}
      <div className="flex flex-col gap-1 z-10 relative mt-2">
        <div className="flex items-end gap-1 leading-none">
          {prefix && <span className="text-2xl font-bold pb-1" style={{ color: accent }}>{prefix}</span>}
          <span className="text-5xl lg:text-6xl font-bold text-white tabular-nums drop-shadow-sm tracking-tight" style={displayFont}>
            {divide10 ? (count / 10).toFixed(1).replace(".", ",") : count.toLocaleString("pt-BR")}
          </span>
          {suffix && <span className="text-3xl font-bold pb-1" style={{ color: accent }}>{suffix}</span>}
        </div>
        <p className="text-base font-bold text-white/90 mt-2">{label}</p>
        <p className="text-sm text-white/60 font-medium leading-relaxed">{desc}</p>
      </div>

      {/* Decorative number ghost */}
      <div
        className="absolute bottom-4 right-5 text-8xl font-black opacity-[0.06] leading-none select-none pointer-events-none"
        style={{ fontFamily: "var(--font-display)", color: accent }}
      >
        {prefix}{divide10 ? (target / 10).toFixed(1).replace(".", ",") : target.toLocaleString("pt-BR")}{suffix}
      </div>
    </motion.div>
  )
}

/* ══ STATS SECTION ═════════════════════════════════════════ */
function StatsSection() {
  const statsData = [
    {
      icon: <Users className="w-7 h-7" />,
      target: 15000,
      suffix: "+",
      label: "Famílias Protegidas",
      desc: "Famílias que confiam na VivaBem para cuidar da saúde que mais importa.",
      accent: "#EF4444",
      delay: 0,
    },
    {
      icon: <Star className="w-7 h-7" />,
      target: 49,
      suffix: "/5 ★",
      prefix: "",
      label: "Avaliação dos Clientes",
      desc: "Nota média baseada em mais de 8.000 avaliações verificadas de clientes reais.",
      accent: "#C9952A",
      delay: 0.12,
      divide10: true,
    },
    {
      icon: <Award className="w-7 h-7" />,
      target: 7,
      suffix: "+",
      label: "Operadoras Parceiras",
      desc: "Amil, Bradesco, SulAmérica, Unimed e mais — sempre o melhor custo-benefício.",
      accent: "#8B5CF6",
      delay: 0.24,
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      target: 100,
      suffix: "%",
      label: "Consultoria Gratuita",
      desc: "Nenhuma taxa cobrada. Nossa remuneração vem das operadoras, não de você.",
      accent: "#3B82F6",
      delay: 0.36,
    },
  ]

  return (
    <section className="relative py-20 lg:py-28 px-6 lg:px-10 bg-[#0D2B1A] overflow-hidden">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#1A4A2E] opacity-60 blur-[80px]" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#C9952A] opacity-[0.06] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#1A4A2E] opacity-40 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <SectionLabel label="Números que Falam" light />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4" style={displayFont}>
            Resultados que <em className="text-[#C9E8D5]">comprovamos</em>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsData.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══ MAIN COMPONENT ════════════════════════════════════════ */
export function ProfessionalLandingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ══════════════════════════════════════════════════════
          1. HERO — Warm & Welcoming
          ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#EEF8F2] via-[#F7FBF9] to-white flex items-center overflow-hidden pt-20">

        {/* Ambient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[700px] h-[700px] rounded-full bg-[#C9E8D5] opacity-30 blur-[120px]" />
          <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-[#FEF0E2] opacity-40 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#EEF8F2] opacity-50 blur-[80px]" />
          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A4A2E" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-7"
          >
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white border border-[#C9E8D5] rounded-full px-4 py-1.5 w-fit shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#2E7D52] animate-pulse" />
              <span className="text-xs font-semibold text-[#1A4A2E] tracking-wide">Consultoria 100% Gratuita</span>
            </motion.div>

            <h1
              className="text-5xl lg:text-7xl font-bold text-[#0D2B1A] leading-[1.0] tracking-tight"
              style={displayFont}
            >
              Cuidar da sua<br />
              <em className="text-[#2E7D52] not-italic">família</em> é<br />
              nossa missão.
            </h1>

            <p className="text-base lg:text-lg text-[#3D6B50] leading-relaxed font-medium max-w-md">
              Encontramos o plano de saúde ideal para cada momento da sua vida. Análise gratuita, atendimento humano, resultado real.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-1">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1A4A2E] to-[#4A7C5C] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-[pulse_3s_ease-in-out_infinite]" />
                <a
                  href="https://api.whatsapp.com/send?phone=5511943015525&text=Olá!%20Gostaria%20de%20simular%20um%20plano."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-3 bg-[#1A4A2E] text-white text-[15px] font-bold tracking-wide px-8 py-4 rounded-2xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_20px_-10px_rgba(26,74,46,0.5)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-white/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,_rgba(255,255,255,0.3)_0%,_transparent_50%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <WAIcon className="relative z-10 w-5 h-5" />
                  <span className="relative z-10">Simular Gratuitamente</span>
                </a>
              </div>
              <a
                href="#como-funciona"
                className="relative inline-flex items-center gap-2 text-[#1A4A2E] text-[15px] font-semibold px-8 py-4 rounded-2xl border border-[#C9E8D5] bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,_rgba(26,74,46,0.06)_0%,_transparent_50%)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Como funciona</span>
                <ChevronRight className="relative z-10 w-4 h-4" />
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                {[
                  "/images/site/avatar_1.png",
                  "/images/site/avatar_2.png",
                  "/images/site/avatar_3.png",
                  "/images/site/avatar_1.png",
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                    <Image src={src} alt="Cliente" width={40} height={40} unoptimized className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9952A] text-[#C9952A]" />
                  ))}
                  <span className="text-sm font-bold text-[#0D2B1A] ml-1">4.9</span>
                </div>
                <p className="text-xs text-[#5A8870] font-medium">+15.000 famílias protegidas</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl shadow-[#1A4A2E]/15">
              <Image
                src="/images/site/hero_couple.png"
                alt="Família feliz e saudável"
                fill
                unoptimized
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B1A]/25 via-transparent to-transparent" />
            </div>

            {/* Floating: Families */}
            <motion.div
              className="absolute -left-5 top-[22%] bg-white rounded-2xl p-4 shadow-xl shadow-black/10 border border-[#EBF5EF]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              style={{ animation: "float-gentle 4s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EEF8F2] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#1A4A2E]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#5A8870] uppercase tracking-wider">Protegidos</p>
                  <p className="text-xl font-bold text-[#0D2B1A]" style={displayFont}>15.000+</p>
                </div>
              </div>
            </motion.div>

            {/* Floating: Rating */}
            <motion.div
              className="absolute -right-5 top-[40%] bg-white rounded-2xl p-4 shadow-xl shadow-black/10 border border-[#EBF5EF]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              style={{ animation: "float-gentle 4.5s ease-in-out infinite 1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF0E2] flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#C9952A]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#8B6A2E] uppercase tracking-wider">Avaliação</p>
                  <p className="text-xl font-bold text-[#0D2B1A]" style={displayFont}>4.9 / 5.0</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom badge */}
            <motion.div
              className="absolute bottom-6 left-6 bg-[#1A4A2E] rounded-2xl px-5 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">Consultoria</p>
              <p className="text-[#C9E8D5] text-sm font-bold">100% Gratuita</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <div className="w-5 h-8 border-2 border-[#5A8870]/30 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-1.5 bg-[#5A8870]/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. STATS — Animated Cards
          ══════════════════════════════════════════════════════ */}
      <StatsSection />

      {/* ══════════════════════════════════════════════════════
          3. PARTNERS MARQUEE
          ══════════════════════════════════════════════════════ */}
      <section className="w-full py-14 bg-white border-b border-[#E8F5EE] overflow-hidden">
        <p className="text-sm md:text-base font-bold tracking-widest uppercase text-[#5A8870] text-center mb-10">
          Operadoras Parceiras Homologadas
        </p>
        <div className="overflow-hidden mask-fade-edges flex flex-col gap-12 lg:gap-16 pt-4 pb-8">
          <div className="flex w-max animate-marquee-right gap-20 items-center hover:[animation-play-state:paused]">
            {duplicatedLogos.map((logo, i) => (
              <div key={`r1-${i}`} className="flex-none relative h-12 md:h-16 opacity-70 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  width={logo.width * 2} 
                  height={80} 
                  className="h-full w-auto object-contain max-w-none" 
                  priority={i < 4}
                />
              </div>
            ))}
          </div>
          <div className="flex w-max animate-marquee-left gap-20 items-center hover:[animation-play-state:paused]">
            {staggeredLogos.map((logo, i) => (
              <div key={`r2-${i}`} className="flex-none relative h-12 md:h-16 opacity-70 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  width={logo.width * 2} 
                  height={80} 
                  className="h-full w-auto object-contain max-w-none" 
                  priority={i < 4}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. BENEFITS — "Por que VivaBem?"
          ══════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-40 px-6 lg:px-10 bg-[#F7FBF9]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-16 max-w-2xl">
            <SectionLabel label="Por que VivaBem?" />
            <h2 className="text-5xl lg:text-6xl font-bold text-[#0D2B1A] leading-[1.05] mt-6" style={displayFont}>
              Do jeito que você <em>merece</em>.
            </h2>
            <p className="text-base text-[#4A7C5C] mt-5 leading-relaxed font-medium">
              Mais de 7 anos ajudando famílias e empresas a encontrar o plano certo, sem pressão e sem cobrar nada pela consultoria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                {...fadeUp(i * 0.08)}
                className="bg-white rounded-2xl p-8 border border-[#E8F5EE] hover:border-[#A8D8BB] hover:shadow-lg hover:shadow-[#1A4A2E]/5 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EEF8F2] flex items-center justify-center text-[#1A4A2E] mb-6 group-hover:bg-[#1A4A2E] group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#0D2B1A] mb-3">{benefit.title}</h3>
                <p className="text-sm text-[#5A8870] leading-relaxed font-medium">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. PLANS — With Images & Hover Effects
          ══════════════════════════════════════════════════════ */}
      <section id="planos" className="py-28 lg:py-40 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-16 max-w-2xl">
            <SectionLabel label="Modalidades" />
            <h2 className="text-5xl lg:text-6xl font-bold text-[#0D2B1A] leading-[1.05] mt-6" style={displayFont}>
              Planos para cada momento da vida.
            </h2>
            <p className="text-base text-[#4A7C5C] mt-5 leading-relaxed font-medium">
              Individual, família, MEI ou empresa — temos a modalidade certa com os melhores valores do mercado.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {planCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(i * 0.1)}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col shadow-xl bg-white border"
                style={{
                  borderColor: `${card.color}30`,
                  boxShadow: `0 10px 25px -5px ${card.color}15, 0 8px 10px -6px ${card.color}10`
                }}
              >
                {/* Thin top colored bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 z-10 opacity-90" style={{ background: card.color }} />

                {/* Card image */}
                <div className="relative w-full h-44 overflow-hidden shrink-0">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B1A]/50 to-transparent" />
                  <div 
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase text-white shadow-md shadow-black/10 backdrop-blur-md border border-white/20"
                    style={{ backgroundColor: `${card.color}E6` }}
                  >
                    {card.tag}
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 bg-white flex flex-col gap-3 flex-grow">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: card.colorLight, color: card.color }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0D2B1A]" style={displayFont}>{card.title}</h3>
                  <p className="text-sm text-[#5A8870] leading-relaxed flex-grow">{card.subtitle}</p>

                  <ul className="space-y-2 py-3">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: card.color }} />
                        <span className="text-xs font-medium text-[#4A7C5C] leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <p className="text-sm font-bold mb-3" style={{ color: card.color }}>{card.price}</p>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511943015525"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-300 text-white border border-white/30 hover:shadow-xl hover:-translate-y-1 overflow-hidden group/btn"
                      style={{ 
                        backgroundColor: card.color,
                        boxShadow: `0 8px 20px -8px ${card.color}80, inset 0 1px 1px rgba(255,255,255,0.4)`
                      }}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,_rgba(255,255,255,0.4)_0%,_transparent_50%)] opacity-80 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">Cotação Gratuita</span>
                      <ChevronRight className="relative z-10 w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. HOW IT WORKS — Dark section with steps
          ══════════════════════════════════════════════════════ */}
      <section id="como-funciona" className="relative py-28 lg:py-40 px-6 lg:px-10 bg-[#0D2B1A] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-[#1A4A2E] opacity-40 blur-[120px]" />
          <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-[#C9952A] opacity-[0.04] blur-[100px]" />
          {/* Decorative dots */}
          <div className="absolute top-16 left-16 grid grid-cols-4 gap-3 opacity-10">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C9952A]" />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-20 text-center max-w-2xl mx-auto">
            <SectionLabel label="Como Funciona" light />
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-[1.05] mt-6" style={displayFont}>
              Simples, rápido e<br />
              <em className="text-[#C9E8D5]">sem burocracia</em>.
            </h2>
            <p className="text-base text-white/50 mt-5 leading-relaxed font-medium">
              Do primeiro contato até a ativação do seu plano, cuidamos de tudo por você.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#C9952A]/40 to-transparent z-0 pointer-events-none" />

            {[
              { step: "01", icon: <WAIcon className="w-6 h-6" />, title: "Conta pra gente", desc: "Fale via WhatsApp. Perguntamos sobre sua família, cidade, hospitais favoritos e orçamento disponível.", delay: 0 },
              { step: "02", icon: <ClipboardCheck className="w-6 h-6" />, title: "Análise e Comparativo", desc: "Nossa equipe monta um quadro comparativo das melhores opções com análise detalhada de custo-benefício.", delay: 0.15 },
              { step: "03", icon: <ShieldCheck className="w-6 h-6" />, title: "Ativação Garantida", desc: "Você escolhe o plano ideal e nós cuidamos de toda a documentação e ativação. Simples assim.", delay: 0.3 },
            ].map(({ step, icon, title, desc, delay }) => (
              <motion.div
                key={step}
                {...fadeUp(delay)}
                className="flex flex-col items-center text-center gap-5 p-8 rounded-2xl bg-[#122E1E] border border-white/10 hover:bg-[#163825] hover:border-[#C9952A]/30 transition-all duration-300 z-10 relative shadow-xl"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C9952A]">
                    {icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#C9952A] text-[#0D2B1A] text-[10px] font-black flex items-center justify-center">
                    {step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white" style={displayFont}>{title}</h3>
                <p className="text-sm text-white/55 leading-relaxed font-medium">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.4)} className="mt-14 text-center">
            <div className="relative inline-block group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C9952A] to-[#E8C86A] rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500 animate-[pulse_3s_ease-in-out_infinite]" />
              <a
                href="https://api.whatsapp.com/send?phone=5511943015525"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex sm:inline-flex items-center justify-center gap-3 bg-[#C9952A] text-[#0D2B1A] text-[15px] font-bold tracking-wide px-8 py-4 rounded-2xl border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_20px_-10px_rgba(201,149,42,0.5)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-white/60 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,_rgba(255,255,255,0.5)_0%,_transparent_50%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <WAIcon className="relative z-10 w-5 h-5" />
                <span className="relative z-10">Começar Agora — É Gratuito</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. BENEFITS IMAGE SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-40 px-6 lg:px-10 bg-[#F7FBF9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div {...fadeUp()} className="relative w-full h-[480px] lg:h-[580px] rounded-3xl p-3 lg:p-4 bg-white shadow-2xl shadow-[#1A4A2E]/10 border border-[#E8F5EE]">
            {/* Grid Container */}
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-3 lg:gap-4">
              <div className="relative row-span-2 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/site/hero_senior.png"
                  alt="Casal sênior saudável"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D2B1A]/10 to-transparent" />
              </div>
              <div className="relative row-span-1 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/site/hero_family.png"
                  alt="Família feliz"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="relative row-span-1 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/site/hero_couple.png"
                  alt="Casal sorrindo"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute bottom-7 right-7 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-[#E8F5EE]">
              <p className="text-xs font-semibold text-[#5A8870] mb-1">Tempo médio de cotação</p>
              <p className="text-3xl font-bold text-[#0D2B1A]" style={displayFont}>15 min</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <Activity className="w-3 h-3 text-[#2E7D52]" />
                <p className="text-xs text-[#2E7D52] font-semibold">Atendimento humano</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="flex flex-col gap-8">
            <SectionLabel label="Medicina de Ponta" />
            <h2 className="text-5xl lg:text-6xl font-bold text-[#0D2B1A] leading-[1.05]" style={displayFont}>
              Acesso aos melhores especialistas <em>sem complicação</em>.
            </h2>
            <p className="text-base text-[#4A7C5C] font-medium leading-relaxed">
              Um plano de saúde de qualidade vai além das emergências. É a garantia de não depender de estruturas sobrecarregadas quando os momentos mais importantes chegarem.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-1">
              {[
                { icon: <Heart className="w-6 h-6" />, title: "Paz de Espírito Real", desc: "Durma tranquilo sabendo que sua família tem a cobertura que merece." },
                { icon: <ShieldCheck className="w-6 h-6" />, title: "Portabilidade Inteligente", desc: "Mapeamos suas carências e garantimos transições sem períodos descobertos." },
                { icon: <Baby className="w-6 h-6" />, title: "Do Bebê ao Sênior", desc: "Cobertura para todas as fases da vida, da obstetrícia ao tratamento oncológico." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-center p-5 rounded-2xl bg-white border border-[#E8F5EE] hover:border-[#A8D8BB] transition-colors group cursor-default shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF8F2] flex items-center justify-center text-[#1A4A2E] shrink-0 group-hover:bg-[#1A4A2E] group-hover:text-white transition-all duration-300">
                    {icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0D2B1A] text-base mb-1">{title}</h5>
                    <p className="text-sm text-[#5A8870] font-medium leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1A4A2E] to-[#4A7C5C] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-[pulse_3s_ease-in-out_infinite]" />
                <a
                  href="https://api.whatsapp.com/send?phone=5511943015525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-3 bg-[#1A4A2E] text-white text-[15px] font-bold tracking-wide px-8 py-4 rounded-2xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_20px_-10px_rgba(26,74,46,0.5)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-white/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,_rgba(255,255,255,0.3)_0%,_transparent_50%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Falar com Especialista</span>
                  <ChevronRight className="relative z-10 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. CORPORATE
          ══════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-40 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div {...fadeUp()} className="flex flex-col gap-8">
            <SectionLabel label="Linhas Corporativas" />
            <h2 className="text-5xl lg:text-6xl font-bold text-[#0D2B1A] leading-[1.05]" style={displayFont}>
              Seu time protegido, <em>seu RH tranquilo</em>.
            </h2>
            <p className="text-base text-[#4A7C5C] font-medium leading-relaxed">
              Eliminamos a dor operacional do RH com implantação completa e combatemos o reajuste inflacionário da sinistralidade com contratos perfeitamente parametrizados.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "40%", desc: "redução média de custos" },
                { stat: "2 sem.", desc: "para implantação completa" },
                { stat: "100%", desc: "burocracia por nossa conta" },
                { stat: "500+", desc: "empresas já atendidas" },
              ].map(({ stat, desc }) => (
                <div key={stat} className="bg-[#F7FBF9] rounded-2xl p-5 border border-[#E8F5EE]">
                  <p className="text-3xl font-bold text-[#1A4A2E]" style={displayFont}>{stat}</p>
                  <p className="text-xs text-[#5A8870] font-medium mt-1">{desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 pt-1">
              {[
                "Mapeamento demográfico completo da equipe",
                "Adequação técnica de coparticipação e cobertura",
                "Inclusão flexível de diretores em linhas premium",
                "Suporte dedicado ao RH pós-implantação",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-[#EEF8F2] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#1A4A2E]" />
                  </div>
                  <span className="text-sm font-medium text-[#3D6B50]">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C9952A] to-[#E8C86A] rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500 animate-[pulse_3s_ease-in-out_infinite]" />
                <a
                  href="https://api.whatsapp.com/send?phone=5511943015525&text=Olá!%20Gostaria%20de%20agendar%20uma%20reunião%20sobre%20planos%20empresariais."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-3 bg-[#C9952A] text-white text-[15px] font-bold tracking-wide px-8 py-4 rounded-2xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_10px_20px_-10px_rgba(201,149,42,0.5)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-white/40 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,_rgba(255,255,255,0.4)_0%,_transparent_50%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Agendar Reunião</span>
                  <ArrowRight className="relative z-10 w-4 h-4" />
                </a>
              </div>
              <a
                href="#faq"
                className="relative inline-flex items-center gap-2 text-[#1A4A2E] text-[15px] font-semibold px-8 py-4 rounded-2xl border border-[#C9E8D5] bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,_rgba(26,74,46,0.06)_0%,_transparent_50%)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Ver FAQ</span>
                <ChevronRight className="relative z-10 w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="relative w-full h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl shadow-[#1A4A2E]/10">
            <Image
              src="/images/site/showcase_consultation.png"
              alt="Equipe corporativa saudável"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D2B1A]/15 to-transparent" />

            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-[#E8F5EE]">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[#1A4A2E]" />
                <div>
                  <p className="text-[10px] font-semibold text-[#5A8870] uppercase tracking-wider">Empresas atendidas</p>
                  <p className="text-xl font-bold text-[#0D2B1A]" style={displayFont}>500+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9. TESTIMONIALS — Slider + Grid
          ══════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-40 px-6 lg:px-10 bg-[#F7FBF9]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <SectionLabel label="Depoimentos" />
              <h2 className="text-5xl lg:text-6xl font-bold text-[#0D2B1A] leading-[1.05] mt-6" style={displayFont}>
                Histórias que <em>nos movem</em>.
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-xl bg-white border border-[#E8F5EE] flex items-center justify-center text-[#1A4A2E] hover:bg-[#EEF8F2] hover:border-[#A8D8BB] transition-all">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-xl bg-[#1A4A2E] border border-[#1A4A2E] flex items-center justify-center text-white hover:bg-[#0D2B1A] transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Desktop: 3-col grid */}
          <div className="hidden md:grid grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl p-7 border border-[#E8F5EE] hover:border-[#A8D8BB] hover:shadow-lg transition-all duration-300 flex flex-col gap-5"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#C9952A] text-[#C9952A]" />
                  ))}
                </div>
                <p className="text-base text-[#3D5A47] leading-relaxed font-medium flex-grow">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#F0F9F4]">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E8F5EE] shrink-0">
                    <Image src={t.img} alt={t.name} width={48} height={48} unoptimized className="object-cover w-full h-full" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-[#0D2B1A]">{t.name}</p>
                    <p className="text-xs text-[#5A8870] font-medium">{t.role}</p>
                  </div>
                  <span className="text-[10px] bg-[#EEF8F2] text-[#2E7D52] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide shrink-0">
                    {t.plan}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 4th testimonial — dark full-width */}
          <motion.div {...fadeUp(0.3)} className="hidden md:flex mt-5 bg-[#0D2B1A] rounded-2xl p-8 border border-white/5 gap-8 items-center">
            <div className="flex gap-1 shrink-0">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-[#C9952A] text-[#C9952A]" />
              ))}
            </div>
            <p className="text-base text-white/75 leading-relaxed font-medium italic flex-grow">
              "{testimonials[3].quote}"
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                <Image src={testimonials[3].img} alt={testimonials[3].name} width={48} height={48} unoptimized className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{testimonials[3].name}</p>
                <p className="text-xs text-[#C9952A] font-semibold">{testimonials[3].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Mobile: animated slider */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl p-7 border border-[#E8F5EE] flex flex-col gap-5"
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#C9952A] text-[#C9952A]" />
                  ))}
                </div>
                <p className="text-base text-[#3D5A47] leading-relaxed font-medium">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-[#F0F9F4]">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E8F5EE]">
                    <Image src={testimonials[activeTestimonial].img} alt={testimonials[activeTestimonial].name} width={48} height={48} unoptimized className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0D2B1A]">{testimonials[activeTestimonial].name}</p>
                    <p className="text-xs text-[#5A8870]">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-6 bg-[#1A4A2E]" : "w-2 bg-[#C9E8D5]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          10. BLOG PREVIEW
          ══════════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-40 px-6 lg:px-10 bg-[#0D2B1A] overflow-hidden">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full bg-[#1A4A2E] opacity-50 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#C9952A] opacity-[0.05] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <SectionLabel label="Blog & Dicas" light />
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-[1.05] mt-6" style={displayFont}>
                Aprenda antes <em className="text-[#C9E8D5]">de contratar</em>.
              </h2>
              <p className="text-base text-white/50 font-medium mt-4 max-w-lg leading-relaxed">
                Conteúdo educativo para você tomar decisões mais informadas sobre saúde e planos.
              </p>
            </div>
            <div
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#C9952A] border border-[#C9952A]/30 px-5 py-3 rounded-xl hover:bg-[#C9952A]/10 hover:border-[#C9952A]/60 hover:gap-3 transition-all duration-200 shrink-0 cursor-default"
            >
              Ver todos os artigos <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                {...fadeUp(i * 0.1)}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/8 hover:bg-white/8 hover:border-white/15 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden shrink-0">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B1A]/60 via-[#0D2B1A]/10 to-transparent" />
                  {/* Category badge */}
                  <span
                    className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full text-white"
                    style={{ background: post.accent }}
                  >
                    {post.category}
                  </span>
                  {/* Read time bottom */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white/80 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <p className="text-xs text-white/35 font-medium">{post.date}</p>
                  <h3
                    className="text-xl font-bold text-white leading-snug group-hover:text-[#C9E8D5] transition-colors"
                    style={displayFont}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 border-t border-white/8 mt-auto">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9952A] group-hover:gap-3 transition-all duration-200">
                      Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 text-center md:hidden">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9952A] cursor-default">
              Ver todos os artigos <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          11. FAQ — Side layout
          ══════════════════════════════════════════════════════ */}
      <section id="faq" className="py-28 lg:py-40 px-6 lg:px-10 bg-[#F7FBF9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

          <motion.div {...fadeUp()} className="lg:sticky lg:top-28">
            <SectionLabel label="FAQ" />
            <h2 className="text-5xl lg:text-6xl font-bold text-[#0D2B1A] leading-[1.05] mt-6" style={displayFont}>
              Suas dúvidas,<br />
              <em>respondidas</em>.
            </h2>
            <p className="text-base text-[#4A7C5C] font-medium mt-5 leading-relaxed">
              Transparência total, sem jargão. Aqui você entende tudo antes de decidir.
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-white border border-[#E8F5EE] shadow-sm">
              <p className="text-sm font-bold text-[#0D2B1A] mb-2">Não encontrou sua resposta?</p>
              <p className="text-sm text-[#5A8870] mb-4">Fale com nossa equipe pelo WhatsApp. Resposta em minutos.</p>
              <a
                href="https://api.whatsapp.com/send?phone=5511943015525"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1A4A2E] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#0D2B1A] transition-colors"
              >
                <WAIcon />
                Abrir WhatsApp
              </a>
            </div>
          </motion.div>

          <div className="flex flex-col divide-y divide-[#E8F5EE]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={index}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-6 flex items-start justify-between text-left gap-4 group focus:outline-none"
                  >
                    <span className="text-sm font-bold text-[#0D2B1A] group-hover:text-[#1A4A2E] transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isOpen ? "bg-[#1A4A2E] text-white" : "bg-[#EEF8F2] text-[#1A4A2E] group-hover:bg-[#1A4A2E] group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm text-[#4A7C5C] font-medium leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          12. FINAL CTA — Warm & Inviting
          ══════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-48 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2B1A] via-[#1A4A2E] to-[#0D2B1A]" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#C9952A] opacity-[0.05] blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#2E7D52] opacity-20 blur-[100px]" />
          {/* Subtle pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#C9952A]/20 rounded-tl-lg" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#C9952A]/20 rounded-tr-lg" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#C9952A]/20 rounded-bl-lg" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#C9952A]/20 rounded-br-lg" />
        </div>

        <motion.div {...fadeUp()} className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-7">
          <div className="w-16 h-16 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center text-[#C9952A] animate-pulse-ring">
            <Heart className="w-7 h-7" />
          </div>

          <SectionLabel label="Cuide-se Agora" light />

          <h2 className="text-5xl lg:text-7xl font-bold text-white leading-[1.0]" style={displayFont}>
            Saúde não espera.<br />
            <em className="text-[#C9E8D5]">Sua família também não.</em>
          </h2>

          <p className="text-base text-white/60 max-w-xl leading-relaxed font-medium">
            Em 15 minutos enviamos as melhores opções do mercado pelo WhatsApp, com análise completa e sem compromisso. Completamente gratuito.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4 items-center">
            <div className="relative inline-block w-full sm:w-auto group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C9952A] to-[#E8C86A] rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500 animate-[pulse_3s_ease-in-out_infinite]" />
              <a
                href="https://api.whatsapp.com/send?phone=5511943015525&text=Olá!%20Gostaria%20de%20solicitar%20uma%20cotação%20de%20plano%20de%20saúde."
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex sm:inline-flex w-full items-center justify-center gap-3 bg-[#C9952A] text-[#0D2B1A] text-[16px] font-bold tracking-wide px-10 py-5 rounded-2xl border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_20px_40px_-15px_rgba(201,149,42,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-white/60 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,_rgba(255,255,255,0.5)_0%,_transparent_50%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <WAIcon className="relative z-10 w-6 h-6" />
                <span className="relative z-10">Solicitar Cotação Grátis</span>
              </a>
            </div>
            <a
              href="tel:+5511943015525"
              className="relative inline-flex items-center justify-center gap-3 text-white/90 bg-white/5 border border-white/15 text-[15px] font-semibold px-8 py-5 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-xl hover:-translate-y-1 overflow-hidden group/tel"
            >
              <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,_rgba(255,255,255,0.15)_0%,_transparent_50%)] opacity-60 group-hover/tel:opacity-100 transition-opacity duration-300" />
              <PhoneCall className="relative z-10 w-4 h-4" />
              <span className="relative z-10">(11) 94301-5525</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-white/40 text-xs font-medium">
            <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#5AB87E]" /> Sem compromisso</span>
            <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#5AB87E]" /> 100% gratuito</span>
            <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#5AB87E]" /> Resposta em minutos</span>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
