import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Code, 
  PresentationChart, 
  Calculator, 
  Palette, 
  FileText,
  Clock,
  CheckCircle,
  Star,
  ArrowLeft
} from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const services = [
    {
      id: 'tugas-kuliah',
      title: 'Tugas Kuliah',
      icon: <BookOpen className="h-12 w-12 text-indigo-600" />,
      description: 'Essay, makalah, laporan, dan tugas akademik lainnya',
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
      icon: <FileText className="h-12 w-12 text-indigo-600" />,
      description: 'Skripsi, thesis, dan penelitian akademik tingkat tinggi',
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
      icon: <Code className="h-12 w-12 text-indigo-600" />,
      description: 'Tugas pemrograman, aplikasi web, mobile, dan desktop',
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
      icon: <PresentationChart className="h-12 w-12 text-indigo-600" />,
      description: 'PowerPoint, Prezi, dan materi presentasi profesional',
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
      icon: <Calculator className="h-12 w-12 text-indigo-600" />,
      description: 'Analisis statistik menggunakan SPSS, Excel, R, Python',
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
      icon: <Palette className="h-12 w-12 text-indigo-600" />,
      description: 'Logo, poster, infografis, dan desain visual lainnya',
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
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Pesan {service.title}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Judul Tugas
              </label>
              <input
                type="text"
                name="title"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Masukkan judul tugas Anda"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi Detail
              </label>
              <textarea
                name="description"
                required
                rows={4}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Jelaskan detail tugas, requirements, dan instruksi khusus"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget (Rp)
                </label>
                <input
                  type="number"
                  name="budget"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Masukkan budget Anda"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WhatsApp/Telegram
              </label>
              <input
                type="text"
                name="contact"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nomor WhatsApp atau username Telegram"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Kirim Pesanan
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <ArrowLeft className="h-5 w-5 text-gray-500 mr-2" />
                <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JP</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">JokiPro</span>
              </Link>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Layanan Joki Tugas & Skripsi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih layanan yang sesuai dengan kebutuhan akademik Anda. 
            Semua dikerjakan oleh ahli berpengalaman dengan kualitas terjamin.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Fitur:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration */}
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  Estimasi: {service.duration}
                </div>

                {/* Pricing Preview */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Harga Mulai:</h4>
                  <p className="text-lg font-semibold text-indigo-600">
                    {service.pricing[0].price}
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedService(service);
                      setShowOrderForm(true);
                    }}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 font-medium"
                  >
                    Pesan Sekarang
                  </button>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 font-medium"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && !showOrderForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {selectedService.icon}
                    <h3 className="ml-3 text-2xl font-semibold text-gray-900">
                      {selectedService.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 text-lg">
                  {selectedService.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Yang Anda Dapatkan:
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Daftar Harga:
                    </h4>
                    <div className="space-y-3">
                      {selectedService.pricing.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">{item.type}</span>
                          <span className="font-semibold text-indigo-600">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-900">
                      Estimasi Pengerjaan: {selectedService.duration}
                    </span>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Waktu pengerjaan dapat disesuaikan dengan tingkat kesulitan dan ketersediaan tim.
                  </p>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setShowOrderForm(true)}
                    className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 font-medium"
                  >
                    Pesan Sekarang
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-50 font-medium"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order Form Modal */}
        {showOrderForm && selectedService && (
          <OrderForm 
            service={selectedService} 
            onClose={() => {
              setShowOrderForm(false);
              setSelectedService(null);
            }} 
          />
        )}

        {/* Why Choose Us */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Mengapa Memilih JokiPro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600">
                Dikerjakan oleh ahli berpengalaman dengan standar akademik tinggi
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tepat Waktu</h3>
              <p className="text-gray-600">
                Komitmen penuh untuk menyelesaikan tugas sesuai deadline
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Revisi Gratis</h3>
              <p className="text-gray-600">
                Dapatkan revisi gratis hingga Anda puas dengan hasilnya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}