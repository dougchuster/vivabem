"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Building2, HeartPulse, UserRound } from "lucide-react";

const stories = [
  {
    id: "familia",
    label: "Familia",
    title: "Para quem quer previsibilidade sem abrir mao de rede boa.",
    copy:
      "A leitura compara mensalidade, dependentes, pediatria, exames e hospitais de referencia para que a familia compre tranquilidade e nao surpresa.",
    accent: "bg-[#e9f6f0]",
    image:
      "/images/site/showcase_consultation.png",
    metrics: [
      { value: "4 vidas", label: "estrutura simulada" },
      { value: "12 opcoes", label: "comparadas" },
    ],
    icon: HeartPulse,
  },
  {
    id: "mei",
    label: "MEI e autonomo",
    title: "Para quem precisa equilibrar custo mensal, uso real e mobilidade.",
    copy:
      "Montamos uma narrativa objetiva para quem trabalha por conta, mostrando onde vale pagar mais e onde a economia realmente faz sentido.",
    accent: "bg-[#fff3e1]",
    image:
      "/images/site/showcase_digital.png",
    metrics: [
      { value: "2h", label: "retorno medio" },
      { value: "1 painel", label: "visao resumida" },
    ],
    icon: UserRound,
  },
  {
    id: "empresa",
    label: "Pequena empresa",
    title: "Para times enxutos que precisam fechar rapido sem perder criterio.",
    copy:
      "A simulacao mostra impacto por vida, opcao empresarial, adesao e discurso de venda pronto para decisao interna.",
    accent: "bg-[#edf2ff]",
    image:
      "/images/site/showcase_wellness.png",
    metrics: [
      { value: "2+ vidas", label: "foco operacional" },
      { value: "1 consultor", label: "acompanhamento" },
    ],
    icon: Building2,
  },
];

export function ImmersiveShowcaseSection() {
  const [activeId, setActiveId] = useState(stories[0].id);
  const activeStory = stories.find((story) => story.id === activeId) ?? stories[0];

  return (
    <section id="experiencia" className="bg-neutral-900 px-3 py-16 text-white md:px-6 lg:py-24">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              jornadas em slider
            </div>
            <h2 className="mt-6 max-w-md text-balance text-4xl font-semibold leading-[1.02] text-white md:text-5xl">
              Cada publico entra em uma cena diferente e sai com a mesma clareza.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/68">
              O slider continua impactante, mas agora com cards, imagem e metricas que se encaixam melhor em telas menores.
            </p>

            <div className="mt-8 grid gap-3">
              {stories.map((story) => (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => setActiveId(story.id)}
                  className={`rounded-[1.6rem] border px-5 py-5 text-left transition-colors ${
                    story.id === activeId
                      ? "border-white/25 bg-white text-neutral-900"
                      : "border-white/10 bg-white/5 text-white/78 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] opacity-70">{story.label}</div>
                      <div className="mt-2 text-lg font-semibold leading-7">{story.title}</div>
                    </div>
                    <story.icon className="h-5 w-5 flex-none" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[28rem] sm:min-h-[34rem]">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeStory.id}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/6 p-4 shadow-[0_30px_80px_-44px_rgba(0,0,0,0.8)]"
              >
                <div className="relative h-full overflow-hidden rounded-[1.8rem]">
                  <Image src={activeStory.image} alt={activeStory.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,21,19,0.12),rgba(15,21,19,0.82)_88%)]" />

                  <div className={`absolute left-4 top-4 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 ${activeStory.accent}`}>
                    cena ativa
                  </div>

                  <div className="absolute inset-x-4 bottom-4 grid gap-3 lg:grid-cols-[1fr_auto]">
                    <div className="rounded-[1.5rem] border border-white/15 bg-white/12 p-5 backdrop-blur-xl">
                      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                        <ArrowUpRight className="h-4 w-4 text-accent" />
                        argumento central
                      </div>
                      <p className="mt-3 text-sm leading-7 text-white/88">{activeStory.copy}</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      {activeStory.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="min-w-[9rem] rounded-[1.4rem] border border-white/15 bg-[#12211d]/75 p-4 text-white"
                        >
                          <div className="text-3xl font-semibold leading-none">{metric.value}</div>
                          <div className="mt-2 text-sm text-white/65">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
