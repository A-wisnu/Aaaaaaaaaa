import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Konfigurasi Firebase dari user
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
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics
export const analytics = getAnalytics(app);

export default app;