import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

function parseStatValue(value) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseFloat(match[1]), suffix: match[2] };
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedNumber({ value, inView }) {
  const { number, suffix } = parseStatValue(value);
  const [displayNumber, setDisplayNumber] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();
    const isFloat = number % 1 !== 0;

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = easedProgress * number;

      setDisplayNumber(isFloat ? parseFloat(currentValue.toFixed(1)) : Math.floor(currentValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [inView, number]);

  const formattedNumber = number % 1 !== 0
    ? displayNumber.toFixed(1)
    : displayNumber.toLocaleString();

  return (
    <span>
      {formattedNumber}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ stats }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <div
      ref={containerRef}
      className="bg-white/[0.02] border border-white/[0.06] rounded-2xl py-8 px-6 backdrop-blur-xl"
    >
      <div className="flex items-center justify-center flex-wrap gap-y-6">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center">
            {i > 0 && (
              <div className="h-8 w-px bg-white/[0.06] mx-4 sm:mx-6 hidden sm:block" />
            )}
            <div className="flex flex-col items-center px-3 sm:px-4">
              <span className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] tabular-nums">
                <AnimatedNumber value={stat.value} inView={isInView} />
              </span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-gray-500 mt-1.5 font-['Inter']">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
