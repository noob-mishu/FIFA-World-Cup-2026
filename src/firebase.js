import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Vite environments
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Check if config exists and isn't just placeholder text
export const isFirebaseConfigured = !!(
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== 'YOUR_API_KEY' &&
  firebaseConfig.projectId
);

let app;
let realAuth;
let realDb;
const googleProvider = new GoogleAuthProvider();

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    realAuth = getAuth(app);
    realDb = getFirestore(app);
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

// Custom mock storage for fallback authentication listeners
let currentMockUser = null;
const mockListeners = new Set();

// Unified auth export that acts as an adapter
export const auth = {
  onAuthStateChanged(callback) {
    if (isFirebaseConfigured && realAuth) {
      return realAuth.onAuthStateChanged(callback);
    } else {
      mockListeners.add(callback);
      // Execute callback asynchronously to mimic firebase behavior
      setTimeout(() => callback(currentMockUser), 0);
      return () => mockListeners.delete(callback);
    }
  },
  async signOut() {
    if (isFirebaseConfigured && realAuth) {
      return fbSignOut(realAuth);
    } else {
      currentMockUser = null;
      mockListeners.forEach((fn) => fn(null));
    }
  },
};

export const db = isFirebaseConfigured ? realDb : null;

// Helper to sign in with Google
export async function signInWithGoogle() {
  if (isFirebaseConfigured && realAuth) {
    try {
      const result = await signInWithPopup(realAuth, googleProvider);
      return result.user;
    } catch (error) {
      console.error('Firebase sign in error:', error);
      throw error;
    }
  } else {
    // Fallback Mock Sign In
    currentMockUser = {
      uid: 'mock-user-001',
      displayName: 'Football Fan',
      email: 'fan@wc2026.com',
      photoURL: null,
    };
    mockListeners.forEach((fn) => fn(currentMockUser));
    return currentMockUser;
  }
}

// Helper for Real/Mock Email sign up
export async function signUpWithEmail(email, password) {
  if (isFirebaseConfigured && realAuth) {
    try {
      const result = await createUserWithEmailAndPassword(realAuth, email, password);
      const displayName = email.split('@')[0];
      await updateProfile(result.user, { displayName });
      return result.user;
    } catch (error) {
      console.error('Firebase sign up error:', error);
      throw error;
    }
  } else {
    // Mock Signup using localStorage for persistent credentials during practice
    const users = JSON.parse(localStorage.getItem('wc2026_mock_users') || '{}');
    if (users[email.toLowerCase()]) {
      const err = new Error('Email already in use');
      err.code = 'auth/email-already-in-use';
      throw err;
    }
    const newUser = {
      uid: 'mock-user-' + Math.floor(Math.random() * 100000),
      displayName: email.split('@')[0],
      email: email,
      photoURL: null,
    };
    users[email.toLowerCase()] = { ...newUser, password };
    localStorage.setItem('wc2026_mock_users', JSON.stringify(users));

    currentMockUser = newUser;
    mockListeners.forEach((fn) => fn(currentMockUser));
    return currentMockUser;
  }
}

// Helper for Real/Mock Email sign in
export async function signInWithEmail(email, password) {
  if (isFirebaseConfigured && realAuth) {
    try {
      const result = await signInWithEmailAndPassword(realAuth, email, password);
      return result.user;
    } catch (error) {
      console.error('Firebase sign in error:', error);
      throw error;
    }
  } else {
    // Mock Signin checking localStorage
    const users = JSON.parse(localStorage.getItem('wc2026_mock_users') || '{}');
    const existing = users[email.toLowerCase()];
    if (!existing) {
      const err = new Error('User not found');
      err.code = 'auth/user-not-found';
      throw err;
    }
    if (existing.password !== password) {
      const err = new Error('Incorrect password');
      err.code = 'auth/wrong-password';
      throw err;
    }
    currentMockUser = {
      uid: existing.uid,
      displayName: existing.displayName,
      email: existing.email,
      photoURL: existing.photoURL,
    };
    mockListeners.forEach((fn) => fn(currentMockUser));
    return currentMockUser;
  }
}

