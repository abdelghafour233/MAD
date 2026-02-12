import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Phone, Zap, ShieldCheck, MessageCircle, Monitor, Lock } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

export const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { bannerText } = useSettings();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => location.pathname === path ? 'text-brand-600 font-bold' : 'text-gray-600 hover:text-brand-600';
  const isAdmin = location.pathname === '/admin';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Banner - Dynamic Text */}
      <div className="bg-brand-600 text-white text-xs py-2 px-4 text-center">
        <p>{bannerText}</p>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="text-2xl font-black text-brand-600 flex items-center gap-2">
              <Monitor className="w-8 h-8" />
              <span>ديجيتال اوفيس</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={isActive('/')}>الرئيسية</Link>
            <Link to="/category/streaming" className={isActive('/category/streaming')}>اشتراكات</Link>
            <Link to="/category/software" className={isActive('/category/software')}>برامج</Link>
            <Link to="/category/courses" className={isActive('/category/courses')}>دورات</Link>
            <Link to="/category/games" className={isActive('/category/games')}>ألعاب</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/212649075664" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#25D366]">
              <MessageCircle size={18} />
              <span>الدعم الفني</span>
            </a>
            <Link to="/" className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-700 transition shadow-lg shadow-brand-500/30">
              تصفح العروض
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-fade-in">
            <Link to="/" onClick={closeMenu} className="p-3 hover:bg-gray-50 rounded-lg">الرئيسية</Link>
            <Link to="/category/streaming" onClick={closeMenu} className="p-3 hover:bg-gray-50 rounded-lg">اشتراكات البث</Link>
            <Link to="/category/software" onClick={closeMenu} className="p-3 hover:bg-gray-50 rounded-lg">برامج وتطبيقات</Link>
            <Link to="/category/courses" onClick={closeMenu} className="p-3 hover:bg-gray-50 rounded-lg">دورات تعليمية</Link>
            <Link to="/category/games" onClick={closeMenu} className="p-3 hover:bg-gray-50 rounded-lg">ألعاب</Link>
            <a href="https://wa.me/212649075664" target="_blank" rel="noopener noreferrer" className="p-3 hover:bg-gray-50 rounded-lg flex items-center gap-2 text-[#25D366]">
              <MessageCircle size={18} /> تواصل عبر واتساب
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Features Banner */}
      {!isAdmin && (
        <div className="bg-white border-t border-gray-100 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
                <Zap size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">تسليم فوري</h3>
              <p className="text-gray-500 text-sm">استلم كود التفعيل أو الاشتراك فوراً عبر الواتساب بعد تأكيد الدفع</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">ضمان الفعالية</h3>
              <p className="text-gray-500 text-sm">جميع مفاتيحنا أصلية 100% ونضمن لك العمل طوال فترة الاشتراك</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
                <MessageCircle size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">دعم فني 7/7</h3>
              <p className="text-gray-500 text-sm">فريقنا جاهز لمساعدتك في التفعيل وتثبيت البرامج في أي وقت</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button - Hide on Admin Page */}
      {!isAdmin && (
        <a
          href="https://wa.me/212649075664"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20b85a] transition-all animate-shake hover:animate-none flex items-center justify-center border-4 border-white ring-2 ring-gray-100"
          title="تواصل معنا عبر واتساب"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={32} fill="white" className="text-white" />
        </a>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Monitor className="text-brand-500" />
                ديجيتال اوفيس
              </h2>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                وجهتك الأولى للمنتجات الرقمية في المغرب. نوفر لك أفضل اشتراكات البث، مفاتيح الويندوز والأوفيس، والدورات التعليمية بأفضل الأسعار.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-brand-500 transition">الرئيسية</Link></li>
                <li><Link to="/category/streaming" className="hover:text-brand-500 transition">نتفليكس و شاهد</Link></li>
                <li><Link to="/category/courses" className="hover:text-brand-500 transition">كورسات E-com</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone size={16}/> 
                  <a href="tel:0649075664" className="hover:text-white transition">0649075664</a>
                </li>
                <li className="flex items-center gap-2">الدفع: تحويل بنكي / كاش بلس / الواتساب</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex items-center justify-between text-gray-500 text-sm">
            <span>© {new Date().getFullYear()} جميع الحقوق محفوظة لمتجر ديجيتال اوفيس</span>
            <Link to="/admin" className="opacity-40 hover:opacity-100 transition-opacity p-2" title="Admin Panel">
              <Lock size={16} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};