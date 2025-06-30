import React, { useEffect } from 'react';
import { 
  Users, 
  Award, 
  Target, 
  Eye,
  CheckCircle,
  User,
  GraduationCap,
  Briefcase,
  Shield,
  Lightbulb,
  Heart
} from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Award,
      title: 'الجودة',
      description: 'نلتزم بتقديم أعلى معايير الجودة في جميع خدماتنا القانونية'
    },
    {
      icon: Shield,
      title: 'الثقة',
      description: 'نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة والشفافية'
    },
    {
      icon: Heart,
      title: 'المسؤولية',
      description: 'نتحمل المسؤولية الكاملة تجاه عملائنا ونضمن حماية مصالحهم'
    },
    {
      icon: Lightbulb,
      title: 'الابتكار',
      description: 'نقدم حلول قانونية مبتكرة تواكب التطورات الحديثة'
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
              من <span className="text-brand-gold">نحن</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              وسم العدالة للمحاماة والاستشارات القانونية
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">من نحن</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  تفتخر شركة وسم العدالة للمحاماة والاستشارات القانونية بتقديم مجموعة واسعة من الخدمات القانونية 
                  المتكاملة والموثوقة التي تلبي احتياجات عملائنا في مختلف القطاعات.
                </p>
                <p>
                  نحن نعمل على توفير حلول قانونية مبتكرة ومصممة خصيصاً لتلبية متطلبات الأفراد والشركات على حد سواء، 
                  مما يساعدهم في تحقيق أهدافهم بسهولة وكفاءة.
                </p>
                <p>
                  تتميز خدماتنا بالاهتمام بأدق التفاصيل، مما يتيح لنا تقديم استشارات قانونية شاملة تساهم في تحسين 
                  تجربة العملاء. نهدف إلى تقديم حلول عملية تواكب التطورات القانونية، مما يوفر الوقت والجهد ويخفض 
                  التكاليف، مع ضمان تحقيق أفضل النتائج التي تخدم مصالح عملائنا بأعلى مستوى من الاحترافية.
                </p>
              </div>
            </div>
            <div className="scroll-animate">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Law office"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">وسم العدالة</h3>
                  <p className="text-sm opacity-90">للمحاماة والاستشارات القانونية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate">
              <div className="flex items-center mb-6">
                <div className="bg-brand-beige p-3 rounded-lg">
                  <Eye className="h-8 w-8 text-brand-gold" />
                </div>
                <div className="mr-4">
                  <h3 className="text-2xl font-bold text-gray-900">رؤيتنا</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                نسعى إلى أن تكون الخيار الأول للعملاء في تقديم حلول قانونية مبتكرة وفعالة، تلبي احتياجاتهم 
                بأعلى معايير الجودة والاحترافية. نهدف إلى تحقيق الريادة في مجالنا من خلال تقديم خدمات قانونية 
                متكاملة، تتسم بالموثوقية والشفافية، مما يعزز ثقة عملائنا ويحقق لهم أفضل النتائج.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate">
              <div className="flex items-center mb-6">
                <div className="bg-brand-beige p-3 rounded-lg">
                  <Target className="h-8 w-8 text-brand-gold" />
                </div>
                <div className="mr-4">
                  <h3 className="text-2xl font-bold text-gray-900">رسالتنا</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                تهدف شركة وسم العدالة للمحاماة والاستشارات القانونية إلى تقديم خدمات قانونية متميزة تراعي 
                احتياجات عملائنا وتلبي توقعاتهم، مع الالتزام بأعلى معايير النزاهة والشفافية. نسعى من خلال فريقنا 
                المتخصص إلى تقديم استشارات وحلول قانونية مبتكرة تساعد في حماية مصالح عملائنا وتحقيق أهدافهم 
                بفعالية. نحن نؤمن بأهمية بناء علاقات طويلة الأمد مع عملائنا، مع تقديم الدعم القانوني المستمر 
                الذي يضمن لهم النجاح والازدهار في بيئة قانونية معقدة ومتغيرة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قيمنا الأساسية</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 scroll-animate"
              >
                <div className="bg-brand-beige w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold transition-all duration-300">
                  <value.icon className="h-10 w-10 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              تواصل معنا اليوم
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              نحن هنا لمساعدتك في جميع احتياجاتك القانونية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+966581000288"
                className="inline-flex items-center px-6 py-3 bg-white text-brand-gold hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
              >
                <span dir="ltr">اتصل بنا: +966 58 100 0288</span>
              </a>
              <a
                href="mailto:info@wasm-aladala.com"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-brand-gold font-semibold rounded-lg transition-colors duration-300"
              >
                راسلنا عبر البريد الإلكتروني
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;