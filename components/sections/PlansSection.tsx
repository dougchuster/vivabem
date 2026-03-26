"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site-config";

const plans = [
  {
    id: "familiar",
    emoji: "👨‍👩‍👧‍👦",
    title: "Familiar",
    tagline: "Para quem ama sua família",
    description:
      "Garanta acesso aos melhores hospitais para você e quem você mais ama. Cobertura completa com pediatria, obstetrícia e emergências nacionais.",
    features: [
      "Pediatria & obstetrícia incluídas",
      "Acomodação em apartamento",
      "Atendimento de emergência nacional",
      "Dependentes com desconto especial",
      "Check-up anual gratuito",
    ],
    highlight: "A partir de R$ 197/mês",
    color: "#16B364",
    bgLight: "#EDFCF2",
    imageSrc: "/images/plans/familiar.jpg",
    imageAlt: "Família feliz com plano de saúde",
    imageHint: "/public/images/plans/familiar.jpg",
    featured: true,
    ctaMsg: "Quero um plano Familiar",
  },
  {
    id: "empresarial",
    emoji: "🏢",
    title: "Empresarial",
    tagline: "Para PMEs e grandes empresas",
    description:
      "Atraia e retenha os melhores talentos na sua empresa com saúde de ponta. Planos coletivos com condições exclusivas.",
    features: [
      "A partir de 2 vidas",
      "Coparticipação opcional",
      "Odontologia integrada",
      "Gestão centralizada",
      "Suporte dedicado ao RH",
    ],
    highlight: "A partir de 2 vidas",
    color: "#3B82F6",
    bgLight: "#EFF6FF",
    imageSrc: "/images/plans/empresarial.jpg",
    imageAlt: "Equipe empresarial com benefício de saúde",
    imageHint: "/public/images/plans/empresarial.jpg",
    featured: false,
    ctaMsg: "Quero um plano Empresarial",
  },
  {
    id: "mei",
    emoji: "💼",
    title: "MEI",
    tagline: "Use seu CNPJ para economizar",
    description:
      "Usufrua do seu CNPJ para obter até 30% de desconto na mensalidade. Contratação digital rápida com reajustes previsíveis.",
    features: [
      "Até 30% de desconto no plano",
      "Contratação 100% digital",
      "Sem carência para urgência",
      "Reajuste anual previsível",
      "Cobertura individual completa",
    ],
    highlight: "Até 30% de desconto",
    color: "#F59E0B",
    bgLight: "#FFFBEB",
    imageSrc: "/images/plans/mei.jpg",
    imageAlt: "MEI trabalhando com plano de saúde",
    imageHint: "/public/images/plans/mei.jpg",
    featured: false,
    ctaMsg: "Quero um plano MEI",
  },
  {
    id: "senior",
    emoji: "🌿",
    title: "Sênior 60+",
    tagline: "Cuidados especializados para a melhor idade",
    description:
      "Prevenção e cuidados especializados para a melhor idade com rede exclusiva e foco em geriatria e medicina preventiva.",
    features: [
      "Foco em medicina preventiva",
      "Rede geriátrica especializada",
      "Sem limite máximo de idade",
      "Cobertura para procedimentos de alta complexidade",
      "Atendimento prioritário",
    ],
    highlight: "Condições especiais",
    color: "#8B5CF6",
    bgLight: "#F5F3FF",
    imageSrc: "/images/plans/senior.jpg",
    imageAlt: "Casal sênior saudável e ativo",
    imageHint: "/public/images/plans/senior.jpg",
    featured: false,
    ctaMsg: "Quero um plano Sênior",
  },
];

export function PlansSection() {
  return (
    <section id="planos" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-badge">Nossos Planos</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            O plano certo para{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #16B364 0%, #14B8A6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              cada momento da vida.
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Cada público entra em uma cena diferente e sai com a mesma clareza e tranquilidade.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, index) => {
            const whatsappUrl = createWhatsAppUrl(
              `Olá! Tenho interesse no Plano ${plan.title} da VivaBem. Pode me ajudar?`
            );
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className={`card-lift relative bg-white rounded-3xl overflow-hidden flex flex-col ${
                  plan.featured ? "ring-2 ring-[#16B364] shadow-xl shadow-green-100" : "border border-gray-100 shadow-sm"
                }`}
              >
                {plan.featured && (
                  <div
                    className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide text-white"
                    style={{ background: "linear-gradient(135deg, #16B364, #099250)" }}
                  >
                    ★ Popular
                  </div>
                )}

                {/* Plan image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 200 }}
                >
                  <Image
                    src={plan.imageSrc}
                    alt={plan.imageAlt}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.style.display = "none";
                    }}
                  />
                  {/* Placeholder */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                    style={{ background: `linear-gradient(160deg, ${plan.color}18 0%, ${plan.color}35 100%)` }}
                  >
                    <span className="text-5xl">{plan.emoji}</span>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest"
                      style={{ color: plan.color + "90" }}
                    >
                      📸 {plan.imageHint}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider"
                      style={{ color: plan.color }}
                    >
                      {plan.tagline}
                    </span>
                    <h3
                      className="text-xl font-bold text-gray-900 mt-1 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {plan.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: plan.bgLight }}
                        >
                          <Check className="w-2.5 h-2.5" style={{ color: plan.color }} />
                        </div>
                        <span className="text-sm text-gray-600 leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price hint */}
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl mb-4"
                    style={{ background: plan.bgLight }}
                  >
                    <span className="text-sm font-bold" style={{ color: plan.color }}>
                      {plan.highlight}
                    </span>
                    <span className="text-xs text-gray-400">cotação gratuita</span>
                  </div>

                  {/* CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]"
                    style={{
                      background: plan.featured
                        ? `linear-gradient(135deg, ${plan.color} 0%, #099250 100%)`
                        : plan.bgLight,
                      color: plan.featured ? "white" : plan.color,
                    }}
                  >
                    Simular agora
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          Todos os planos são regulamentados pela ANS.{" "}
          <span style={{ color: "#16B364", fontWeight: 600 }}>
            Consultoria 100% gratuita e sem compromisso.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
