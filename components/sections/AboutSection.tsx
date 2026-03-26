"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const guarantees = [
  "Auditoria detalhada das suas necessidades",
  "Transparência total nos custos e carências",
  "Comparação imparcial entre operadoras",
  "Acompanhamento vitalício do seu contrato",
  "Sem custo para o cliente — 100% gratuito",
  "Consultores certificados pela ANS",
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image frame */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                aspectRatio: "1 / 1.1",
                boxShadow: "0 32px 64px rgba(0,0,0,0.10)",
              }}
            >
              {/*
               * 📸 IMAGEM DA EQUIPE / CONSULTORIA
               * Coloque em: /public/images/about/equipe.jpg
               * Dimensões recomendadas: 700x770px
               */}
              <Image
                src="/images/about/equipe.jpg"
                alt="Equipe VivaBem — consultores especializados"
                fill
                className="object-cover"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = "none";
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                style={{
                  background: "linear-gradient(160deg, #084C2E 0%, #16B364 60%, #3CCB7F 100%)",
                }}
              >
                <div
                  className="flex -space-x-4"
                >
                  {["CR", "MS", "JO"].map((init) => (
                    <div
                      key={init}
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white/20"
                      style={{ background: "rgba(255,255,255,0.2)" }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">
                  📸 Foto da equipe
                </p>
                <p className="text-white/35 text-[11px] text-center px-10">
                  Adicione em /public/images/about/equipe.jpg
                </p>
              </div>
            </div>

            {/* Floating card — "Não vendemos planos" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 max-w-[260px] p-5 rounded-2xl shadow-2xl bg-white"
              style={{ border: "1px solid #E5E7EB" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "#EDFCF2" }}
              >
                <span className="text-xl">🤝</span>
              </div>
              <p
                className="text-sm font-bold text-gray-900 mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Mais de uma década no mercado
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Especialistas que entendem o mercado de saúde de ponta a ponta.
              </p>
            </motion.div>

            {/* Green accent shape */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl -z-10"
              style={{ background: "linear-gradient(135deg, #3CCB7F, #16B364)", opacity: 0.15 }}
            />
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="order-1 lg:order-2"
          >
            <span className="section-badge">Quem Somos</span>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Não vendemos planos.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #16B364 0%, #14B8A6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Garantimos sua tranquilidade.
              </span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              A VivaBem é uma consultoria especializada em planos de saúde com
              atendimento humanizado e processo 100% transparente. Nosso objetivo
              não é vender — é encontrar a solução certa para o seu perfil e
              acompanhar você ao longo de todo o contrato.
            </p>

            {/* Guarantees list */}
            <ul className="space-y-3 mb-10">
              {guarantees.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#16B364" }}
                  />
                  <span className="text-gray-600 text-sm leading-snug">{g}</span>
                </li>
              ))}
            </ul>

            {/* Highlight quote */}
            <div
              className="p-5 rounded-2xl border-l-4"
              style={{
                background: "#EDFCF2",
                borderLeftColor: "#16B364",
              }}
            >
              <p className="text-gray-700 text-sm leading-relaxed italic">
                &ldquo;Nosso serviço é 100% gratuito para o cliente. A operadora remunera
                os corretores certificados — então você tem todo o suporte especializado
                sem pagar nada a mais.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
