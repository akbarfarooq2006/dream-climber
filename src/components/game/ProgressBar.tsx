// src/components/game/ProgressBar.tsx
import { motion } from 'motion/react';

interface ProgressBarProps {
  current: number;
  total: number;
  color?: string;
}

export default function ProgressBar({ current, total, color = "#ffd700" }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-2">
        <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Mountain Progress</span>
        <span className="text-xs font-mono font-bold text-gold">{Math.round(percentage)}%</span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
        <motion.div
           initial={{ width: 0 }}
           animate={{ width: `${percentage}%` }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="h-full rounded-full shadow-[0_0_10px_rgba(255,215,0,0.4)]"
           style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
