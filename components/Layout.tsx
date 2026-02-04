import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Phone, Truck, ShieldCheck } from 'lucide-react';

export const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => location.pathname === path ? 'text-brand-600 font-bold' : 'text-gray-600 hover:text-brand-600';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Banner */}
      <div className="bg-brand-600 text-white text-xs py-2 px-4 text-center">
        <p>🎉 توصيل مجاني لجميع المدن عند الطلب بأكثر من 500 درهم</p>
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
              <ShoppingBag className="w-8 h-8" />
              <span>متجري</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={isActive('/')}>الرئيسية</Link>
            <Link to="/category/glasses" className={isActive('/category/glasses')}>نظارات</Link>
            <Link to="/category/watches" className={isActive('/category/watches')}>ساعات</Link>
            <Link to="/category/car-accessories" className={isActive('/category/car-accessories')}>إكسسوارات</Link>
            <Link to="/category/misc" className={isActive('/category/misc')}>متنوعة</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+212600000000" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-600">
              <Phone size={18} />
              <span>اتصل بنا</span>
            </a>
            <Link to="/" className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-700 transition shadow-lg shadow-brand-500/30">
              تسوق الآن
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-fade-in">
            <Link to="/" onClick={closeMenu} className="p-3 hover:bg-gray-50 rounded-lg">الرئيسية</Link>
            <Link to="/category/glasses" onClick={closeMenu} className="p-3 hover:bg-gray-50 rounded-lg">نظارات</Link>
            <Link to="/category/watches" onClick={closeMenu} className="p-3 hover:bg-gray-50 rounded-lg">ساعات</Link>
            <Link to="/category/car-accessories" onClick={closeMenu} className="p-3 hover:bg-gray-50 rounded-lg">إكسسوارات السيارات</Link>
            <Link to="/category/misc" onClick={closeMenu} className="p-3 hover:bg-gray-50 rounded-lg">منتجات متنوعة</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Features Banner */}
      <div className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
              <Truck size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">دفع عند الاستلام</h3>
            <p className="text-gray-500 text-sm">لا تدفع شيئاً حتى تستلم طلبك وتتأكد منه</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">ضمان الجودة</h3>
            <p className="text-gray-500 text-sm">جميع منتجاتنا أصلية ومضمونة 100%</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
              <Phone size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">دعم متواصل</h3>
            <p className="text-gray-500 text-sm">فريق خدمة العملاء جاهز لخدمتكم طوال الأسبوع</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShoppingBag className="text-brand-500" />
                متجري
              </h2>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                وجهتك الأولى للتسوق الإلكتروني في المغرب. نقدم أفضل المنتجات بجودة عالية وأسعار منافسة مع خدمة التوصيل السريع والدفع عند الاستلام.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-brand-500 transition">الرئيسية</Link></li>
                <li><Link to="/category/glasses" className="hover:text-brand-500 transition">النظارات</Link></li>
                <li><Link to="/category/watches" className="hover:text-brand-500 transition">الساعات</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2"><Phone size={16}/> 0600000000</li>
                <li className="flex items-center gap-2">الدار البيضاء، المغرب</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} جميع الحقوق محفوظة لمتجر الأناقة
          </div>
        </div>
      </footer>
    </div>
  );
};
