import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Trophy,
  MapPin,
  Users,
  CalendarDays,
  ArrowRight,
  Sparkles,
  Globe,
  Map,
} from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import { getFlagUrl } from '../utils/flagService';
import teams from '../data/teams';
import { topScorers, tournamentStats } from '../data/stats';

/* ─── Reusable Flag ─── */
const Flag = ({ code, name, size = 'w-8 h-6' }) => {
  const url = getFlagUrl(code);
  return url ? (
    <img
      src={url}
      alt={`${name} flag`}
      className={`${size} object-cover rounded-none border border-white/10 shadow-sm`}
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  ) : (
    <div className={`${size} rounded-none bg-white/10`} />
  );
};

/* ─── Section Header ─── */
const SectionHeader = ({ tag, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="w-full flex flex-col items-center justify-center text-center mb-4.5 gap-1.5 sm:gap-2"
  >
    {tag && (
      <span 
        className="inline-block text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#7cff4f] bg-[#7cff4f]/[0.04] border border-[#7cff4f]/15 px-4.5 py-1.5 rounded-full text-center"
      >
        {tag}
      </span>
    )}
    <h2 
      className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-wide text-center w-full"
    >
      {title}
    </h2>
    {subtitle && (
      <p 
        className="text-gray-500 max-w-3xl w-full mx-auto text-[14px] sm:text-[15px] font-medium leading-relaxed text-center"
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);

/* ─── Stat Item ─── */
const StatItem = ({ icon: Icon, value, label, delay, color = 'green' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -4, scale: 1.02 }}
    className={`flex flex-col items-center justify-center min-h-[140px] sm:min-h-[160px] py-5 sm:py-7 px-3 sm:px-4 gap-2.5 sm:gap-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-300 ${
      color === 'cyan'
        ? 'hover:border-[#00e5ff]/20 hover:shadow-[0_8px_30px_rgba(0,229,255,0.06)]'
        : 'hover:border-[#7cff4f]/20 hover:shadow-[0_8px_30px_rgba(124,255,79,0.06)]'
    }`}
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
      color === 'cyan'
        ? 'bg-[#00e5ff]/5 border border-[#00e5ff]/10 text-[#00e5ff]'
        : 'bg-[#7cff4f]/5 border border-[#7cff4f]/10 text-[#7cff4f]'
    }`}>
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">{value}</span>
    <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold leading-none">{label}</span>
  </motion.div>
);

export default function Home({ onLoginClick }) {
  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  return (
    <div className="relative overflow-hidden flex flex-col gap-4 sm:gap-6 lg:gap-8">
      {/* Ambient Background Lights */}
      <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00E5FF]/4 filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#7CFF4F]/3 filter blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[25%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#7CFF4F]/3 filter blur-[130px] pointer-events-none z-0" />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}stadium-bg.png`} alt="" className="w-full h-full object-cover" />
          <div className="hero-gradient absolute inset-0" />
        </div>

        {/* Light Streaks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="light-streak" />
          <div className="light-streak" />
          <div className="light-streak" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto pt-20 sm:pt-16 flex flex-col items-center justify-center gap-2.5 sm:gap-2.5 px-2">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7cff4f]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              USA · Mexico · Canada
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] sm:leading-[1.02] font-heading tracking-tighter"
          >
            FIFA WORLD CUP
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7CFF4F] via-[#00E5FF] to-[#7CFF4F] text-glow-green">
              2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm sm:text-lg max-w-5xl mx-auto leading-relaxed tracking-wide font-light text-center px-2"
          >
            A historic 48-nation spectacle spanning 16 iconic host cities and 104 matches, uniting the globe for the greatest show on earth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full flex justify-center"
          >
            <CountdownTimer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <Link to="/fixtures" className="btn-neon">
              <CalendarDays className="w-4 h-4" />
              View Fixtures
            </Link>
            <button onClick={onLoginClick} className="btn-outline">
              <Users className="w-4 h-4" />
              Sign In
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
            <div className="w-1 h-1 rounded-full bg-[#7cff4f]/80 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative z-10 w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[95%] xl:max-w-[90%] mx-auto">
          <SectionHeader
            tag="Tournament Overview"
            title="By the Numbers"
            subtitle="The historic scale of North America's first 48-nation showdown"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            <StatItem icon={Trophy} value="48" label="Nations" delay={0} color="green" />
            <StatItem icon={Map} value="3" label="Hosts" delay={0.04} color="cyan" />
            <StatItem icon={Globe} value="16" label="Cities" delay={0.08} color="green" />
            <StatItem icon={MapPin} value="16" label="Stadiums" delay={0.12} color="cyan" />
            <StatItem icon={CalendarDays} value="104" label="Matches" delay={0.16} color="green" />
            <StatItem icon={Users} value={tournamentStats.totalAttendance} label="Fans" delay={0.2} color="cyan" />
          </div>
        </div>
      </section>

      {/* ═══ TEAMS ═══ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative z-10 w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[95%] xl:max-w-[90%] mx-auto">
          <SectionHeader
            tag="Participating Nations"
            title="48 Teams, 12 Groups"
            subtitle="The ultimate grid of 48 giants battling across 12 groups for eternal glory"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3">
            {groups.map((group, gi) => {
              const groupTeams = teams.filter((t) => t.group === group);
              return (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.03, duration: 0.4 }}
                  className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-4 sm:p-6.5 hover:border-[#7cff4f]/25 hover:shadow-[0_12px_30px_-10px_rgba(124,255,79,0.06)] hover:bg-white/[0.03] transition-all duration-300"
                >
                  {/* Group Label */}
                  <div className="mb-5 pb-3.5 border-b border-white/[0.05] flex justify-center text-center">
                    <span className="text-[12px] font-black uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#7cff4f] to-[#00e5ff]">
                      GROUP {group}
                    </span>
                  </div>

                  {/* Teams */}
                  <div className="space-y-2">
                    {groupTeams.map((team) => (
                      <div
                        key={team.id}
                        className="flex items-center gap-3 px-3.5 py-3 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-[#7cff4f]/20 hover:bg-white/[0.03] hover:shadow-[0_4px_20px_-4px_rgba(124,255,79,0.03)] transition-all duration-300"
                      >
                        <Flag code={team.code} name={team.name} size="w-9.5 h-6.5" />
                        <span className="text-[14px] font-extrabold text-gray-200 flex-1 tracking-wide">
                          {team.name}
                        </span>
                        <span className="bg-white/[0.02] border border-white/[0.06] rounded px-2 py-0.5 text-[8.5px] font-black tracking-wider text-gray-500 uppercase">
                          {team.region}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ═══ CTA ═══ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative z-10 w-full flex flex-col items-center justify-center">
        <div className="max-w-5xl w-full mx-auto text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center w-full"
          >
            <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7cff4f]/10 to-[#00E5FF]/10 border border-[#7cff4f]/15 flex items-center justify-center">
              <Trophy className="w-7 h-7 text-[#7cff4f]/80 animate-float" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading mb-4 tracking-wide text-center w-full" style={{ textAlign: 'center' }}>
              Don&apos;t Miss a Moment
            </h2>
            <p className="text-gray-500 text-[14px] sm:text-[15px] mb-10 max-w-4xl leading-relaxed font-medium text-center">
              Bookmark your favorite match-ups, track qualified teams, and experience every historical kickoff live in North America.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/fixtures" className="btn-neon">
                Explore Fixtures
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
