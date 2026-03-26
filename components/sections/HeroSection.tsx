"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, Clock, Star, Users } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site-config";

const proofBadges = [
  { icon: Clock,       text: "Cotação em 15 min" },
  { icon: ShieldCheck, text: "Corretores Certificados ANS" },
  { icon: Users,       text: "+15 mil famílias protegidas" },
  { icon: Star,        text: "Atendimento 5 estrelas" },
];

export function HeroSection() {
  const whatsappUrl = createWhatsAppUrl(
    "Olá! Gostaria de uma cotação gratuita de plano de saúde."
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #02291A 0%, #084C2E 45%, #0d6b40 80%, #16B364 120%)",
      }}
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-8%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(60,203,127,0.18) 0%, transparent 65%)",
            animation: "float 10s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: 550,
            height: 550,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(20,184,166,0.13) 0%, transparent 65%)",
            animation: "float 13s ease-in-out infinite reverse",
          }}
        />
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative container-custom w-full pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* ── LEFT: Content ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-[#3CCB7F]"
                style={{ boxShadow: "0 0 0 0 rgba(60,203,127,0.8)", animation: "pulse-ring 2s ease infinite" }}
              />
              <span className="text-xs font-bold uppercase tracking-widest text-white/85">
                Consultoria Premium em Saúde
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-heading)", lineHeight: 1.08 }}
            >
              Sua saúde e a da sua{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3CCB7F 0%, #14B8A6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline",
                }}
              >
                família em boas mãos.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-[1.1rem] text-white/65 mb-10 max-w-lg leading-[1.75]"
            >
              Não perca tempo com burocracias. Nossos especialistas comparam
              as principais operadoras do Brasil para encontrar o plano com
              o melhor custo-benefício para o seu perfil.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="flex flex-col sm:flex-row gap-3.5 mb-12"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Simule Agora pelo WhatsApp
              </a>
              <Link href="#planos" className="btn-outline-white">
                Ver Planos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Proof badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {proofBadges.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.11)",
                  }}
                >
                  <b.icon className="w-4 h-4 flex-shrink-0" style={{ color: "#3CCB7F" }} />
                  <span className="text-xs font-semibold text-white/80 leading-snug">
                    {b.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Consultant photo (placeholder) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="relative hidden lg:block"
          >
            {/* Card frame */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                aspectRatio: "4/5",
                boxShadow: "0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              {/*
               * 📸 IMAGEM DO CONSULTOR / FAMÍLIA
               * Coloque em: /public/images/hero/consultor.jpg
               * Dimensões recomendadas: 800x1000px
               */}
              <Image
                src="/images/hero/consultor.jpg"
                alt="Consultora VivaBem — especialista em planos de saúde"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = "none";
                }}
              />

              {/* Placeholder visual (shown when no image) */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{
                  background:
                    "linear-gradient(160deg, #0d5e38 0%, #16B364 50%, #3CCB7F 100%)",
                }}
              >
                {/* Silhouette icon */}
                <div
                  className="w-40 h-40 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-24 h-24 text-white/50"
                    fill="currentColor"
                  >
                    <circle cx="50" cy="32" r="20" />
                    <path d="M10 90 Q10 60 50 60 Q90 60 90 90Z" />
                  </svg>
                </div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  📸 Foto do consultor
                </p>
                <p className="text-white/35 text-[11px] text-center px-8">
                  Adicione em /public/images/hero/consultor.jpg
                </p>
              </div>

              {/* Floating badge — "100% gratuito" */}
              <div
                className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-4 py-3 rounded-2xl"
                style={{
                  background: "rgba(2,41,26,0.85)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(60,203,127,0.3)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(22,179,100,0.25)" }}
                >
                  <ShieldCheck className="w-5 h-5" style={{ color: "#3CCB7F" }} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-none mb-0.5">
                    100% Gratuito
                  </p>
                  <p className="text-white/55 text-xs">
                    Sem custo, sem compromisso
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat pill */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 px-5 py-3.5 rounded-2xl"
              style={{
                background: "white",
                boxShadow: "0 12px 36px rgba(0,0,0,0.18)",
              }}
            >
              <p
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                +15 mil
              </p>
              <p className="text-xs text-gray-400 font-medium">famílias protegidas</p>
            </motion.div>

            {/* Floating rating pill */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-5 top-1/3 px-4 py-3 rounded-2xl"
              style={{
                background: "white",
                boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
              }}
            >
              <div className="flex gap-0.5 mb-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-xs font-bold text-gray-900">5 estrelas</p>
              <p className="text-[11px] text-gray-400">+500 avaliações</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 960 10 720 30C480 50 240 0 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
