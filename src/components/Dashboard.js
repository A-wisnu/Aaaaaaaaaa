import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  MessageSquare,
  BookOpen,
  Users,
  Settings,
  Bell,
  Search,
  Plus,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  User,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Shield
} from 'lucide-react';
import AuthGuard from './AuthGuard';
import UserProfile from './UserProfile';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Mock notifications
    setNotifications([
      { id: 1, type: 'order', message: 'Your order #123 has been completed', time: '2 hours ago', unread: true },
      { id: 2, type: 'community', message: 'New reply in Programming Help forum', time: '5 hours ago', unread: true },
      { id: 3, type: 'system', message: 'Welcome to Assist Community!', time: '1 day ago', unread: false }
    ]);
  }, []);

  const stats = [
    { label: 'Active Orders', value: '3', icon: <BookOpen className="h-8 w-8" />, color: 'from-blue-500 to-cyan-500' },
    { label: 'Completed', value: '12', icon: <Award className="h-8 w-8" />, color: 'from-green-500 to-emerald-500' },
    { label: 'Community Posts', value: '8', icon: <MessageSquare className="h-8 w-8" />, color: 'from-purple-500 to-pink-500' },
    { label: 'Total Spent', value: '$450', icon: <DollarSign className="h-8 w-8" />, color: 'from-orange-500 to-red-500' }
  ];

  const recentOrders = [
    { id: 1, title: 'React.js Assignment', status: 'In Progress', provider: 'CodeMaster', progress: 75, deadline: '2 days' },
    { id: 2, title: 'Data Analysis Report', status: 'Review', provider: 'DataPro', progress: 90, deadline: '1 day' },
    { id: 3, title: 'Research Paper', status: 'Completed', provider: 'AcademicExpert', progress: 100, deadline: 'Done' }
  ];

  const quickActions = [
    { label: 'New Order', icon: <Plus className="h-6 w-6" />, color: 'from-indigo-500 to-purple-500', action: () => {} },
    { label: 'Browse Services', icon: <Search className="h-6 w-6" />, color: 'from-blue-500 to-cyan-500', action: () => {} },
    { label: 'Community', icon: <Users className="h-6 w-6" />, color: 'from-green-500 to-emerald-500', action: () => {} },
    { label: 'Messages', icon: <MessageSquare className="h-6 w-6" />, color: 'from-pink-500 to-rose-500', action: () => {} }
  ];

  return (
    <AuthGuard requireDisplayName={true}>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">A</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-black gradient-text-primary">Assist</h1>
                    <p className="text-xs text-gray-500">Dashboard</p>
                  </div>
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                {/* Notifications */}
                <div className="relative">
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                    <Bell className="h-5 w-5 text-gray-600" />
                    {notifications.some(n => n.unread) && (
                      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                  </button>
                </div>

                <UserProfile />
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <div className="space-y-2">
                  {[
                    { id: 'overview', label: 'Overview', icon: <Home className="h-5 w-5" /> },
                    { id: 'orders', label: 'My Orders', icon: <BookOpen className="h-5 w-5" /> },
                    { id: 'community', label: 'Community', icon: <Users className="h-5 w-5" /> },
                    { id: 'messages', label: 'Messages', icon: <MessageSquare className="h-5 w-5" /> },
                    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {tab.icon}
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Welcome Section */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-4 right-4 opacity-20">
                      <Sparkles className="h-24 w-24" />
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold mb-2">
                        Welcome back, {user?.customDisplayName || user?.displayName || 'Student'}! 👋
                      </h2>
                      <p className="text-white/90 mb-6">
                        Ready to continue your academic journey? Check out your progress and explore new opportunities.
                      </p>
                      <div className="flex space-x-4">
                        <Link to="/services" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center">
                          <Plus className="h-5 w-5 mr-2" />
                          New Order
                        </Link>
                        <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center">
                          <Target className="h-5 w-5 mr-2" />
                          Browse Services
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg`}>
                            {stat.icon}
                          </div>
                          <TrendingUp className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                        <div className="text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {quickActions.map((action, index) => (
                        <button
                          key={index}
                          onClick={action.action}
                          className="p-6 rounded-xl border-2 border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-200 group"
                          style={{
                            background: `linear-gradient(135deg, ${action.color.split(' ')[1]} 0%, ${action.color.split(' ')[3]} 100%)`,
                            backgroundClip: 'padding-box'
                          }}
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center text-white mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                            {action.icon}
                          </div>
                          <div className="text-gray-700 font-semibold text-center">{action.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Orders */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
                      <Link to="/orders" className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center">
                        View All
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900">{order.title}</h4>
                              <p className="text-gray-600 text-sm">by {order.provider}</p>
                            </div>
                            <div className="text-right">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status}
                              </span>
                              <div className="text-gray-500 text-sm mt-1 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {order.deadline}
                              </div>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${order.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-right text-sm text-gray-600 mt-1">{order.progress}% complete</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
                  <p className="text-gray-600">Order management interface will be implemented here.</p>
                </div>
              )}

              {activeTab === 'community' && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Community</h2>
                  <p className="text-gray-600">Community features will be implemented here.</p>
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Messages</h2>
                  <p className="text-gray-600">Messaging system will be implemented here.</p>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
                  <p className="text-gray-600">User settings will be implemented here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Dashboard;