"use client"

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Shield, 
  MessageCircle, 
  Clock, 
  CheckCircle,
  Sparkles,
  Phone,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createWhatsAppUrl, siteConfig } from '@/lib/site-config'

const benefits = [
  'Análise em até 2 horas',
  'Comparação entre 12 operadoras',
  'Proposta personalizada',
  'Sem compromisso de fechamento',
]

export function FinalCTASection() {
  const router = useRouter()
  const [isSubmitting, startTransition] = useTransition()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const params = new URLSearchParams({
      fullName: String(formData.get('fullName') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
    })
    startTransition(() => {
      router.push(`/simulacao?${params.toString()}`)
    })
  }

  return (
    <section className="section bg-gradient-to-br from-stone-900 to-stone-800 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Comece agora
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Pronto para encontrar seu plano ideal?
            </h2>
            <p className="text-lg text-stone-300 mb-8">
              Preencha seus dados e receba uma análise personalizada em até 2 horas. 
              Sem burocracia, sem pressão comercial.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-stone-200">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-stone-400">Telefone</p>
                  <p className="font-semibold">{siteConfig.phoneDisplay}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-stone-400">Horário</p>
                  <p className="font-semibold">Seg-Sex: 8h-20h</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-stone-900">
              <div className="mb-6">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Formulário rápido</span>
                <h3 className="text-2xl font-bold mt-2">
                  Receba sua análise personalizada
                </h3>
                <p className="text-stone-600 mt-2">
                  Vamos usar esses dados apenas para entrar em contato.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="final-name" className="text-stone-700">Nome completo</Label>
                  <Input
                    id="final-name"
                    name="fullName"
                    placeholder="Como você quer ser chamado"
                    className="mt-1.5 h-12 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="final-phone" className="text-stone-700">Telefone</Label>
                    <Input
                      id="final-phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="mt-1.5 h-12 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="final-email" className="text-stone-700">E-mail</Label>
                    <Input
                      id="final-email"
                      name="email"
                      type="email"
                      placeholder="voce@email.com"
                      className="mt-1.5 h-12 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-14 text-lg font-semibold shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 transition-all"
                >
                  {isSubmitting ? 'Enviando...' : 'Quero receber propostas'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <a
                  href={createWhatsAppUrl('Ola! Quero uma orientacao sobre plano de saude.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full rounded-xl h-14 text-base font-semibold border-2 border-stone-200 hover:border-emerald-600 hover:text-emerald-600"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </form>

              <div className="mt-6 pt-6 border-t border-stone-100">
                <div className="flex items-center justify-center gap-2 text-xs text-stone-500">
                  <Shield className="w-4 h-4" />
                  <span>Seus dados estão protegidos e não serão compartilhados</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
