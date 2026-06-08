import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const sizeClasses = {
  tall: 'min-h-[380px]',
  wide: 'min-h-[220px]',
  normal: 'min-h-[280px]',
};

export default function FanMomentCard({ moment, index }) {
  const { caption, category, country, countryFlag, size, gradient, icon } =
    moment;

  const [liked, setLiked] = useState(false);

  const heightClass = sizeClasses[size] || sizeClasses.normal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      className={`rounded-2xl overflow-hidden relative group cursor-pointer ${heightClass}`}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-all duration-500 group-hover:brightness-110`}
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Large centered icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-6xl sm:text-7xl opacity-30 select-none">
          {icon}
        </span>
      </div>

      {/* Category Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-white/[0.08] backdrop-blur-md border border-white/[0.08] rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300 font-['Inter']">
          {category}
        </span>
      </div>

      {/* Country Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="bg-white/[0.08] backdrop-blur-md border border-white/[0.08] rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300 font-['Inter']">
          {countryFlag} {country}
        </span>
      </div>

      {/* Bottom Info Panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10 z-10">
        <p className="text-sm font-semibold text-white leading-snug font-['Inter'] pr-10">
          {caption}
        </p>
      </div>

      {/* Heart Button */}
      <motion.button
        className="absolute bottom-4 right-4 z-20 w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center backdrop-blur-sm border border-white/[0.06] transition-colors duration-300 hover:bg-white/[0.15]"
        onClick={(e) => {
          e.stopPropagation();
          setLiked((prev) => !prev);
        }}
        whileTap={{ scale: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={liked ? 'liked' : 'unliked'}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Heart
              size={14}
              className={
                liked
                  ? 'text-red-500 fill-red-500'
                  : 'text-gray-400'
              }
            />
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Hover shimmer overlay */}
      <div className="absolute inset-0 bg-white/[0.0] group-hover:bg-white/[0.03] transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}
