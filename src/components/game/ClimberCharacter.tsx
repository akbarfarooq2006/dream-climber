// src/components/game/ClimberCharacter.tsx
import { motion } from 'motion/react';
import { FaceExpression } from '../../utils/climber';

interface ClimberCharacterProps {
  state?: 'idle' | 'climbing' | 'celebrate' | 'stumble' | 'think';
  face?: FaceExpression;
}

export default function ClimberCharacter({ state = 'idle', face = 'focused' }: ClimberCharacterProps) {
  const variants: any = {
    idle: {
      y: [0, -5, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    climbing: {
      y: [0, -15, 0, -8, 0],
      x: [0, -3, 3, -2, 0],
      transition: { duration: 1.2, ease: "easeOut" }
    },
    celebrate: {
      scale: [1, 1.3, 1.1, 1.3, 1],
      rotate: [-10, 10, -10, 10, 0],
      y: [0, -20, 0],
      transition: { duration: 1.5 }
    },
    stumble: {
      x: [-10, 10, -10, 10, -6, 6, 0],
      y: [0, 3, 0, 3, 0],
      transition: { duration: 0.7 }
    },
    think: {
       rotate: [-2, 2, -2],
       transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const renderFace = () => {
    const cy = 8;
    const skin = "#FFB74D";
    const dark = "#451a03";

    switch(face) {
      case 'nervous':
        return (
          <g>
            {/* Worried eyebrows */}
            <path d={`M 17 ${cy-2} Q 18 ${cy-3} 19 ${cy-2}`} stroke={dark} strokeWidth="0.8" fill="none"/>
            <path d={`M 21 ${cy-2} Q 22 ${cy-3} 23 ${cy-2}`} stroke={dark} strokeWidth="0.8" fill="none"/>
            {/* Eyes */}
            <circle cx="18" cy={cy} r="1" fill={dark}/>
            <circle cx="22" cy={cy} r="1" fill={dark}/>
            {/* Mouth */}
            <line x1="18" y1={cy+2} x2="22" y2={cy+2} stroke={dark} strokeWidth="1" />
          </g>
        );
      case 'focused':
        return (
          <g>
            {/* Angled down eyebrows */}
            <line x1="16" y1={cy-2.5} x2="19" y2={cy-1} stroke={dark} strokeWidth="1"/>
            <line x1="24" y1={cy-2.5} x2="21" y2={cy-1} stroke={dark} strokeWidth="1"/>
            {/* Eyes */}
            <circle cx="18" cy={cy} r="1" fill={dark}/>
            <circle cx="22" cy={cy} r="1" fill={dark}/>
            {/* Frown */}
            <path d={`M 18.5 ${cy+2.5} Q 20 ${cy+1.5} 21.5 ${cy+2.5}`} stroke={dark} strokeWidth="1" fill="none"/>
          </g>
        );
      case 'happy':
        return (
          <g>
            {/* Normal eyebrows */}
            <path d={`M 17 ${cy-2} Q 18 ${cy-3} 19 ${cy-2}`} stroke={dark} strokeWidth="0.8" fill="none"/>
            <path d={`M 21 ${cy-2} Q 22 ${cy-3} 23 ${cy-2}`} stroke={dark} strokeWidth="0.8" fill="none"/>
            {/* Wide Eyes */}
            <circle cx="18" cy={cy} r="1.3" fill={dark}/>
            <circle cx="22" cy={cy} r="1.3" fill={dark}/>
            {/* Big Smile */}
            <path d={`M 17.5 ${cy+1.5} Q 20 ${cy+4} 22.5 ${cy+1.5}`} stroke={dark} strokeWidth="1" fill="none"/>
          </g>
        );
      case 'victory':
        return (
          <g>
            {/* Star eyes */}
            <path d={`M 18 ${cy-2} L 18.5 ${cy-1} L 19.5 ${cy-1} L 18.7 ${cy-0.3} L 19 ${cy+0.7} L 18 ${cy+0.2} L 17 ${cy+0.7} L 17.3 ${cy-0.3} L 16.5 ${cy-1} L 17.5 ${cy-1} Z`} fill={dark} />
            <path d={`M 22 ${cy-2} L 22.5 ${cy-1} L 23.5 ${cy-1} L 22.7 ${cy-0.3} L 23 ${cy+0.7} L 22 ${cy+0.2} L 21 ${cy+0.7} L 21.3 ${cy-0.3} L 20.5 ${cy-1} L 21.5 ${cy-1} Z`} fill={dark} />
            {/* Huge open smile */}
            <path d={`M 17 ${cy+1.5} Q 20 ${cy+5} 23 ${cy+1.5} Z`} fill={dark}/>
            {/* Sparkles around head */}
            <animateTransform attributeName="transform" type="rotate" values="-5 20 8; 5 20 8; -5 20 8" dur="1s" repeatCount="indefinite" />
          </g>
        );
      case 'sad':
        return (
          <g>
            {/* Drooping eyebrows */}
            <line x1="17" y1={cy-1} x2="19" y2={cy-2.5} stroke={dark} strokeWidth="1"/>
            <line x1="23" y1={cy-1} x2="21" y2={cy-2.5} stroke={dark} strokeWidth="1"/>
            {/* Eyes down */}
            <path d={`M 17 ${cy+0.5} Q 18 ${cy-0.5} 19 ${cy+0.5}`} stroke={dark} strokeWidth="1" fill="none"/>
            <path d={`M 21 ${cy+0.5} Q 22 ${cy-0.5} 23 ${cy+0.5}`} stroke={dark} strokeWidth="1" fill="none"/>
            {/* Small frown */}
            <path d={`M 18.5 ${cy+3.5} Q 20 ${cy+2.5} 21.5 ${cy+3.5}`} stroke={dark} strokeWidth="1" fill="none"/>
          </g>
        );
      case 'surprised':
        return (
          <g>
            {/* High eyebrows */}
            <path d={`M 17 ${cy-3.5} Q 18 ${cy-4.5} 19 ${cy-3.5}`} stroke={dark} strokeWidth="0.8" fill="none"/>
            <path d={`M 21 ${cy-3.5} Q 22 ${cy-4.5} 23 ${cy-3.5}`} stroke={dark} strokeWidth="0.8" fill="none"/>
            {/* Wide open eyes */}
            <circle cx="18" cy={cy-0.5} r="1.5" fill="none" stroke={dark} strokeWidth="0.8"/>
            <circle cx="22" cy={cy-0.5} r="1.5" fill="none" stroke={dark} strokeWidth="0.8"/>
            <circle cx="18" cy={cy-0.5} r="0.5" fill={dark}/>
            <circle cx="22" cy={cy-0.5} r="0.5" fill={dark}/>
            {/* Open mouth */}
            <ellipse cx="20" cy={cy+2.5} rx="1.5" ry="2" fill={dark}/>
          </g>
        );
      default:
        return null;
    }
  };

  const isCelebrating = state === 'celebrate'; // fallback logic

  return (
    <motion.div
      variants={variants}
      animate={state}
      className="relative flex flex-col items-center"
    >
      <svg viewBox="0 0 40 60" width="40" height="60" className="drop-shadow-lg overflow-visible">
        {/* Victory Sparkles (only visible during victory) */}
        {face === 'victory' && (
          <g fill="#fbbf24">
            <motion.circle initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} cx="10" cy="0" r="1.5" />
            <motion.circle initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} cx="30" cy="2" r="1.5" />
            <motion.circle initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.6 }} cx="8" cy="14" r="1" />
            <motion.circle initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.9 }} cx="32" cy="12" r="1" />
          </g>
        )}

        {/* Hair */}
        <ellipse cx="20" cy="4" rx="7" ry="4" fill="#5D4037" />
        {/* Head */}
        <circle cx="20" cy="8" r="7" fill="#FFB74D" />
        
        {/* Face Expressions */}
        {renderFace()}

        {/* Backpack */}
        <rect x="11" y="14" width="7" height="12" rx="2" fill="#1565C0" />
        {/* Body */}
        <ellipse cx="20" cy="20" rx="8" ry="10" fill="#FFB74D" />
        
        {/* Left arm */}
        <motion.line 
          x1="12" y1="20" x2="6" y2="30" 
          stroke="#FFB74D" strokeWidth="3" strokeLinecap="round"
          animate={state === 'climbing' ? { x2: [6, 12, 6], y2: [30, 15, 30] } : (isCelebrating ? { x2: 4, y2: 12 } : {})}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
        {/* Right arm */}
        <motion.line 
          x1="28" y1="20" x2="34" y2="30" 
          stroke="#FFB74D" strokeWidth="3" strokeLinecap="round"
          animate={state === 'climbing' ? { x2: [34, 28, 34], y2: [30, 45, 30] } : (isCelebrating ? { x2: 36, y2: 12 } : {})}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
        />
        {/* Left leg */}
        <motion.line 
          x1="17" y1="30" x2="12" y2="45" 
          stroke="#37474F" strokeWidth="3.5" strokeLinecap="round"
          animate={state === 'climbing' ? { y2: [45, 35, 45] } : {}}
        />
        {/* Right leg */}
        <motion.line 
          x1="23" y1="30" x2="28" y2="45" 
          stroke="#37474F" strokeWidth="3.5" strokeLinecap="round"
          animate={state === 'climbing' ? { y2: [45, 35, 45] } : {}}
          transition={state === 'climbing' ? { duration: 0.6, repeat: Infinity, delay: 0.3 } : {}}
        />
        {/* Ice axe */}
        <motion.g animate={isCelebrating ? { x: 4, y: -20, rotate: -30 } : {}}>
          <line x1="34" y1="30" x2="38" y2="20" stroke="#90A4AE" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="35" y1="20" x2="40" y2="18" stroke="#90A4AE" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
      </svg>
      
      {/* Shadow */}
      <div className="mt-2 w-8 h-1 bg-black/30 rounded-full blur-[1px]" />
    </motion.div>
  );
}
