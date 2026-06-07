import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Lock } from 'lucide-react';
import fixtures from '../data/fixtures';
import teams from '../data/teams';
import FixtureCard from '../components/FixtureCard';
import { getFlagUrl } from '../utils/flagService';

const tabs = [
  { id: 'matches', label: 'Favorite Matches', icon: Heart },
  { id: 'teams', label: 'Tracked Teams', icon: Star },
];

export default function Favorites({ user, favorites, onToggleFavorite, onLoginClick }) {
  const [activeTab, setActiveTab] = useState('matches');
  const favoriteFixtures = fixtures.filter((f) => favorites.includes(f.id));

  return (
    <section className="relative min-h-screen pt-10 sm:pt-12 pb-24 px-4 sm:px-10 lg:px-16 overflow-hidden">
      {/* Ambient Background Lights */}
      <div className="absolute top-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#00E5FF]/4 filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#7CFF4F]/3 filter blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#7CFF4F]/3 filter blur-[130px] pointer-events-none z-0" />

      <div className="w-full relative z-10 flex flex-col gap-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex flex-col items-center justify-center text-center"
        >
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-wide font-heading text-center w-full"
            style={{ textAlign: 'center', marginBottom: '12px' }}
          >
            Favorites
          </h1>
          <p 
            className="text-gray-500 text-[14px] sm:text-[15px] font-medium text-center"
            style={{ textAlign: 'center' }}
          >
            Your personalized arena tracker for match alerts and team statistics
          </p>
        </motion.div>

        {/* Login Prompt */}
        {!user && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5 backdrop-blur-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-amber-400" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white mb-0.5">Sign in to save your favorites</p>
                <p className="text-xs text-gray-500 font-semibold">Sync your selections to the cloud and access them on any device</p>
              </div>
            </div>
            <button
              onClick={onLoginClick}
              className="px-5.5 py-2.5 rounded-xl bg-[#7cff4f]/10 border border-[#7cff4f]/25 text-[#7cff4f] text-xs font-extrabold uppercase tracking-wider hover:bg-[#7cff4f]/20 transition-all shrink-0 cursor-pointer"
            >
              Sign In
            </button>
          </motion.div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-4 border-b border-white/[0.04]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#7cff4f] text-[#0A0E17] border-transparent shadow-lg shadow-[#7cff4f]/15'
                  : 'bg-white/[0.02] border-white/[0.05] text-gray-500 hover:text-gray-300 hover:border-white/[0.12]'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ─── Matches Tab ─── */}
        {activeTab === 'matches' && (
          <>
            {favoriteFixtures.length > 0 ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
                }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {favoriteFixtures.map((fixture) => (
                  <motion.div
                    key={fixture.id}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <FixtureCard
                      fixture={fixture}
                      isFavorite={true}
                      onToggleFavorite={() => onToggleFavorite?.(fixture.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-28">
                <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mb-5">
                  <Heart className="w-7 h-7 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">No favorites yet</h3>
                <p className="text-sm text-gray-500 max-w-xs text-center font-medium">
                  Browse the fixtures page and save matches you want to track
                </p>
              </div>
            )}
          </>
        )}

        {/* ─── Teams Tab ─── */}
        {activeTab === 'teams' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5"
          >
            {teams.map((team) => {
              const flagUrl = getFlagUrl(team.code);
              return (
                <motion.div
                  key={team.id}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -3 }}
                  className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-4 cursor-default hover:border-[#7cff4f]/25 hover:bg-white/[0.03] hover:shadow-[0_8px_25px_-8px_rgba(124,255,79,0.05)] transition-all duration-300"
                >
                  {flagUrl ? (
                    <img
                      src={flagUrl}
                      alt={`${team.name} flag`}
                      className="w-14 h-9 object-cover rounded-none shadow-sm border border-white/10"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : (
                    <div className="w-14 h-9 rounded-none bg-white/10 border border-white/10" />
                  )}
                  <span className="text-[13px] font-bold text-white text-center leading-tight truncate w-full px-1">
                    {team.name}
                  </span>
                  <span className="bg-white/[0.03] border border-white/[0.06] rounded px-2 py-0.5 text-[8px] font-black uppercase tracking-wider text-gray-500">
                    Group {team.group}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
