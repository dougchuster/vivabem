"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  Briefcase,
  Building2,
  Clock,
  Users,
  User,
  Stethoscope,
  Star,
  Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { plans } from '@/lib/data/plans'
import { createWhatsAppUrl } from '@/lib/site-config'

const typeIcons = {
  individual: User,
  familiar: Users,
  mei: Briefcase,
  empresarial: Building2,
} as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function PlansGridSection() {
  return (
    <section id="planos" className="section bg-stone-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Nossos Planos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-stone-600">
            Comparamos as melhores operadoras para encontrar a cobertura perfeita 
            para o seu perfil e orçamento.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan) => {
            const Icon = typeIcons[plan.type]
            
            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                className={`relative bg-white rounded-2xl lg:rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl ${
                  plan.isPopular 
                    ? 'border-emerald-500 shadow-xl shadow-emerald-500/10' 
                    : 'border-stone-100 hover:border-emerald-200'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 text-white text-sm font-bold rounded-full shadow-lg">
                      <Star className="w-4 h-4 fill-white" />
                      MAIS SOLICITADO
                    </span>
                  </div>
                )}

                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      plan.isPopular 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-emerald-100 text-emerald-600'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                        {plan.audience}
                      </p>
                      <h3 className="text-xl lg:text-2xl font-bold text-stone-900">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 mb-6 text-sm lg:text-base">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-sm text-stone-500">A partir de</span>
                    <span className="text-4xl lg:text-5xl font-bold text-stone-900">{plan.price}</span>
                    <span className="text-stone-500">/mês</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.isPopular ? 'bg-emerald-100 text-emerald-600' : 'bg-stone-100 text-stone-600'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-stone-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-stone-50 rounded-xl">
                    <div>
                      <div className="flex items-center gap-2 text-stone-400 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase">Rede</span>
                      </div>
                      <p className="text-sm font-semibold text-stone-900">{plan.networkSize}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-stone-400 mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase">Carência</span>
                      </div>
                      <p className="text-sm font-semibold text-stone-900">{plan.waitingPeriod}</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link href="/simulacao" className="block">
                      <Button 
                        className={`w-full rounded-xl py-6 text-base font-semibold transition-all ${
                          plan.isPopular
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25'
                            : 'bg-stone-900 hover:bg-stone-800 text-white'
                        }`}
                      >
                        Quero proposta
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <a
                      href={createWhatsAppUrl(`Ola! Tenho interesse no ${plan.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full rounded-xl py-6 text-base font-semibold border-2 border-stone-200 hover:border-emerald-600 hover:text-emerald-600"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Falar com consultor
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 text-center"
        >
          <p className="text-stone-600 mb-4">
            Não sabe qual plano escolher? Nossos consultores podem ajudar.
          </p>
          <Link href="/simulacao">
            <Button 
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all"
            >
              Receber orientação gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
