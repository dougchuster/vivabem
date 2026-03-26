"use client"

import Link from "next/link"
import { ArrowRight, Instagram, Linkedin, Youtube, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react"

const footerLinks = [
  {
    heading: "Navegação",
    links: [
      { href: "#planos", label: "Nossos Planos" },
      { href: "#como-funciona", label: "Como Funciona" },
      { href: "#faq", label: "Perguntas Frequentes" },
      { href: "/privacidade", label: "Privacidade" },
    ],
  },
  {
    heading: "Tipos de Plano",
    links: [
      { href: "#planos", label: "Plano Individual" },
      { href: "#planos", label: "Plano Familiar" },
      { href: "#planos", label: "Vantagem MEI" },
      { href: "#planos", label: "Empresarial PME" },
      { href: "#planos", label: "Sênior 60+" },
    ],
  },
]

const socials = [
  { href: "https://instagram.com/vivabemsaude", icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
  { href: "https://facebook.com/vivabemsaude", icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
  { href: "https://linkedin.com/company/vivabemsaude", icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
  { href: "https://youtube.com/@vivabemsaude", icon: <Youtube className="w-4 h-4" />, label: "YouTube" },
]

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#0D2B1A] text-white/70">

      {/* Top CTA strip */}
      <div className="border-b border-white/8 py-12 px-6 lg:px-10 bg-[#0A2115]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & tagline */}
          <Link href="/" className="group flex items-center gap-4 shrink-0">
            <div className="w-11 h-11 rounded-xl bg-[#1A4A2E] border border-white/10 flex items-center justify-center shadow-lg">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path d="M9 2.5C9 2.5 3.5 6 3.5 10.5C3.5 13.2 6 15.5 9 15.5C12 15.5 14.5 13.2 14.5 10.5C14.5 6 9 2.5 9 2.5Z" fill="white" fillOpacity="0.9"/>
                <path d="M9 7C9 7 6.5 9.2 6.5 11C6.5 12.4 7.6 13.5 9 13.5C10.4 13.5 11.5 12.4 11.5 11C11.5 9.2 9 7 9 7Z" fill="#C9952A"/>
              </svg>
            </div>
            <div>
              <div
                className="text-xl font-bold tracking-tight text-white"
                style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
              >
                VivaBem
              </div>
              <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#C9952A]">
                Saúde & Vida
              </div>
            </div>
          </Link>

          {/* Newsletter */}
          <div className="w-full max-w-md">
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
              Receba dicas e novidades sobre planos de saúde
            </p>
            <form
              className="flex gap-0 rounded-xl overflow-hidden border border-white/10 focus-within:border-[#C9952A] transition-colors"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 h-12 bg-white/5 px-5 text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 px-5 bg-[#C9952A] flex items-center justify-center text-[#0D2B1A] hover:bg-[#D4A832] transition-colors shrink-0 font-bold"
                aria-label="Inscrever"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/35 mb-1">
                {col.heading}
              </p>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/55 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Social */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/35 mb-1">
              Redes Sociais
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/45 hover:border-[#C9952A]/60 hover:text-[#C9952A] hover:bg-[#C9952A]/5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/35 mb-1">
              Atendimento
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C9952A] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/55">Seg–Sex: 08h–20h</p>
                  <p className="text-sm text-white/55">Sáb: 09h–14h</p>
                </div>
              </div>
              <a href="tel:+5511943015525" className="flex items-center gap-2.5 group">
                <Phone className="w-4 h-4 text-[#C9952A] shrink-0" />
                <span className="text-sm font-semibold text-[#C9952A] group-hover:text-[#D4A832] transition-colors">
                  (11) 94301-5525
                </span>
              </a>
              <a href="mailto:contato@vivabemsaude.com.br" className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 text-white/35 shrink-0" />
                <span className="text-xs text-white/45 group-hover:text-white/70 transition-colors">
                  contato@vivabemsaude.com.br
                </span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                <span className="text-xs text-white/40 leading-relaxed">
                  Av. Paulista, 1000<br />São Paulo, SP
                </span>
              </div>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=5511943015525"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 bg-[#1A4A2E] border border-white/10 rounded-xl px-4 py-3 text-sm font-bold text-white hover:bg-[#2E7D52] hover:border-white/20 transition-all duration-200"
            >
              <WAIcon />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 py-6 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} VivaBem Consultoria em Planos de Saúde. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="text-xs text-white/25 hover:text-white/55 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-xs text-white/25 hover:text-white/55 transition-colors">
              Termos de Uso
            </Link>
            <span className="text-xs text-white/20">
              CNPJ: 00.000.000/0001-00
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}
