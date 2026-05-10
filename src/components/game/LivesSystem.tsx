// src/components/game/LivesSystem.tsx
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface LivesSystemProps {
  lives: number;
  maxLives?: number;
}

export default function LivesSystem({ lives, maxLives = 3 }: LivesSystemProps) {
  return (
    <div className="flex gap-2 p-2 glass rounded-2xl">
      {[...Array(maxLives)].map((_, i) => (
        <motion.div
          key={i}
          animate={i < lives ? { 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          } : { 
            scale: 0.8, 
            opacity: 0.2,
            rotate: 0
          }}
          transition={i < lives ? { 
            duration: 2, 
            repeat: Infinity, 
            delay: i * 0.3 
          } : {}}
          className="relative"
        >
          <Heart 
            className={i < lives ? "text-danger fill-danger w-6 h-6" : "text-white/40 w-6 h-6"} 
            strokeWidth={2.5}
          />
          {i < lives && (
             <motion.div 
               animate={{ opacity: [0, 0.5, 0], scale: [1, 2, 1] }}
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
               className="absolute inset-0 bg-danger rounded-full blur-md z-[-1]"
             />
          )}
        </motion.div>
      ))}
    </div>
  );
}
