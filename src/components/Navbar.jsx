import { useState, useEffect, forwardRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X, Zap, Calendar, Star, BarChart3, Users, Music, Crown, Heart } from 'lucide-react';

const pageLinks = [
  { label: 'Fixtures', to: '/fixtures', icon: Calendar },
  { label: 'Finals', to: '/fixtures?group=Final', icon: Zap },
  { label: 'Favorites', to: '/favorites', icon: Heart },
];

const sectionLinks = [
  { label: 'Home', id: 'hero', icon: Star },
  { label: 'Stats', id: 'stats', icon: BarChart3 },
  { label: 'Teams', id: 'teams', icon: Users },
  { label: 'Anthems', id: 'anthems', icon: Music },
  { label: 'Legends', id: 'legends', icon: Crown },
  { label: 'Fans', id: 'fan-moments', icon: Heart },
];

const Navbar = forwardRef(function Navbar({ user, onLoginClick, onLogout }, ref) {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver on the home page
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = sectionLinks.map((s) => s.id);
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        });
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage, location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    if (!isHomePage) {
      navigate('/');
      // After navigating, scroll after a brief delay to let the page mount
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPageLinkClass = (to) => {
    let active = false;
    if (to === '/fixtures?group=Final') {
      active = location.pathname === '/fixtures' && location.search === '?group=Final';
    } else if (to === '/fixtures') {
      active = location.pathname === '/fixtures' && location.search !== '?group=Final';
    } else {
      active = location.pathname === to;
    }

    return `nav-link-item ${active ? 'nav-link-active' : ''}`;
  };

  return (
    <>
      {/* ─── Top Bar ─── */}
      <nav
        ref={ref}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'nav-scrolled'
            : 'nav-transparent'
        }`}
      >
        {/* Animated gradient border at bottom */}
        <div className="nav-glow-border" />

        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4 sm:py-5 w-full">
          
          {/* ── Section Links (Home page sections) ── */}
          <div className="hidden lg:flex items-center gap-1.5">
            {sectionLinks.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`nav-section-link ${
                  isHomePage && activeSection === s.id ? 'nav-section-active' : ''
                }`}
              >
                <s.icon className="w-3.5 h-3.5" />
                {s.label}
              </button>
            ))}
          </div>

          {/* ── Page Links (center on desktop) ── */}
          <div className="hidden md:flex items-center gap-1">
            {pageLinks.map((l) => (
              <NavLink key={l.to + l.label} to={l.to} className={getPageLinkClass(l.to)}>
                <l.icon className="w-3.5 h-3.5" />
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* ── Right Section: Auth ── */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="nav-user-badge">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-6 h-6 rounded-full border border-white/20"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7cff4f]/20 to-[#00e5ff]/20 border border-white/10 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-gray-200">
                          {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                        </span>
                      </div>
                    )}
                    <span className="text-xs font-semibold text-gray-300 max-w-[100px] truncate">
                      {user.displayName || 'User'}
                    </span>
                  </div>
                  <button
                    onClick={onLogout}
                    className="nav-btn-logout"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="nav-btn-login"
                >
                  <Zap className="w-3.5 h-3.5" />
                  Sign In
                </button>
              )}
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative z-50 text-white p-2.5 -mr-1 rounded-xl hover:bg-white/[0.06] active:bg-white/[0.1] transition-colors"
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
            className="fixed inset-0 z-40 bg-[#0A0E17]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-3"
          >
            {/* Section Links */}
            <div className="mb-4 flex flex-col items-center gap-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-2">Sections</span>
              {sectionLinks.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    setMenuOpen(false);
                    scrollToSection(s.id);
                  }}
                  className={`flex items-center gap-3 text-lg font-bold tracking-tight transition-colors whitespace-nowrap px-6 py-2.5 rounded-xl ${
                    isHomePage && activeSection === s.id
                      ? 'text-[#7cff4f] bg-[#7cff4f]/[0.06]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </motion.button>
              ))}
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

            {/* Page Links */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-2">Pages</span>
              {pageLinks.map((l, i) => (
                <motion.div
                  key={l.to + l.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: (sectionLinks.length + i) * 0.05 }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className={() => {
                      let active = false;
                      if (l.to === '/fixtures?group=Final') {
                        active = location.pathname === '/fixtures' && location.search === '?group=Final';
                      } else if (l.to === '/fixtures') {
                        active = location.pathname === '/fixtures' && location.search !== '?group=Final';
                      } else {
                        active = location.pathname === l.to;
                      }
                      return `flex items-center gap-3 text-lg font-bold tracking-tight transition-colors whitespace-nowrap px-6 py-2.5 rounded-xl ${
                        active ? 'text-[#00e5ff] bg-[#00e5ff]/[0.06]' : 'text-gray-400 hover:text-white'
                      }`;
                    }}
                  >
                    <l.icon className="w-4 h-4" />
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Auth */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />
            {user ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: (sectionLinks.length + pageLinks.length) * 0.05 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
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
                transition={{ delay: (sectionLinks.length + pageLinks.length) * 0.05 }}
                onClick={() => {
                  setMenuOpen(false);
                  onLoginClick?.();
                }}
                className="mt-2 px-8 py-3 text-base font-semibold rounded-xl bg-[#7cff4f]/10 text-[#7cff4f] border border-[#7cff4f]/30 hover:bg-[#7cff4f]/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Sign In
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default Navbar;
