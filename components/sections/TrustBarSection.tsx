"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/*
 * Logos disponíveis em /public/images/logos_planos_saude/
 * Para adicionar mais logos, coloque o arquivo PNG/SVG na pasta e adicione aqui.
 */
const logos = [
  { src: "/images/logos_planos_saude/amil.png",                  alt: "Amil" },
  { src: "/images/logos_planos_saude/unimed.png",                 alt: "Unimed" },
  { src: "/images/logos_planos_saude/bradesco-1.png",             alt: "Bradesco Saúde" },
  { src: "/images/logos_planos_saude/sul-america-saude.png",      alt: "SulAmérica" },
  { src: "/images/logos_planos_saude/logo_SelectSaude.png",       alt: "Select Saúde" },
  { src: "/images/logos_planos_saude/tempmed.png",                alt: "Tempmed" },
  { src: "/images/logos_planos_saude/logo-medsenior-brasilia.png", alt: "MedSênior" },
];

// Duplicate for seamless loop
const track = [...logos, ...logos, ...logos];

export function TrustBarSection() {
  return (
    <section className="py-14 bg-white overflow-hidden border-b border-gray-100">
      <div className="container-custom mb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "#9CA3AF" }}
          >
            Operadoras parceiras
          </p>
          <p className="text-gray-500 text-sm">
            Trabalhamos com as melhores operadoras do Brasil
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 h-full w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 h-full w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div className="logo-track">
          {track.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-8 py-3 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 transition-all cursor-default"
              style={{ minWidth: 160, height: 72 }}
            >
              <div className="relative w-28 h-10">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="container-custom mt-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: "🏛️", label: "Regulamentado pela ANS" },
            { icon: "🔒", label: "Dados protegidos — LGPD" },
            { icon: "⚡", label: "Cotação em até 15 minutos" },
            { icon: "💬", label: "Atendimento humanizado" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-100 bg-gray-50 text-sm font-medium text-gray-500"
            >
              <span>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
