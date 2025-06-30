import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  FileText
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consultationType: 'general'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        subject: '',
        message: '',
        consultationType: 'general'
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+966 58 100 0288',
      description: 'اتصل بنا في أي وقت'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@wasm-aladala.com',
      description: 'راسلنا عبر البريد الإلكتروني'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      value: 'الرياض - الملقا - طريق أنس بن مالك',
      description: 'قم بزيارتنا في مكتبنا'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      value: 'الأحد - الخميس: 8:00 - 17:00',
      description: 'نحن متاحون خلال أيام العمل'
    }
  ];

  const consultationTypes = [
    { value: 'general', label: 'استشارة عامة' },
    { value: 'legal-consultation', label: 'تقديم الاستشارات القانونية' },
    { value: 'contract-drafting', label: 'صياغة العقود كتابة ومراجعة' },
    { value: 'business-risk-analysis', label: 'تحليل مخاطر الأعمال القانونية' },
    { value: 'transaction-study', label: 'دراسة آلية ومخرجات التعاملات' },
    { value: 'legal-department-training', label: 'تأهيل الإدارات القانونية' },
    { value: 'corporate-governance', label: 'حوكمة الشركات' },
    { value: 'legal-memos', label: 'إعداد المذكرات واللوائح القانونية' },
    { value: 'work-regulations', label: 'لوائح تنظيم العمل' },
    { value: 'franchise', label: 'الامتياز التجاري' },
    { value: 'company-establishment', label: 'تأسيس الشركات' },
    { value: 'legal-affairs-management', label: 'إدارة الشؤون القانونية للأفراد والشركات' },
    { value: 'debt-collection', label: 'التحصيل وتنفيذ الأحكام' },
    { value: 'litigation', label: 'تولي الترافع والتمثيل القضائي' },
    { value: 'endowments', label: 'الأوقاف' },
    { value: 'intellectual-property', label: 'الملكية الفكرية' },
    { value: 'foreign-investor', label: 'المستثمر الأجنبي' },
    { value: 'arbitration', label: 'التحكيم والوساطة' },
    { value: 'bankruptcy', label: 'الإفلاس' },
    { value: 'company-liquidation', label: 'تصفية الشركات' },
    { value: 'estate-liquidation', label: 'تصفية التركات' },
    { value: 'other', label: 'أخرى' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-animate">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              اتصل <span className="text-brand-gold">بنا</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نحن هنا لمساعدتك في جميع احتياجاتك القانونية
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center scroll-animate group"
              >
                <div className="bg-brand-beige w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold transition-all duration-300">
                  <info.icon className="h-8 w-8 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className={`text-gray-900 font-semibold mb-2 ${info.icon === Phone ? 'dir-ltr' : ''}`}>
                  {info.value}
                </p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="scroll-animate">
              <div className="bg-brand-beige rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  تواصل معنا
                </h2>
                <p className="text-gray-600 mb-8">
                  املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                </p>

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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        نوع الاستشارة
                      </label>
                      <select
                        name="consultationType"
                        value={formData.consultationType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                      >
                        {consultationTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      موضوع الرسالة *
                    </label>
                    <div className="relative">
                      <FileText className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                        placeholder="أدخل موضوع رسالتك"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      تفاصيل الاستشارة *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
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

            {/* Map & Additional Info */}
            <div className="space-y-8 scroll-animate">
              {/* Google Maps */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <div className="p-4 bg-brand-gold text-white">
                  <h3 className="text-lg font-semibold flex items-center">
                    <MapPin className="h-5 w-5 ml-2" />
                    موقعنا على الخريطة
                  </h3>
                </div>
                <div className="h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.6234567890123!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2LfYsdmK2YIg2KPZhNizINio2YYg2YXYp9mE2YPYjCDYp9mE2YXZhNmC2KfYjCDYp9mE2LHZitin2LYgMTI0NjI!5e0!3m2!1sar!2ssa!4v1234567890123!5m2!1sar!2ssa"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع وسم العدالة للمحاماة والاستشارات القانونية"
                  ></iframe>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-600 text-sm mb-3">
                    الرياض - الملقا - طريق أنس بن مالك
                  </p>
                  <a
                    href="https://maps.app.goo.gl/mJbAZdQjPSBiPVbQ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-brand-gold text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300 text-sm"
                  >
                    <MapPin className="h-4 w-4 ml-2" />
                    فتح في خرائط Google
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-brand-beige rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">لماذا تختار وسم العدالة؟</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-gold ml-2 flex-shrink-0" />
                    <span className="text-gray-700">خدمات قانونية متكاملة وموثوقة</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-gold ml-2 flex-shrink-0" />
                    <span className="text-gray-700">فريق من المحامين المتخصصين</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-gold ml-2 flex-shrink-0" />
                    <span className="text-gray-700">حلول قانونية مبتكرة ومصممة خصيصاً</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-gold ml-2 flex-shrink-0" />
                    <span className="text-gray-700">الالتزام بأعلى معايير النزاهة والشفافية</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-gold ml-2 flex-shrink-0" />
                    <span className="text-gray-700">متابعة مستمرة وعلاقات طويلة الأمد</span>
                  </li>
                </ul>
              </div>

              {/* Direct Contact */}
              <div className="bg-brand-gold rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">
                  تواصل معنا مباشرة
                </h3>
                <p className="text-sm mb-4 opacity-90">
                  للاستفسارات العاجلة، تواصل معنا مباشرة
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+966581000288"
                    className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <Phone className="h-4 w-4 ml-2" />
                    <span dir="ltr">+966 58 100 0288</span>
                  </a>
                  <a
                    href="mailto:info@wasm-aladala.com"
                    className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <Mail className="h-4 w-4 ml-2" />
                    info@wasm-aladala.com
                  </a>
                  <a
                    href="https://maps.app.goo.gl/mJbAZdQjPSBiPVbQ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <MapPin className="h-4 w-4 ml-2" />
                    موقعنا على الخريطة
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;