// src/components/ui/ParticleBackground.tsx
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

interface ParticleBackgroundProps {
  type?: 'snow' | 'stars' | 'confetti';
}

export default function ParticleBackground({ type = 'stars' }: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    snow: {
      particles: {
        number: { value: 100 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: 1,
          direction: "bottom",
          straight: false,
        },
      },
      interactivity: { events: { onHover: { enable: false } } },
    },
    stars: {
      particles: {
        number: { value: 200 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.1, max: 0.8 },
          animation: { enable: true, speed: 1, sync: false }
        },
        size: { value: { min: 0.5, max: 2 } },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          random: true,
        },
      },
    },
    confetti: {
      particles: {
        number: { value: 0 },
        color: { value: ["#FFD700", "#00FF88", "#FF4444", "#42A5F5"] },
        shape: { type: ["circle", "square"] },
        opacity: { value: 1 },
        size: { value: { min: 2, max: 4 } },
        move: {
          enable: true,
          gravity: { enable: true, acceleration: 9.81 },
          speed: { min: 10, max: 20 },
          decay: 0.05,
          direction: "none",
          straight: false,
          outModes: { default: "destroy" },
        },
      },
      emitters: {
        direction: "top",
        life: { count: 0, duration: 0.1, delay: 0.1 },
        rate: { quantity: 10, delay: 0.1 },
        size: { width: 100, height: 0 },
        position: { x: 50, y: 100 }
      }
    }
  };

  return (
    <Particles
      id={`tsparticles-${type}`}
      init={particlesInit}
      options={options[type] as any}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
