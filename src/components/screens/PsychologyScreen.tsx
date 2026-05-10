import { motion } from 'motion/react';
import { useGameStore } from '../../store/gameStore';
import { ArrowLeft, Mountain, TrendingUp, Shield, Heart } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';

export default function PsychologyScreen() {
  const { goBack } = useGameStore();

  const theories = [
    {
      title: "Maslow's Hierarchy of Needs",
      theorist: "Abraham Maslow",
      year: "1943",
      icon: Mountain,
      text: "Abraham Maslow proposed that human motivation follows a pyramid of needs — from basic physiological needs at the bottom to self-actualization at the top. Each mountain in this game represents one level of this pyramid, teaching players that meeting needs at each stage unlocks higher potential."
    },
    {
      title: "Growth Mindset",
      theorist: "Carol Dweck",
      year: "2006",
      icon: TrendingUp,
      text: "Carol Dweck's research shows that people who believe their abilities can grow through effort achieve more than those with a fixed mindset. In this game, wrong answers are never punished harshly — they come with explanations, teaching players that mistakes are part of learning."
    },
    {
      title: "Self-Efficacy",
      theorist: "Albert Bandura",
      year: "1977",
      icon: Shield,
      text: "Bandura's theory states that belief in your own ability to succeed directly affects your motivation and performance. The climber's upward journey and positive feedback after correct answers are designed to build this belief in players."
    },
    {
      title: "Intrinsic Motivation",
      theorist: "Edward Deci & Richard Ryan",
      year: "1985",
      icon: Heart,
      text: "Deci and Ryan found that motivation driven by internal satisfaction is more powerful and lasting than motivation from external rewards. This game focuses on the internal satisfaction of climbing toward your own dream goal rather than competing with others."
    }
  ];

  return (
    <div className="relative h-full w-full bg-mt-dark p-6 md:p-12 overflow-y-auto pt-10 lg:pt-16 pb-24 lg:pb-32">
      <ParticleBackground type="stars" />
      
      <div className="relative z-10 max-w-5xl mx-auto py-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-display title-gold tracking-widest uppercase">The Science Behind The Game</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {theories.map((theory, i) => {
            const Icon = theory.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 md:p-10 rounded-[40px] border border-white/10 relative overflow-hidden group hover:border-gold/30 transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px] flex items-start justify-end p-6">
                  <Icon className="w-8 h-8 text-gold/50 group-hover:text-gold transition-colors" />
                </div>
                
                <h2 className="text-2xl font-bold mb-2 text-white/90">{theory.title}</h2>
                <p className="text-sky-blue font-bold tracking-widest uppercase text-xs mb-6">
                  {theory.theorist} • {theory.year}
                </p>
                <p className="text-white/70 leading-relaxed text-lg">
                  {theory.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center pb-24">
          <button 
            onClick={goBack}
            className="inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl btn-gold text-sky-night font-bold transition-all text-lg tracking-widest uppercase"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Game
          </button>
        </div>
      </div>
    </div>
  );
}
