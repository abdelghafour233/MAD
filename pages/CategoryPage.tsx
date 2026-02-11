import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const category = CATEGORIES.find(c => c.id === id);
  const products = PRODUCTS.filter(p => p.category === id);

  if (!category) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-gray-500">
        القسم غير موجود
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 mb-12 shadow-sm text-center">
          <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <category.icon size={40} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{category.name}</h1>
          <p className="text-gray-500 max-w-xl mx-auto">{category.description}</p>
        </div>

        {/* Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">لا توجد منتجات في هذا القسم حالياً.</p>
          </div>
        )}
      </div>
    </div>
  );
};