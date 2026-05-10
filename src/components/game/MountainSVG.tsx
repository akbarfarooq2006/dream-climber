// src/components/game/MountainSVG.tsx
import { useId } from 'react';
import { mountains } from '../../data/levels';

interface MountainSVGProps {
  index: number;
}

export default function MountainSVG({ index }: MountainSVGProps) {
  const mountain = mountains[index];
  const uniqueId = useId();

  // Color Palettes for different mountains
  const palettes = [
    { base: "#1e293b", rock: "#334155", light: "#475569", snow: "#f8fafc", flag: "#fbbf24" }, // Slate
    { base: "#3f2b26", rock: "#593e36", light: "#78564b", snow: "#fff1f0", flag: "#38bdf8" }, // Red/Brown
    { base: "#143026", rock: "#1e4d3b", light: "#2b6b54", snow: "#f0fdf4", flag: "#fb7185" }, // Green
    { base: "#171e36", rock: "#242e4d", light: "#35436e", snow: "#f0f4ff", flag: "#a78bfa" }, // Indigo
  ];
  const colors = palettes[index % palettes.length];

  return (
    <div className="absolute inset-0 w-full h-full flex items-end">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id={`grad-base-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.light} />
            <stop offset="100%" stopColor={colors.base} />
          </linearGradient>
          <linearGradient id={`grad-snow-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.snow} />
            <stop offset="100%" stopColor={colors.snow} stopOpacity="0.8" />
          </linearGradient>
          
          <filter id={`glow-${uniqueId}`}>
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Back Mountain / Shadow */}
        <polygon points="-10,110 50,5 110,110" fill={colors.base} opacity="0.6"/>
        
        {/* Main Mountain Shape */}
        <polygon points="2,110 20,80 32,74 25,60 32,42 45,20 50,10 58,25 68,40 68,58 85,85 98,110" fill={`url(#grad-base-${uniqueId})`} />

        {/* Rocky facets for jagged 3D texture */}
        <polygon points="50,10 45,20 50,40 58,25" fill={colors.light} opacity="0.2"/>
        <polygon points="50,40 32,42 35,60 50,75" fill={colors.rock} opacity="0.4"/>
        <polygon points="50,40 68,40 68,58 50,75" fill={colors.base} opacity="0.2"/>
        <polygon points="50,75 20,80 2,110 50,110" fill={colors.rock} opacity="0.5"/>
        <polygon points="50,75 50,110 98,110 85,85" fill={colors.base} opacity="0.3"/>

        {/* Snow Cap */}
        <polygon points="50,10 45,20 48,22 52,18 58,25" fill={`url(#grad-snow-${uniqueId})`} />

        {/* 5 Platforms + Summit */}
        <g id="platforms">
          {/* Base: Y=90, X=50 */}
          <polygon points="35,90 65,90 68,96 32,96" fill={colors.light}/>
          
          {/* Ledge 1: Y=74, X=32 */}
          <polygon points="24,74 40,74 42,78 22,78" fill={colors.light}/>

          {/* Ledge 2: Y=58, X=68 */}
          <polygon points="60,58 76,58 78,62 58,62" fill={colors.light}/>

          {/* Ledge 3: Y=42, X=32 */}
          <polygon points="24,42 40,42 43,45 22,45" fill={colors.light}/>

          {/* Ledge 4: Y=26, X=68 */}
          <polygon points="60,26 76,26 78,30 58,30" fill={colors.light}/>

          {/* Summit: Y=10, X=50 */}
          <polygon points="44,10 56,10 59,13 41,13" fill={colors.snow}/>
        </g>

        {/* Flags / Glowing Dots at Checkpoints */}
        <g id="flags" fill={colors.flag}>
           <circle cx="50" cy="88" r="1.5" filter={`url(#glow-${uniqueId})`}/> {/* Base */}
           <circle cx="32" cy="72" r="1.5" filter={`url(#glow-${uniqueId})`}/> {/* Ledge 1 */}
           <circle cx="68" cy="56" r="1.5" filter={`url(#glow-${uniqueId})`}/> {/* Ledge 2 */}
           <circle cx="32" cy="40" r="1.5" filter={`url(#glow-${uniqueId})`}/> {/* Ledge 3 */}
           <circle cx="68" cy="24" r="1.5" filter={`url(#glow-${uniqueId})`}/> {/* Ledge 4 */}
           
           {/* Summit Flag */}
           <path d="M50,4 L50,10 M50,4 L55,6 L50,8" stroke={colors.flag} strokeWidth="0.8" fill="none" filter={`url(#glow-${uniqueId})`}/>
        </g>
      </svg>
    </div>
  );
}
