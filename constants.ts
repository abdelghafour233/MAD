import { Glasses, Watch, Car, LayoutGrid } from 'lucide-react';
import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'glasses',
    name: 'نظارات',
    icon: Glasses,
    description: 'أحدث صيحات النظارات الشمسية والطبية'
  },
  {
    id: 'watches',
    name: 'ساعات',
    icon: Watch,
    description: 'ساعات فاخرة وكاجوال لكل المناسبات'
  },
  {
    id: 'car-accessories',
    name: 'إكسسوارات السيارات',
    icon: Car,
    description: 'كل ما تحتاجه لسيارتك من كماليات'
  },
  {
    id: 'misc',
    name: 'منتجات متنوعة',
    icon: LayoutGrid,
    description: 'أدوات منزلية وهدايا مميزة'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'نظارة شمسية كلاسيكية',
    price: 299,
    oldPrice: 450,
    category: 'glasses',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    description: 'نظارة شمسية بتصميم عصري وحماية كاملة من الأشعة فوق البنفسجية UV400. إطار خفيف الوزن ومريح للاستخدام اليومي.',
    features: ['حماية UV400', 'إطار معدني متين', 'عدسات مقاومة للخدش']
  },
  {
    id: '2',
    title: 'ساعة رجالية فاخرة',
    price: 599,
    oldPrice: 899,
    category: 'watches',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
    description: 'ساعة يد رجالية بتصميم فخم، مقاومة للماء مع سوار جلدي أصلي.',
    features: ['مقاومة للماء 30 متر', 'زجاج ياقوتي', 'حركة كوارتز يابانية']
  },
  {
    id: '3',
    title: 'حامل هاتف للسيارة مغناطيسي',
    price: 89,
    category: 'car-accessories',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&q=80',
    description: 'حامل هاتف قوي يثبت على فتحة التكييف، يدور 360 درجة لسهولة الاستخدام أثناء القيادة.',
    features: ['مغناطيس قوي', 'دوران 360 درجة', 'سهل التركيب']
  },
  {
    id: '4',
    title: 'حقيبة ظهر ذكية',
    price: 350,
    category: 'misc',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    description: 'حقيبة ظهر متعددة الاستخدامات مع منفذ شحن USB ومكان مخصص للابتوب.',
    features: ['منفذ USB', 'مقاومة للماء', 'جيوب متعددة']
  },
  {
    id: '5',
    title: 'نظارة أفياتور ذهبية',
    price: 320,
    category: 'glasses',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    description: 'تصميم الطيار الكلاسيكي بإطار ذهبي وعدسات عاكسة.',
    features: ['تصميم كلاسيكي', 'وسادات أنف مريحة']
  },
  {
    id: '6',
    title: 'ساعة ذكية رياضية',
    price: 450,
    oldPrice: 700,
    category: 'watches',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
    description: 'تتبع نشاطك الرياضي ونبضات القلب مع هذه الساعة الذكية المتطورة.',
    features: ['تتبع الخطوات', 'قياس نبضات القلب', 'بطارية تدوم طويلاً']
  },
  {
    id: '7',
    title: 'مكنسة سيارة محمولة',
    price: 199,
    category: 'car-accessories',
    image: 'https://images.unsplash.com/photo-1552554378-2287950c4598?w=800&q=80',
    description: 'مكنسة قوية وصغيرة الحجم لتنظيف السيارة من الغبار والأوساخ بسهولة.',
    features: ['شفط قوي', 'ملحقات متعددة', 'سلك طويل']
  },
  {
    id: '8',
    title: 'سماعات بلوتوث لاسلكية',
    price: 220,
    category: 'misc',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    description: 'صوت نقي وعزل للضوضاء مع بطارية تدوم حتى 20 ساعة.',
    features: ['بلوتوث 5.0', 'عزل الضوضاء', 'شحن سريع']
  }
];
