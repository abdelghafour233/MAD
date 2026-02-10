import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { CheckoutModal } from '../components/CheckoutModal';
import { Product } from '../types';

export const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" 
            alt="Digital World Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
              خدمات رقمية مميزة
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              طور حياتك <br/>
              <span className="text-brand-500">الرقمية والمهنية</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
              احصل على اشتراكات بريميوم، برامج أصلية، ودورات تعليمية احترافية في التجارة الإلكترونية. تسليم فوري وضمان شامل.
            </p>
            <div className="flex gap-4">
              <a href="#categories" className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                تصفح الخدمات
              </a>
              <a href="#featured" className="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-colors">
                العروض الخاصة
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">ماذا نقدم؟</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link 
                key={cat.id} 
                to={`/category/${cat.id}`}
                className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-brand-600 hover:text-white transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 shadow-md group-hover:scale-110 transition-transform">
                  <cat.icon size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">{cat.name}</h3>
                <p className="text-xs text-gray-500 group-hover:text-brand-100">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">الأكثر مبيعاً</h2>
              <div className="w-20 h-1 bg-brand-500 rounded-full"></div>
            </div>
            <Link to="/category/streaming" className="hidden md:flex items-center gap-2 text-brand-600 font-bold hover:gap-4 transition-all">
              عرض الكل <ArrowLeft size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBuyNow={setSelectedProduct} 
              />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/category/streaming" className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-colors">
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>

      <CheckoutModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};