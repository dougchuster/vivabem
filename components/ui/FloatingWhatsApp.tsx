"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WAIcon } from "../icons/WAIcon"
import { X, MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Delay the button appearance slightly, and auto-open the bubble after 5s
  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 1500)
    const openTimer = setTimeout(() => setIsOpen(true), 6000)
    return () => {
      clearTimeout(showTimer)
      clearTimeout(openTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-5 border border-[#E8F5EE] w-72 origin-bottom-right pointer-events-auto flex flex-col"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="w-10 h-10 bg-[#EEF8F2] rounded-full flex items-center justify-center text-[#1A4A2E]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <h4 className="text-[#0D2B1A] font-bold text-sm mb-1">Precisa de ajuda?</h4>
            <p className="text-[#5A8870] text-xs leading-relaxed mb-4 font-medium">
              Fale agora com um especialista para tirar suas dúvidas e simular seu plano sem compromisso.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=556284457024&text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1A4A2E] text-white text-xs font-bold w-full py-3 rounded-xl hover:bg-[#0D2B1A] transition-all shadow-md shadow-[#1A4A2E]/20"
              onClick={() => setIsOpen(false)}
            >
              <WAIcon className="w-4 h-4" />
              Iniciar conversa
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-2xl transition-all pointer-events-auto relative"
        aria-label="Abrir WhatsApp"
      >
        <WAIcon className="w-7 h-7 lg:w-8 lg:h-8" />
        {/* Unread dot indicator */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 lg:w-4 lg:h-4 bg-red-500 border-2 border-white rounded-full animate-pulse" />
        )}
      </motion.button>
    </div>
  )
}
