import React, { useEffect } from 'react';
import { 
  Scale, 
  Users, 
  Shield, 
  Home,
  Briefcase,
  FileText,
  Gavel,
  Building,
  Heart,
  Car,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Settings,
  TrendingUp,
  Award,
  Target,
  Handshake,
  AlertTriangle,
  Trash2
} from 'lucide-react';

const Services = () => {
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

  const consultationServices = [
    {
      icon: BookOpen,
      title: 'تقديم الاستشارات القانونية',
      description: 'استشارات قانونية شاملة ومتخصصة في جميع المجالات القانونية'
    },
    {
      icon: FileText,
      title: 'صياغة العقود كتابة ومراجعة',
      description: 'صياغة ومراجعة العقود بأعلى معايير الدقة والاحترافية'
    },
    {
      icon: TrendingUp,
      title: 'تحليل مخاطر الأعمال القانونية',
      description: 'تحليل شامل للمخاطر القانونية وتقديم الحلول الوقائية'
    },
    {
      icon: Target,
      title: 'دراسة آلية ومخرجات التعاملات',
      description: 'دراسة تفصيلية لآليات التعاملات القانونية ومخرجاتها'
    },
    {
      icon: Users,
      title: 'تأهيل الإدارات القانونية',
      description: 'تدريب وتأهيل الكوادر القانونية في الشركات والمؤسسات'
    },
    {
      icon: Settings,
      title: 'حوكمة الشركات',
      description: 'تطبيق معايير الحوكمة الرشيدة في إدارة الشركات'
    },
    {
      icon: Award,
      title: 'إعداد المذكرات واللوائح القانونية',
      description: 'إعداد المذكرات القانونية واللوائح التنظيمية المتخصصة'
    },
    {
      icon: Briefcase,
      title: 'لوائح تنظيم العمل',
      description: 'إعداد لوائح تنظيم العمل وفقاً للأنظمة السعودية'
    },
    {
      icon: Handshake,
      title: 'الامتياز التجاري',
      description: 'خدمات قانونية متكاملة في مجال الامتياز التجاري والفرنشايز'
    }
  ];

  const representationServices = [
    {
      icon: Building,
      title: 'تأسيس الشركات',
      description: 'تأسيس جميع أنواع الشركات وإدارة الشؤون القانونية'
    },
    {
      icon: Users,
      title: 'إدارة الشؤون القانونية للأفراد والشركات',
      description: 'إدارة شاملة للشؤون القانونية والمتابعة المستمرة'
    },
    {
      icon: Scale,
      title: 'التحصيل وتنفيذ الأحكام',
      description: 'خدمات التحصيل القانوني وتنفيذ الأحكام القضائية'
    },
    {
      icon: Gavel,
      title: 'تولي الترافع والتمثيل القضائي',
      description: 'تمثيل قانوني متخصص أمام جميع درجات المحاكم'
    },
    {
      icon: Heart,
      title: 'الأوقاف',
      description: 'خدمات قانونية متخصصة في مجال الأوقاف والوصايا'
    },
    {
      icon: Shield,
      title: 'الملكية الفكرية',
      description: 'حماية وتسجيل حقوق الملكية الفكرية والعلامات التجارية'
    },
    {
      icon: Target,
      title: 'المستثمر الأجنبي',
      description: 'خدمات قانونية للمستثمرين الأجانب في المملكة'
    },
    {
      icon: Handshake,
      title: 'التحكيم والوساطة',
      description: 'حل النزاعات عبر التحكيم والوساطة كبديل للتقاضي'
    },
    {
      icon: AlertTriangle,
      title: 'الإفلاس',
      description: 'إجراءات الإفلاس وإعادة التنظيم المالي وفقاً للأنظمة السعودية'
    },
    {
      icon: Trash2,
      title: 'تصفية الشركات',
      description: 'تصفية الشركات وإنهاء أعمالها وفقاً للإجراءات القانونية'
    },
    {
      icon: Home,
      title: 'تصفية التركات',
      description: 'تصفية التركات وتوزيع الميراث وفقاً للشريعة الإسلامية'
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
              خدماتنا <span className="text-brand-gold">القانونية</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات القانونية المتخصصة
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">خدمات الاستشارات القانونية</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationServices.map((service, index) => (
              <div
                key={index}
                className="bg-brand-beige rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate group border border-gray-100"
              >
                <div className="bg-white p-4 rounded-2xl w-fit mb-4 group-hover:bg-brand-gold transition-all duration-300">
                  <service.icon className="h-8 w-8 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representation Services */}
      <section className="py-16 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">خدمات التمثيل القانوني</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {representationServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate group border border-gray-100"
              >
                <div className="bg-brand-beige p-4 rounded-2xl w-fit mb-4 group-hover:bg-brand-gold transition-all duration-300">
                  <service.icon className="h-8 w-8 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-brand-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-3xl font-bold text-white mb-4">
              هل تحتاج إلى خدماتنا القانونية؟
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              تواصل معنا للحصول على استشارة قانونية متخصصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+966581000288"
                className="inline-flex items-center px-6 py-3 bg-white text-brand-gold hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
              >
                <span dir="ltr">اتصل بنا: +966 58 100 0288</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-brand-gold font-semibold rounded-lg transition-colors duration-300"
              >
                تواصل معنا
                <ArrowRight className="mr-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;