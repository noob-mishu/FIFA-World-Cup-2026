import { useState, useEffect, forwardRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, User, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Fixtures', to: '/fixtures' },
  { label: 'Final Fixtures', to: '/fixtures?group=Final' },
  { label: 'Favorites', to: '/favorites' },
];

const Navbar = forwardRef(function Navbar({ user, onLoginClick, onLogout }, ref) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const getLinkClass = (to) => {
    let active = false;
    if (to === '/') {
      active = location.pathname === '/';
    } else if (to === '/fixtures?group=Final') {
      active = location.pathname === '/fixtures' && location.search === '?group=Final';
    } else if (to === '/fixtures') {
      active = location.pathname === '/fixtures' && location.search !== '?group=Final';
    } else {
      active = location.pathname === to;
    }

    return `relative text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 py-2 px-4.5 rounded-full border whitespace-nowrap ${
      active
        ? 'text-[#7cff4f] bg-[#7cff4f]/[0.08] border-[#7cff4f]/20 shadow-[0_0_15px_rgba(124,255,79,0.06)]'
        : 'text-gray-400 border-transparent hover:text-white hover:bg-white/[0.02] hover:border-white/[0.04]'
    }`;
  };

  return (
    <>
      {/* ─── Top Bar ─── */}
      <nav
        ref={ref}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0E17]/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-[#0A0E17]/40 backdrop-blur-md border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center md:grid md:grid-cols-3 px-6 sm:px-10 lg:px-16 py-4 w-full">
          {/* ── Logo ── */}
          <div className="flex justify-start items-center">
            <NavLink to="/" className="flex items-center gap-2 group whitespace-nowrap">
              <motion.div
                animate={{ 
                  y: [0, -3, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 15,
                  filter: "drop-shadow(0 0 8px rgba(124, 255, 79, 0.6))"
                }}
                className="text-[#7cff4f] flex items-center justify-center"
              >
                <Trophy className="w-6 h-6" />
              </motion.div>
              <span className="text-lg font-bold text-white tracking-tight whitespace-nowrap">
                FIFA WC <span className="text-[#7cff4f]">2026</span>
              </span>
            </NavLink>
          </div>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex justify-center items-center">
            <ul className="flex items-center gap-8">
              {links.map((l) => (
                <li key={l.to + l.label}>
                  <NavLink to={l.to} className={getLinkClass(l.to)}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right Section ── */}
          <div className="flex justify-end items-center">
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-4.5 h-4.5 rounded-full border border-white/20"
                      />
                    ) : (
                      <div className="w-4.5 h-4.5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                        <span className="text-[9px] font-bold text-gray-300">
                          {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                        </span>
                      </div>
                    )}
                    <span className="text-xs font-bold text-gray-300 max-w-[120px] truncate">
                      {user.displayName || 'User'}
                    </span>
                  </div>
                  <button
                    onClick={onLogout}
                    className="px-5 py-2 text-xs font-bold rounded-full bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition-all duration-200 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <button
                    onClick={onLoginClick}
                    className="w-28 py-2.5 text-sm font-bold rounded-full bg-[#7cff4f]/10 text-[#7cff4f] border border-[#7cff4f]/30 hover:bg-[#7cff4f]/20 transition-all duration-200 cursor-pointer flex items-center justify-center"
                  >
                    Login
                  </button>
                </>
              )}
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative z-50 text-white p-2 -mr-2 rounded-xl hover:bg-white/[0.06] active:bg-white/[0.1] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Overlay ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0A0E17]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to + l.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.07 }}
              >
                <NavLink
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className={() => {
                    let active = false;
                    if (l.to === '/') {
                      active = location.pathname === '/';
                    } else if (l.to === '/fixtures?group=Final') {
                      active = location.pathname === '/fixtures' && location.search === '?group=Final';
                    } else if (l.to === '/fixtures') {
                      active = location.pathname === '/fixtures' && location.search !== '?group=Final';
                    } else {
                      active = location.pathname === l.to;
                    }
                    return `text-3xl font-bold tracking-tight transition-colors whitespace-nowrap ${
                      active ? 'text-[#7cff4f]' : 'text-white hover:text-[#7cff4f]'
                    }`;
                  }}
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}

            {user ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: links.length * 0.07 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName} className="w-7 h-7 rounded-full border border-white/20" />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-300">
                        {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                      </span>
                    </div>
                  )}
                  <span className="text-base font-semibold text-white">{user.displayName || 'User'}</span>
                </div>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onLogout();
                  }}
                  className="px-8 py-3 text-base font-semibold rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition-all cursor-pointer"
                >
                  Logout
                </button>
              </motion.div>
            ) : (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: links.length * 0.07 }}
                onClick={() => {
                  setMenuOpen(false);
                  onLoginClick?.();
                }}
                className="mt-4 px-8 py-3 text-base font-semibold rounded-xl bg-[#7cff4f]/10 text-[#7cff4f] border border-[#7cff4f]/30 hover:bg-[#7cff4f]/20 transition-all cursor-pointer"
              >
                Login
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default Navbar;
