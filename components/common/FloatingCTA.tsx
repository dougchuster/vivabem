"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Calculator, MessageCircle, X, Sparkles } from 'lucide-react'
import { createWhatsAppUrl } from '@/lib/site-config'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 2000)
    return () => window.clearTimeout(timer)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              className="flex flex-col gap-3"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/simulacao"
                  className="flex items-center gap-3 rounded-2xl border border-neutral-200/50 bg-white/90 backdrop-blur-xl px-5 py-3 text-sm font-medium text-neutral-900 shadow-xl shadow-neutral-900/10 hover:shadow-2xl hover:shadow-primary/10 transition-all hover:scale-105"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <Calculator className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="block font-semibold">Abrir simulação</span>
                    <span className="text-xs text-neutral-500">Gratuito e rápido</span>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-5 py-3 text-sm font-medium text-white shadow-xl shadow-green-500/25 hover:shadow-2xl hover:shadow-green-500/30 transition-all hover:scale-105"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block font-semibold">Conversar no WhatsApp</span>
                    <span className="text-xs text-white/80">Resposta em minutos</span>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen((current) => !current)}
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
          aria-label={isOpen ? 'Fechar atalhos' : 'Abrir atalhos'}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Pulse effect */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-2xl bg-primary animate-ping opacity-20" />
          )}
        </motion.button>
      </div>
    </div>
  )
}