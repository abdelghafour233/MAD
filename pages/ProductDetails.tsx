import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Zap, ShieldCheck, Check, Facebook, Link as LinkIcon, MessageCircle, Share2, Twitter, Send } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">المنتج غير موجود</h2>
          <Link to="/" className="text-brand-600 hover:underline">العودة للرئيسية</Link>
        </div>
      </div>
    );
  }

  // Sharing Logic
  const productUrl = `${window.location.origin}${window.location.pathname}#/product/${product.id}`;
  const text = encodeURIComponent(`شاهد هذا العرض المميز: ${product.title}`);
  const url = encodeURIComponent(productUrl);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(productUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBuy = () => {
    const phoneNumber = "212649075664";
    const message = `السلام عليكم، أريد شراء: ${product.title} بسعر ${product.price} درهم`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-600 transition">الرئيسية</Link>
          <span className="rotate-180">/</span>
          <Link to={`/category/${product.category}`} className="hover:text-brand-600 transition">
            {product.category === 'streaming' ? 'اشتراكات البث' : 
             product.category === 'software' ? 'برامج وتطبيقات' : 
             product.category === 'courses' ? 'دورات تعليمية' : 'ألعاب'}
          </Link>
          <span className="rotate-180">/</span>
          <span className="text-gray-900 font-bold">{product.title}</span>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="bg-gray-100 p-8 flex items-center justify-center relative group">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto max-h-[500px] object-contain shadow-2xl rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              {product.oldPrice && (
                <div className="absolute top-6 right-6 bg-red-500 text-white font-bold px-4 py-2 rounded-xl shadow-lg">
                  تخفيض {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-8 md:p-12 flex flex-col">
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">{product.title}</h1>
              
              <div className="flex items-end gap-4 mb-8">
                <span className="text-4xl font-black text-brand-600">{product.price} درهم</span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through mb-1">{product.oldPrice} درهم</span>
                )}
              </div>

              <div className="prose prose-lg text-gray-600 mb-8">
                <p>{product.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-3">مميزات المنتج:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0">
                        <Check size={12} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100 space-y-6">
                <button 
                  onClick={handleBuy}
                  className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#20b85a] transition-all flex items-center justify-center gap-3 shadow-lg shadow-gray-900/10 hover:shadow-brand-500/30 hover:-translate-y-1"
                >
                  <MessageCircle size={24} />
                  اطلب الآن عبر واتساب
                </button>
                
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center justify-center gap-2 bg-gray-50 py-2 rounded-lg">
                    <Zap size={16} className="text-brand-600" /> تسليم فوري للكود
                  </div>
                  <div className="flex items-center justify-center gap-2 bg-gray-50 py-2 rounded-lg">
                    <ShieldCheck size={16} className="text-brand-600" /> ضمان كامل المدة
                  </div>
                </div>

                {/* Sharing Section */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gray-700 font-bold mb-3">
                    <Share2 size={18} />
                    <span>شارك هذا المنتج مع أصدقائك</span>
                  </div>
                  <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3">
                    <a 
                      href={`https://wa.me/?text=${text}%20${url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:flex-1 bg-[#25D366] text-white py-2.5 px-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#20b85a] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <MessageCircle size={18} />
                      واتساب
                    </a>
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:flex-1 bg-[#1877F2] text-white py-2.5 px-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#166fe5] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <Facebook size={18} />
                      فيسبوك
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:flex-1 bg-[#1DA1F2] text-white py-2.5 px-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0c85d0] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <Twitter size={18} />
                      تويتر
                    </a>
                    <a 
                      href={`https://t.me/share/url?url=${url}&text=${text}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:flex-1 bg-[#229ED9] text-white py-2.5 px-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1f8rbc] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <Send size={18} />
                      تلغرام
                    </a>
                    <button 
                      onClick={handleCopyLink}
                      className="col-span-2 md:col-span-1 md:w-auto bg-white border border-gray-200 text-gray-600 p-2.5 rounded-xl hover:bg-gray-100 hover:text-gray-900 transition-all flex items-center justify-center shadow-sm"
                      title="نسخ الرابط"
                    >
                      {copied ? <Check size={20} className="text-green-500" /> : <LinkIcon size={20} />}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};