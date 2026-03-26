import { z } from 'zod'

// Schema para o formulário de simulação simplificado (Hero/CTA)
export const simpleLeadSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome completo é obrigatório')
    .max(100, 'Nome muito longo'),
  phone: z
    .string()
    .min(14, 'Telefone inválido')
    .max(15, 'Telefone inválido'),
  email: z
    .string()
    .email('E-mail inválido')
    .optional()
    .or(z.literal('')),
})

// Schema para o formulário de simulação completo (Wizard)
export const simulationStep1Schema = z.object({
  planType: z.enum(['individual', 'familiar', 'mei', 'empresarial'], {
    required_error: 'Selecione o tipo de plano',
  }),
  numberOfLives: z
    .number()
    .min(1, 'Mínimo 1 vida')
    .max(50, 'Máximo 50 vidas'),
  state: z.string().min(2, 'Selecione o estado'),
  city: z.string().min(2, 'Informe a cidade'),
})

export const simulationStep2Schema = z.object({
  fullName: z
    .string()
    .min(3, 'Nome completo é obrigatório')
    .max(100, 'Nome muito longo'),
  email: z
    .string()
    .email('E-mail inválido'),
  phone: z
    .string()
    .min(14, 'Telefone inválido'),
  birthDate: z
    .string()
    .min(10, 'Data de nascimento inválida'),
})

export const simulationStep3Schema = z.object({
  coverages: z.array(z.string()).optional(),
  message: z
    .string()
    .max(500, 'Mensagem muito longa')
    .optional(),
  privacyAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Você precisa aceitar a política de privacidade',
    }),
})

// Schema completo do wizard
export const simulationFormSchema = z.object({
  ...simulationStep1Schema.shape,
  ...simulationStep2Schema.shape,
  ...simulationStep3Schema.shape,
})

// Schema para formulário de contato
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome completo é obrigatório'),
  email: z
    .string()
    .email('E-mail inválido'),
  phone: z
    .string()
    .min(14, 'Telefone inválido'),
  subject: z
    .string()
    .min(1, 'Selecione o assunto'),
  message: z
    .string()
    .min(10, 'Mensagem muito curta')
    .max(1000, 'Mensagem muito longa'),
})

// Schema para newsletter
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('E-mail inválido'),
})

// Tipos TypeScript
export type SimpleLeadFormData = z.infer<typeof simpleLeadSchema>
export type SimulationStep1Data = z.infer<typeof simulationStep1Schema>
export type SimulationStep2Data = z.infer<typeof simulationStep2Schema>
export type SimulationStep3Data = z.infer<typeof simulationStep3Schema>
export type SimulationFormData = z.infer<typeof simulationFormSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>
export type NewsletterFormData = z.infer<typeof newsletterSchema>

// Estados brasileiros
export const brazilianStates = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
] as const

// Tipos de plano
export const planTypes = [
  { value: 'individual', label: 'Individual', description: 'Para você ou sua família' },
  { value: 'familiar', label: 'Familiar', description: 'Proteção completa para a família' },
  { value: 'mei', label: 'MEI / Autônomo', description: 'Para freelancers e MEIs' },
  { value: 'empresarial', label: 'Empresarial', description: 'Para empresas (2+ funcionários)' },
] as const

// Coberturas disponíveis
export const availableCoverages = [
  { value: 'internacao', label: 'Internação', icon: 'Hospital' },
  { value: 'maternidade', label: 'Maternidade', icon: 'Baby' },
  { value: 'psicologia', label: 'Psicologia', icon: 'Brain' },
  { value: 'odonto', label: 'Odontologia', icon: 'Smile' },
  { value: 'telemedicina', label: 'Telemedicina', icon: 'Video' },
  { value: 'fisioterapia', label: 'Fisioterapia', icon: 'Activity' },
  { value: 'nutricao', label: 'Nutrição', icon: 'Apple' },
  { value: 'oftalmologia', label: 'Oftalmologia', icon: 'Eye' },
] as const

// Assuntos para contato
export const contactSubjects = [
  { value: 'simulacao', label: 'Solicitar simulação' },
  { value: 'duvida', label: 'Tirar dúvidas' },
  { value: 'cotacao', label: 'Solicitar cotação' },
  { value: 'reclamacao', label: 'Reclamação' },
  { value: 'outro', label: 'Outro assunto' },
] as const
