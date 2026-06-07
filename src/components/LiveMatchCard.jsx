import { motion } from 'framer-motion';
import { getFlagUrl } from '../utils/flagService';

const TeamFlag = ({ code, name }) => {
  const url = getFlagUrl(code);
  return url ? (
    <img
      src={url}
      alt={`${name} flag`}
      className="w-14 h-10 object-cover rounded-none shadow-lg border border-white/10"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  ) : (
    <div className="w-14 h-10 rounded-none bg-white/10 border border-white/10" />
  );
};

export default function LiveMatchCard({ match }) {
  const {
    homeTeam,
    awayTeam,
    score,
    minute,
    stadium,
    city,
    group,
    isLive,
  } = match;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 sm:p-8 overflow-hidden"
      style={
        isLive
          ? { boxShadow: '0 0 40px 4px rgba(124,255,79,0.12)' }
          : undefined
      }
    >
      {/* Top Accent */}
      {isLive && (
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#7cff4f] to-transparent" />
      )}

      {/* Top Row */}
      <div className="flex items-center justify-between mb-6">
        {isLive ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            Live
          </span>
        ) : (
          <span />
        )}
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
          Group {group}
        </span>
      </div>

      {/* Center */}
      <div className="flex items-center justify-center gap-6 sm:gap-10">
        {/* Home */}
        <div className="flex flex-col items-center gap-2.5 min-w-[80px]">
          <TeamFlag code={homeTeam.code} name={homeTeam.name} />
          <span className="text-sm sm:text-base font-semibold text-white text-center leading-tight">
            {homeTeam.name}
          </span>
        </div>

        {/* Score */}
        {isLive && score ? (
          <div className="flex flex-col items-center">
            <span
              className="text-5xl sm:text-6xl font-extrabold text-white font-mono"
              style={{
                textShadow:
                  '0 0 20px rgba(124,255,79,0.5), 0 0 60px rgba(124,255,79,0.2)',
              }}
            >
              {score.home} – {score.away}
            </span>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              className="mt-2 text-sm font-bold text-[#7cff4f]"
            >
              {minute}&apos;
            </motion.span>
          </div>
        ) : (
          <span className="text-4xl sm:text-5xl font-extrabold text-white/15 font-mono">
            VS
          </span>
        )}

        {/* Away */}
        <div className="flex flex-col items-center gap-2.5 min-w-[80px]">
          <TeamFlag code={awayTeam.code} name={awayTeam.name} />
          <span className="text-sm sm:text-base font-semibold text-white text-center leading-tight">
            {awayTeam.name}
          </span>
        </div>
      </div>

      {/* Venue */}
      <p className="mt-6 text-center text-xs text-gray-500">
        {stadium} · {city}
      </p>
    </motion.div>
  );
}
