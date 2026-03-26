"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileSearch, Rocket } from "lucide-react";
import Link from "next/link";
import { createWhatsAppUrl } from "@/lib/site-config";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Fale conosco",
    description:
      "Envie uma mensagem pelo WhatsApp ou preencha o formulário. Nosso consultor vai entender seu perfil, necessidades e orçamento.",
    highlight: "Sem compromisso, 100% gratuito.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Receba sua cotação personalizada",
    description:
      "Comparamos operadoras, coberturas e valores. Você recebe as melhores opções no seu WhatsApp em até 2 horas.",
    highlight: "Comparação clara, sem letras miúdas.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Escolha e comece a usar",
    description:
      "Contratação 100% digital, sem burocracia. Assinatura eletrônica e seu plano ativo em até 24 horas.",
    highlight: "Simples, rápido e seguro.",
  },
];

export function HowItWorksSection() {
  const whatsappUrl = createWhatsAppUrl("Olá! Gostaria de receber uma cotação personalizada de plano de saúde.");

  return (
    <section id="como-funciona" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="section-badge">Como Funciona</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Em 3 passos simples você{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #16B364 0%, #14B8A6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              encontra o plano ideal.
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Sem complicação, sem burocracia — do primeiro contato ao plano ativo.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-14 left-[16.66%] right-[16.66%] h-0.5 z-0"
            style={{
              background:
                "linear-gradient(90deg, #16B364 0%, #14B8A6 50%, #3B82F6 100%)",
            }}
          />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center text-center lg:items-center"
              >
                {/* Number + Icon combined */}
                <div className="relative mb-8">
                  {/* Outer ring */}
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #EDFCF2 0%, #D3F9E0 100%)",
                      border: "2px solid #AAF0C4",
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #16B364 0%, #099250 100%)",
                        boxShadow: "0 8px 24px rgba(22,179,100,0.35)",
                      }}
                    >
                      <step.icon className="w-9 h-9 text-white" />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "#084C2E" }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4 max-w-xs">{step.description}</p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-full"
                  style={{
                    background: "#EDFCF2",
                    color: "#087443",
                    border: "1px solid #AAF0C4",
                  }}
                >
                  <span className="text-[#16B364]">✓</span>
                  {step.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
            <MessageCircle className="w-5 h-5" />
            Iniciar minha cotação gratuita
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Resposta garantida em até 2 horas nos dias úteis
          </p>
        </motion.div>
      </div>
    </section>
  );
}
