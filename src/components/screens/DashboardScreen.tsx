// src/components/screens/DashboardScreen.tsx
import { motion } from 'motion/react';
import { useGameStore } from '../../store/gameStore';
import { mountains } from '../../data/levels';
import ParticleBackground from '../ui/ParticleBackground';
import { Trophy, CheckCircle2, Lock, Clock, Target, Play } from 'lucide-react';

export default function DashboardScreen() {
  const { 
    playerName, 
    selectedDream, 
    mountainScores, 
    totalScore, 
    completedMountains,
    inProgress,
    setPhase
  } = useGameStore();

  const totalPossibleCorrect = 35; // 7 mountains * 5 questions
  const totalCorrect = mountainScores.reduce((acc, score) => acc + score, 0);
  const totalCompleted = completedMountains.length;
  const completionPercentage = Math.round((totalCompleted / 7) * 100);
  const accuracy = Math.round((totalCorrect / (Math.max(totalCompleted, 1) * 5)) * 100) || 0;
  
  const getRank = (score: number) => {
    if (score >= 35) return 'Dream Legend';
    if (score >= 25) return 'Master Climber';
    if (score >= 15) return 'Seasoned Explorer';
    if (score >= 5) return 'Aspiring Dreamer';
    return 'Novice Hiker';
  };

  const rank = getRank(totalScore);

  if (!playerName) {
    return (
      <div className="relative h-full w-full bg-mt-dark p-6 md:p-12 overflow-y-auto pt-10 lg:pt-16 pb-24 lg:pb-32 flex flex-col items-center justify-center text-center">
        <ParticleBackground type="stars" />
        <div className="relative z-10 glass p-12 rounded-3xl max-w-lg border border-white/10">
          <Target className="w-16 h-16 text-gold mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-display font-bold mb-4">No Progress Yet</h2>
          <p className="text-sky-blue/80 mb-8 leading-relaxed">
            Start your journey to see your progress here. Complete mountains to unlock your true potential!
          </p>
          <button 
            onClick={() => setPhase('welcome')}
            className="btn-gold px-8 py-4 rounded-full font-bold tracking-widest text-sm"
          >
            PLAY NOW
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-mt-dark p-6 md:p-12 overflow-y-auto pt-10 lg:pt-16 pb-24 lg:pb-32">
      <ParticleBackground type="stars" />
      
      <div className="relative z-10 max-w-5xl mx-auto py-6">
        <header className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-display title-gold tracking-widest uppercase">My Progress</h1>
            <p className="text-sky-blue/60 tracking-wider font-bold mt-2">DASHBOARD</p>
          </div>
          <button 
            onClick={() => setPhase('worldmap')}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-colors"
          >
            <Play className="w-4 h-4" /> CONTINUE JOURNEY
          </button>
        </header>

        {/* TOP SECTION - Player Profile */}
        <section className="glass rounded-[40px] p-8 md:p-10 mb-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 rounded-full border-4 border-gold/30 flex items-center justify-center bg-black/40 shrink-0">
               <Trophy className="w-12 h-12 text-gold" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{playerName}</h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sky-blue/80 mb-6 font-medium">
                <Target className="w-4 h-4 text-gold" />
                <span className="uppercase tracking-widest text-sm">Goal: {selectedDream}</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1 font-bold">Total EXP</p>
                  <p className="text-2xl font-display text-gold">{totalScore}</p>
                </div>
                <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1 font-bold">Completion</p>
                  <p className="text-2xl font-display text-success">{completionPercentage}%</p>
                </div>
                <div className="bg-black/40 rounded-2xl p-4 border border-white/5 col-span-2 md:col-span-2">
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1 font-bold">Current Rank</p>
                  <p className="text-xl font-display text-white mt-1.5 truncate">{rank}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MIDDLE SECTION - Mountains */}
        <section className="mb-12">
          <h3 className="text-xl font-display font-bold tracking-widest uppercase mb-6 text-white/80 border-b border-white/10 pb-4">Mountain Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mountains.map((mountain, i) => {
              const score = mountainScores[i];
              const isLocked = i > 0 && mountainScores[i - 1] < 3;
              const isCompleted = score >= 3;
              const isCurrent = inProgress?.mountainIndex === i;
              
              let statusLabel = 'Locked';
              let statusColor = 'text-white/30';
              let Icon = Lock;
              
              if (isCompleted) {
                statusLabel = 'Completed';
                statusColor = 'text-success';
                Icon = CheckCircle2;
              } else if (isCurrent) {
                statusLabel = 'In Progress';
                statusColor = 'text-sky-blue';
                Icon = Clock;
              } else if (!isLocked) {
                statusLabel = 'Available';
                statusColor = 'text-white/60';
                Icon = Play;
              }

              return (
                <div key={mountain.id} className={`glass rounded-3xl p-5 border ${isLocked ? 'border-white/5 bg-black/40 opacity-60' : isCompleted ? 'border-success/30 bg-success/5' : isCurrent ? 'border-sky-blue/40 bg-sky-blue/5' : 'border-white/10'}`}>
                   <div className="flex justify-between items-start mb-3">
                     <span className="text-2xl font-display text-white/20">0{i + 1}</span>
                     <Icon className={`w-5 h-5 ${statusColor}`} />
                   </div>
                   <h4 className="font-bold text-lg leading-tight mb-1 truncate" title={mountain.name}>{mountain.name}</h4>
                   <p className="text-[10px] text-sky-light/80 uppercase tracking-widest font-bold mb-4 truncate">{mountain.maslowStage}</p>
                   
                   {!isLocked ? (
                     <div className="mt-auto">
                       <div className="flex justify-between items-end mb-2">
                         <span className={`text-xs font-bold uppercase tracking-wider ${statusColor}`}>{statusLabel}</span>
                         {(!isCurrent || isCompleted) && <span className="text-sm font-bold">{score} / 5</span>}
                         {isCurrent && !isCompleted && <span className="text-xs text-white/60 font-bold uppercase">Q{inProgress.questionIndex + 1}</span>}
                       </div>
                       
                       <div className="flex gap-1 w-full">
                         {Array.from({ length: 5 }).map((_, dotIdx) => (
                           <div 
                             key={dotIdx}
                             className={`h-1.5 flex-1 rounded-full ${
                               !isCurrent && dotIdx < score ? 'bg-gold' : 
                               isCurrent && dotIdx < inProgress.questionIndex ? 'bg-sky-blue/60' :
                               isCurrent && dotIdx === inProgress.questionIndex ? 'bg-sky-blue/80 animate-pulse' :
                               'bg-white/10'
                             }`}
                           />
                         ))}
                       </div>
                       {isCompleted && (
                         <div className="mt-3 text-right">
                           <span className="text-xs bg-white/10 rounded-full px-2 py-1 font-bold text-white/70">{Math.round(score/5 * 100)}%</span>
                         </div>
                       )}
                     </div>
                   ) : (
                     <div className="mt-auto pt-6 text-center text-white/20 text-xs font-bold uppercase tracking-widest">
                       Locked
                     </div>
                   )}
                </div>
              );
            })}
          </div>
        </section>
        
        {/* BOTTOM SECTION - Overall Stats */}
        <section>
          <h3 className="text-xl font-display font-bold tracking-widest uppercase mb-6 text-white/80 border-b border-white/10 pb-4">Overall Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass rounded-3xl p-6 text-center border border-white/5">
              <p className="text-4xl font-display text-white mb-2">{totalCompleted} <span className="text-xl text-white/30">/ 7</span></p>
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Mountains Mastered</p>
            </div>
            <div className="glass rounded-3xl p-6 text-center border border-white/5">
              <p className="text-4xl font-display text-gold mb-2">{totalCorrect} <span className="text-xl text-white/30">/ {Math.max(totalCompleted * 5, 5)}</span></p>
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Correct Answers</p>
            </div>
            <div className="glass rounded-3xl p-6 text-center border border-white/5">
              <p className="text-4xl font-display text-error mb-2">{Math.max(totalCompleted * 5, 0) - totalCorrect}</p>
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Failed Attempts</p>
            </div>
            <div className="glass rounded-3xl p-6 text-center border border-white/5">
              <p className="text-4xl font-display text-success mb-2">{accuracy}%</p>
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Accuracy</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
