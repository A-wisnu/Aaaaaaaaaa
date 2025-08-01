import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';

export default function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleGoogleLogin() {
    try {
      setError('');
      setLoading(true);
      
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      console.log('Login successful:', user);
      
      // Simpan user info ke localStorage untuk persistence
      localStorage.setItem('user', JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      }));
      
      // Redirect ke halaman services
      navigate('/services');
      
    } catch (error) {
      console.error('Login error:', error);
      
      // Handle specific error codes
      let errorMessage = 'Login gagal. Silakan coba lagi.';
      
      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Login dibatalkan. Silakan coba lagi.';
      } else if (error.code === 'auth/popup-blocked') {
        errorMessage = 'Pop-up diblokir browser. Mohon izinkan pop-up dan coba lagi.';
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage = 'Koneksi internet bermasalah. Periksa koneksi Anda.';
      } else if (error.code === 'auth/unauthorized-domain') {
        errorMessage = 'Domain tidak diizinkan. Hubungi administrator.';
      }
      
      setError(errorMessage);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-hero flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-pulse float-delayed"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-32 left-32 w-8 h-8 text-white/40 animate-bounce float" />
        <Sparkles className="absolute bottom-32 right-32 w-6 h-6 text-white/30 animate-bounce float-delayed" />
      </div>

      <div className="relative z-10 max-w-md w-full space-y-8">
        {/* Back Button */}
        <div className="flex justify-start">
          <Link 
            to="/" 
            className="flex items-center text-white/80 hover:text-white transition duration-300 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Login Card */}
        <div className="glass backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl mb-6">
              <span className="text-white font-black text-2xl">A</span>
            </div>
            <h2 className="text-3xl font-black text-white mb-2">
              Masuk ke <span className="gradient-text">Assist</span>
            </h2>
            <p className="text-white/80">
              Gunakan akun Google Anda untuk masuk
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl">
              <p className="text-red-100 text-sm text-center">{error}</p>
            </div>
          )}

          <div className="space-y-6">
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="group relative w-full flex justify-center items-center py-4 px-6 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="spinner-glow mr-3"></div>
                  Memproses...
                </div>
              ) : (
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Masuk dengan Google
                </div>
              )}
            </button>

            <div className="text-center">
              <p className="text-sm text-white/70">
                Belum punya akun? Klik tombol di atas untuk membuat akun baru dengan Google
              </p>
            </div>

            {/* Features Info */}
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Mengapa Login dengan Google?
              </h3>
              <ul className="text-xs text-white/80 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                  Keamanan tingkat tinggi
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Tidak perlu mengingat password
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                  Proses login yang cepat
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></span>
                  Data terlindungi dengan enkripsi
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-white/60 text-sm">
            Dengan masuk, Anda menyetujui{' '}
            <a href="#" className="text-white hover:underline">Syarat & Ketentuan</a>
            {' '}dan{' '}
            <a href="#" className="text-white hover:underline">Kebijakan Privasi</a>
          </p>
        </div>
      </div>
    </div>
  );
}