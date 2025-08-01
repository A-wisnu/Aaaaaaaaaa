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
      title: 'Academic Assignments',
      icon: <BookOpen className="h-12 w-12 text-white" />,
      description: 'Essays, papers, reports, and various academic assignments',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      features: [
        'All academic subjects',
        'Valid references',
        'Plagiarism-free content',
        'Free revisions'
      ],
      pricing: [
        { type: 'Essay (1-5 pages)', price: '$15 - $45' },
        { type: 'Research Paper (10-20 pages)', price: '$60 - $120' },
        { type: 'Report (20+ pages)', price: '$120 - $240' }
      ],
      duration: '1-7 days'
    },
    {
      id: 'skripsi',
      title: 'Thesis & Dissertation',
      icon: <FileText className="h-12 w-12 text-white" />,
      description: 'Undergraduate thesis, graduate dissertations, and high-level research',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      features: [
        'Research methodology',
        'Complete data analysis',
        'Academic consultation',
        'Unlimited revisions'
      ],
      pricing: [
        { type: 'Thesis Proposal', price: '$450 - $900' },
        { type: 'Complete Thesis', price: '$1,500 - $4,500' },
        { type: 'PhD Dissertation', price: '$3,000 - $7,500' }
      ],
      duration: '30-90 days'
    },
    {
      id: 'programming',
      title: 'Programming Projects',
      icon: <Code className="h-12 w-12 text-white" />,
      description: 'Programming assignments, web applications, mobile and desktop apps',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      features: [
        'Multiple programming languages',
        'Complete source code',
        'Detailed documentation',
        'Testing & debugging'
      ],
      pricing: [
        { type: 'Algorithm Assignment', price: '$60 - $150' },
        { type: 'Web Application', price: '$300 - $1,500' },
        { type: 'Mobile App', price: '$600 - $2,400' }
      ],
      duration: '3-21 days'
    },
    {
      id: 'presentasi',
      title: 'Presentations',
      icon: <Presentation className="h-12 w-12 text-white" />,
      description: 'PowerPoint, Prezi, and professional presentation materials',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      features: [
        'Attractive design',
        'Professional animations',
        'Custom templates',
        'Speaker notes included'
      ],
      pricing: [
        { type: 'Simple PPT (10-20 slides)', price: '$45 - $90' },
        { type: 'Complex PPT (30+ slides)', price: '$120 - $240' },
        { type: 'Business Presentation', price: '$150 - $450' }
      ],
      duration: '1-5 days'
    },
    {
      id: 'analisis-data',
      title: 'Data Analysis',
      icon: <Calculator className="h-12 w-12 text-white" />,
      description: 'Statistical analysis using SPSS, Excel, R, Python',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      features: [
        'Descriptive analysis',
        'Hypothesis testing',
        'Regression & correlation',
        'Results interpretation'
      ],
      pricing: [
        { type: 'Basic Analysis', price: '$90 - $180' },
        { type: 'Advanced Analysis', price: '$240 - $600' },
        { type: 'Machine Learning', price: '$450 - $1,500' }
      ],
      duration: '3-14 days'
    },
    {
      id: 'desain',
      title: 'Graphic Design',
      icon: <Palette className="h-12 w-12 text-white" />,
      description: 'Logos, posters, infographics, and visual design elements',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      features: [
        'Original designs',
        'High resolution',
        'Multiple formats',
        '3 free revisions'
      ],
      pricing: [
        { type: 'Logo Design', price: '$60 - $240' },
        { type: 'Poster/Banner', price: '$45 - $150' },
        { type: 'UI/UX Design', price: '$300 - $1,500' }
      ],
      duration: '2-10 days'
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
      alert('Order submitted successfully! Our team will contact you soon.');
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
                    Request {service.title}
                  </h3>
                  <p className="text-gray-600">Fill out the form below to get started</p>
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
                Project Title
              </label>
              <input
                type="text"
                name="title"
                required
                className="form-input"
                placeholder="Enter your project title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Detailed Description
              </label>
              <textarea
                name="description"
                required
                rows={4}
                className="form-input"
                placeholder="Describe your project requirements, specifications, and special instructions"
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
                  Budget ($)
                </label>
                <input
                  type="number"
                  name="budget"
                  required
                  className="form-input"
                  placeholder="Enter your budget"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Contact Information
              </label>
              <input
                type="text"
                name="contact"
                required
                className="form-input"
                placeholder="WhatsApp, Telegram, or preferred contact method"
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
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 btn-primary group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Submit Request
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
            Our <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">Premium</span> Services
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Choose the service that fits your academic needs. 
            All work is completed by experienced professionals with guaranteed quality.
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
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
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
                    Delivery: {service.duration}
                  </div>

                  {/* Pricing Preview */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-2">Starting at:</h4>
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
                      {user ? 'Request Service' : 'Login to Request'}
                    </button>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full btn-outline group"
                    >
                      <div className="btn-outline-inner flex items-center justify-center">
                        <Star className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform" />
                        View Details
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
                    What You Get:
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
                    Pricing Guide:
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
                    Delivery Time: {selectedService.duration}
                  </span>
                </div>
                <p className="text-blue-700">
                  Delivery time may vary based on project complexity and our team's availability.
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
                  {user ? 'Request Service' : 'Login to Request'}
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 btn-ghost text-lg py-4"
                >
                  Close
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
              Why Choose <span className="gradient-text-primary">Assist?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to providing the best service with the highest academic standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-12 w-12 text-yellow-500" />,
                title: 'Quality Guaranteed',
                description: 'Work completed by experienced professionals with high academic standards',
                color: 'from-yellow-400 to-orange-500'
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-500" />,
                title: 'On-Time Delivery',
                description: 'Full commitment to completing work according to your deadline',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-green-500" />,
                title: 'Free Revisions',
                description: 'Get free revisions until you are satisfied with the results',
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
            Ready to Start Your Academic Project?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Consult with our expert team about your academic needs right now
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/6281234567890" className="btn-primary group text-lg px-10 py-5">
              <span className="mr-3">📱</span>
              WhatsApp Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="mailto:hello@assist.com" className="btn-secondary group text-lg px-10 py-5">
              <span className="mr-3">📧</span>
              Email Us
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
                Helping students achieve academic success with professional and high-quality services.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Academic Assignments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Thesis & Dissertation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programming</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Presentations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
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