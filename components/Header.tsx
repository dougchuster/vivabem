"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { createWhatsAppUrl } from "@/lib/site-config"

const navLinks = [
  { href: "#planos", label: "Planos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#faq", label: "Perguntas" },
  { href: "/blog", label: "Blog" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const whatsappUrl = createWhatsAppUrl()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/96 backdrop-blur-xl border-b border-[#E8F5EE] shadow-[0_2px_24px_rgba(13,43,26,0.08)]"
            : "bg-transparent"
        }`}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between"
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#1A4A2E] flex items-center justify-center shadow-md shadow-[#1A4A2E]/20">
              <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
                <path d="M9 2.5C9 2.5 3.5 6 3.5 10.5C3.5 13.2 6 15.5 9 15.5C12 15.5 14.5 13.2 14.5 10.5C14.5 6 9 2.5 9 2.5Z" fill="white" fillOpacity="0.9"/>
                <path d="M9 7C9 7 6.5 9.2 6.5 11C6.5 12.4 7.6 13.5 9 13.5C10.4 13.5 11.5 12.4 11.5 11C11.5 9.2 9 7 9 7Z" fill="#C9952A"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span
                className="text-2xl font-bold tracking-tight text-[#0D2B1A]"
                style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
              >
                VivaBem
              </span>
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9952A]">
                Saúde & Vida
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-[0.08em] uppercase text-[#3D6B50] hover:text-[#0D2B1A] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#C9952A] rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+556284457024"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#3D6B50] hover:text-[#0D2B1A] transition-colors px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5" />
              (62) 8445-7024
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A4A2E] text-white text-xs font-bold tracking-wide uppercase px-5 py-2.5 rounded-xl hover:bg-[#0D2B1A] transition-all duration-200 shadow-md shadow-[#1A4A2E]/20"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotação Grátis
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-[#1A4A2E] hover:text-[#0D2B1A] transition-colors lg:hidden rounded-xl hover:bg-[#EEF8F2]"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden bg-white border-t border-[#E8F5EE] lg:hidden shadow-xl shadow-[#1A4A2E]/5"
            >
              <div className="px-6 pt-6 pb-8 flex flex-col gap-5">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-semibold tracking-[0.06em] uppercase text-[#3D6B50] hover:text-[#0D2B1A] transition-colors py-1"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="pt-4 border-t border-[#E8F5EE] flex flex-col gap-3">
                  <a
                    href="tel:+556284457024"
                    className="flex items-center gap-2 text-sm font-semibold text-[#3D6B50] py-2"
                  >
                    <Phone className="w-4 h-4" />
                    (62) 8445-7024
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 bg-[#1A4A2E] text-white text-sm font-bold tracking-wide uppercase py-3.5 rounded-xl hover:bg-[#0D2B1A] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Cotação Grátis no WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
