import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AnthemCard({ anthem, index }) {
  const { title, artist, year, wcEdition, hostCountry, hostFlag, youtubeId } = anthem;
  const number = String(index + 1).padStart(2, '0');
  const [imgLoaded, setImgLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={playing ? undefined : {
        y: -6,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      }}
      className="group relative rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
      }}
    >
      {/* Border + glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-[#7cff4f]/30 transition-all duration-500 z-30 pointer-events-none" />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"
        style={{
          boxShadow: '0 8px 40px -8px rgba(124, 255, 79, 0.12), inset 0 1px 0 rgba(124, 255, 79, 0.04)',
        }}
      />

      {/* ─── Video / Thumbnail Area ─── */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        {playing ? (
          /* Embedded YouTube Player */
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full z-10"
          />
        ) : (
          /* Thumbnail + Play Button */
          <>
            <div className="absolute inset-0 bg-[#0A0E17]" />
            <img
              src={thumbnailUrl}
              alt={title}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-[#0A0E17]/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Play Button */}
            <div
              className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
              onClick={() => setPlaying(true)}
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-400 group-hover:shadow-[0_0_30px_rgba(124,255,79,0.25)]"
                style={{
                  background: 'linear-gradient(135deg, #7cff4f, #5BC438)',
                }}
              >
                <div
                  className="w-0 h-0 ml-1.5"
                  style={{
                    borderTop: '9px solid transparent',
                    borderBottom: '9px solid transparent',
                    borderLeft: '15px solid #0A0E17',
                  }}
                />
              </motion.div>
            </div>

            {/* Year Badge — top right */}
            <div className="absolute top-3 right-3 z-10">
              <span className="inline-flex items-center gap-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider text-white/80">
                {year}
              </span>
            </div>
          </>
        )}
      </div>
      {/* Separator line between thumbnail and info */}
      <div className="w-full h-px bg-white/[0.06]" />

      {/* ─── Info Area ─── */}
      <div className="relative px-4 pt-5 pb-10 sm:px-6 sm:pt-6 sm:pb-12 md:px-7 md:pt-7 md:pb-14 lg:px-8 lg:pt-8 lg:pb-16 flex gap-4 sm:gap-5 md:gap-6 items-start">
        {/* Ranking Number */}
        <div className="flex-shrink-0 pt-1">
          <span
            className="text-[48px] sm:text-[56px] md:text-[60px] font-black leading-none font-['Outfit'] select-none"
            style={{
              background: 'linear-gradient(135deg, #7CFF4F 0%, #00E5FF 60%, #7CFF4F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 6px rgba(124, 255, 79, 0.15))',
            }}
          >
            {number}
          </span>
        </div>

        {/* Song Info */}
        <div className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-5 group-hover:-translate-y-0.5 transition-transform duration-400">
          {/* Song Title */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug font-['Outfit'] line-clamp-2 group-hover:text-[#7cff4f] transition-colors duration-300">
            {title}
          </h3>

          {/* Artist */}
          <p className="text-[13px] sm:text-sm md:text-[15px] text-gray-400 flex items-center gap-2 truncate">
            <span className="text-[#7cff4f]/60">🎤</span>
            <span className="truncate">{artist}</span>
          </p>

          {/* WC Info Badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#7cff4f]/[0.06] border border-[#7cff4f]/15 text-[#7cff4f]">
              <span>🏆</span>
              {wcEdition}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-wider bg-white/[0.04] border border-white/[0.08] text-gray-300">
              <span>{hostFlag}</span>
              {hostCountry}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
