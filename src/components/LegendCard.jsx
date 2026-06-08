import { motion } from 'framer-motion';

function RegularCard({ legend, index }) {
  const {
    name,
    country,
    countryFlag,
    position,
    wcAppearances,
    goals,
    trophies,
    quote,
    gradient,
  } = legend;

  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const stats = [
    { value: wcAppearances, label: 'WC Apps' },
    { value: goals, label: 'Goals' },
    { value: trophies, label: 'Trophies' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{
        y: -4,
        scale: 1.02,
        borderColor: 'rgba(255, 215, 0, 0.3)',
        boxShadow: '0 8px 32px -8px rgba(255, 215, 0, 0.15)',
      }}
      className="group rounded-3xl bg-white/[0.02] border border-white/[0.06] p-6 overflow-hidden relative transition-all duration-400 cursor-pointer"
    >
      {/* Portrait */}
      <div
        className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${gradient}`}
      >
        <span className="text-2xl font-black text-white/90 uppercase font-['Outfit']">
          {initials}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-white text-center font-['Outfit']">
        {name}
      </h3>

      {/* Country + Position */}
      <p className="text-xs text-gray-500 text-center mt-1 font-['Inter']">
        {countryFlag} {country} • {position}
      </p>

      {/* Stats Row */}
      <div className="flex justify-center gap-4 mt-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-lg font-bold text-[#7cff4f] font-['Outfit']">
              {stat.value}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-gray-600 font-['Inter']">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Quote Overlay */}
      {quote && (
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/95 to-transparent p-4 pt-10 z-20">
          <p className="text-xs text-gray-300 italic leading-relaxed font-['Inter'] text-center">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      )}
    </motion.div>
  );
}

function FeaturedCard({ legend, index }) {
  const {
    name,
    country,
    countryFlag,
    position,
    wcAppearances,
    goals,
    trophies,
    quote,
    gradient,
    highlights,
    timeline,
  } = legend;

  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const stats = [
    { value: wcAppearances, label: 'WC Apps' },
    { value: goals, label: 'Goals' },
    { value: trophies, label: 'Trophies' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{
        borderColor: 'rgba(255, 215, 0, 0.4)',
        boxShadow: '0 12px 48px -12px rgba(255, 215, 0, 0.2)',
      }}
      className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.02] border border-[#FFD700]/20 p-6 sm:p-8 overflow-hidden relative transition-all duration-400"
    >
      {/* Featured Badge */}
      <div className="mb-5">
        <span className="bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/10 border border-[#FFD700]/30 rounded-full px-3 py-1 text-[10px] font-bold tracking-wider text-[#FFD700] uppercase font-['Inter']">
          ★ Featured Legend
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Left Side: Portrait + Info */}
        <div className="flex flex-col items-center md:items-start shrink-0">
          {/* Portrait */}
          <div
            className={`w-28 h-28 rounded-full mb-4 flex items-center justify-center bg-gradient-to-br ${gradient} ring-2 ring-[#FFD700]/20`}
          >
            <span className="text-3xl font-black text-white/90 uppercase font-['Outfit']">
              {initials}
            </span>
          </div>

          {/* Name */}
          <h3 className="text-xl font-bold text-white font-['Outfit']">
            {name}
          </h3>
          <p className="text-xs text-gray-500 mt-1 font-['Inter']">
            {countryFlag} {country} • {position}
          </p>

          {/* Stats */}
          <div className="flex gap-4 mt-5">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xl font-bold text-[#7cff4f] font-['Outfit']">
                  {stat.value}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-gray-600 font-['Inter']">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Quote */}
          {quote && (
            <p className="text-xs text-gray-400 italic mt-4 leading-relaxed max-w-[240px] font-['Inter']">
              &ldquo;{quote}&rdquo;
            </p>
          )}
        </div>

        {/* Right Side: Timeline + Highlights */}
        <div className="flex-1 min-w-0">
          {/* Timeline */}
          {timeline && timeline.length > 0 && (
            <div className="relative pl-5 border-l border-white/[0.08]">
              {timeline.map((entry, i) => (
                <div key={i} className="mb-4 last:mb-0 relative">
                  {/* Dot */}
                  <div className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full bg-[#7cff4f] border-2 border-[#0A0E17]" />
                  <span className="text-sm font-bold text-[#7cff4f] font-['Outfit']">
                    {entry.year}
                  </span>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed font-['Inter']">
                    {entry.event}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {highlights.map((h, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-[10px] font-medium text-gray-400 font-['Inter']"
                >
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Ambient gold glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#FFD700]/[0.03] blur-3xl pointer-events-none" />
    </motion.div>
  );
}

export default function LegendCard({ legend, index }) {
  if (legend.isFeatured) {
    return <FeaturedCard legend={legend} index={index} />;
  }
  return <RegularCard legend={legend} index={index} />;
}
