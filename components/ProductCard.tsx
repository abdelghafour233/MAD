import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, Facebook, Link as LinkIcon, MessageCircle, Check, Twitter, Send } from 'lucide-react';
import { Product } from '../types';
import { useSettings } from '../context/SettingsContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [copied, setCopied] = useState(false);
  const { trackEvent } = useSettings();

  const productUrl = `${window.location.origin}${window.location.pathname}#/product/${product.id}`;
  const text = encodeURIComponent(`شاهد هذا العرض المميز: ${product.title}`);
  const url = encodeURIComponent(productUrl);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(productUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBuy = () => {
    // Facebook Pixel Track
    trackEvent('InitiateCheckout', {
      content_name: product.title,
      content_id: product.id,
      value: product.price,
      currency: 'MAD'
    });

    const phoneNumber = "212649075664";
    const message = `السلام عليكم، أريد شراء: ${product.title} بسعر ${product.price} درهم`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {product.oldPrice && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            تخفيض {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </span>
        )}
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Link 
            to={`/product/${product.id}`}
            className="bg-white text-gray-900 p-3 rounded-full hover:bg-brand-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
            title="عرض التفاصيل"
          >
            <Eye size={20} />
          </Link>
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-brand-600 transition-colors">
            {product.title}
          </h3>
        </Link>
        
        <div className="mt-auto pt-2 flex items-center justify-between mb-3">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                {product.oldPrice} د.م.
              </span>
            )}
            <span className="text-lg font-black text-brand-600">
              {product.price} د.م.
            </span>
          </div>
          
          <button 
            onClick={handleBuy}
            className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-brand-600 transition-colors flex items-center gap-1"
          >
            <MessageCircle size={14} />
            شراء
          </button>
        </div>

        {/* Share Buttons Footer */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-center gap-2">
            <span className="text-[10px] text-gray-400 font-medium ml-1">مشاركة:</span>
            
            <a 
              href={`https://wa.me/?text=${text}%20${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all shadow-sm"
              title="مشاركة عبر واتساب"
            >
              <MessageCircle size={16} />
            </a>
            
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all shadow-sm"
              title="مشاركة عبر فيسبوك"
            >
              <Facebook size={16} />
            </a>
            
            <a 
              href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all shadow-sm"
              title="مشاركة عبر تويتر"
            >
              <Twitter size={16} />
            </a>
            
            <a 
              href={`https://t.me/share/url?url=${url}&text=${text}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#229ED9] text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all shadow-sm"
              title="مشاركة عبر تلغرام"
            >
              <Send size={16} />
            </a>
            
            <button 
              onClick={handleCopyLink}
              className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all hover:bg-gray-50 ${copied ? 'text-green-600 border-green-200 bg-green-50' : 'text-gray-500'}`}
              title="نسخ الرابط"
            >
              {copied ? <Check size={16} /> : <LinkIcon size={16} />}
            </button>
        </div>
      </div>
    </div>
  );
};