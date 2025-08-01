import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { Sparkles, Lock, ArrowRight } from 'lucide-react';

const AuthGuard = ({ children, requireDisplayName = false }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDisplayNameForm, setShowDisplayNameForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const savedUser = localStorage.getItem('user');
        let userData = savedUser ? JSON.parse(savedUser) : null;
        
        if (!userData || !userData.displayName) {
          userData = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            customDisplayName: userData?.customDisplayName || null
          };
          localStorage.setItem('user', JSON.stringify(userData));
        }
        
        setUser(userData);
        
        // Check if custom display name is required but not set
        if (requireDisplayName && !userData.customDisplayName) {
          setShowDisplayNameForm(true);
        }
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [requireDisplayName]);

  const handleDisplayNameSubmit = (customDisplayName) => {
    if (user) {
      const updatedUser = { ...user, customDisplayName };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setShowDisplayNameForm(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-hero flex items-center justify-center">
        <div className="text-center">
          <div className="spinner-glow mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-pulse float-delayed"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-md mx-auto">
          <div className="glass backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Lock className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">
              Login Required
            </h2>
            
            <p className="text-white/80 mb-8">
              You need to login to access this feature. Join our community of students and academic professionals.
            </p>
            
            <button
              onClick={() => navigate('/login')}
              className="btn-primary group w-full text-lg py-4"
            >
              <Sparkles className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Login to Continue
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showDisplayNameForm) {
    return <DisplayNameForm onSubmit={handleDisplayNameSubmit} user={user} />;
  }

  return children;
};

const DisplayNameForm = ({ onSubmit, user }) => {
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!displayName.trim()) return;
    
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    onSubmit(displayName.trim());
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-pulse float-delayed"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-md mx-auto">
        <div className="glass backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">
            Choose Your Display Name
          </h2>
          
          <p className="text-white/80 mb-8">
            This name will be visible to other users in the community. You can change it later in your profile.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter your display name"
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-white/20 focus:border-white/50 transition-all"
                required
                maxLength={20}
                minLength={3}
              />
              <p className="text-white/60 text-sm mt-2">
                3-20 characters, letters and numbers only
              </p>
            </div>
            
            <button
              type="submit"
              disabled={loading || !displayName.trim()}
              className="btn-primary group w-full text-lg py-4 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="spinner-glow mr-3"></div>
                  Setting up...
                </>
              ) : (
                <>
                  <Sparkles className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Continue
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthGuard;