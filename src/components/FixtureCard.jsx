import { motion } from 'framer-motion';
import { Heart, Clock, MapPin } from 'lucide-react';
import { getFlagUrl } from '../utils/flagService';

const formatTime = (timeStr) => {
  if (!timeStr) return '';
  let formatted = timeStr.trim();
  if (formatted.toLowerCase().endsWith('am') || formatted.toLowerCase().endsWith('pm')) {
    return formatted.toUpperCase();
  }
  const parts = formatted.split(':');
  if (parts.length < 2) return formatted;
  let hour = parseInt(parts[0], 10);
  const min = parts[1];
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12;
  return `${hour}:${min} ${ampm}`;
};

const formatTeamName = (name) => {
  if (!name) return '';
  let formatted = name.trim();
  formatted = formatted.replace(/\s+runners[- ]up/i, '\nRunners-up');
  formatted = formatted.replace(/\s+winners/i, '\nWinners');
  formatted = formatted.replace(/\s+third\s+place/i, '\nThird Place');
  return formatted;
};

export default function FixtureCard({ fixture, isFavorite, onToggleFavorite }) {
  const { id, homeTeam, awayTeam, time, group, stage, stadium, city } = fixture;

  const homeFlagUrl = getFlagUrl(homeTeam.code);
  const awayFlagUrl = getFlagUrl(awayTeam.code);

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="relative bg-gradient-to-b from-[#111724] via-[#0b0e17] to-[#080b12] border border-white/[0.05] hover:border-[#7cff4f]/30 rounded-2xl p-5 sm:p-6 min-h-[220px] transition-all duration-500 cursor-default select-none overflow-hidden flex flex-col shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(124,255,79,0.08)] group"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-[#00E5FF]/[0.025] filter blur-[60px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-[#7cff4f]/[0.02] filter blur-[60px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Floating Favorite Button */}
      {onToggleFavorite && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-400 p-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300 cursor-pointer z-20"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-3.5 h-3.5 transition-all duration-300 ${
              isFavorite
                ? 'fill-red-500 text-red-500 scale-110 drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]'
                : 'text-gray-500 group-hover:text-gray-300'
            }`}
          />
        </button>
      )}

      {/* Main Container */}
      <div className="relative z-10 flex flex-col flex-1 w-full">
        {/* ── Sub-header (Match Title with Horizontal Lines) ── */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-white/[0.06] flex-1" />
          <span className="bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.18em] text-[#7cff4f]/90 shadow-sm font-['Inter']">
            {group === 'Final' ? stage : `GROUP ${group}`} • MATCH {id}
          </span>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-white/[0.06] flex-1" />
        </div>

        {/* ── Teams + VS Section ── */}
        <div className="grid grid-cols-[1fr_auto_1.2fr_auto_1fr] items-center justify-items-center gap-1 sm:gap-2 flex-1 mb-5">
          {/* Home Team */}
          <div className="flex flex-col items-center w-full gap-3">
            <div className="relative p-[2px] bg-gradient-to-b from-white/10 to-white/[0.01] border border-white/10 shadow-lg transition-all duration-300 group-hover:border-[#7cff4f]/30 group-hover:shadow-[0_0_15px_rgba(124,255,79,0.05)] rounded-md overflow-hidden">
              {homeFlagUrl ? (
                <img
                  src={homeFlagUrl}
                  alt={`${homeTeam.name} flag`}
                  className="w-16 h-11 sm:w-20 sm:h-13 object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-16 h-11 sm:w-20 sm:h-13 rounded-sm bg-white/[0.03] flex items-center justify-center border border-dashed border-white/10">
                  <span className="text-gray-500 font-black text-lg select-none">?</span>
                </div>
              )}
            </div>
            <div className="h-8 sm:h-10 flex items-center justify-center w-full">
              <span className="text-[11px] sm:text-[12px] font-extrabold text-gray-300 group-hover:text-white text-center tracking-wide uppercase transition-colors duration-300 break-words whitespace-pre-line px-1 leading-tight font-['Outfit']">
                {formatTeamName(homeTeam.name)}
              </span>
            </div>
          </div>

          {/* Left Divider */}
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/[0.06] to-transparent self-center" />

          {/* Match Time Column */}
          <div className="flex flex-col items-center justify-center text-center w-full px-1 gap-2">
            <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 tracking-wider select-none leading-none">
              VS
            </span>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-gray-500 uppercase whitespace-nowrap">
                Local Time (BD)
              </span>
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">
                {formatTime(time)}
              </span>
            </div>
          </div>

          {/* Right Divider */}
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/[0.06] to-transparent self-center" />

          {/* Away Team */}
          <div className="flex flex-col items-center w-full gap-3">
            <div className="relative p-[2px] bg-gradient-to-b from-white/10 to-white/[0.01] border border-white/10 shadow-lg transition-all duration-300 group-hover:border-[#7cff4f]/30 group-hover:shadow-[0_0_15px_rgba(124,255,79,0.05)] rounded-md overflow-hidden">
              {awayFlagUrl ? (
                <img
                  src={awayFlagUrl}
                  alt={`${awayTeam.name} flag`}
                  className="w-16 h-11 sm:w-20 sm:h-13 object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-16 h-11 sm:w-20 sm:h-13 rounded-sm bg-white/[0.03] flex items-center justify-center border border-dashed border-white/10">
                  <span className="text-gray-500 font-black text-lg select-none">?</span>
                </div>
              )}
            </div>
            <div className="h-8 sm:h-10 flex items-center justify-center w-full">
              <span className="text-[11px] sm:text-[12px] font-extrabold text-gray-300 group-hover:text-white text-center tracking-wide uppercase transition-colors duration-300 break-words whitespace-pre-line px-1 leading-tight font-['Outfit']">
                {formatTeamName(awayTeam.name)}
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom Section (Venue) ── */}
        <div className="border-t border-white/[0.05] pt-3 mt-auto flex flex-col items-center text-center w-full gap-0.5">
          <div className="flex items-center gap-1.5 mb-1">
            <MapPin className="w-2.5 h-2.5 text-[#7cff4f]/70 group-hover:text-[#7cff4f] transition-all duration-300" />
            <span className="text-[7.5px] font-black tracking-[0.18em] text-[#7cff4f]/80 uppercase">
              VENUE
            </span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-extrabold text-white tracking-wide leading-tight">
            {stadium}
          </span>
          <span className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide">
            {city}
          </span>
        </div>
      </div>

      {/* Decorative neon bottom line that grows on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7cff4f] to-[#00e5ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
