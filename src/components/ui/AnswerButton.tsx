// src/components/ui/AnswerButton.tsx
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface AnswerButtonProps {
  label: string;
  text: string;
  onClick: () => void;
  className?: string;
}

export default function AnswerButton({ label, text, onClick, className }: AnswerButtonProps) {
  return (
    <motion.button
      whileHover={{ 
        x: 10, 
        backgroundColor: "rgba(255,255,255,0.1)",
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "w-full glass p-4 md:p-6 rounded-xl md:rounded-2xl flex items-center gap-4 md:gap-6 group transition-all text-left border-white/10 hover:border-gold/50 shadow-lg",
        className
      )}
    >
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center text-lg md:text-xl font-bold group-hover:bg-gold group-hover:text-sky-night transition-colors shadow-inner">
         {label}
      </div>
      <span className="text-sm md:text-lg opacity-80 group-hover:opacity-100 font-medium leading-tight">{text}</span>
    </motion.button>
  );
}
