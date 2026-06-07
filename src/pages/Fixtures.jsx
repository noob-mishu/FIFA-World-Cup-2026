import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Filter, Zap } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import fixtures from "../data/fixtures";
import FixtureCard from "../components/FixtureCard";

const groupLabels = [
  "All",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "Final",
];

export default function Fixtures({ favorites = [], onToggleFavorite }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeGroup, setActiveGroup] = useState("All");
  const [search, setSearch] = useState("");

  // Sync active filter with URL query parameters
  useEffect(() => {
    const groupParam = searchParams.get("group");
    if (groupParam) {
      setActiveGroup(groupParam);
    } else {
      setActiveGroup("All");
    }
  }, [searchParams]);

  const handleGroupChange = (g) => {
    const params = new URLSearchParams(searchParams);
    if (g === "All") {
      params.delete("group");
    } else {
      params.set("group", g);
    }
    setSearchParams(params);
  };

  const [liveOnly, setLiveOnly] = useState(false);
  const [viewType, setViewType] = useState("date");

  const filtered = fixtures.filter((f) => {
    if (activeGroup === "All") {
      // Exclude knockout stage matches from general fixtures view
      if (f.group === "Final") return false;
    } else if (f.group !== activeGroup) {
      return false;
    }
    if (liveOnly && !f.isLive) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      if (
        !f.homeTeam.name.toLowerCase().includes(q) &&
        !f.awayTeam.name.toLowerCase().includes(q)
      )
        return false;
    }
    return true;
  });

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("group");
    setSearchParams(params);
    setSearch("");
    setLiveOnly(false);
  };

  const totalMatchesCount = activeGroup === "All"
    ? fixtures.filter((f) => f.group !== "Final").length
    : activeGroup === "Final"
    ? fixtures.filter((f) => f.group === "Final").length
    : fixtures.filter((f) => f.group === activeGroup).length;

  const groupedMatches = filtered.reduce((acc, f) => {
    if (!acc[f.group]) acc[f.group] = [];
    acc[f.group].push(f);
    return acc;
  }, {});

  const groupsOrder = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "Final",
  ];

  const matchesByDate = filtered.reduce((acc, f) => {
    if (!acc[f.date]) acc[f.date] = [];
    acc[f.date].push(f);
    return acc;
  }, {});

  const sortedDates = Object.keys(matchesByDate).sort(
    (a, b) => new Date(a) - new Date(b),
  );

  const formatDateHeader = (dateStr) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="relative min-h-screen pt-10 sm:pt-12 pb-28 px-4 sm:px-10 lg:px-16 overflow-hidden">
      {/* Ambient Background Lights */}
      <div className="absolute top-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#00E5FF]/4 filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#7CFF4F]/3 filter blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#7CFF4F]/3 filter blur-[130px] pointer-events-none z-0" />

      <div className="w-full relative z-10 flex flex-col gap-4">
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — Page Header
        ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-wide font-heading text-center w-full mb-4">
            {activeGroup === "Final" ? "Final Fixtures" : "Match Fixtures"}
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-medium text-center max-w-2xl leading-relaxed">
            {activeGroup === "Final"
              ? "Track all 32 elite knockout stage matches from the Round of 32 to the World Cup Final"
              : "Your complete interactive calendar for all 72 legendary group stage matches across 16 host cities"}
          </p>
        </motion.div>


        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3 — Search Bar + Live Toggle
        ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="w-full"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
            <div className="flex-1 flex items-center bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/15 focus-within:border-[#7cff4f]/40 rounded-full px-4 sm:px-6 py-3.5 sm:py-5.5 focus-within:ring-1 focus-within:ring-[#7cff4f]/20 transition-all duration-300 group">
              <Search className="w-6 h-6 text-gray-400 group-focus-within:text-[#7cff4f] transition-colors duration-300 pointer-events-none shrink-0 mr-3 sm:mr-4" />
              <input
                type="text"
                placeholder="Search teams..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-white placeholder-gray-500 text-base sm:text-lg focus:outline-none border-none p-0"
              />
            </div>

            <button
              onClick={() => setLiveOnly(!liveOnly)}
              className={`flex items-center gap-2.5 px-5 sm:px-8 py-3.5 sm:py-5.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider border transition-all duration-300 shrink-0 cursor-pointer w-full sm:w-auto justify-center ${
                liveOnly
                  ? "bg-red-500/10 border-red-500/35 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                  : "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:border-white/15"
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  liveOnly
                    ? "bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"
                    : "bg-gray-500"
                }`}
              />
              <Zap className="w-4 h-4" />
              Live
            </button>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4 — Group Filter Pills
        ═══════════════════════════════════════════════════════════════ */}
        {activeGroup !== "Final" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <div className="grid grid-cols-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-2.5 w-full">
              {groupLabels.map((g) => (
                <button
                  key={g}
                  onClick={() => handleGroupChange(g)}
                  className={`w-full sm:w-20 py-3 rounded-xl text-[10px] sm:text-xs font-black border transition-all duration-300 cursor-pointer flex items-center justify-center text-center ${
                    activeGroup === g
                      ? "bg-[#7cff4f]/15 border-[#7cff4f]/35 text-[#7cff4f] shadow-[0_0_16px_rgba(124,255,79,0.08)]"
                      : "bg-white/[0.02] border-white/[0.05] text-gray-500 hover:text-gray-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
                  }`}
                >
                  {g === "All" ? "All" : g === "Final" ? "Final" : `Group ${g}`}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5 — Results Counter + Section Title
        ═══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pb-4 border-b border-white/[0.06]">
          <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight">
            {activeGroup === "Final"
              ? "FIFA World Cup 2026 Knockout stage fixtures"
              : viewType === "date"
              ? "FIFA World Cup 2026 Group Stage fixtures"
              : "Fixtures by Group"}
          </h2>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-400 font-semibold">
              Showing{" "}
              <span className="text-[#7cff4f] font-bold">
                {filtered.length}
              </span>{" "}
              of {totalMatchesCount} matches
            </p>
            {(activeGroup !== "All" || search || liveOnly) && (
              <button
                onClick={clearFilters}
                className="text-xs font-extrabold uppercase tracking-wider text-gray-500 hover:text-[#7cff4f] transition-colors cursor-pointer border border-white/[0.06] hover:border-[#7cff4f]/30 px-3.5 py-1.5 rounded-lg"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 6 — Match Grid Views
        ═══════════════════════════════════════════════════════════════ */}
        {filtered.length > 0 ? (
          viewType === "date" ? (
            <div className="flex flex-col gap-8">
              {sortedDates.map((dateStr, idx) => {
                const dateFixtures = matchesByDate[dateStr] || [];
                
                // Show stage title above date when viewing knockout stage matches
                const currentStage = dateFixtures[0]?.stage;
                const prevStage = idx > 0 ? (matchesByDate[sortedDates[idx - 1]]?.[0]?.stage) : null;
                const showStageHeader = activeGroup === "Final" && currentStage !== prevStage;

                const stageTitles = {
                  "Round of 32": "FIFA World Cup 2026 – Round of 32 fixtures",
                  "Round of 16": "FIFA World Cup 2026 Round of 16 fixtures",
                  "Quarter-final": "FIFA World Cup 2026 quarter-final fixtures",
                  "Semi-final": "FIFA World Cup 2026 semi-final fixtures",
                  "Bronze Final": "FIFA World Cup 2026 bronze final",
                  "Final": "FIFA World Cup 2026 Final"
                };

                return (
                  <div key={dateStr} className="flex flex-col gap-6">
                    {showStageHeader && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="pt-6 pb-2 flex flex-col items-center justify-center w-full"
                      >
                        <h2 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7cff4f] to-[#00e5ff] uppercase tracking-wider text-center">
                          {stageTitles[currentStage] || currentStage}
                        </h2>
                        {/* Short Decorative Border Line */}
                        <div className="w-24 h-[2px] bg-gradient-to-r from-[#7cff4f] to-[#00e5ff] rounded-full mt-2" />
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex flex-col"
                    >
                      {/* Date Header */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-3 mb-6 sm:mb-8 border-b border-white/[0.06]">
                        <div className="w-8 h-8 rounded-lg bg-[#7cff4f]/10 border border-[#7cff4f]/20 flex items-center justify-center shrink-0">
                          <Calendar className="w-4 h-4 text-[#7cff4f]" />
                        </div>
                        <h3 className="text-sm sm:text-lg font-black text-white uppercase tracking-wider">
                          {formatDateHeader(dateStr)}
                        </h3>
                        <span className="text-xs font-bold text-gray-500 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-lg">
                          {dateFixtures.length}{" "}
                          {dateFixtures.length === 1 ? "match" : "matches"}
                        </span>
                      </div>

                      {/* Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {dateFixtures.map((fixture) => (
                          <FixtureCard
                            key={fixture.id}
                            fixture={fixture}
                            isFavorite={favorites.includes(fixture.id)}
                            onToggleFavorite={() =>
                              onToggleFavorite?.(fixture.id)
                            }
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {groupsOrder.map((gName) => {
                const groupFixtures = groupedMatches[gName] || [];
                if (groupFixtures.length === 0) return null;

                if (gName === "Final") {
                  const stagesOrder = [
                    "Round of 32",
                    "Round of 16",
                    "Quarter-final",
                    "Semi-final",
                    "Bronze Final",
                    "Final"
                  ];
                  const stageTitles = {
                    "Round of 32": "FIFA World Cup 2026 – Round of 32 fixtures",
                    "Round of 16": "FIFA World Cup 2026 Round of 16 fixtures",
                    "Quarter-final": "FIFA World Cup 2026 quarter-final fixtures",
                    "Semi-final": "FIFA World Cup 2026 semi-final fixtures",
                    "Bronze Final": "FIFA World Cup 2026 bronze final",
                    "Final": "FIFA World Cup 2026 Final"
                  };

                  return (
                    <div key="knockouts-wrapper" className="flex flex-col gap-12 w-full">
                      {stagesOrder.map((stageName) => {
                        const stageFixtures = groupFixtures.filter((f) => f.stage === stageName);
                        if (stageFixtures.length === 0) return null;

                        return (
                          <motion.div
                            key={stageName}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col"
                          >
                            {/* Stage Header */}
                            <div className="flex flex-col items-center justify-center gap-3 pb-3 mb-8 w-full text-center">
                              <div className="flex items-center justify-center gap-3">
                                <h3 className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7cff4f] to-[#00e5ff] uppercase tracking-wider text-center">
                                  {stageTitles[stageName] || stageName}
                                </h3>
                                <span className="text-xs font-bold text-gray-500 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-lg">
                                  {stageFixtures.length} {stageFixtures.length === 1 ? "match" : "matches"}
                                </span>
                              </div>
                              {/* Short Decorative Border Line */}
                              <div className="w-24 h-[2px] bg-gradient-to-r from-[#7cff4f] to-[#00e5ff] rounded-full mt-1.5" />
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                              {stageFixtures.map((fixture) => (
                                <FixtureCard
                                  key={fixture.id}
                                  fixture={fixture}
                                  isFavorite={favorites.includes(fixture.id)}
                                  onToggleFavorite={() =>
                                    onToggleFavorite?.(fixture.id)
                                  }
                                />
                              ))}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  );
                }

                return (
                  <motion.div
                    key={gName}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-3 pb-3 mb-8 border-b border-white/[0.06]">
                      <h3 className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7cff4f] to-[#00e5ff] uppercase tracking-wider">
                        {gName === "Final" ? "Final Match" : `Group ${gName}`}
                      </h3>
                      <span className="text-xs font-bold text-gray-500 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-lg">
                        {groupFixtures.length} matches
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {groupFixtures.map((fixture) => (
                        <FixtureCard
                          key={fixture.id}
                          fixture={fixture}
                          isFavorite={favorites.includes(fixture.id)}
                          onToggleFavorite={() =>
                            onToggleFavorite?.(fixture.id)
                          }
                        />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-28"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              No matches found
            </h3>
            <p className="text-sm text-gray-500 mb-8 max-w-xs text-center font-medium leading-relaxed">
              Adjust your filters or search to find matches
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 rounded-xl bg-[#7cff4f]/10 border border-[#7cff4f]/20 text-[#7cff4f] text-xs font-extrabold uppercase tracking-wider hover:bg-[#7cff4f]/15 transition-colors cursor-pointer"
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
