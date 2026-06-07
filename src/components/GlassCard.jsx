import { motion } from 'framer-motion';

const glowColors = {
  green: 'rgba(124, 255, 79, 0.4)',
  cyan: 'rgba(0, 229, 255, 0.4)',
  red: 'rgba(255, 59, 59, 0.4)',
  white: 'rgba(255, 255, 255, 0.2)',
};

export default function GlassCard({
  children,
  className = '',
  glowColor = 'green',
  hover = true,
  delay = 0,
}) {
  const resolvedGlow = glowColors[glowColor] || glowColors.green;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={
        hover
          ? {
              scale: 1.03,
              boxShadow: `0 0 24px 4px ${resolvedGlow}, inset 0 0 24px 2px ${resolvedGlow.replace('0.4', '0.05')}`,
              borderColor: resolvedGlow,
            }
          : undefined
      }
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
