import React, { useEffect } from 'react';
import { Shield, Eye, Lock, Users, FileText, Phone, Mail, Calendar } from 'lucide-react';

const Privacy = () => {
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

  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'حماية البيانات',
      description: 'نلتزم بحماية بياناتك الشخصية بأعلى معايير الأمان والخصوصية'
    },
    {
      icon: Eye,
      title: 'الشفافية',
      description: 'نوضح لك بشكل كامل كيفية جمع واستخدام وحماية معلوماتك الشخصية'
    },
    {
      icon: Lock,
      title: 'السرية المهنية',
      description: 'جميع المعلومات القانونية محمية بموجب السرية المهنية للمحاماة'
    },
    {
      icon: Users,
      title: 'التحكم في البيانات',
      description: 'لديك الحق الكامل في التحكم في بياناتك وطلب تعديلها أو حذفها'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-animate">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              سياسة <span className="text-brand-gold">الخصوصية</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">مبادئ الخصوصية</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center scroll-animate group"
              >
                <div className="bg-brand-beige w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold transition-all duration-300">
                  <principle.icon className="h-8 w-8 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="scroll-animate">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-brand-gold ml-2" />
                مقدمة
              </h2>
              <div className="bg-brand-beige rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  تسري هذه السياسة على جميع المعلومات التي تجمعها شركة وسم العدالة للمحاماة والاستشارات القانونية 
                  من خلال موقعنا الإلكتروني أو عند التواصل معنا مباشرة. نحن ملتزمون بحماية خصوصيتك وضمان أمان 
                  معلوماتك الشخصية وفقاً لأعلى المعايير المهنية والقانونية.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="scroll-animate">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">المعلومات التي نجمعها</h2>
              <div className="space-y-4">
                <div className="border-r-4 border-brand-gold pr-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">المعلومات الشخصية</h3>
                  <p className="text-gray-700">
                    نجمع المعلومات التي تقدمها لنا طوعاً مثل الاسم، عنوان البريد الإلكتروني، رقم الهاتف، 
                    والمعلومات القانونية ذات الصلة بقضيتك.
                  </p>
                </div>
                <div className="border-r-4 border-brand-gold pr-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">معلومات الاستخدام</h3>
                  <p className="text-gray-700">
                    نجمع معلومات حول كيفية استخدامك لموقعنا الإلكتروني، بما في ذلك عنوان IP، 
                    نوع المتصفح، وصفحات الموقع التي تزورها.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="scroll-animate">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف نستخدم المعلومات</h2>
              <div className="bg-brand-beige rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gold rounded-full ml-3"></div>
                    <span className="text-gray-700">تقديم الخدمات القانونية المطلوبة</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gold rounded-full ml-3"></div>
                    <span className="text-gray-700">التواصل معك بشأن قضيتك أو استفساراتك</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gold rounded-full ml-3"></div>
                    <span className="text-gray-700">تحسين خدماتنا وموقعنا الإلكتروني</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gold rounded-full ml-3"></div>
                    <span className="text-gray-700">الامتثال للمتطلبات القانونية والتنظيمية</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="scroll-animate">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">تواصل معنا</h2>
              <div className="bg-brand-beige rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع معلوماتك الشخصية، 
                  يرجى التواصل معنا:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-brand-gold ml-2" />
                    <span className="text-gray-700">info@wasm-aladala.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-brand-gold ml-2" />
                    <span className="text-gray-700">+966 58 1000 288</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-brand-gold ml-2" />
                    <span className="text-gray-700">تاريخ آخر تحديث: يناير 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;