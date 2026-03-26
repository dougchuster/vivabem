"use client"

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { createWhatsAppUrl, siteConfig } from '@/lib/site-config'

interface WhatsAppButtonProps {
  phone?: string
  message?: string
  className?: string
}

export function WhatsAppButton({
  phone = siteConfig.phoneDigits,
  message = siteConfig.whatsappDefaultMessage,
  className = '',
}: WhatsAppButtonProps) {
  const whatsappUrl =
    phone === siteConfig.phoneDigits
      ? createWhatsAppUrl(message)
      : `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A4A2E] text-white shadow-xl shadow-[#1A4A2E]/30 transition-all hover:shadow-2xl hover:shadow-[#1A4A2E]/40 hover:bg-[#0D2B1A] ${className}`}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-2xl bg-[#1A4A2E] animate-ping opacity-20" />
      
      {/* Shimmer effect */}
      <span className="absolute inset-0 rounded-2xl overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
      </span>
    </motion.a>
  )
}