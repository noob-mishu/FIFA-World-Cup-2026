import { motion } from 'framer-motion';
import { Heart, Clock, MapPin } from 'lucide-react';
import { getFlagUrl } from '../utils/flagService';

const formatTime = (timeStr) => {
  const parts = timeStr.split(':');
  if (parts.length < 2) return timeStr;
  let hour = parseInt(parts[0], 10);
  const min = parts[1];
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12;
  return `${hour}:${min} ${ampm}`;
};

export default function FixtureCard({ fixture, isFavorite, onToggleFavorite }) {
  const { id, homeTeam, awayTeam, time, group, stage, stadium, city } = fixture;

  const homeFlagUrl = getFlagUrl(homeTeam.code);
  const awayFlagUrl = getFlagUrl(awayTeam.code);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className="relative bg-gradient-to-b from-[#121826] to-[#0a0e16] border border-white/[0.06] hover:border-[#7cff4f]/20 rounded-xl p-4 sm:p-6 min-h-[200px] sm:min-h-[220px] transition-all duration-300 cursor-default select-none overflow-hidden flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_48px_rgba(124,255,79,0.06)] group"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[180px] h-[180px] rounded-full bg-[#00E5FF]/[0.015] filter blur-[50px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] rounded-full bg-[#7cff4f]/[0.01] filter blur-[50px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating Favorite Button */}
      {onToggleFavorite && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-400 p-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-red-500/5 hover:border-red-500/25 transition-all duration-300 cursor-pointer z-20"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-3.5 h-3.5 transition-all duration-300 ${
              isFavorite
                ? 'fill-red-500 text-red-500 scale-110'
                : 'text-gray-500 group-hover:text-gray-400'
            }`}
          />
        </button>
      )}

      {/* Main Container */}
      <div className="relative z-10 flex flex-col flex-1 w-full">
        {/* ── Sub-header (Match Title with Horizontal Lines) ── */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent flex-1" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-500 group-hover:text-gray-400 transition-colors duration-300 shrink-0">
            {group === 'Final' ? stage : `GROUP ${group}`} <span className="mx-1 text-gray-600">•</span> MATCH{' '}
            {id}
          </span>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent flex-1" />
        </div>

        {/* ── Middle Row (Teams + Time) ── */}
        <div className="grid grid-cols-[1fr_auto_1.2fr_auto_1fr] items-center justify-items-center gap-1 sm:gap-2 flex-1 mb-4 sm:mb-5">
          {/* Home Team */}
          <div className="flex flex-col items-center w-full gap-2.5">
            <div className="relative p-[3px] bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 shadow-lg transition-all duration-300 group-hover:border-[#7cff4f]/25 rounded-sm">
              {homeFlagUrl ? (
                <img
                  src={homeFlagUrl}
                  alt={`${homeTeam.name} flag`}
                  className="w-16 h-11 sm:w-22 sm:h-14 object-cover rounded-none"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-16 h-11 sm:w-22 sm:h-14 rounded-none bg-white/[0.03] flex items-center justify-center border border-dashed border-white/10">
                  <span className="text-gray-500 font-black text-lg sm:text-xl select-none">?</span>
                </div>
              )}
            </div>
            <span className="text-[11px] sm:text-[12px] font-extrabold text-gray-300 group-hover:text-white text-center tracking-wide uppercase transition-colors duration-300 truncate w-full px-1 leading-tight">
              {homeTeam.name}
            </span>
          </div>

          {/* Left Divider */}
          <div className="h-14 w-[1px] bg-gradient-to-b from-transparent via-white/[0.08] to-transparent self-center transition-all duration-300 group-hover:via-white/[0.14]" />

          {/* Match Time Column */}
          <div className="flex flex-col items-center justify-center text-center w-full px-1 gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter select-none group-hover:from-white group-hover:to-white/80 transition-all duration-300 leading-none">
              VS
            </span>
            {group === 'Final' ? (
              <div className="flex flex-col items-center gap-1.5 mt-0.5">
                <span className="text-[7.5px] font-black tracking-[0.18em] text-[#7cff4f]/80 uppercase">
                  KICKOFF
                </span>
                <span className="text-[10px] sm:text-[11px] font-extrabold text-gray-400 tracking-wide uppercase whitespace-nowrap bg-white/[0.02] border border-white/[0.04] px-2 py-1 rounded">
                  To Be Published..
                </span>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-[#7cff4f]/70 group-hover:text-[#7cff4f] transition-colors duration-300" />
                  <span className="text-[7.5px] font-bold tracking-[0.18em] text-gray-500 uppercase">
                    KICKOFF
                  </span>
                </div>
                <span className="text-base sm:text-lg font-bold text-white tracking-tight leading-none">
                  {formatTime(time)}
                </span>
                <span className="text-[7px] font-bold tracking-[0.12em] text-gray-600 uppercase">
                  LOCAL TIME
                </span>
              </>
            )}
          </div>

          {/* Right Divider */}
          <div className="h-14 w-[1px] bg-gradient-to-b from-transparent via-white/[0.08] to-transparent self-center transition-all duration-300 group-hover:via-white/[0.14]" />

          {/* Away Team */}
          <div className="flex flex-col items-center w-full gap-2.5">
            <div className="relative p-[3px] bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 shadow-lg transition-all duration-300 group-hover:border-[#7cff4f]/25 rounded-sm">
              {awayFlagUrl ? (
                <img
                  src={awayFlagUrl}
                  alt={`${awayTeam.name} flag`}
                  className="w-16 h-11 sm:w-22 sm:h-14 object-cover rounded-none"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-16 h-11 sm:w-22 sm:h-14 rounded-none bg-white/[0.03] flex items-center justify-center border border-dashed border-white/10">
                  <span className="text-gray-500 font-black text-lg sm:text-xl select-none">?</span>
                </div>
              )}
            </div>
            <span className="text-[11px] sm:text-[12px] font-extrabold text-gray-300 group-hover:text-white text-center tracking-wide uppercase transition-colors duration-300 truncate w-full px-1 leading-tight">
              {awayTeam.name}
            </span>
          </div>
        </div>

        {/* ── Bottom Section (Venue) ── */}
        <div className="border-t border-white/[0.06] pt-3 sm:pt-4 mt-auto flex flex-col items-center text-center w-full gap-1">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#7cff4f]/70 group-hover:text-[#7cff4f] transition-all duration-300" />
            <span className="text-[8px] font-black tracking-[0.18em] text-[#7cff4f]/80 uppercase">
              VENUE
            </span>
          </div>
          <span className="text-[13px] sm:text-sm font-extrabold text-white tracking-wide leading-snug transition-colors duration-300">
            {stadium}
          </span>
          <span className="text-[10px] font-semibold text-gray-500 leading-none uppercase tracking-wide">
            {city}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
