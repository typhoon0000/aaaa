import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="bg-white border-2 border-brand-gold p-2 rounded-lg">
                <img 
                  src="/public/68e23a59-9a0c-4f77-952f-785cc1ac872d_-------------------.webp" 
                  alt="وسم العدالة" 
                  className="h-6 w-6 object-contain"
                  onError={(e) => {
                    console.log('Footer image failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="text-right rtl:text-right pr-1">
                <h3 className="text-lg font-bold">وسم العدالة</h3>
                <p className="text-sm text-gray-400">للمحاماة والاستشارات القانونية</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              للمحاماة والاستشارات القانونية - نقدم خدمات قانونية متميزة بأعلى معايير الجودة والمهنية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">الرئيسية</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">من نحن</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">الخدمات</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold">معلومات التواصل</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span className="text-gray-400" dir="ltr">+966 58 100 0288</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span className="text-gray-400">info@wasm-aladala.com</span>
              </li>
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-brand-gold flex-shrink-0 mt-1" />
                <span className="text-gray-400">الرياض - الملقا - طريق أنس بن مالك</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold">تابعنا</h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-brand-gold transition-all duration-300 group">
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-brand-gold transition-all duration-300 group">
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-brand-gold transition-all duration-300 group">
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 وسم العدالة للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              سياسة الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;