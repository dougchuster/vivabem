"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "O VivaBem mudou minha vida. Consegui fazer todos os exames que precisava sem pagar nada a mais. O atendimento é rápido e eles me ajudaram muito a entender cada detalhe do contrato.",
    name: "Maria Santos",
    role: "Professora",
    plan: "Plano Familiar",
    rating: 5,
    initials: "MS",
    color: "#16B364",
  },
  {
    quote:
      "Depois de pesquisar muito, escolhi a VivaBem e não me arrependo. A comparação dos planos é muito clara e nunca tive problemas com autorização de exames ou consultas.",
    name: "João Oliveira",
    role: "Engenheiro",
    plan: "Plano Premium",
    rating: 5,
    initials: "JO",
    color: "#3B82F6",
  },
  {
    quote:
      "Minha família inteira está no plano. O atendimento dos dependentes é incrível, não diferencia nada. Economizei mais de 30% comparado ao plano anterior. Recomendo para todos.",
    name: "Ana Costa",
    role: "Farmacêutica",
    plan: "Plano Familiar",
    rating: 5,
    initials: "AC",
    color: "#14B8A6",
  },
  {
    quote:
      "Como MEI, consegui um plano com 35% de desconto usando meu CNPJ. Nem acreditei quando vi o valor. Atendimento de primeira e consultor sempre disponível para tirar dúvidas.",
    name: "Carlos Lima",
    role: "Designer Freelancer",
    plan: "Plano MEI",
    rating: 5,
    initials: "CL",
    color: "#F59E0B",
  },
  {
    quote:
      "Para minha mãe de 68 anos, encontramos um plano sênior completo sem carência para consultas. A equipe foi muito paciente e explicou tudo com calma. Serviço exemplar.",
    name: "Fernanda Rocha",
    role: "Administradora",
    plan: "Plano Sênior",
    rating: 5,
    initials: "FR",
    color: "#8B5CF6",
  },
  {
    quote:
      "A experiência me surpreendeu. A página passa segurança e o atendimento entrega a mesma energia. Parece uma consultoria que realmente leu meu caso antes de me ligar.",
    name: "Carlos Simões",
    role: "Empresário",
    plan: "Plano Empresarial",
    rating: 5,
    initials: "CS",
    color: "#EC4899",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const visibleCount = 3;
  const visible = Array.from({ length: visibleCount }, (_, i) => {
    const idx = (currentIndex + i) % testimonials.length;
    return testimonials[idx];
  });

  return (
    <section id="depoimentos" className="section-padding overflow-hidden" style={{ background: "#0A0F0D" }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            ✦ Vozes Reais
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            O que nossos clientes{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3CCB7F 0%, #14B8A6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              dizem.
            </span>
          </h2>
          <p className="text-white/50 text-lg">
            Histórias reais de quem escolheu cuidar da saúde com a gente.
          </p>

          {/* Stars aggregate */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
            ))}
            <span className="text-white/60 text-sm ml-2">4.9/5 — mais de 500 avaliações</span>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visible.map((testimonial, idx) => (
            <motion.div
              key={`${testimonial.name}-${currentIndex}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                style={{ background: `${testimonial.color}20` }}
              >
                <Quote className="w-5 h-5" style={{ color: testimonial.color }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-white/75 leading-relaxed text-sm flex-1 mb-7">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.07]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: testimonial.color }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-white/40">{testimonial.role}</p>
                </div>
                <div className="ml-auto">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${testimonial.color}18`,
                      color: testimonial.color,
                    }}
                  >
                    {testimonial.plan}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => paginate(-1)}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <ChevronLeft className="w-5 h-5 text-white/60" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === currentIndex ? "2.5rem" : "0.5rem",
                  background: i === currentIndex ? "#16B364" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <ChevronRight className="w-5 h-5 text-white/60" />
          </button>
        </div>
      </div>
    </section>
  );
}
