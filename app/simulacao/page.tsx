"use client"

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/common/FloatingCTA'
import { SmoothScrollProvider } from '@/components/common/SmoothScrollProvider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  User,
  Users,
  Briefcase,
  Building2,
  ArrowRight,
  ArrowLeft,
  Check,
  Calendar,
  MapPin,
  Phone,
  Mail,
  UserRound,
  Stethoscope,
  Baby,
  Brain,
  Smile,
  Video,
  Activity,
  Apple,
  Eye,
} from 'lucide-react'
import { brazilianStates, availableCoverages } from '@/lib/schema/lead-form'
import { createLeadSummaryMessage, createWhatsAppUrl, siteConfig } from '@/lib/site-config'

const planTypes = [
  { value: 'individual', label: 'Individual', description: 'Para você ou sua família', icon: User },
  { value: 'familiar', label: 'Familiar', description: 'Proteção completa para a família', icon: Users },
  { value: 'mei', label: 'MEI / Autônomo', description: 'Para freelancers e MEIs', icon: Briefcase },
  { value: 'empresarial', label: 'Empresarial', description: 'Para empresas (2+ funcionários)', icon: Building2 },
]

const coverageIcons: Record<string, React.ElementType> = {
  internacao: Stethoscope,
  maternidade: Baby,
  psicologia: Brain,
  odonto: Smile,
  telemedicina: Video,
  fisioterapia: Activity,
  nutricao: Apple,
  oftalmologia: Eye,
}

function SimulacaoPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    planType: '',
    numberOfLives: 1,
    state: '',
    city: '',
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    coverages: [] as string[],
    message: '',
    privacyAccepted: false,
  })

  useEffect(() => {
    const fullName = searchParams.get('fullName') ?? ''
    const email = searchParams.get('email') ?? ''
    const phone = searchParams.get('phone') ?? ''

    if (!fullName && !email && !phone) {
      return
    }

    setFormData((current) => ({
      ...current,
      fullName: current.fullName || fullName,
      email: current.email || email,
      phone: current.phone || phone,
    }))
  }, [searchParams])

  const totalSteps = 3
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // INTEGRAR: Server Action para envio do formulário
    // INTEGRAR: CRM (HubSpot / RD Station / Kommo)
    // INTEGRAR: Email service (Resend / Nodemailer)

    const whatsappUrl = createWhatsAppUrl(
      createLeadSummaryMessage({
        ...formData,
        planType: planTypes.find((type) => type.value === formData.planType)?.label,
      })
    )

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const toggleCoverage = (coverage: string) => {
    setFormData(prev => ({
      ...prev,
      coverages: prev.coverages.includes(coverage)
        ? prev.coverages.filter(c => c !== coverage)
        : [...prev.coverages, coverage]
    }))
  }

  if (isSuccess) {
    return (
      <SmoothScrollProvider>
        <Navbar />
        <main className="pt-20 lg:pt-24 min-h-screen flex items-center">
          <div className="container-custom py-16">
            <div className="max-w-xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8"
              >
                <Check className="w-12 h-12 text-primary" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4"
              >
                🎉 Simulação recebida!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-neutral-600 mb-8"
              >
                Entraremos em contato em até <strong>2 horas</strong> com as
                melhores opções para o seu perfil.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button onClick={() => router.push('/')} size="lg" className="rounded-xl">
                  Voltar para a home
                </Button>
                <a
                  href="https://wa.me/551140001234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="rounded-xl">
                    Falar no WhatsApp
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </main>
        <Footer />
      </SmoothScrollProvider>
    )
  }

  return (
    <SmoothScrollProvider>
      <Navbar />
      <main className="pt-20 lg:pt-24 min-h-screen bg-neutral-50">
        <div className="container-custom py-12 lg:py-16">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Simulação Gratuita
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Encontre seu plano ideal
            </h1>
            <p className="text-neutral-600">
              Preencha as informações abaixo e receba uma proposta personalizada
              em até 2 horas.
            </p>
          </div>

          {/* Progress */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-neutral-600">
                Passo {step} de {totalSteps}
              </span>
              <span className="text-sm text-neutral-500">
                {Math.round(progress)}% completo
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* Step 1: Profile */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-8 shadow-lg shadow-neutral-200/50 border border-neutral-100"
                  >
                    <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                      Perfil do plano
                    </h2>

                    <div className="space-y-6">
                      {/* Plan Type */}
                      <div>
                        <Label className="text-base font-medium mb-3 block">
                          Tipo de plano
                        </Label>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {planTypes.map((type) => {
                            const Icon = type.icon
                            return (
                              <button
                                key={type.value}
                                type="button"
                                onClick={() => setFormData({ ...formData, planType: type.value })}
                                className={`p-4 rounded-xl border-2 text-left transition-all ${formData.planType === type.value
                                    ? 'border-primary bg-primary/5'
                                    : 'border-neutral-200 hover:border-neutral-300'
                                  }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${formData.planType === type.value
                                      ? 'bg-primary text-white'
                                      : 'bg-neutral-100 text-neutral-500'
                                    }`}>
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <p className={`font-medium ${formData.planType === type.value ? 'text-primary' : 'text-neutral-900'
                                      }`}>
                                      {type.label}
                                    </p>
                                    <p className="text-sm text-neutral-500">{type.description}</p>
                                  </div>
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Number of Lives */}
                      <div>
                        <Label htmlFor="lives" className="text-base font-medium mb-3 block">
                          Número de vidas
                        </Label>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, numberOfLives: Math.max(1, formData.numberOfLives - 1) })}
                            className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors"
                          >
                            -
                          </button>
                          <span className="text-2xl font-bold text-neutral-900 w-12 text-center">
                            {formData.numberOfLives}
                          </span>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, numberOfLives: Math.min(50, formData.numberOfLives + 1) })}
                            className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="state" className="text-base font-medium mb-3 block">
                            Estado
                          </Label>
                          <Select
                            value={formData.state}
                            onValueChange={(value) => setFormData({ ...formData, state: value })}
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              {brazilianStates.map((state) => (
                                <SelectItem key={state.value} value={state.value}>
                                  {state.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="city" className="text-base font-medium mb-3 block">
                            Cidade
                          </Label>
                          <Input
                            id="city"
                            placeholder="Sua cidade"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="h-12"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.planType || !formData.state || !formData.city}
                        className="rounded-xl group"
                      >
                        Continuar
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Personal Data */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-8 shadow-lg shadow-neutral-200/50 border border-neutral-100"
                  >
                    <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                      Dados pessoais
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="fullName" className="text-base font-medium mb-3 block">
                          Nome completo
                        </Label>
                        <div className="relative">
                          <UserRound className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                          <Input
                            id="fullName"
                            placeholder="Seu nome completo"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="h-12 pl-12"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-base font-medium mb-3 block">
                          E-mail
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="h-12 pl-12"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-base font-medium mb-3 block">
                          Telefone
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(11) 99999-9999"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="h-12 pl-12"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="birthDate" className="text-base font-medium mb-3 block">
                          Data de nascimento
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                          <Input
                            id="birthDate"
                            type="date"
                            value={formData.birthDate}
                            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                            className="h-12 pl-12"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleBack}
                        className="rounded-xl"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar
                      </Button>
                      <Button
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.fullName || !formData.email || !formData.phone || !formData.birthDate}
                        className="rounded-xl group"
                      >
                        Continuar
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Customization */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-8 shadow-lg shadow-neutral-200/50 border border-neutral-100"
                  >
                    <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                      Personalização
                    </h2>

                    <div className="space-y-6">
                      {/* Coverages */}
                      <div>
                        <Label className="text-base font-medium mb-3 block">
                          Coberturas prioritárias (opcional)
                        </Label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {availableCoverages.map((coverage) => {
                            const Icon = coverageIcons[coverage.value] || Activity
                            const isSelected = formData.coverages.includes(coverage.value)

                            return (
                              <button
                                key={coverage.value}
                                type="button"
                                onClick={() => toggleCoverage(coverage.value)}
                                className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${isSelected
                                    ? 'border-primary bg-primary/5'
                                    : 'border-neutral-200 hover:border-neutral-300'
                                  }`}
                              >
                                <Checkbox checked={isSelected} className="pointer-events-none" />
                                <Icon className={`w-5 h-5 ${isSelected ? 'text-primary' : 'text-neutral-400'}`} />
                                <span className={isSelected ? 'text-primary font-medium' : 'text-neutral-700'}>
                                  {coverage.label}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message" className="text-base font-medium mb-3 block">
                          Observações (opcional)
                        </Label>
                        <textarea
                          id="message"
                          placeholder="Alguma informação adicional que gostaria de compartilhar..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full min-h-[120px] p-4 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        />
                      </div>

                      {/* Privacy */}
                      <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl">
                        <Checkbox
                          id="privacy"
                          checked={formData.privacyAccepted}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, privacyAccepted: checked as boolean })
                          }
                        />
                        <Label htmlFor="privacy" className="text-sm text-neutral-600 cursor-pointer">
                          Li e aceito a{' '}
                          <a href="/privacidade" className="text-primary hover:underline">
                            Política de Privacidade
                          </a>
                          . Autorizo o uso dos meus dados para contato sobre planos de saúde.
                        </Label>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleBack}
                        className="rounded-xl"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar
                      </Button>
                      <Button
                        type="submit"
                        disabled={!formData.privacyAccepted || isSubmitting}
                        isLoading={isSubmitting}
                        className="rounded-xl group"
                      >
                        Enviar minha simulação
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Trust Badges */}
          <div className="max-w-2xl mx-auto mt-12 flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Sem compromisso
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Resposta em 2 horas
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              100% gratuito
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </SmoothScrollProvider>
  )
}

export default function SimulacaoPage() {
  return (
    <Suspense fallback={null}>
      <SimulacaoPageContent />
    </Suspense>
  )
}
