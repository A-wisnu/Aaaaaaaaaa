import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Code, 
  Presentation, 
  Calculator, 
  Palette, 
  FileText,
  Clock,
  CheckCircle,
  Star,
  ArrowLeft,
  Sparkles,
  Zap,
  Trophy,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import UserProfile from './UserProfile';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const services = [
    {
      id: 'tugas-kuliah',
      title: 'Tugas Kuliah',
      icon: <BookOpen className="h-12 w-12 text-white" />,
      description: 'Essay, makalah, laporan, dan tugas akademik lainnya',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      features: [
        'Berbagai mata kuliah',
        'Referensi valid',
        'Bebas plagiarisme',
        'Revisi gratis'
      ],
      pricing: [
        { type: 'Essay (1-5 halaman)', price: 'Rp 50.000 - 150.000' },
        { type: 'Makalah (10-20 halaman)', price: 'Rp 200.000 - 400.000' },
        { type: 'Laporan (20+ halaman)', price: 'Rp 400.000 - 800.000' }
      ],
      duration: '1-7 hari'
    },
    {
      id: 'skripsi',
      title: 'Skripsi & Thesis',
      icon: <FileText className="h-12 w-12 text-white" />,
      description: 'Skripsi, thesis, dan penelitian akademik tingkat tinggi',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      features: [
        'Metodologi penelitian',
        'Analisis data lengkap',
        'Bimbingan konsultasi',
        'Revisi unlimited'
      ],
      pricing: [
        { type: 'Proposal Skripsi', price: 'Rp 1.500.000 - 3.000.000' },
        { type: 'Skripsi Lengkap', price: 'Rp 5.000.000 - 15.000.000' },
        { type: 'Thesis S2', price: 'Rp 10.000.000 - 25.000.000' }
      ],
      duration: '30-90 hari'
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: <Code className="h-12 w-12 text-white" />,
      description: 'Tugas pemrograman, aplikasi web, mobile, dan desktop',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      features: [
        'Berbagai bahasa pemrograman',
        'Source code lengkap',
        'Dokumentasi detail',
        'Testing & debugging'
      ],
      pricing: [
        { type: 'Tugas Algoritma', price: 'Rp 200.000 - 500.000' },
        { type: 'Aplikasi Web', price: 'Rp 1.000.000 - 5.000.000' },
        { type: 'Mobile App', price: 'Rp 2.000.000 - 8.000.000' }
      ],
      duration: '3-21 hari'
    },
    {
      id: 'presentasi',
      title: 'Presentasi',
      icon: <Presentation className="h-12 w-12 text-white" />,
      description: 'PowerPoint, Prezi, dan materi presentasi profesional',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      features: [
        'Design menarik',
        'Animasi profesional',
        'Template custom',
        'Speaker notes'
      ],
      pricing: [
        { type: 'PPT Sederhana (10-20 slide)', price: 'Rp 150.000 - 300.000' },
        { type: 'PPT Kompleks (30+ slide)', price: 'Rp 400.000 - 800.000' },
        { type: 'Presentasi Bisnis', price: 'Rp 500.000 - 1.500.000' }
      ],
      duration: '1-5 hari'
    },
    {
      id: 'analisis-data',
      title: 'Analisis Data',
      icon: <Calculator className="h-12 w-12 text-white" />,
      description: 'Analisis statistik menggunakan SPSS, Excel, R, Python',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      features: [
        'Analisis deskriptif',
        'Uji hipotesis',
        'Regresi & korelasi',
        'Interpretasi hasil'
      ],
      pricing: [
        { type: 'Analisis Sederhana', price: 'Rp 300.000 - 600.000' },
        { type: 'Analisis Kompleks', price: 'Rp 800.000 - 2.000.000' },
        { type: 'Machine Learning', price: 'Rp 1.500.000 - 5.000.000' }
      ],
      duration: '3-14 hari'
    },
    {
      id: 'desain',
      title: 'Desain Grafis',
      icon: <Palette className="h-12 w-12 text-white" />,
      description: 'Logo, poster, infografis, dan desain visual lainnya',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      features: [
        'Desain original',
        'High resolution',
        'Multiple format',
        'Revisi 3x'
      ],
      pricing: [
        { type: 'Logo Design', price: 'Rp 200.000 - 800.000' },
        { type: 'Poster/Banner', price: 'Rp 150.000 - 500.000' },
        { type: 'UI/UX Design', price: 'Rp 1.000.000 - 5.000.000' }
      ],
      duration: '2-10 hari'
    }
  ];

  const OrderForm = ({ service, onClose }) => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      deadline: '',
      budget: '',
      contact: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      alert('Pesanan berhasil dikirim! Kami akan menghubungi Anda segera.');
      onClose();
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 modal-backdrop">
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl modal-content">
          <div className="p-8 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.color} shadow-xl`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Pesan {service.title}
                  </h3>
                  <p className="text-gray-600">Isi form di bawah untuk memulai</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Judul Tugas
              </label>
              <input
                type="text"
                name="title"
                required
                className="form-input"
                placeholder="Masukkan judul tugas Anda"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Deskripsi Detail
              </label>
              <textarea
                name="description"
                required
                rows={4}
                className="form-input"
                placeholder="Jelaskan detail tugas, requirements, dan instruksi khusus"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  required
                  className="form-input"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Budget (Rp)
                </label>
                <input
                  type="number"
                  name="budget"
                  required
                  className="form-input"
                  placeholder="Masukkan budget Anda"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                WhatsApp/Telegram
              </label>
              <input
                type="text"
                name="contact"
                required
                className="form-input"
                placeholder="Nomor WhatsApp atau username Telegram"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 btn-ghost"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 btn-primary group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Kirim Pesanan
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-4 group">
              <ArrowLeft className="h-5 w-5 text-gray-500 group-hover:text-indigo-600 transition-colors" />
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl interactive-pop">
                  <span className="text-white font-black text-xl">A</span>
                </div>
                <div>
                  <h1 className="text-2xl font-black gradient-text-primary">Assist</h1>
                  <p className="text-xs text-gray-500 font-medium">Academic Success Partner</p>
                </div>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              {user ? (
                <UserProfile />
              ) : (
                <Link to="/login" className="btn-primary group">
                  <span className="mr-2">👤</span>
                  Login
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-pulse float-delayed"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-32 left-32 w-8 h-8 text-white/40 animate-bounce float" />
          <Zap className="absolute top-40 right-40 w-6 h-6 text-white/30 animate-bounce float-delayed" />
          <Trophy className="absolute bottom-32 right-32 w-6 h-6 text-white/40 animate-bounce float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white/90 font-medium mb-8 hover:bg-white/30 transition-all duration-300 interactive-pop">
              <Star className="w-5 h-5 mr-2 animate-pulse" />
              Premium Academic Services
            </div>
          </div>
          
          <h1 className="heading-xl text-white mb-8 text-shadow-lg">
            Layanan <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">Premium</span> Kami
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Pilih layanan yang sesuai dengan kebutuhan akademik Anda. 
            Semua dikerjakan oleh ahli berpengalaman dengan kualitas terjamin.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`stagger-item card-glow p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Fitur:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center mb-6 text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Estimasi: {service.duration}
                  </div>

                  {/* Pricing Preview */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-2">Harga Mulai:</h4>
                    <p className="text-xl font-bold gradient-text-primary">
                      {service.pricing[0].price}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        if (user) {
                          setSelectedService(service);
                          setShowOrderForm(true);
                        } else {
                          window.location.href = '/login';
                        }
                      }}
                      className="w-full btn-primary group"
                    >
                      <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      {user ? 'Pesan Sekarang' : 'Login untuk Pesan'}
                    </button>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full btn-outline group"
                    >
                      <div className="btn-outline-inner flex items-center justify-center">
                        <Star className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform" />
                        Lihat Detail
                      </div>
                    </button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && !showOrderForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 modal-backdrop">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl modal-content">
            <div className="p-8 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedService.color} shadow-xl`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {selectedService.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{selectedService.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-xl"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    Yang Anda Dapatkan:
                  </h4>
                  <ul className="space-y-4">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    Daftar Harga:
                  </h4>
                  <div className="space-y-4">
                    {selectedService.pricing.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700 font-medium">{item.type}</span>
                        <span className="font-bold gradient-text-primary text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="flex items-center mb-3">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="font-bold text-blue-900 text-lg">
                    Estimasi Pengerjaan: {selectedService.duration}
                  </span>
                </div>
                <p className="text-blue-700">
                  Waktu pengerjaan dapat disesuaikan dengan tingkat kesulitan dan ketersediaan tim.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => {
                    if (user) {
                      setShowOrderForm(true);
                    } else {
                      window.location.href = '/login';
                    }
                  }}
                  className="flex-1 btn-primary group text-lg py-4"
                >
                  <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  {user ? 'Pesan Sekarang' : 'Login untuk Pesan'}
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 btn-ghost text-lg py-4"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Form Modal */}
      {showOrderForm && selectedService && user && (
        <OrderForm 
          service={selectedService} 
          onClose={() => {
            setShowOrderForm(false);
            setSelectedService(null);
          }} 
        />
      )}

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-6">
              Mengapa Memilih <span className="gradient-text-primary">Assist?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami untuk memberikan layanan terbaik dengan standar akademik tertinggi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-12 w-12 text-yellow-500" />,
                title: 'Kualitas Terjamin',
                description: 'Dikerjakan oleh ahli berpengalaman dengan standar akademik tinggi',
                color: 'from-yellow-400 to-orange-500'
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-500" />,
                title: 'Tepat Waktu',
                description: 'Komitmen penuh untuk menyelesaikan tugas sesuai deadline',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-green-500" />,
                title: 'Revisi Gratis',
                description: 'Dapatkan revisi gratis hingga Anda puas dengan hasilnya',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`stagger-item text-center card-glow p-8 group hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 interactive-pop`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-white mb-8">
            Siap Memulai Proyek Akademik Anda?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Konsultasikan kebutuhan akademik Anda dengan tim ahli kami sekarang juga
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/6281234567890" className="btn-primary group text-lg px-10 py-5">
              <span className="mr-3">📱</span>
              WhatsApp Sekarang
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="mailto:hello@assist.com" className="btn-secondary group text-lg px-10 py-5">
              <span className="mr-3">📧</span>
              Email Kami
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black gradient-text">Assist</h3>
                  <p className="text-gray-400 text-sm">Your Academic Success Partner</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Membantu mahasiswa mencapai kesuksesan akademik dengan layanan profesional dan berkualitas tinggi.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Tugas Kuliah</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Skripsi & Thesis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programming</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Presentasi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: hello@assist.com</li>
                <li>WhatsApp: +62 812 3456 7890</li>
                <li>Telegram: @AssistSupport</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Assist. All rights reserved. Made with ❤️ for students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}