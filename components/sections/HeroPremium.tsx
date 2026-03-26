"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Star, 
  Users,
  HeartPulse,
  ChevronDown,
  BadgeCheck
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/site-config";
import { ImageSlider } from "@/components/ui/image-slider";

const heroSlides = [
  {
    src: "/images/site/hero_family.png",
    alt: "Médico em atendimento humanizado",
    title: "Atendimento Premium",
    subtitle: "Cuidado médico de excelência para você e sua família",
  },
  {
    src: "/images/site/hero_couple.png",
    alt: "Consultoria especializada em planos de saúde",
    title: "Consultoria Especializada",
    subtitle: "Especialistas ANS para encontrar o melhor plano",
  },
  {
    src: "/images/site/hero_senior.png",
    alt: "Família protegida com plano de saúde",
    title: "Proteção Familiar",
    subtitle: "Segurança e tranquilidade para quem você ama",
  },
];

const proofBadges = [
  { icon: Clock, text: "Cotação em 15 min", subtext: "Resposta rápida garantida" },
  { icon: ShieldCheck, text: "Corretores Certificados ANS", subtext: "Profissionais qualificados" },
  { icon: Users, text: "+15 mil famílias", subtext: "Clientes protegidos" },
  { icon: Star, text: "4.9/5 estrelas", subtext: "Baseado em 500+ avaliações" },
];

export function HeroPremium() {
  const whatsappUrl = createWhatsAppUrl(
    "Olá! Gostaria de uma cotação gratuita de plano de saúde."
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#02291A] via-[#084C2E] to-[#0d6b40]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Blobs */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-400 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-teal-500 to-transparent blur-3xl"
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <BadgeCheck className="w-4 h-4 text-brand-400" />
              <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                Consultoria Premium em Saúde
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.05] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Sua saúde em
              <span className="block bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">
                boas mãos.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Especialistas ANS comparam as melhores operadoras do Brasil para encontrar 
              o plano ideal com o melhor custo-benefício para você e sua família.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-lg group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Falar com Especialista
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                href="#planos" 
                className="btn-outline-white btn-primary-lg"
              >
                Ver Planos Disponíveis
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0"
            >
              {proofBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <badge.icon className="w-4 h-4 text-brand-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white/90">{badge.text}</div>
                    <div className="text-[10px] text-white/50">{badge.subtext}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              <ImageSlider
                slides={heroSlides}
                autoPlay={true}
                interval={6000}
                aspectRatio="4/3"
                className="w-full"
              />
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-2xl p-4 shadow-xl border border-brand-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">+15mil</div>
                  <div className="text-xs text-gray-500">vidas protegidas</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-4 -right-4 md:-right-8 bg-white rounded-2xl p-4 shadow-xl border border-brand-100"
            >
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm font-bold text-gray-900">4.9/5</div>
              <div className="text-xs text-gray-500">+500 avaliações</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
