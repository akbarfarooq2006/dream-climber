// src/components/screens/FailScreen.tsx
import { motion } from 'motion/react';
import { useGameStore } from '../../store/gameStore';
import { mountains } from '../../data/levels';
import { RefreshCw, Map as MapIcon, Skull } from 'lucide-react';
import MountainSVG from '../game/MountainSVG';

export default function FailScreen() {
  const { currentMountainIndex, currentQuestionIndex, mountainScores, retryMountain, setPhase } = useGameStore();
  const mountain = mountains[currentMountainIndex];
  const correctCount = mountainScores[currentMountainIndex];
  const questionsSoFar = currentQuestionIndex + 1;

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-red-950/20 overflow-x-hidden p-6 md:p-8 pb-24 lg:pb-32">
      <div className="absolute inset-0 bg-black/80 z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl glass-dark p-8 md:p-12 rounded-3xl md:rounded-[50px] border-danger/30 text-center flex flex-col items-center"
      >
        <motion.div
           animate={{ rotate: [0, -10, 10, -10, 0], y: [0, 10, 0] }}
           transition={{ duration: 1, repeat: Infinity }}
           className="w-24 h-24 bg-danger rounded-3xl flex items-center justify-center mb-8 shadow-2xl"
        >
           <Skull className="w-12 h-12 text-white" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-display text-white mb-2 uppercase tracking-tighter">Mountain Too Tough!</h1>
        <h2 className="text-2xl text-danger font-bold mb-8">{mountain.name}</h2>
        
        <div className="w-full bg-white/5 rounded-3xl p-6 mb-8 border border-white/5">
           <p className="text-white/60 mb-1">Your Climb Stats</p>
           <p className="text-3xl font-bold">
             {correctCount} <span className="text-white/20">out of</span> {questionsSoFar} <span className="text-white/20">Correct</span>
           </p>
           <p className="text-sm text-white/40 mt-3">You need at least 3 correct answers to safely summit this mountain.</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={retryMountain}
            className="flex items-center justify-center gap-3 bg-white text-sky-night py-4 rounded-2xl font-bold text-lg hover:bg-white/90 transition-all"
          >
            <RefreshCw className="w-5 h-5" /> RETRY CLIMB
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setPhase('worldmap')}
            className="flex items-center justify-center gap-3 glass border-white/20 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            <MapIcon className="w-5 h-5" /> WORLD MAP
          </motion.button>
        </div>
      </motion.div>

      {/* Broken Mountain Visual */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-20 pointer-events-none scale-150 rotate-6 blur-sm">
         <MountainSVG index={currentMountainIndex} />
         <div className="absolute inset-0 bg-linear-to-t from-red-900/50 via-transparent to-transparent" />
      </div>
    </div>
  );
}
