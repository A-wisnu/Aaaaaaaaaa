import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { 
  User, 
  LogOut, 
  Settings, 
  Home, 
  MessageSquare, 
  Users, 
  ChevronDown,
  Crown,
  Shield
} from 'lucide-react';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Check localStorage for user data
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Listen to auth state changes
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          customDisplayName: user?.customDisplayName || null
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      setUser(null);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!user) {
    return null;
  }

  const menuItems = [
    { 
      label: 'Dashboard', 
      icon: <Home className="w-4 h-4" />, 
      href: '/dashboard',
      description: 'Overview & Stats'
    },
    { 
      label: 'Community', 
      icon: <Users className="w-4 h-4" />, 
      href: '/community',
      description: 'Chat & Forums'
    },
    { 
      label: 'Messages', 
      icon: <MessageSquare className="w-4 h-4" />, 
      href: '/messages',
      description: 'Direct Messages'
    },
    { 
      label: 'Settings', 
      icon: <Settings className="w-4 h-4" />, 
      href: '/settings',
      description: 'Account Settings'
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/10 transition-all duration-200 group"
      >
        <div className="flex items-center space-x-2">
          {user.photoURL ? (
            <img 
              src={user.photoURL} 
              alt={user.displayName || 'User'} 
              className="w-8 h-8 rounded-full border-2 border-white/20 shadow-lg"
            />
          ) : (
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <User className="w-4 h-4 text-white" />
            </div>
          )}
          <div className="hidden md:block text-left">
            <span className="text-white text-sm font-semibold block">
              {user.customDisplayName || user.displayName || 'User'}
            </span>
            <span className="text-white/60 text-xs">
              {user.email?.split('@')[0]}
            </span>
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-white/60 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 z-20 overflow-hidden">
            {/* User Info Header */}
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <div className="flex items-center space-x-3">
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt={user.displayName || 'User'} 
                    className="w-12 h-12 rounded-full border-2 border-white/30"
                  />
                ) : (
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold truncate">
                      {user.customDisplayName || user.displayName || 'User'}
                    </h3>
                    <Crown className="w-4 h-4 text-yellow-300" />
                  </div>
                  <p className="text-white/80 text-sm truncate">{user.email}</p>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-white/80 text-xs">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-indigo-100 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{item.label}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Logout */}
            <div className="p-2">
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
              >
                <div className="p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors mr-3">
                  <LogOut className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Sign Out</div>
                  <div className="text-sm text-red-500">Exit your account</div>
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;