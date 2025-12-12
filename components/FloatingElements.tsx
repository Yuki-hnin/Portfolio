import { motion } from 'framer-motion';
import { Snowflake } from 'lucide-react';

export function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              ['rgba(6,182,212,0.3)', 'rgba(147,51,234,0.3)', 'rgba(236,72,153,0.3)', 'rgba(59,130,246,0.3)', 'rgba(34,197,94,0.3)'][i]
            }, transparent)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating snowflakes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`snowflake-${i}`}
          className="absolute text-cyan-400/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          <Snowflake size={Math.random() * 16 + 12} />
        </motion.div>
      ))}
    </div>
  );
}