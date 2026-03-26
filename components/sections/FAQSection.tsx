"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site-config";

const faqs = [
  {
    question: "Qual é a carência do plano de saúde?",
    answer:
      "Os prazos variam por operadora e tipo de procedimento. Para consultas e exames simples, geralmente 30 dias. Para procedimentos mais complexos e internações, 180 dias. Para parto, 300 dias. Clientes vindos de outros planos podem ter carências reduzidas mediante comprovação de tempo de vínculo anterior.",
  },
  {
    question: "Posso incluir dependentes no plano?",
    answer:
      "Sim! Cônjuges, filhos e dependentes legais podem ser incluídos. Nos planos familiares, a inclusão é simplificada e pode gerar economia de até 30%. Filhos podem permanecer no plano até os 21 anos (ou 24 anos se estudantes).",
  },
  {
    question: "Como funciona a rede credenciada?",
    answer:
      "Você tem acesso a milhares de médicos, clínicas, laboratórios e hospitais em todo o Brasil. A rede varia conforme o plano escolhido — nos planos Familiar e Premium, a cobertura é nacional com hospitais de referência.",
  },
  {
    question: "O plano cobre exames e cirurgias?",
    answer:
      "Sim. Todos os nossos planos cobrem consultas, exames laboratoriais e de imagem, internações e cirurgias conforme determinação da ANS. Planos mais completos incluem cobertura adicional como segunda opinião médica e concierge de saúde.",
  },
  {
    question: "Como faço para cancelar o plano?",
    answer:
      "O cancelamento pode ser solicitado a qualquer momento, sem multa. Basta entrar em contato com nosso time pelo WhatsApp ou telefone. O processo é simples e nosso time te orienta em cada etapa.",
  },
  {
    question: "Existe plano sem coparticipação?",
    answer:
      "Sim, temos opções com e sem coparticipação. Planos com coparticipação têm mensalidade menor, e você paga uma taxa ao usar o serviço. Nosso consultor te ajuda a entender qual opção faz mais sentido para seu perfil de uso.",
  },
  {
    question: "O que é portabilidade de plano?",
    answer:
      "Portabilidade permite trocar de operadora sem cumprir novas carências, desde que o plano atual esteja ativo há mais de 2 anos (ou 3 anos para cobertura parcial). É um direito seu e a VivaBem pode te ajudar a exercê-lo.",
  },
  {
    question: "Vocês atendem empresas de que porte?",
    answer:
      "Atendemos desde MEIs e microempresas (a partir de 2 vidas) até grandes corporações. Cada porte tem condições diferenciadas. PMEs a partir de 5 vidas têm acesso a condições especiais com preços reduzidos.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const whatsappUrl = createWhatsAppUrl("Olá! Tenho uma dúvida sobre planos de saúde que não encontrei no FAQ.");

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left — sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28"
          >
            <span className="section-badge">FAQ</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Tire suas{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #16B364 0%, #14B8A6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                dúvidas.
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Encontre respostas para as perguntas mais comuns sobre planos de saúde
              e nosso processo de atendimento.
            </p>

            {/* CTA card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, #EDFCF2 0%, #D3F9E0 100%)",
                border: "1px solid #AAF0C4",
              }}
            >
              <div className="text-2xl mb-3">💬</div>
              <h4
                className="font-bold text-gray-900 mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ainda tem dúvidas?
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                Nossos consultores respondem pelo WhatsApp em até 2 horas nos dias úteis.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #16B364 0%, #099250 100%)",
                  boxShadow: "0 4px 16px rgba(22,179,100,0.3)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Perguntar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden transition-all duration-200"
                  style={{
                    border: isOpen ? "1px solid #AAF0C4" : "1px solid #E5E7EB",
                    background: isOpen ? "#EDFCF2" : "white",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors"
                  >
                    <span
                      className={`font-semibold text-sm leading-snug transition-colors ${
                        isOpen ? "text-[#087443]" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isOpen ? "#16B364" : "#F3F4F6",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus className="w-4 h-4" style={{ color: isOpen ? "white" : "#9CA3AF" }} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-5 pb-5">
                          <div
                            className="h-px mb-4"
                            style={{ background: "#AAF0C4" }}
                          />
                          <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
