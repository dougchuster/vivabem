"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Sparkles,
  ArrowUpRight,
  Clock,
  MessageCircle,
  ShieldCheck
} from 'lucide-react'
import { siteConfig, createWhatsAppUrl } from '@/lib/site-config'

const footerLinks = {
  servicos: [
    { label: 'Planos Individuais', href: '/planos' },
    { label: 'Planos Familiares', href: '/planos' },
    { label: 'Planos MEI', href: '/planos' },
    { label: 'Planos Empresariais', href: '/planos' },
    { label: 'Simulação', href: '/simulacao' },
  ],
  empresa: [
    { label: 'Sobre nós', href: '/sobre' },
    { label: 'Blog', href: '/blog' },
    { label: 'Como funciona', href: '/#como-funciona' },
    { label: 'Depoimentos', href: '/#depoimentos' },
    { label: 'FAQ', href: '/#faq' },
  ],
  legal: [
    { label: 'Termos de Uso', href: '/termos' },
    { label: 'Privacidade', href: '/privacidade' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: siteConfig.socialLinks.instagram, label: 'Instagram' },
  { icon: Linkedin, href: siteConfig.socialLinks.linkedin, label: 'LinkedIn' },
  { icon: Facebook, href: siteConfig.socialLinks.facebook, label: 'Facebook' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-shape floating-shape-1 opacity-10" />
        <div className="floating-shape floating-shape-2 opacity-10" />
      </div>

      <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        {/* Main Footer */}
        <div className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/25">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-bold text-2xl">VivaBem</span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Saúde
                  </span>
                </div>
              </Link>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Corretora especializada em planos de saúde. 
                Comparando operadoras com rigor desde 2018.
              </p>
              <div className="space-y-3">
                <a href={`tel:${siteConfig.phoneDigits}`} className="flex items-center gap-3 text-neutral-300 hover:text-primary transition-colors group">
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  {siteConfig.phoneDisplay}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-neutral-300 hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  {siteConfig.email}
                </a>
                <div className="flex items-start gap-3 text-neutral-300">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    {siteConfig.address.street}, {siteConfig.address.city}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold text-lg mb-6">Serviços</h4>
              <ul className="space-y-3">
                {footerLinks.servicos.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-6">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hours & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold text-lg mb-6">Atendimento</h4>
              <div className="bg-white/5 rounded-2xl p-5 mb-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Horário de funcionamento</span>
                </div>
                <div className="space-y-2 text-sm text-neutral-400">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta</span>
                    <span className="text-white">8h - 20h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="text-white">9h - 14h</span>
                  </div>
                </div>
              </div>
              <motion.a
                href={createWhatsAppUrl('Ola! Gostaria de falar com um especialista.')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-neutral-500 text-center md:text-left">
                © {new Date().getFullYear()} {siteConfig.legalName}. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6">
                {footerLinks.legal.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary/30"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust badge */}
        <div className="border-t border-white/5">
          <div className="container py-4">
            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Dados tratados com cuidado, atendimento orientado por clareza e conformidade.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}