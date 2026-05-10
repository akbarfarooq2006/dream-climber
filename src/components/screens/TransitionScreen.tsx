// src/components/screens/TransitionScreen.tsx
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useGameStore } from '../../store/gameStore';
import { mountains } from '../../data/levels';
import MountainSVG from '../game/MountainSVG';
import { audioService } from '../../services/audioService';

export default function TransitionScreen() {
  const { currentMountainIndex, setPhase, soundEnabled } = useGameStore();
  const mountain = mountains[currentMountainIndex];

  useEffect(() => {
    if (soundEnabled) {
      audioService.playTransition();
    }
    const timer = setTimeout(() => {
      setPhase('climbing');
    }, 2500);
    return () => clearTimeout(timer);
  }, [setPhase, soundEnabled]);

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-mt-dark overflow-hidden p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        <span className="text-gold tracking-[0.4em] font-bold mb-4 uppercase">Challenge Awaits</span>
        <h1 className="text-5xl md:text-7xl font-display title-gold mb-2 uppercase">MOUNTAIN {currentMountainIndex + 1}</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{mountain.name}</h2>
        <div className="glass px-6 py-2 rounded-full mb-8">
           <p className="text-sky-blue font-bold tracking-widest">{mountain.maslowStage}</p>
        </div>
        
        <p className="text-white/40 mb-12 animate-pulse">5 Challenges to Summit</p>

        <div className="w-64 h-64 relative">
           <MountainSVG index={currentMountainIndex} />
        </div>
      </motion.div>
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <MountainSVG index={currentMountainIndex} />
      </div>
    </div>
  );
}
