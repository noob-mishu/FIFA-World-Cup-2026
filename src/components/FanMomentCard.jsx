import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';

/**
 * FanMomentCard — Premium glassmorphism photo card
 * Aesthetic: cinematic overlay, glowing borders, smooth reveals, parallax-like hover
 */
export default function FanMomentCard({ moment, index }) {
  const { image, title, caption, location, tag } = moment;
  const [liked, setLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group cursor-pointer relative"
    >
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-500
          bg-white/[0.02] border border-white/[0.06]
          hover:border-[#7cff4f]/25
          hover:shadow-[0_0_0_1px_rgba(124,255,79,0.06),0_20px_60px_-12px_rgba(0,0,0,0.5),0_0_30px_-5px_rgba(124,255,79,0.08)]"
      >
        {/* ── Image Container ── */}
        <div className="relative overflow-hidden aspect-[16/9]">
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse">
              <div className="w-full h-full bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.04]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[#7cff4f]/40 animate-spin" />
              </div>
            </div>
          )}

          <img
            src={image}
            alt={title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-[800ms] ease-out
              group-hover:scale-[1.08]
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
          />

          {/* Light cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

          {/* Subtle film grain texture */}
          <div
            className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Heart button */}
          <div className="absolute top-3 right-3 z-10">
            <motion.button
              className="w-7 h-7 rounded-full bg-black/30 backdrop-blur-xl flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setLiked((prev) => !prev);
              }}
              whileTap={{ scale: 0.75 }}
              whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={liked ? 'liked' : 'unliked'}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 30 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <Heart
                    size={12}
                    className={liked
                      ? 'text-red-400 fill-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.6)]'
                      : 'text-white/60'
                    }
                  />
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Glow reflection under card on hover */}
      <div className="absolute -bottom-2 left-[10%] right-[10%] h-8 rounded-full bg-[#7cff4f]/0 group-hover:bg-[#7cff4f]/[0.03] blur-xl transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}
