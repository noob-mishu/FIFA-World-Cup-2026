import { motion } from 'framer-motion';
import { Trophy, Target, Calendar, Flag, Users, Award } from 'lucide-react';

/* ─── Stat Pill ─── */
const StatPill = ({ icon: Icon, value, label, color = '#7cff4f' }) => (
  <div className="legend-stat-pill">
    <div
      className="legend-stat-icon"
      style={{ background: `${color}10`, borderColor: `${color}20` }}
    >
      <Icon className="w-3 h-3" style={{ color }} />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-extrabold text-white leading-none font-['Outfit']">
        {value}
      </span>
      <span className="text-[8px] uppercase tracking-[0.12em] text-gray-500 font-semibold font-['Inter'] leading-none mt-0.5">
        {label}
      </span>
    </div>
  </div>
);

/* ─── Portrait (image or gradient initials fallback) ─── */
const Portrait = ({ legend, size = 'regular' }) => {
  const { name, image, gradient } = legend;
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const sizeClasses =
    size === 'large'
      ? 'w-32 h-32 sm:w-36 sm:h-36'
      : 'w-[100px] h-[100px]';

  const initialSize = size === 'large' ? 'text-3xl' : 'text-xl';

  if (image) {
    return (
      <div className={`${sizeClasses} rounded-2xl overflow-hidden relative shrink-0 legend-portrait-ring`}>
        <img
          src={`${import.meta.env.BASE_URL}${image}?v=3`}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div
          className={`w-full h-full items-center justify-center bg-gradient-to-br ${gradient} hidden absolute inset-0`}
        >
          <span className={`${initialSize} font-black text-white/90 uppercase font-['Outfit']`}>
            {initials}
          </span>
        </div>
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses} rounded-2xl flex items-center justify-center bg-gradient-to-br ${gradient} shrink-0 legend-portrait-ring relative overflow-hidden`}
    >
      <span className={`${initialSize} font-black text-white/90 uppercase font-['Outfit'] relative z-10`}>
        {initials}
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
};

/* ═══════════════════════════════════════════════
   REGULAR CARD — Clean, uniform layout
   ═══════════════════════════════════════════════ */
function RegularCard({ legend, index }) {
  const {
    name,
    country,
    countryFlag,
    position,
    yearsActive,
    wcAppearances,
    goals,
    assists,
    trophies,
    caps,
    quote,
    accentColor,
  } = legend;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      className="legend-card group"
    >
      {/* Top Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl opacity-40"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor || '#7cff4f'}, transparent)` }}
      />

      {/* Header: Portrait + Identity */}
      <div className="flex items-start gap-4 mb-2">
        <Portrait legend={legend} size="regular" />
        <div className="flex flex-col justify-center min-w-0 pt-1">
          <h3 className="text-[17px] font-bold text-white font-['Outfit'] leading-tight truncate">
            {name}
          </h3>
          <p className="text-[11px] text-gray-500 mt-1 font-['Inter'] flex items-center gap-1.5">
            <span>{countryFlag}</span>
            <span>{country}</span>
            <span className="text-gray-700">•</span>
            <span className="text-gray-400">{position}</span>
          </p>

          {/* Years Active Badge */}
          <div className="flex items-center gap-1.5 mt-2.5">
            <div className="legend-years-badge" style={{ borderColor: `${accentColor || '#7cff4f'}25`, color: accentColor || '#7cff4f' }}>
              <Calendar className="w-2.5 h-2.5" />
              <span>{yearsActive}</span>
            </div>
          </div>

          {/* Caps */}
          {caps && (
            <p className="text-[10px] text-gray-600 mt-1.5 font-['Inter'] flex items-center gap-1">
              <Users className="w-2.5 h-2.5" />
              <span className="font-bold text-gray-400">{caps}</span> intl. caps
            </p>
          )}
        </div>
      </div>

      {/* Dedicated Spacer for FUT Card Layout Spacing */}
      <div className="h-[40px]" />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <StatPill icon={Target} value={goals} label="WC Goals" color={accentColor} />
        <StatPill icon={Flag} value={wcAppearances} label="WC Apps" color={accentColor} />
        <StatPill icon={Award} value={assists} label="Assists" color="#00e5ff" />
        <StatPill icon={Trophy} value={trophies} label="Trophies" color="#7cff4f" />
      </div>

      {/* Quote Overlay */}
      {quote && (
        <div className="legend-quote-overlay absolute inset-x-0 bottom-0 z-20">
          <div className="bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/95 to-transparent p-5 pt-12">
            <p className="text-[11px] text-gray-300 italic leading-relaxed font-['Inter'] text-center">
              &ldquo;{quote}&rdquo;
            </p>
          </div>
        </div>
      )}

      {/* Ambient glow */}
      <div
        className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-[0.04]"
        style={{ background: accentColor || '#7cff4f' }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   FEATURED CARD — Expanded spotlight layout
   ═══════════════════════════════════════════════ */
function FeaturedCard({ legend, index }) {
  const {
    name,
    country,
    countryFlag,
    position,
    yearsActive,
    wcAppearances,
    goals,
    assists,
    trophies,
    caps,
    quote,
    accentColor,
    highlights,
    timeline,
  } = legend;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      className="legend-card-featured col-span-1 md:col-span-2"
    >
      {/* Featured Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#7cff4f]/15 to-[#00e5ff]/08 border border-[#7cff4f]/25 rounded-full px-3.5 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#7cff4f] uppercase font-['Inter']">
          <Trophy className="w-3 h-3" />
          Featured Legend
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left: Portrait + Identity */}
        <div className="flex flex-col items-center md:items-start shrink-0">
          <Portrait legend={legend} size="large" />

          {/* Name & Info */}
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mt-4 text-center md:text-left">
            {name}
          </h3>
          <p className="text-xs text-gray-500 mt-1 font-['Inter'] flex items-center gap-1.5">
            <span>{countryFlag}</span>
            <span>{country}</span>
            <span className="text-gray-700">•</span>
            <span className="text-gray-400">{position}</span>
          </p>

          {/* Years + Caps */}
          <div className="flex items-center gap-2 mt-3">
            <div className="legend-years-badge" style={{ borderColor: `${accentColor || '#7cff4f'}25`, color: accentColor || '#7cff4f' }}>
              <Calendar className="w-2.5 h-2.5" />
              <span>{yearsActive}</span>
            </div>
            {caps && (
              <span className="text-[10px] text-gray-500 font-['Inter'] flex items-center gap-1">
                <Users className="w-2.5 h-2.5" />
                <span className="font-bold text-gray-400">{caps}</span> caps
              </span>
            )}
          </div>

          {/* Dedicated Spacer for FUT Card Layout Spacing */}
          <div className="h-[40px]" />

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 mt-2 w-full max-w-[260px]">
            <StatPill icon={Target} value={goals} label="WC Goals" color={accentColor} />
            <StatPill icon={Flag} value={wcAppearances} label="WC Apps" color={accentColor} />
            <StatPill icon={Award} value={assists} label="Assists" color="#00e5ff" />
            <StatPill icon={Trophy} value={trophies} label="Trophies" color="#7cff4f" />
          </div>

          {/* Quote */}
          {quote && (
            <p className="text-[11px] text-gray-400 italic mt-5 leading-relaxed max-w-[260px] font-['Inter'] text-center md:text-left">
              &ldquo;{quote}&rdquo;
            </p>
          )}
        </div>

        {/* Right: Timeline + Highlights */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          {/* Timeline */}
          {timeline && timeline.length > 0 && (
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold mb-3 block font-['Inter']">
                World Cup Journey
              </span>
              <div className="relative pl-5 border-l border-white/[0.08] ">
                {timeline.map((entry, i) => (
                  <div key={i} className="mb-4 last:mb-0 relative">
                    <div
                      className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full border-2 border-[#0A0E17]"
                      style={{ background: accentColor || '#7cff4f' }}
                    />
                    <span
                      className="text-sm font-bold font-['Outfit']"
                      style={{ color: accentColor || '#7cff4f' }}
                    >
                      {entry.year}
                    </span>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed font-['Inter']">
                      {entry.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold mb-3 block font-['Inter']">
                Career Highlights
              </span>
              <div className="flex flex-wrap gap-2">
                {highlights.map((h, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 text-[10px] font-semibold text-gray-400 font-['Inter'] hover:border-[#7cff4f]/20 hover:text-gray-300 transition-all duration-200"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Ambient neon glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#00E5FF]/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl pointer-events-none" style={{ background: `${accentColor}08` }} />
    </motion.div>
  );
}

/* ═══ Export ═══ */
export default function LegendCard({ legend, index }) {
  if (legend.isFeatured) {
    return <FeaturedCard legend={legend} index={index} />;
  }
  return <RegularCard legend={legend} index={index} />;
}
