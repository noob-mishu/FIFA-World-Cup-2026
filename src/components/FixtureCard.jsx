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
  
  const isFinalMatch = stage === 'Final' && group === 'Final';

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className={`relative border rounded-2xl p-5 sm:p-6 min-h-[220px] transition-all duration-500 cursor-default select-none overflow-hidden flex flex-col shadow-[0_12px_40px_rgba(0,0,0,0.4)] group
        ${isFinalMatch 
          ? 'bg-gradient-to-b from-[#1c180e] via-[#0f0d09] to-[#070605] border-[#FFD700]/30 hover:border-[#FFD700]/65 hover:shadow-[0_20px_50px_rgba(255,215,0,0.12)]' 
          : 'bg-gradient-to-b from-[#111724] via-[#0b0e17] to-[#080b12] border-white/[0.05] hover:border-[#7cff4f]/30 hover:shadow-[0_20px_50px_rgba(124,255,79,0.08)]'
        }
      `}
    >
      {/* Background Ambient Glows */}
      {isFinalMatch ? (
        <>
          <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-[#FFD700]/[0.05] filter blur-[60px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-[#FFA500]/[0.03] filter blur-[60px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-[#00E5FF]/[0.025] filter blur-[60px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-[#7cff4f]/[0.02] filter blur-[60px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </>
      )}

      {/* Floating Favorite Button */}
      {onToggleFavorite && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavorite();
          }}
          className={`absolute top-4 right-4 p-2 rounded-full border transition-all duration-300 cursor-pointer z-20
            ${isFinalMatch
              ? 'text-gray-500 hover:text-red-400 bg-white/[0.02] border-white/[0.04] hover:bg-red-500/10 hover:border-red-500/30'
              : 'text-gray-500 hover:text-red-400 bg-white/[0.03] border border-white/[0.06] hover:bg-red-500/10 hover:border-red-500/30'
            }
          `}
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
          <div className={`h-[1px] flex-1 ${isFinalMatch ? 'bg-gradient-to-r from-transparent to-[#FFD700]/20' : 'bg-gradient-to-r from-transparent to-white/[0.06]'}`} />
          {isFinalMatch ? (
            <span className="bg-[#FFD700]/10 border border-[#FFD700]/30 px-3.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.12)] flex items-center gap-1.5 font-['Inter']">
              🏆 WORLD CUP FINAL • MATCH {id}
            </span>
          ) : (
            <span className="bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.18em] text-[#7cff4f]/90 shadow-sm font-['Inter']">
              {group === 'Final' ? stage : `GROUP ${group}`} • MATCH {id}
            </span>
          )}
          <div className={`h-[1px] flex-1 ${isFinalMatch ? 'bg-gradient-to-l from-transparent to-[#FFD700]/20' : 'bg-gradient-to-l from-transparent to-white/[0.06]'}`} />
        </div>

        {/* ── Teams + VS Section ── */}
        <div className="grid grid-cols-[1fr_auto_1.2fr_auto_1fr] items-center justify-items-center gap-1 sm:gap-2 flex-1 mb-5">
          {/* Home Team */}
          <div className="flex flex-col items-center w-full gap-3">
            <div className={`relative p-[2px] bg-gradient-to-b border shadow-lg transition-all duration-300 rounded-md overflow-hidden
              ${isFinalMatch 
                ? 'from-[#FFD700]/30 to-[#FFD700]/5 border-[#FFD700]/20 group-hover:border-[#FFD700]/50 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.15)]' 
                : 'from-white/10 to-white/[0.01] border-white/10 group-hover:border-[#7cff4f]/30 group-hover:shadow-[0_0_15px_rgba(124,255,79,0.05)]'
              }
            `}>
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
              <span className={`text-[11px] sm:text-[12px] font-extrabold text-center tracking-wide uppercase transition-colors duration-300 break-words whitespace-pre-line px-1 leading-tight font-['Outfit']
                ${isFinalMatch ? 'text-gray-200 group-hover:text-white' : 'text-gray-300 group-hover:text-white'}
              `}>
                {formatTeamName(homeTeam.name)}
              </span>
            </div>
          </div>

          {/* Left Divider */}
          <div className={`h-12 w-[1px] self-center ${isFinalMatch ? 'bg-gradient-to-b from-transparent via-[#FFD700]/20 to-transparent' : 'bg-gradient-to-b from-transparent via-white/[0.06] to-transparent'}`} />

          {/* Match Time Column */}
          <div className="flex flex-col items-center justify-center text-center w-full px-1 gap-2">
            <span className={`text-xl sm:text-2xl font-black tracking-wider select-none leading-none
              ${isFinalMatch ? 'text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]' : 'text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30'}
            `}>
              VS
            </span>
            <div className="flex flex-col items-center gap-1">
              <span className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase whitespace-nowrap
                ${isFinalMatch ? 'text-[#FFD700]' : 'text-gray-500'}
              `}>
                Local Time (BD)
              </span>
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">
                {formatTime(time)}
              </span>
            </div>
          </div>

          {/* Right Divider */}
          <div className={`h-12 w-[1px] self-center ${isFinalMatch ? 'bg-gradient-to-b from-transparent via-[#FFD700]/20 to-transparent' : 'bg-gradient-to-b from-transparent via-white/[0.06] to-transparent'}`} />

          {/* Away Team */}
          <div className="flex flex-col items-center w-full gap-3">
            <div className={`relative p-[2px] bg-gradient-to-b border shadow-lg transition-all duration-300 rounded-md overflow-hidden
              ${isFinalMatch 
                ? 'from-[#FFD700]/30 to-[#FFD700]/5 border-[#FFD700]/20 group-hover:border-[#FFD700]/50 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.15)]' 
                : 'from-white/10 to-white/[0.01] border-white/10 group-hover:border-[#7cff4f]/30 group-hover:shadow-[0_0_15px_rgba(124,255,79,0.05)]'
              }
            `}>
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
              <span className={`text-[11px] sm:text-[12px] font-extrabold text-center tracking-wide uppercase transition-colors duration-300 break-words whitespace-pre-line px-1 leading-tight font-['Outfit']
                ${isFinalMatch ? 'text-gray-200 group-hover:text-white' : 'text-gray-300 group-hover:text-white'}
              `}>
                {formatTeamName(awayTeam.name)}
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom Section (Venue) ── */}
        <div className="border-t border-white/[0.05] pt-3 mt-auto flex flex-col items-center text-center w-full gap-0.5">
          <div className="flex items-center gap-1.5 mb-1">
            <MapPin className={`w-2.5 h-2.5 transition-all duration-300 ${isFinalMatch ? 'text-[#FFD700]' : 'text-[#7cff4f]/70 group-hover:text-[#7cff4f]'}`} />
            <span className={`text-[7.5px] font-black tracking-[0.18em] uppercase ${isFinalMatch ? 'text-[#FFD700]' : 'text-[#7cff4f]/80'}`}>
              VENUE
            </span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-extrabold text-white tracking-wide leading-tight">
            {stadium}
          </span>
          <span className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide font-['Inter']">
            {city}
          </span>
        </div>
      </div>

      {/* Decorative neon bottom line that grows on hover */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left
        ${isFinalMatch ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500]' : 'bg-gradient-to-r from-[#7cff4f] to-[#00e5ff]'}
      `} />
    </motion.div>
  );
}
