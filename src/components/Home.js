import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Code, 
  Presentation, 
  Calculator, 
  Palette, 
  FileText,
  Star,
  CheckCircle,
  Clock,
  Award,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
  Target,
  Shield,
  Trophy,
  MessageCircle,
  Play
} from 'lucide-react';
import SplashScreen from './SplashScreen';
import UserProfile from './UserProfile';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Check if user is logged in
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 'tugas-kuliah',
      title: 'Tugas Kuliah',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Essay, makalah, laporan, dan tugas akademik lainnya',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      features: ['Berbagai mata kuliah', 'Referensi valid', 'Bebas plagiarisme']
    },
    {
      id: 'skripsi',
      title: 'Skripsi & Thesis',
      icon: <FileText className="h-8 w-8" />,
      description: 'Skripsi, thesis, dan penelitian akademik tingkat tinggi',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      features: ['Metodologi penelitian', 'Analisis data lengkap', 'Bimbingan konsultasi']
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: <Code className="h-8 w-8" />,
      description: 'Tugas pemrograman, aplikasi web, mobile, dan desktop',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      features: ['Berbagai bahasa', 'Source code lengkap', 'Testing & debugging']
    },
    {
      id: 'presentasi',
      title: 'Presentasi',
      icon: <Presentation className="h-8 w-8" />,
      description: 'PowerPoint, Prezi, dan materi presentasi profesional',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      features: ['Design menarik', 'Animasi profesional', 'Template custom']
    },
    {
      id: 'analisis-data',
      title: 'Analisis Data',
      icon: <Calculator className="h-8 w-8" />,
      description: 'Analisis statistik menggunakan SPSS, Excel, R, Python',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      features: ['Analisis deskriptif', 'Uji hipotesis', 'Interpretasi hasil']
    },
    {
      id: 'desain',
      title: 'Desain Grafis',
      icon: <Palette className="h-8 w-8" />,
      description: 'Logo, poster, infografis, dan desain visual lainnya',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      features: ['Desain original', 'High resolution', 'Multiple format']
    }
  ];

  const stats = [
    { number: '2000+', label: 'Tugas Selesai', icon: <CheckCircle className="h-8 w-8 text-green-500" /> },
    { number: '500+', label: 'Mahasiswa Puas', icon: <Users className="h-8 w-8 text-blue-500" /> },
    { number: '4.9/5', label: 'Rating Kepuasan', icon: <Star className="h-8 w-8 text-yellow-500" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="h-8 w-8 text-purple-500" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Wijaya',
      role: 'Mahasiswa Teknik Informatika',
      content: 'Assist sangat membantu saya menyelesaikan skripsi tepat waktu. Kualitas dan pelayanannya luar biasa!',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'Ahmad Rahman',
      role: 'Mahasiswa Ekonomi',
      content: 'Tim Assist sangat profesional dan detail. Tugas kuliah saya selalu dapat nilai A berkat bantuan mereka.',
      rating: 5,
      avatar: '👨‍🎓'
    },
    {
      name: 'Maya Sari',
      role: 'Mahasiswa Psikologi',
      content: 'Pelayanan cepat, hasil memuaskan, dan harga terjangkau. Sangat recommend untuk teman-teman mahasiswa!',
      rating: 5,
      avatar: '👩‍🎓'
    }
  ];

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="glass backdrop-blur-xl border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 interactive-pop">
                    <span className="text-white font-black text-xl">A</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-black gradient-text-primary">Assist</h1>
                  <p className="text-xs text-gray-500 font-medium">Academic Success Partner</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">About</a>
                <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Reviews</a>
                {user ? (
                  <UserProfile />
                ) : (
                  <Link to="/login" className="btn-primary group">
                    Login
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse float"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-32 left-32 w-8 h-8 text-white/30 animate-bounce float" />
          <Zap className="absolute top-40 right-40 w-6 h-6 text-white/20 animate-bounce float-delayed" />
          <Star className="absolute bottom-32 left-40 w-6 h-6 text-white/25 animate-bounce float" />
          <Trophy className="absolute bottom-32 right-32 w-6 h-6 text-white/30 animate-bounce float-delayed" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-8 py-4 rounded-full glass-primary text-white font-semibold mb-8 hover:scale-105 transition-all duration-300 interactive-pop">
              <Star className="w-5 h-5 mr-3 animate-pulse" />
              Your Academic Success Partner
              <Sparkles className="w-5 h-5 ml-3 animate-pulse" />
            </div>
          </div>
          
          <h1 className="heading-xl text-white mb-8 text-shadow-lg">
            Transform Your <span className="gradient-text-accent">Academic Journey</span> with Expert Assistance
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of students who achieve academic excellence with our professional services. 
            From assignments to research, we're here to elevate your success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/services" className="btn-primary group text-lg px-10 py-5 shadow-2xl">
              <Zap className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Explore Services
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/community" className="btn-secondary group text-lg px-10 py-5">
              <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Join Community
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '10,000+', label: 'Students Helped', icon: <Trophy className="w-8 h-8" /> },
              { number: '99.8%', label: 'Success Rate', icon: <Star className="w-8 h-8" /> },
              { number: '24/7', label: 'Support Available', icon: <MessageCircle className="w-8 h-8" /> },
              { number: '500+', label: 'Expert Tutors', icon: <Sparkles className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div key={index} className={`stagger-item text-center glass-primary p-6 rounded-2xl`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-white/80 mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-semibold mb-6 border border-blue-200">
              <Presentation className="w-5 h-5 mr-2" />
              Premium Services
            </div>
            <h2 className="heading-lg text-gray-900 mb-6">
              Professional <span className="gradient-text-primary">Academic Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complex research papers to programming projects, our expert team delivers excellence in every academic field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-12 w-12 text-white" />,
                title: 'Academic Writing',
                description: 'Essays, research papers, and dissertations with proper citations and original content.',
                color: 'from-blue-600 to-blue-700',
                bgColor: 'from-blue-50 to-blue-100'
              },
              {
                icon: <Code className="h-12 w-12 text-white" />,
                title: 'Programming Projects',
                description: 'Full-stack applications, algorithms, and software solutions with clean code.',
                color: 'from-emerald-600 to-emerald-700',
                bgColor: 'from-emerald-50 to-emerald-100'
              },
              {
                icon: <Calculator className="h-12 w-12 text-white" />,
                title: 'Data Analysis',
                description: 'Statistical analysis, machine learning models, and data visualization.',
                color: 'from-purple-600 to-purple-700',
                bgColor: 'from-purple-50 to-purple-100'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`stagger-item card-glow group hover:scale-105 transition-all duration-500 relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary group text-lg px-10 py-4">
              <Sparkles className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              View All Services
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 font-semibold mb-6 border border-teal-200">
              <Trophy className="w-5 h-5 mr-2" />
              Why Choose Assist
            </div>
            <h2 className="heading-lg text-gray-900 mb-6">
              Excellence in Every <span className="gradient-text-secondary">Detail</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality, reliability, and student success sets us apart in the academic assistance industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="h-12 w-12" />,
                title: 'Premium Quality',
                description: 'Every project meets the highest academic standards with thorough research and analysis.',
                color: 'from-amber-500 to-orange-600',
                iconBg: 'from-amber-100 to-orange-100'
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: 'On-Time Delivery',
                description: 'Reliable delivery that respects your deadlines, with progress updates throughout.',
                color: 'from-blue-500 to-indigo-600',
                iconBg: 'from-blue-100 to-indigo-100'
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: 'Confidential & Secure',
                description: 'Your privacy is protected with secure communication and data handling.',
                color: 'from-emerald-500 to-teal-600',
                iconBg: 'from-emerald-100 to-teal-100'
              },
              {
                icon: <MessageCircle className="h-12 w-12" />,
                title: '24/7 Support',
                description: 'Round-the-clock assistance with dedicated support team always available.',
                color: 'from-purple-500 to-pink-600',
                iconBg: 'from-purple-100 to-pink-100'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`stagger-item text-center card-glow group hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.iconBg} text-gray-700 mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 interactive-pop`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-semibold mb-6 border border-indigo-200">
                <Users className="w-5 h-5 mr-2" />
                Join Our Community
              </div>
              <h2 className="heading-lg text-gray-900 mb-6">
                Connect with <span className="gradient-text-primary">Academic Experts</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our vibrant community of students, tutors, and academic professionals. 
                Share knowledge, get instant help, and collaborate on projects.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: <MessageCircle className="w-6 h-6" />, text: 'Real-time chat with experts and peers' },
                  { icon: <BookOpen className="w-6 h-6" />, text: 'Subject-specific discussion channels' },
                  { icon: <Trophy className="w-6 h-6" />, text: 'Recognition system for top contributors' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg text-indigo-600">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/community" className="btn-primary group text-lg px-8 py-4">
                <Users className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Join Community
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="glass-primary rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Mock chat messages */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl p-4 shadow-md">
                        <p className="text-gray-800 font-medium">Alex Chen</p>
                        <p className="text-gray-600 text-sm">Just finished my data science project with help from the community! 🎉</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl p-4 shadow-md">
                        <p className="text-gray-800 font-medium">Dr. Sarah Johnson</p>
                        <p className="text-gray-600 text-sm">Happy to help! The methodology you used was excellent. 👏</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl p-4 shadow-md">
                        <p className="text-gray-800 font-medium">Mike Rodriguez</p>
                        <p className="text-gray-600 text-sm">Anyone working on machine learning assignments? Let's collaborate! 🤝</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 text-gray-600">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                        +
                      </div>
                    </div>
                    <span className="text-sm font-medium">2,500+ active members online</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-xl float">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg float-delayed">
                <Users className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-8 py-4 rounded-full glass-primary text-white font-semibold mb-8">
            <Zap className="w-5 h-5 mr-3 animate-pulse" />
            Ready to Excel?
            <Sparkles className="w-5 h-5 ml-3 animate-pulse" />
          </div>
          
          <h2 className="heading-lg text-white mb-8 text-shadow-lg">
            Start Your Academic Success Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful students who've transformed their academic performance with our expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/services" className="btn-primary group text-lg px-10 py-5 shadow-2xl">
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Get Started Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <a href="https://wa.me/6281234567890" className="btn-secondary group text-lg px-10 py-5">
              <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Chat with Expert
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center stagger-item card-glow p-8 hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 interactive-pop">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black gradient-text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-6">
              Layanan <span className="gradient-text-primary">Premium</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilihan lengkap layanan akademik dengan kualitas terjamin dan pengerjaan profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`stagger-item card-glow p-8 group hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-white">
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
                icon: <Shield className="h-12 w-12 text-blue-500" />,
                title: 'Kualitas Terjamin',
                description: 'Dikerjakan oleh tim ahli berpengalaman dengan standar akademik tinggi dan jaminan kualitas terbaik.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Zap className="h-12 w-12 text-purple-500" />,
                title: 'Pengerjaan Cepat',
                description: 'Komitmen penuh untuk menyelesaikan tugas sesuai deadline dengan efisiensi dan ketepatan waktu.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Award className="h-12 w-12 text-green-500" />,
                title: 'Hasil Memuaskan',
                description: 'Garansi revisi gratis hingga Anda puas dengan hasil yang diberikan oleh tim profesional kami.',
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

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-6">
              Apa Kata <span className="gradient-text-primary">Mereka?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Testimoni dari mahasiswa yang telah merasakan layanan Assist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`stagger-item card-glow p-8 hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
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
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span>📧</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span>📱</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span>💬</span>
                </div>
              </div>
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