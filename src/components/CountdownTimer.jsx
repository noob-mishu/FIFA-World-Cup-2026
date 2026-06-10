import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const KICKOFF = new Date('2026-06-12T01:00:00+06:00').getTime();

function calcDelta() {
  const diff = Math.max(0, KICKOFF - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

const unitLabels = ['days', 'hours', 'minutes', 'seconds'];

export default function CountdownTimer() {
  const [delta, setDelta] = useState(calcDelta);

  useEffect(() => {
    const id = setInterval(() => setDelta(calcDelta()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 shadow-sm backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7cff4f] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7cff4f]" />
        </span>
        Countdown to Kickoff
      </motion.div>

      {/* Cards */}
      <div className="flex items-center gap-2 sm:gap-4 select-none">
        {unitLabels.map((unit, idx) => (
          <div key={unit} className="flex items-center gap-2 sm:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              /* Pulse only the seconds card */
              {...(unit === 'seconds' && {
                animate: { opacity: 1, y: 0, scale: [1, 1.04, 1] },
                transition: { scale: { repeat: Infinity, duration: 1, ease: 'easeInOut' }, delay: idx * 0.1 },
              })}
              className="flex flex-col items-center justify-center bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-3 sm:p-5 min-w-[64px] sm:min-w-[100px] shadow-lg shadow-black/30 hover:border-[#7cff4f]/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#7cff4f] font-mono leading-none text-glow-green">
                {String(delta[unit]).padStart(2, '0')}
              </span>
              <span className="mt-2.5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                {unit}
              </span>
            </motion.div>

            {/* Colon separator */}
            {idx < unitLabels.length - 1 && (
              <span className="text-xl sm:text-2xl font-bold text-white/10 select-none -mx-1 sm:-mx-0.5">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
