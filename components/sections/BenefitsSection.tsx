"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, HeartHandshake } from "lucide-react";

const vantagens = [
  {
    icon: Clock,
    number: "15 min",
    title: "Cotação Rápida",
    description:
      "Envie uma mensagem e em até 15 minutos nosso consultor entra em contato com as melhores opções para o seu perfil e orçamento.",
    color: "#16B364",
    bg: "#EDFCF2",
    border: "#AAF0C4",
  },
  {
    icon: ShieldCheck,
    number: "ANS",
    title: "Corretores Certificados",
    description:
      "Nossa equipe é formada por corretores certificados pela ANS, com treinamento constante e expertise no mercado de saúde suplementar.",
    color: "#3B82F6",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    icon: HeartHandshake,
    number: "100%",
    title: "Suporte Dedicado",
    description:
      "Acompanhamento completo após a contratação. Estamos ao seu lado para tirar dúvidas, resolver problemas e garantir que seu plano funcione.",
    color: "#F59E0B",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
];

export function BenefitsSection() {
  return (
    <section id="vantagens" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-badge">Vantagens</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Por que escolher{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #16B364 0%, #14B8A6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              a VivaBem?
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Três diferenciais que fazem toda a diferença na sua experiência com planos de saúde.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {vantagens.map((v, index) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="card-lift group relative rounded-3xl p-8 flex flex-col"
              style={{
                background: "white",
                border: `1px solid ${v.border}`,
                boxShadow: `0 4px 24px ${v.color}12`,
              }}
            >
              {/* Large number */}
              <div
                className="text-6xl font-black mb-6 leading-none"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: v.color,
                  opacity: 0.12,
                  userSelect: "none",
                  transition: "opacity 0.3s",
                }}
              >
                {v.number}
              </div>
              <div className="absolute top-8 left-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: v.bg }}
                >
                  <v.icon className="w-7 h-7" style={{ color: v.color }} />
                </div>
              </div>

              <div className="mt-4">
                {/* Subtle number in corner for design */}
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-2 block"
                  style={{ color: v.color }}
                >
                  {v.number} — {["Rapidez", "Qualificação", "Pós-venda"][index]}
                </span>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{v.description}</p>
              </div>

              {/* Bottom accent */}
              <div
                className="mt-8 h-1 rounded-full w-12 transition-all duration-300 group-hover:w-full"
                style={{ background: `linear-gradient(90deg, ${v.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom image row — full-width visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 relative rounded-3xl overflow-hidden"
          style={{ height: 280 }}
        >
          {/*
           * 📸 IMAGEM DE DESTAQUE — Seção "Por que nos escolher"
           * Coloque em: /public/images/benefits/atendimento.jpg
           * Dimensões recomendadas: 1280x280px (landscape)
           * Sugestão de busca no Unsplash: "doctor patient consultation modern"
           */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{
              background: "linear-gradient(135deg, #02291A 0%, #084C2E 40%, #095C37 70%, #16B364 100%)",
            }}
          >
            <p className="text-white/50 text-sm font-semibold uppercase tracking-widest">
              📸 Imagem de destaque
            </p>
            <p className="text-white/30 text-xs">
              Adicione em /public/images/benefits/atendimento.jpg
            </p>

            {/* Decorative content over placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8 max-w-2xl w-full px-12">
                {[
                  { n: "+15 mil", l: "clientes atendidos" },
                  { n: "15 min", l: "para sua cotação" },
                  { n: "100%", l: "gratuito e sem taxa" },
                ].map((s) => (
                  <div key={s.n} className="text-center">
                    <div
                      className="text-4xl font-black text-white mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {s.n}
                    </div>
                    <div className="text-sm text-white/60">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
