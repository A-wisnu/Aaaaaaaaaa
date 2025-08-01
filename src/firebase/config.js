import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuXuNt_rMFNzcQUZAO7yl222gt9AWcz5E",
  authDomain: "forum-uninu.firebaseapp.com",
  databaseURL: "https://forum-uninu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "forum-uninu",
  storageBucket: "forum-uninu.firebasestorage.app",
  messagingSenderId: "1061540367934",
  appId: "1:1061540367934:web:e56a55dbb9a1207118cb6f",
  measurementId: "G-SRY1JCJLR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Configure Google Auth Provider
googleProvider.setCustomParameters({
  prompt: 'select_account',
  // Tambahan parameter untuk memastikan pop-up berjalan dengan baik
  access_type: 'offline',
  include_granted_scopes: true
});

// Tambahkan scopes yang diperlukan
googleProvider.addScope('email');
googleProvider.addScope('profile');

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Export auth methods untuk debugging
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    console.error('Firebase Auth Error:', error);
    throw error;
  }
};

export default app;