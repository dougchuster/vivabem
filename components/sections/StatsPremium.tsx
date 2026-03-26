"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, DollarSign, Heart, Award } from "lucide-react";

const stats = [
  {
    value: 15000,
    suffix: "+",
    label: "Vidas Protegidas",
    description: "Famílias e empresas atendidas",
    icon: Users,
  },
  {
    value: 17.8,
    suffix: "%",
    label: "Economia Média",
    description: "Redução no valor do plano",
    icon: DollarSign,
    decimals: 1,
  },
  {
    value: 15,
    suffix: " min",
    label: "Tempo de Resposta",
    description: "Para primeira cotação",
    icon: Clock,
  },
  {
    value: 98,
    suffix: "%",
    label: "Taxa de Satisfação",
    description: "Clientes que recomendam",
    icon: Heart,
  },
  {
    value: 12,
    suffix: "+",
    label: "Operadoras Parceiras",
    description: "As melhores do Brasil",
    icon: Award,
  },
  {
    value: 7,
    suffix: "+",
    label: "Anos de Experiência",
    description: "No mercado de saúde",
    icon: TrendingUp,
  },
];

function AnimatedNumber({ value, suffix = "", prefix = "", decimals = 0 }: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  decimals?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="tabular-nums"
    >
      {prefix}{value.toFixed(decimals)}{suffix}
    </motion.span>
  );
}

export function StatsPremium() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-brand-50/50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-badge mb-4 inline-block">Nossos Números</span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Resultados que{" "}
            <span className="bg-gradient-to-r from-brand-500 to-teal-500 bg-clip-text text-transparent">
              comprovam
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Mais de 7 anos ajudando brasileiros a encontrarem o plano de saúde ideal
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative p-5 rounded-2xl bg-white border border-brand-100 shadow-lg shadow-brand-100/30 text-center group"
            >
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500 opacity-50 group-hover:opacity-100 transition-opacity">
                <stat.icon className="w-4 h-4" />
              </div>
              <div 
                className="text-3xl md:text-4xl font-bold text-brand-600 mb-1" 
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <AnimatedNumber 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="text-sm font-semibold text-gray-900">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
