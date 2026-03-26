"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Send, CheckCircle } from "lucide-react";
import { createWhatsAppUrl, createLeadSummaryMessage, siteConfig } from "@/lib/site-config";

const planTypes = ["Familiar", "Empresarial / PME", "MEI", "Sênior 60+", "Individual"];

export function CTASection() {
  const [form, setForm] = useState({ name: "", phone: "", planType: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = createLeadSummaryMessage({
      fullName: form.name,
      phone: form.phone,
      planType: form.planType,
      message: form.message,
    });
    window.open(createWhatsAppUrl(msg), "_blank");
    setSent(true);
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(140deg, #02291A 0%, #084C2E 50%, #095C37 100%)",
        padding: "6rem 0",
      }}
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: "absolute", top: "-20%", right: "-5%", width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(60,203,127,0.13) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "-5%", width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.09) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, opacity: 0.025,
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }} />
      </div>

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ── LEFT: Headline ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#3CCB7F",
                  boxShadow: "0 0 0 0 rgba(60,203,127,0.7)",
                  animation: "pulse-ring 2s ease infinite",
                }}
              />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                Atendimento disponível agora
              </span>
            </motion.div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pronto para proteger{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3CCB7F 0%, #14B8A6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                sua saúde?
              </span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Envie seus dados ou nos chame no WhatsApp para analisarmos
              o plano ideal no seu orçamento — hoje mesmo.
            </p>

            {/* Direct contact */}
            <div className="space-y-4 mb-10">
              <a
                href={createWhatsAppUrl("Olá! Quero uma cotação gratuita de plano de saúde.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:bg-white/10"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(22,179,100,0.25)" }}
                >
                  <MessageCircle className="w-6 h-6" style={{ color: "#3CCB7F" }} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">WhatsApp</p>
                  <p className="text-white/50 text-xs">Resposta em minutos</p>
                </div>
                <div className="ml-auto text-xs text-white/30">Preferido →</div>
              </a>

              <a
                href={`tel:+${siteConfig.phoneDigits}`}
                className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:bg-white/10"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(59,130,246,0.2)" }}
                >
                  <Phone className="w-6 h-6" style={{ color: "#60A5FA" }} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{siteConfig.phoneDisplay}</p>
                  <p className="text-white/50 text-xs">Seg–Sex 8h–20h | Sáb 9h–14h</p>
                </div>
              </a>
            </div>

            {/* Trust line */}
            <p className="text-xs text-white/30">
              ✓ 100% gratuito &nbsp;·&nbsp; ✓ Sem compromisso &nbsp;·&nbsp; ✓ Dados protegidos (LGPD)
            </p>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="p-8 rounded-3xl"
              style={{
                background: "white",
                boxShadow: "0 32px 64px rgba(0,0,0,0.25)",
              }}
            >
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: "#16B364" }} />
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Mensagem enviada!
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Abrimos o WhatsApp com seus dados. Um consultor vai responder em breve.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-outline-green text-sm"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Solicite sua cotação gratuita
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    Preencha abaixo — resposta em até 15 minutos.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Seu nome"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 outline-none focus:border-[#16B364] focus:ring-2 focus:ring-[#16B364]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        WhatsApp / Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 outline-none focus:border-[#16B364] focus:ring-2 focus:ring-[#16B364]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Tipo de plano
                      </label>
                      <select
                        value={form.planType}
                        onChange={(e) => setForm({ ...form, planType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 outline-none focus:border-[#16B364] focus:ring-2 focus:ring-[#16B364]/20 transition-all bg-white text-gray-700"
                      >
                        <option value="">Selecione o tipo de plano</option>
                        {planTypes.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Observações (opcional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Quantas pessoas, cidade, faixa etária..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 outline-none focus:border-[#16B364] focus:ring-2 focus:ring-[#16B364]/20 transition-all resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full py-4 rounded-2xl text-base">
                      <Send className="w-5 h-5" />
                      Solicitar pelo WhatsApp
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      Ao enviar, você será redirecionado para o WhatsApp.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
