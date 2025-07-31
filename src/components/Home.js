import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Shield, Star, Users, CheckCircle } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: "Berbagai Mata Kuliah",
      description: "Kami melayani tugas dari berbagai jurusan dan mata kuliah"
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: "Pengerjaan Cepat",
      description: "Deadline ketat? Tenang, kami siap mengerjakan dengan cepat"
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Kualitas Terjamin",
      description: "Hasil berkualitas tinggi dengan referensi yang valid"
    },
    {
      icon: <Star className="h-8 w-8 text-indigo-600" />,
      title: "Rating Tinggi",
      description: "Dipercaya ribuan mahasiswa dengan rating 4.9/5"
    }
  ];

  const services = [
    "Tugas Kuliah (Essay, Makalah, Laporan)",
    "Skripsi & Thesis",
    "Presentasi PowerPoint",
    "Analisis Data (SPSS, Excel)",
    "Programming (Python, Java, Web)",
    "Desain Grafis & UI/UX"
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Pelayanan sangat memuaskan! Tugas dikerjakan sesuai deadline dan kualitasnya bagus.",
      rating: 5
    },
    {
      name: "Ahmad R.",
      text: "Sudah langganan 2 tahun, selalu puas dengan hasilnya. Recommended!",
      rating: 5
    },
    {
      name: "Lisa K.",
      text: "Harga terjangkau untuk mahasiswa, kualitas tidak mengecewakan.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JP</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">JokiPro</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                Masuk dengan Google
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Jasa Joki Tugas & Skripsi
              <span className="block text-indigo-200">Terpercaya #1</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Solusi terbaik untuk tugas kuliah, skripsi, dan project akademik Anda. 
              Dikerjakan oleh ahli berpengalaman dengan kualitas terjamin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition duration-300"
              >
                Mulai Sekarang
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Mengapa Memilih JokiPro?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami memberikan layanan terbaik dengan standar kualitas tinggi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai jenis tugas akademik yang dapat kami kerjakan untuk Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-800">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testimoni dari ribuan mahasiswa yang puas dengan layanan kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Siap Memulai?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Masuk dengan Google dan dapatkan konsultasi gratis untuk tugas Anda
            </p>
            <Link
              to="/login"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition duration-300"
            >
              Masuk Sekarang
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JP</span>
                </div>
                <span className="ml-2 text-xl font-bold text-white">JokiPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Layanan joki tugas dan skripsi terpercaya dengan kualitas terbaik. 
                Membantu mahasiswa menyelesaikan tugas akademik dengan mudah.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Joki Tugas</li>
                <li>Joki Skripsi</li>
                <li>Presentasi</li>
                <li>Programming</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp: +62 812-3456-7890</li>
                <li>Email: info@jokipro.com</li>
                <li>Telegram: @jokipro</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 JokiPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}