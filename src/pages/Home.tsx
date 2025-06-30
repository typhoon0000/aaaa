import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Shield, 
  ChevronRight, 
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  User,
  MessageSquare,
  Send,
  BookOpen,
  FileText,
  Gavel,
  Building,
  MapPin
} from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const stats = [
    { number: '500+', label: 'عميل راضٍ' },
    { number: '10+', label: 'سنة خبرة' },
    { number: '1000+', label: 'قضية ناجحة' },
    { number: '24/7', label: 'دعم متواصل' },
  ];

  const services = [
    {
      icon: BookOpen,
      title: 'الاستشارات القانونية',
      description: 'استشارات قانونية شاملة ومتخصصة في جميع المجالات القانونية',
    },
    {
      icon: FileText,
      title: 'صياغة العقود',
      description: 'صياغة ومراجعة العقود بأعلى معايير الدقة والاحترافية',
    },
    {
      icon: Building,
      title: 'تأسيس الشركات',
      description: 'تأسيس جميع أنواع الشركات وإدارة الشؤون القانونية',
    },
    {
      icon: Gavel,
      title: 'التمثيل القضائي',
      description: 'تمثيل قانوني متخصص أمام جميع درجات المحاكم',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 scroll-animate">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-brand-gold">وسم العدالة</span>
                </h1>
                <p className="text-xl text-gray-300 mt-4">
                  للمحاماة والاستشارات القانونية
                </p>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                نقدم خدمات قانونية متكاملة وموثوقة تلبي احتياجات عملائنا في مختلف القطاعات. 
                حلول قانونية مبتكرة ومصممة خصيصاً لتحقيق أهدافكم بكفاءة واحترافية.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-brand-gold hover:bg-opacity-90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  تواصل معنا
                  <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300"
                >
                  خدماتنا
                </Link>
              </div>
            </div>

            <div className="hidden lg:block scroll-animate">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-gold rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white rounded-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white border-2 border-brand-gold p-4 rounded-2xl w-fit mx-auto mb-6">
                    <img 
                      src="/public/68e23a59-9a0c-4f77-952f-785cc1ac872d_-------------------.webp" 
                      alt="وسم العدالة" 
                      className="h-16 w-16 object-contain"
                      onError={(e) => {
                        console.log('Home page image failed to load');
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    خبرة قانونية موثوقة
                  </h3>
                  <p className="text-gray-600 text-center">
                    حلول قانونية مبتكرة وفعالة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center scroll-animate group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-brand-beige rounded-2xl p-6 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-brand-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-900 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا القانونية
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate group"
              >
                <div className="bg-brand-beige w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-all duration-300">
                  <service.icon className="h-8 w-8 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-brand-gold hover:text-opacity-80 font-semibold mt-4 group text-sm"
                >
                  اقرأ المزيد
                  <ChevronRight className="mr-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-brand-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              تواصل معنا
            </h2>
            <p className="text-xl text-white opacity-90">
              نحن هنا لمساعدتك في جميع احتياجاتك القانونية
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden scroll-animate">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact Info */}
              <div className="bg-gray-900 p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-brand-gold p-3 rounded-lg ml-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">الهاتف</p>
                      <p className="text-gray-300" dir="ltr">+966 58 100 0288</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-brand-gold p-3 rounded-lg ml-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">البريد الإلكتروني</p>
                      <p className="text-gray-300">info@wasm-aladala.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-brand-gold p-3 rounded-lg ml-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">العنوان</p>
                      <p className="text-gray-300">الرياض - الملقا - طريق أنس بن مالك</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                  <h4 className="font-bold text-brand-gold mb-3">وسم العدالة</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    للمحاماة والاستشارات القانونية - نقدم خدمات قانونية متكاملة وموثوقة
                  </p>
                  
                  {/* Google Maps Button */}
                  <a
                    href="https://maps.app.goo.gl/mJbAZdQjPSBiPVbQ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-brand-gold hover:bg-opacity-90 text-white rounded-lg transition-colors duration-300 text-sm w-full justify-center"
                  >
                    <MapPin className="h-4 w-4 ml-2" />
                    عرض على خرائط Google
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 ml-2" />
                      <span className="text-green-800 font-medium">
                        تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                      </span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <div className="relative">
                        <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <div className="relative">
                        <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                          placeholder="أدخل بريدك الإلكتروني"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الهاتف *
                    </label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                        placeholder="أدخل رقم هاتفك"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رسالتك *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="اشرح تفاصيل حالتك القانونية..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-gold hover:bg-opacity-90 disabled:bg-opacity-50 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                        جاري الإرسال...
                      </div>
                    ) : (
                      <>
                        إرسال الرسالة
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;