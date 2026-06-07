import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff, Trophy, ArrowRight, UserPlus } from 'lucide-react';
import { signInWithGoogle, signInWithEmail, signUpWithEmail } from '../firebase';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const user = await signInWithGoogle();
      onLoginSuccess?.(user);
      onClose();
    } catch (err) {
      console.error('Google Sign In failed:', err);
      setError('Google Sign In failed.');
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      let user;
      if (isRegister) {
        user = await signUpWithEmail(email, password);
      } else {
        user = await signInWithEmail(email, password);
      }
      onLoginSuccess?.(user);
      onClose();
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Authentication error:', err);
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else if (err.code === 'auth/user-not-found') {
        setError('No account found with this email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address format.');
      } else {
        setError(err.message || 'Authentication failed.');
      }
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsRegister(!isRegister);
    setError('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        /* ── Backdrop ── */
        <motion.div
          key="login-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-xl px-4 py-8 overflow-y-auto"
        >
          {/* ── Card ── */}
          <motion.div
            key="login-card"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[420px] bg-[#0C1120] border border-white/[0.08] rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            {/* ─ Subtle top accent line ─ */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#7cff4f]/40 to-transparent" />

            {/* ─ Close button ─ */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-white hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* ─ Content ─ */}
            <div className="px-8 sm:px-10 pt-10 pb-8">

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#7cff4f]/[0.08] border border-[#7cff4f]/20 mb-5"
                >
                  <Trophy className="w-5.5 h-5.5 text-[#7cff4f]" />
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isRegister ? 'register' : 'login'}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-xl font-bold text-white tracking-tight mb-1.5">
                      {isRegister ? 'Create your account' : 'Welcome back'}
                    </h2>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {isRegister
                        ? 'Sign up to track fixtures & bookmark matches'
                        : 'Sign in to your FIFA WC 2026 dashboard'
                      }
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Google Sign-in — primary social option */}
              <motion.button
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                whileTap={{ scale: 0.985 }}
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 py-3 bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] rounded-xl text-sm font-semibold text-gray-300 transition-all duration-200 cursor-pointer mb-6"
              >
                <GoogleLogo />
                <span>Continue with Google</span>
              </motion.button>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-white/[0.06] flex-1" />
                <span className="text-[11px] text-gray-600 uppercase tracking-[0.15em] font-semibold select-none">
                  or continue with email
                </span>
                <div className="h-px bg-white/[0.06] flex-1" />
              </div>

              {/* Email Form */}
              <form onSubmit={handleEmailSubmit} className="space-y-3.5">
                {/* Email field */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 ml-0.5">
                    Email address
                  </label>
                  <div
                    className={`flex items-center border rounded-xl px-3.5 py-3 transition-all duration-200 ${
                      emailFocused
                        ? 'border-[#7cff4f]/30 bg-[#7cff4f]/[0.02]'
                        : 'border-white/[0.07] bg-white/[0.015] hover:border-white/[0.12]'
                    }`}
                  >
                    <Mail className={`w-4 h-4 mr-3 shrink-0 transition-colors duration-200 ${
                      emailFocused ? 'text-[#7cff4f]/70' : 'text-gray-600'
                    }`} />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onFocus={() => setEmailFocused(true)}
                      onBlur={() => setEmailFocused(false)}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-sm text-white placeholder-gray-600 focus:outline-none border-none p-0 focus:ring-0"
                      required
                    />
                  </div>
                </div>

                {/* Password field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5 ml-0.5">
                    <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                      Password
                    </label>
                    {!isRegister && (
                      <button
                        type="button"
                        onClick={() => setError('Password reset link sent to your email (demo).')}
                        className="text-[11px] text-gray-600 hover:text-[#7cff4f] transition-colors font-medium cursor-pointer"
                      >
                        Forgot?
                      </button>
                    )}
                  </div>
                  <div
                    className={`flex items-center border rounded-xl px-3.5 py-3 transition-all duration-200 ${
                      passwordFocused
                        ? 'border-[#7cff4f]/30 bg-[#7cff4f]/[0.02]'
                        : 'border-white/[0.07] bg-white/[0.015] hover:border-white/[0.12]'
                    }`}
                  >
                    <Lock className={`w-4 h-4 mr-3 shrink-0 transition-colors duration-200 ${
                      passwordFocused ? 'text-[#7cff4f]/70' : 'text-gray-600'
                    }`} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder={isRegister ? 'Min. 6 characters' : '••••••••'}
                      value={password}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent text-sm text-white placeholder-gray-600 focus:outline-none border-none p-0 focus:ring-0 pr-8"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="shrink-0 text-gray-600 hover:text-gray-400 transition-colors cursor-pointer p-0.5"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="text-[12px] text-red-400/90 font-medium text-center py-2 px-3 rounded-lg bg-red-500/[0.06] border border-red-500/[0.1]">
                        {error}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.005, boxShadow: '0 0 20px rgba(124,255,79,0.18)' }}
                  whileTap={{ scale: 0.995 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-[#7CFF4F] to-[#5BC438] text-[#0A0E17] font-bold text-sm tracking-wide rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-4.5 h-4.5 border-2 border-[#0A0E17]/20 border-t-[#0A0E17] rounded-full animate-spin" />
                  ) : (
                    <>
                      {isRegister ? 'Create Account' : 'Sign In'}
                      {isRegister ? <UserPlus className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </>
                  )}
                </motion.button>
              </form>

              {/* Mode switch */}
              <div className="text-center mt-6 pt-5 border-t border-white/[0.04]">
                <button
                  type="button"
                  onClick={switchMode}
                  className="text-[13px] text-gray-500 hover:text-gray-300 font-medium transition-colors cursor-pointer"
                >
                  {isRegister ? (
                    <>Already have an account? <span className="text-[#7cff4f] font-semibold">Sign in</span></>
                  ) : (
                    <>Don&apos;t have an account? <span className="text-[#7cff4f] font-semibold">Create one</span></>
                  )}
                </button>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
