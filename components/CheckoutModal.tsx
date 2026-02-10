import React, { useState } from 'react';
import { X, CheckCircle, MapPin, User, Phone, MessageCircle } from 'lucide-react';
import { Product, OrderForm } from '../types';

interface CheckoutModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState<OrderForm>({
    name: '',
    city: '',
    phone: ''
  });

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "212649075664";
    const message = `*طلب جديد* 🛍️
    
*المنتج:* ${product.title}
*السعر:* ${product.price} درهم
    
*معلومات الزبون:*
👤 *الاسم:* ${formData.name}
📱 *الهاتف:* ${formData.phone}
📍 *المدينة:* ${formData.city}
    
يرجى تأكيد الطلب. شكراً!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setStep('success');
  };

  const handleClose = () => {
    setStep('form');
    setFormData({ name: '', city: '', phone: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        {step === 'form' ? (
          <div className="flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">إتمام الطلب</h2>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="overflow-y-auto p-6">
              {/* Product Summary */}
              <div className="flex items-center gap-4 bg-brand-50 p-4 rounded-xl border border-brand-100 mb-6">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm line-clamp-1">{product.title}</h3>
                  <p className="text-brand-600 font-bold">{product.price} درهم مغربي</p>
                </div>
              </div>

              {/* Form */}
              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                  <div className="relative">
                    <User className="absolute right-3 top-3 text-gray-400" size={18} />
                    <input
                      type="text"
                      required
                      className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none"
                      placeholder="أدخل اسمك"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-3 text-gray-400" size={18} />
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none text-right"
                      placeholder="06XXXXXXXX"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">المدينة</label>
                  <div className="relative">
                    <MapPin className="absolute right-3 top-3 text-gray-400" size={18} />
                    <select
                      required
                      className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none bg-white"
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                    >
                      <option value="">اختر مدينتك</option>
                      <option value="Casablanca">الدار البيضاء</option>
                      <option value="Rabat">الرباط</option>
                      <option value="Marrakech">مراكش</option>
                      <option value="Fes">فاس</option>
                      <option value="Tangier">طنجة</option>
                      <option value="Agadir">أكادير</option>
                      <option value="Meknes">مكناس</option>
                      <option value="Other">مدينة أخرى</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex flex-col gap-3">
              <button 
                type="submit" 
                form="checkout-form"
                className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold text-lg hover:bg-[#128C7E] active:scale-[0.98] transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                إرسال الطلب عبر واتساب
              </button>
              <p className="text-center text-xs text-gray-500">
                سيتم تحويلك إلى واتساب لإتمام عملية الطلب
              </p>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <MessageCircle className="text-[#25D366] w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">جاري التحويل للواتساب...</h3>
            <p className="text-gray-500 mb-8 max-w-xs">
              لإكمال الطلب، يرجى إرسال الرسالة التي تم تجهيزها تلقائياً عبر تطبيق واتساب.
            </p>
            <button 
              onClick={handleClose}
              className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors w-full"
            >
              مواصلة التسوق
            </button>
          </div>
        )}
      </div>
    </div>
  );
};