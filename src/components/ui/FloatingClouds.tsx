// src/components/ui/FloatingClouds.tsx
import { motion } from 'motion/react';

export default function FloatingClouds() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -200, y: 100 + i * 120 }}
          animate={{ x: window.innerWidth + 200 }}
          transition={{ 
            duration: 30 + Math.random() * 40, 
            repeat: Infinity, 
            ease: "linear",
            delay: i * -15
          }}
          className="absolute"
        >
          <div className="w-64 h-24 bg-white/10 blur-3xl rounded-full" />
        </motion.div>
      ))}
    </div>
  );
}
