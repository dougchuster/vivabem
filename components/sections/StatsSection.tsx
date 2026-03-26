"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { end: 15000, display: "+15.000", suffix: "", label: "Famílias protegidas", sub: "e contando" },
  { end: 15,    display: "15",      suffix: " min", label: "Tempo de cotação",  sub: "do contato à proposta" },
  { end: 7,     display: "7",       suffix: "+",    label: "Operadoras parceiras", sub: "as melhores do Brasil" },
  { end: 5,     display: "5",       suffix: "★",    label: "Estrelas de satisfação", sub: "avaliação média" },
];

function Counter({ end, suffix, active }: { end: number; suffix: string; active: boolean }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const dur = 2000;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3); // ease out cubic
      setVal(Math.round(e * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, end]);
  return <>{val >= 1000 ? val.toLocaleString("pt-BR") : val}{suffix}</>;
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="numeros"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #02291A 0%, #084C2E 55%, #095C37 100%)",
        padding: "5rem 0",
      }}
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: "absolute", top: "-30%", right: "-5%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(60,203,127,0.12) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "-5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.09) 0%, transparent 65%)",
        }} />
      </div>

      <div className="relative container-custom">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-widest text-white/35 mb-14"
        >
          Nossos números falam por si
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative text-center py-10 px-6 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, #3CCB7F, transparent)" }}
              />

              <div
                className="text-5xl lg:text-6xl font-black text-white mb-3 leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Counter end={s.end} suffix={s.suffix} active={inView} />
              </div>
              <div className="text-sm font-semibold text-white/80 mb-1">{s.label}</div>
              <div className="text-xs text-white/35">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
