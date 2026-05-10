// src/components/game/MoodMeter.tsx
import { motion } from 'motion/react';
import { Smile, Frown, Meh } from 'lucide-react';

interface MoodMeterProps {
  score: number;
}

export default function MoodMeter({ score }: MoodMeterProps) {
  // score is 0-5
  const getMood = () => {
    if (score >= 4) return { icon: <Smile className="text-success" />, label: "OPTIMISTIC" };
    if (score >= 2) return { icon: <Meh className="text-gold" />, label: "DETERMINED" };
    return { icon: <Frown className="text-danger" />, label: "STRUGGLING" };
  };

  const { icon, label } = getMood();

  return (
    <div className="glass px-4 py-2 rounded-xl flex items-center gap-3">
      <motion.div
        key={label}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-8 h-8 flex items-center justify-center p-1 bg-white/5 rounded-lg"
      >
        {icon}
      </motion.div>
      <div className="flex flex-col">
        <span className="text-[8px] text-white/40 font-bold tracking-widest uppercase">Mood</span>
        <span className="text-xs font-bold tracking-tighter">{label}</span>
      </div>
    </div>
  );
}
