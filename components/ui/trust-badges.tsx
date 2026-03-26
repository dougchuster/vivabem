"use client"

import { motion } from "framer-motion"
import { Award, Clock3, ShieldCheck, Star, Users } from "lucide-react"

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "ANS e processo claro",
    description: "Orientação técnica em linguagem simples",
  },
  {
    icon: Award,
    title: "Curadoria humana",
    description: "Sem comparação automática e sem empurrão comercial",
  },
  {
    icon: Clock3,
    title: "Retorno ágil",
    description: "Comparativo no mesmo dia quando os dados estão completos",
  },
  {
    icon: Users,
    title: "Acompanhamento real",
    description: "Da primeira conversa até a implantação",
  },
  {
    icon: Star,
    title: "Confiança percebida",
    description: "Clientes valorizam a clareza e o suporte contínuo",
  },
]

export function TrustBadgesRow() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {trustBadges.map((badge, index) => (
        <motion.div
          key={badge.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="group card p-5 hover:border-primary/30"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary group-hover:from-primary group-hover:to-primary-dark group-hover:text-white transition-all duration-300">
            <badge.icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-base font-semibold leading-tight text-neutral-900">{badge.title}</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600">{badge.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export function TrustBadgesGrid() {
  return <TrustBadgesRow />
}