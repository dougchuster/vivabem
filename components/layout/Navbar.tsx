"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Sparkles, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { createWhatsAppUrl, siteConfig } from '@/lib/site-config'

const navLinks = [
  { href: '/planos', label: 'Planos' },
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#provas', label: 'Depoimentos' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-2xl shadow-lg shadow-neutral-900/5 border-b border-neutral-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25'
                    : 'bg-white/10 text-white backdrop-blur-sm'
                }`}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <div>
                <span className={`font-bold text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-neutral-900' : 'text-white'
                }`}>
                  VivaBem
                </span>
                <span className={`hidden sm:inline text-[10px] font-semibold uppercase tracking-[0.2em] ml-1 transition-colors duration-300 ${
                  isScrolled ? 'text-primary' : 'text-white/60'
                }`}>
                  Saúde
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                      isScrolled
                        ? 'text-neutral-600 hover:text-primary hover:bg-primary/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href={createWhatsAppUrl('Ola! Quero falar com um especialista.')}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? 'text-neutral-600 hover:text-primary hover:bg-primary/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phoneDisplay}
              </motion.a>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/simulacao">
                  <Button className={`rounded-xl px-6 shadow-lg transition-all duration-300 ${
                    isScrolled
                      ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-primary/25 hover:shadow-xl hover:shadow-primary/30'
                      : 'bg-white text-primary hover:bg-white/90'
                  }`}>
                    Simular grátis
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary/10 text-primary'
                  : 'bg-white/10 text-white'
              }`}
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
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-2xl border-b border-neutral-200/50 shadow-2xl lg:hidden"
          >
            <div className="container py-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 text-lg font-medium text-neutral-700 py-3 px-4 rounded-xl hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 pt-6 border-t border-neutral-200/50 space-y-3"
              >
                <Link href="/simulacao" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl py-6 text-lg font-semibold shadow-lg shadow-primary/25">
                    Simular gratuitamente
                  </Button>
                </Link>
                <a
                  href={createWhatsAppUrl('Ola! Quero falar com um especialista.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full rounded-xl py-6 text-lg font-semibold border-2 border-neutral-200 hover:border-primary hover:text-primary">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}