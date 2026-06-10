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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-[#0A0E17] flex flex-col items-center justify-center gap-4"
        >
          {/* Load circle turning */}
          <div className="w-10 h-10 rounded-full border-4 border-white/10 border-t-[#7cff4f] animate-spin" />
          
          {/* Loading text */}
          <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-gray-400 font-['Inter'] uppercase mt-2">
            Loading tournament data...
          </span>
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
