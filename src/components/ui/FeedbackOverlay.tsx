// src/components/ui/FeedbackOverlay.tsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGameStore } from '../../store/gameStore';
import { mountains } from '../../data/levels';
import MountainSVG from '../game/MountainSVG';
import ClimberCharacter from '../game/ClimberCharacter';
import ProgressBar from '../game/ProgressBar';
import { getClimberPosition, getExpressionForCount } from '../../utils/climber';

export default function FeedbackOverlay() {
  const { 
    currentMountainIndex, 
    currentQuestionIndex, 
    lastAnswerCorrect, 
    correctAnswersCount,
    nextQuestion 
  } = useGameStore();

  const mountain = mountains[currentMountainIndex];
  const question = mountain.questions[currentQuestionIndex];
  
  // Find the explanation for what happened (correct or wrong)
  const selectedOption = question.options.find(o => o.correct === lastAnswerCorrect);

  const [phase, setPhase] = useState<'text' | 'mountain'>('text');
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);
  const [animatedProgress, setAnimatedProgress] = useState(
    lastAnswerCorrect ? correctAnswersCount - 1 : correctAnswersCount
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const isSummitCelebration = lastAnswerCorrect && correctAnswersCount === 5;
    if (isMobile) {
      if (phase === 'text') {
        timer = setTimeout(() => setPhase('mountain'), 2500);
      } else if (phase === 'mountain') {
        setAnimatedProgress(correctAnswersCount);
        timer = setTimeout(() => nextQuestion(), isSummitCelebration ? 4000 : 2000);
      }
    } else {
      timer = setTimeout(() => nextQuestion(), isSummitCelebration ? 4000 : 3000);
    }
    return () => clearTimeout(timer);
  }, [nextQuestion, isMobile, phase, correctAnswersCount, lastAnswerCorrect]);

  if (lastAnswerCorrect === null) return null;

  const isSummitCelebration = lastAnswerCorrect && correctAnswersCount === 5;

  const targetPos = getClimberPosition(correctAnswersCount);
  const startPos = lastAnswerCorrect ? getClimberPosition(correctAnswersCount - 1) : targetPos;

  const renderTextFeedback = () => (
    <motion.div
      key="text-feedback"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 lg:left-[40%] z-50 flex items-center justify-center p-8 backdrop-blur-xl ${
        isSummitCelebration ? 'bg-indigo-950/90' : (lastAnswerCorrect ? 'bg-green-950/90' : 'bg-red-950/90')
      }`}
    >
      <div className="max-w-xl w-full flex flex-col items-center text-center">
        <motion.div
          animate={{ 
            scale: [0, 1.2, 1],
            rotate: lastAnswerCorrect ? 0 : [-10, 10, -10, 10, 0]
          }}
          transition={{ duration: 0.5 }}
          className="text-8xl mb-8"
        >
          {lastAnswerCorrect ? '✅' : '💡'}
        </motion.div>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`text-4xl md:text-5xl font-display font-bold mb-4 ${
            lastAnswerCorrect ? 'text-green-300' : 'text-orange-300'
          }`}
        >
          {lastAnswerCorrect ? 'Excellent Choice!' : 'Not Quite Yet!'}
        </motion.h2>

        <motion.div 
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="glass-dark bg-white/10 p-8 rounded-[40px] border border-white/10 w-full shadow-2xl"
        >
          <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed font-sans">
            {selectedOption?.explanation || (lastAnswerCorrect ? 'You made the right move!' : 'There is a better way to handle this.')}
          </p>
          
          <div className="border-t border-white/20 pt-6 mt-6">
            <p className={`text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-2 ${
              lastAnswerCorrect ? 'text-green-300' : 'text-orange-300'
            }`}>
               🧠 Psychology Insight
            </p>
            <p className="text-white/70 italic text-lg">{question.psychConcept}</p>
          </div>
        </motion.div>

        {!isMobile && (
          <motion.p 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/40 text-sm mt-8 font-bold tracking-widest uppercase"
          >
            Resuming climb in 3 seconds...
          </motion.p>
        )}
      </div>
    </motion.div>
  );

  const renderMobileMountain = () => (
    <motion.div
      key="mobile-mountain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-sky-night flex flex-col items-center justify-center lg:hidden"
    >
      {/* Top HUD */}
      <div className="absolute top-8 left-0 right-0 px-6 z-20 flex flex-col items-center gap-4">
        <h2 className="text-2xl font-display text-gold uppercase tracking-widest">{mountain.name}</h2>
        <div className="w-64 max-w-full">
           <ProgressBar current={animatedProgress} total={5} color={mountain.color} />
        </div>
      </div>

      <div className="relative w-full h-[60vh] mt-20 flex items-center justify-center auto-size">
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none w-full h-full">
          <MountainSVG index={currentMountainIndex} />
        </div>
        
        <div className="absolute inset-0 z-10 pointer-events-none w-full h-full">
           <motion.div 
             initial={{ top: `${startPos.y}%`, left: `${startPos.x}%` }}
             animate={isSummitCelebration ? { top: [`${startPos.y}%`, `${startPos.y - 10}%`, `${targetPos.y}%`], left: [`${startPos.x}%`, `${targetPos.x}%`, `${targetPos.x}%`] } : { top: `${targetPos.y}%`, left: `${targetPos.x}%` }}
             transition={isSummitCelebration ? { duration: 3.5, ease: "easeOut" } : { duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
             className="absolute -translate-x-1/2 -translate-y-[75%]"
           >
              <ClimberCharacter 
                state={isSummitCelebration ? 'celebrate' : (lastAnswerCorrect ? 'celebrate' : 'stumble')} 
                face={isSummitCelebration ? 'victory' : (lastAnswerCorrect ? 'surprised' : 'sad')}
              />
           </motion.div>
           
           {/* Particles */}
           {isSummitCelebration && (
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute top-[10%] left-1/2 -translate-x-1/2 w-64 h-64 pointer-events-none"
             >
               {[...Array(12)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                   animate={{ 
                     opacity: [0, 1, 0], 
                     scale: [0.5, 1.5, 0.5], 
                     x: Math.cos((i * 30 * Math.PI) / 180) * 100, 
                     y: Math.sin((i * 30 * Math.PI) / 180) * 100 
                   }}
                   transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
                   className="absolute top-1/2 left-1/2 w-3 h-3 bg-gold rounded-full shadow-[0_0_10px_#fbbf24]"
                 />
               ))}
             </motion.div>
           )}

           {/* Celebration Text */}
           <AnimatePresence>
             {isSummitCelebration && (
               <motion.div
                 initial={{ opacity: 0, scale: 0.5, y: 50 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0 }}
                 transition={{ delay: 1.5, type: "spring", bounce: 0.5, duration: 1 }}
                 className="absolute top-[25%] left-1/2 -translate-x-1/2 z-30"
               >
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-gold drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] whitespace-nowrap text-center">
                   SUMMIT<br/>CONQUERED!
                 </h2>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
      
      <motion.p 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 text-white/40 text-sm font-bold tracking-widest uppercase"
      >
        Preparing next challenge...
      </motion.p>
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      {phase === 'text' && renderTextFeedback()}
      {phase === 'mountain' && isMobile && renderMobileMountain()}
    </AnimatePresence>
  );
}

