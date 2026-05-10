import { motion } from 'motion/react';
import { useGameStore } from '../../store/gameStore';
import { ArrowLeft } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';

export default function HowToPlayScreen() {
  const { goBack } = useGameStore();

  const steps = [
    { num: 1, text: "Enter your name and choose your dream goal" },
    { num: 2, text: "The World Map shows 7 mountains to climb" },
    { num: 3, text: "Each mountain has 5 challenges to face" },
    { num: 4, text: "Read each scenario carefully and choose the best answer from 3 options" },
    { num: 5, text: "Correct answer moves your climber one step up the mountain" },
    { num: 6, text: "Wrong answer uses one life. You have 3 lives per mountain" },
    { num: 7, text: "Lose all 3 lives and you must retry that mountain" },
    { num: 8, text: "Answer all 5 correctly to reach the summit and unlock the next mountain" },
    { num: 9, text: "Complete all 7 mountains to become a Dream Legend" }
  ];

  return (
    <div className="relative h-full w-full bg-mt-dark p-6 md:p-12 overflow-y-auto pt-10 lg:pt-16 pb-24 lg:pb-32">
      <ParticleBackground type="stars" />
      
      <div className="relative z-10 max-w-5xl mx-auto py-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-display title-gold tracking-widest uppercase">How to Play</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:-translate-y-1 hover:border-gold/30 transition-all"
            >
              <div className="absolute -right-4 -bottom-8 text-[120px] font-display font-bold text-white/[0.03] leading-none pointer-events-none group-hover:text-gold/5 transition-colors">
                {step.num}
              </div>
              <div className="flex flex-col h-full relative z-10">
                <span className="text-gold font-bold tracking-widest text-sm mb-4">STEP 0{step.num}</span>
                <p className="text-white/90 leading-relaxed text-lg font-medium">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center pb-24">
          <button 
            onClick={goBack}
            className="inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl btn-gold text-sky-night font-bold transition-all text-lg tracking-widest uppercase"
          >
            <ArrowLeft className="w-5 h-5" /> Play Now
          </button>
        </div>
      </div>
    </div>
  );
}
