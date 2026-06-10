import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import Fixtures from './pages/Fixtures';
import Favorites from './pages/Favorites';
import { auth, db, isFirebaseConfigured } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { initFlagService } from './utils/flagService';

export default function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [flagsLoaded, setFlagsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(70);

  // Sync loader completion
  useEffect(() => {
    if (flagsLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [flagsLoaded]);

  // Dynamically calculate navbar height using ResizeObserver
  useEffect(() => {
    if (!navbarRef.current) return;

    const updateHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.getBoundingClientRect().height);
      }
    };

    updateHeight();

    // Fallback for older mobile devices/browsers that do not support ResizeObserver
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateHeight);
      return () => {
        window.removeEventListener('resize', updateHeight);
      };
    }

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    
    resizeObserver.observe(navbarRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [flagsLoaded]);

  // Initialize Flag Service on mount
  useEffect(() => {
    initFlagService().then(() => {
      setFlagsLoaded(true);
    });
  }, []);

  // Sync auth state listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Fetch / Sync favorites with Firestore when user logs in/out
  useEffect(() => {
    if (!user) {
      const saved = localStorage.getItem('wc2026_favorites');
      if (saved) {
        try {
          setFavorites(JSON.parse(saved));
        } catch (e) {
          console.error('Failed to parse favorites', e);
        }
      } else {
        setFavorites([]);
      }
      return;
    }

    if (isFirebaseConfigured && db) {
      const fetchFirestoreFavorites = async () => {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (Array.isArray(data.favorites)) {
              setFavorites(data.favorites);
              localStorage.setItem('wc2026_favorites', JSON.stringify(data.favorites));
            }
          } else {
            const saved = localStorage.getItem('wc2026_favorites');
            let initialFavorites = [];
            if (saved) {
              try {
                initialFavorites = JSON.parse(saved);
              } catch (e) {
                console.error(e);
              }
            }
            await setDoc(docRef, { favorites: initialFavorites }, { merge: true });
            setFavorites(initialFavorites);
          }
        } catch (error) {
          console.error('Failed to load favorites from Firestore:', error);
        }
      };
      fetchFirestoreFavorites();
    }
  }, [user]);

  const handleToggleFavorite = async (fixtureId) => {
    let updated;
    if (favorites.includes(fixtureId)) {
      updated = favorites.filter((id) => id !== fixtureId);
    } else {
      updated = [...favorites, fixtureId];
    }
    setFavorites(updated);
    localStorage.setItem('wc2026_favorites', JSON.stringify(updated));

    if (user && isFirebaseConfigured && db) {
      try {
        const docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, { favorites: updated }, { merge: true });
      } catch (error) {
        console.error('Failed to sync favorites to Firestore:', error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-[#0A0E17] flex flex-col items-center justify-center gap-6 overflow-hidden"
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] rounded-full bg-[#00E5FF]/5 filter blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[30%] right-[20%] w-[350px] h-[350px] rounded-full bg-[#7CFF4F]/4 filter blur-[100px] pointer-events-none" />

          {/* Trophy Icon Container with Rotating Glow */}
          <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32">
            {/* Spinning Neon Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-[#7cff4f]/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="absolute inset-2 rounded-full border border-dashed border-[#00e5ff]/20"
            />
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute inset-4 rounded-full bg-gradient-to-br from-[#7cff4f]/10 to-[#00e5ff]/10 blur-md"
            />

            {/* Glowing Trophy */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
              className="relative z-10 text-white drop-shadow-[0_0_20px_rgba(124,255,79,0.3)]"
            >
              <Trophy size={44} className="text-[#7cff4f]" />
            </motion.div>
          </div>

          {/* Text & Progress */}
          <div className="flex flex-col items-center text-center px-4 gap-3 z-10">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl font-black tracking-[0.25em] text-white font-['Outfit'] uppercase"
            >
              FIFA World Cup 2026
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6 }}
              className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-gray-400 font-['Inter'] uppercase"
            >
              Initializing Arena...
            </motion.p>

            {/* Premium Loader Line */}
            <div className="w-40 sm:w-48 h-[2px] bg-white/[0.06] rounded-full overflow-hidden mt-2 relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#7cff4f] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="app-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen bg-[#0A0E17] text-white flex flex-col font-body selection:bg-neon-green selection:text-dark-bg w-full"
        >
          {/* Navbar Shell */}
          <Navbar
            ref={navbarRef}
            user={user}
            onLoginClick={() => setIsLoginOpen(true)}
            onLogout={handleLogout}
          />

          {/* Main Content Area */}
          <main className="flex-grow" style={{ paddingTop: location.pathname === '/' ? '0px' : `${navbarHeight + 32}px` }}>
            <Routes>
              <Route
                path="/"
                element={<Home onLoginClick={() => setIsLoginOpen(true)} />}
              />
              <Route
                path="/fixtures"
                element={
                  <Fixtures
                    favorites={favorites}
                    onToggleFavorite={handleToggleFavorite}
                  />
                }
              />
              <Route
                path="/favorites"
                element={
                  <Favorites
                    user={user}
                    favorites={favorites}
                    onToggleFavorite={handleToggleFavorite}
                    onLoginClick={() => setIsLoginOpen(true)}
                  />
                }
              />
            </Routes>
          </main>

          {/* Spacer for Footer Gap */}
          <div className="h-8 sm:h-12 lg:h-16 w-full pointer-events-none" />

          {/* Footer Shell */}
          <Footer />

          {/* Login Modal */}
          <LoginModal
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
            onLoginSuccess={(loggedInUser) => setUser(loggedInUser)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
