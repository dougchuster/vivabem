"use client";

import { motion } from "framer-motion";
import { Activity, Building2, ShieldCheck } from "lucide-react";

const partners = [
  { name: "Unimed", color: "#009b77" },
  { name: "Amil", color: "#246bff" },
  { name: "SulAmerica", color: "#cf3c30" },
  { name: "Bradesco", color: "#d1342f" },
  { name: "Porto", color: "#1d49b5" },
  { name: "Hapvida", color: "#0b9ec0" },
  { name: "NotreDame", color: "#14a36d" },
  { name: "Omint", color: "#7744d8" },
];

const trustItems = [
  { icon: Building2, label: "Operadoras analisadas", value: "12" },
  { icon: Activity, label: "Retorno medio", value: "2h" },
  { icon: ShieldCheck, label: "Processos regulados", value: "ANS" },
];

export function PartnersCarousel() {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/50 bg-white/82 p-4 shadow-[0_20px_50px_-36px_rgba(17,32,28,0.35)]">
        <div className="flex flex-wrap gap-3 md:hidden">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 rounded-full border border-neutral-900/8 bg-white px-4 py-2"
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: partner.color }} />
              <span className="text-sm font-semibold text-neutral-700">{partner.name}</span>
            </div>
          ))}
        </div>

        <div className="relative hidden overflow-hidden md:block">
          <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
            className="flex w-max gap-3"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center gap-2 rounded-full border border-neutral-900/8 bg-white px-4 py-2"
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: partner.color }} />
                <span className="text-sm font-semibold text-neutral-700">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {trustItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.06 }}
            className="rounded-[1.6rem] border border-white/45 bg-white/82 p-5 shadow-[0_18px_38px_-30px_rgba(17,32,28,0.35)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-semibold leading-none text-neutral-900">{item.value}</div>
                <div className="mt-1 text-sm text-neutral-500">{item.label}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
