"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = easeOutQuart * end;
        
        setCount(currentCount);

        if (now < endTime) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, end, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  icon,
  className = "",
}: StatCardProps) {
  return (
    <motion.div
      className={`relative p-6 rounded-2xl bg-white border border-brand-100 shadow-lg shadow-brand-100/50 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(22, 179, 100, 0.25)" }}
    >
      {icon && (
        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold text-brand-600" style={{ fontFamily: "var(--font-heading)" }}>
        <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
      </div>
      <div className="mt-2 text-gray-900 font-semibold">{label}</div>
      {description && (
        <div className="mt-1 text-sm text-gray-500">{description}</div>
      )}
    </motion.div>
  );
}
