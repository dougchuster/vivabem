"use client"

import { motion } from 'framer-motion'
import { Shield, Lock, Award, Building2, CheckCircle, Phone, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { createWhatsAppUrl } from '@/lib/site-config'

const partners = [
  { name: 'Unimed', color: '#00A878' },
  { name: 'Amil', color: '#2563EB' },
  { name: 'SulAmérica', color: '#DC2626' },
  { name: 'Hapvida', color: '#0891B2' },
  { name: 'Bradesco', color: '#DC2626' },
  { name: 'Porto Seguro', color: '#1E40AF' },
  { name: 'NotreDame', color: '#059669' },
  { name: 'Omint', color: '#7C3AED' },
]

const features = [
  {
    icon: Shield,
    title: 'Operação Regulada',
    description: 'Todas as operadoras são credenciadas pela ANS',
  },
  {
    icon: Lock,
    title: 'Dados Protegidos',
    description: 'Segurança e privacidade garantidas',
  },
  {
    icon: Award,
    title: 'Consultoria Especializada',
    description: 'Análise personalizada para seu perfil',
  },
]

export function TrustSection() {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-stone-600 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Confiabilidade
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            Trabalhamos com as melhores operadoras
          </h2>
          <p className="text-lg text-stone-600">
            Parcerias com operadoras regulamentadas para oferecer o melhor custo-benefício.
          </p>
        </motion.div>

        {/* Partners Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
              }}
              className="flex gap-6 pr-6"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 px-6 py-4 bg-stone-50 rounded-2xl border border-stone-100"
                >
                  <span 
                    className="text-lg font-bold"
                    style={{ color: partner.color }}
                  >
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-stone-50 border border-stone-100"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-stone-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Building2 className="w-6 h-6 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Atendimento Personalizado</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                Precisa de ajuda para escolher?
              </h3>
              <p className="text-stone-300">
                Nossos consultores estão disponíveis para entender sua situação e 
                recomendar as melhores opções sem compromisso.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={createWhatsAppUrl('Ola! Preciso de ajuda para escolher um plano.')} target="_blank" rel="noopener noreferrer">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-6 text-base font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
