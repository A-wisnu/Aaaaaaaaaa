import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  Plus, 
  LogOut,
  Bell,
  Settings,
  FileText,
  DollarSign
} from 'lucide-react';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  async function handleLogout() {
    try {
      await logout();
      navigate('/');
    } catch {
      console.log('Failed to log out');
    }
  }

  const orders = [
    {
      id: 'ORD001',
      title: 'Tugas Algoritma dan Struktur Data',
      subject: 'Informatika',
      status: 'in_progress',
      deadline: '2024-01-20',
      price: 150000
    },
    {
      id: 'ORD002',
      title: 'Makalah Manajemen Strategis',
      subject: 'Manajemen',
      status: 'completed',
      deadline: '2024-01-15',
      price: 200000
    },
    {
      id: 'ORD003',
      title: 'Analisis Laporan Keuangan',
      subject: 'Akuntansi',
      status: 'pending',
      deadline: '2024-01-25',
      price: 175000
    }
  ];

  const stats = [
    {
      title: 'Total Pesanan',
      value: '12',
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Sedang Dikerjakan',
      value: '3',
      icon: <Clock className="h-8 w-8 text-yellow-600" />,
      color: 'bg-yellow-50'
    },
    {
      title: 'Selesai',
      value: '8',
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      color: 'bg-green-50'
    },
    {
      title: 'Total Pengeluaran',
      value: 'Rp 2.1M',
      icon: <DollarSign className="h-8 w-8 text-purple-600" />,
      color: 'bg-purple-50'
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Menunggu' },
      in_progress: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Dikerjakan' },
      completed: { bg: 'bg-green-100', text: 'text-green-800', label: 'Selesai' },
      revision: { bg: 'bg-orange-100', text: 'text-orange-800', label: 'Revisi' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">JP</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">JokiPro</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                {currentUser?.photoURL ? (
                  <img 
                    src={currentUser.photoURL} 
                    alt="Profile" 
                    className="h-8 w-8 rounded-full"
                  />
                ) : (
                  <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-indigo-600" />
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700">
                  {currentUser?.displayName || currentUser?.email?.split('@')[0] || 'User'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Selamat datang, {currentUser?.displayName || currentUser?.email?.split('@')[0] || 'User'}!
          </h1>
          <p className="text-gray-600">
            Kelola pesanan dan pantau progress tugas Anda di sini.
          </p>
          {currentUser?.email && (
            <p className="text-sm text-gray-500 mt-1">
              Login sebagai: {currentUser.email}
            </p>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Pesan Tugas Baru
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            Lihat Semua Layanan
          </button>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Pesanan Terbaru</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID Pesanan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Judul Tugas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mata Kuliah
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Harga
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.deadline).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Rp {order.price.toLocaleString('id-ID')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Aktivitas Terbaru</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Tugas Algoritma</span> telah selesai dikerjakan
                </p>
                <span className="text-xs text-gray-400">2 jam yang lalu</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Makalah Manajemen</span> sedang dalam progress
                </p>
                <span className="text-xs text-gray-400">5 jam yang lalu</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                <p className="text-sm text-gray-600">
                  Pesanan baru <span className="font-medium">Analisis Keuangan</span> diterima
                </p>
                <span className="text-xs text-gray-400">1 hari yang lalu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}