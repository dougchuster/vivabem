"use client";

import { motion } from "framer-motion";

const shapes = [
  {
    id: "emerald-orb",
    className: "left-[-8%] top-[8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(24,143,116,0.32),_rgba(24,143,116,0.04)_62%,_transparent_72%)]",
    animate: { x: [0, 24, -18, 0], y: [0, -20, 22, 0], scale: [1, 1.06, 0.95, 1] },
    duration: 22,
  },
  {
    id: "amber-orb",
    className: "right-[-10%] top-[14%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(216,139,47,0.28),_rgba(216,139,47,0.02)_64%,_transparent_74%)]",
    animate: { x: [0, -30, 12, 0], y: [0, 24, -16, 0], scale: [1, 0.94, 1.05, 1] },
    duration: 28,
  },
  {
    id: "emerald-ribbon",
    className: "left-[12%] bottom-[8%] h-40 w-[30rem] rounded-full bg-[linear-gradient(90deg,rgba(17,91,76,0.22),rgba(17,91,76,0.02))] blur-2xl",
    animate: { x: [0, 20, -10, 0], y: [0, -18, 10, 0] },
    duration: 18,
  },
  {
    id: "glass-panel",
    className: "right-[18%] bottom-[14%] h-44 w-44 rounded-[2rem] border border-white/25 bg-white/10 backdrop-blur-2xl",
    animate: { rotate: [8, 12, 4, 8], y: [0, -16, 10, 0] },
    duration: 20,
  },
];

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute blur-[1px] ${shape.className}`}
          animate={shape.animate}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: shape.duration,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
