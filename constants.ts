import { Monitor, PlayCircle, GraduationCap, Gamepad2 } from 'lucide-react';
import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'streaming',
    name: 'اشتراكات البث',
    icon: PlayCircle,
    description: 'نتفليكس، شاهد، سبوتيفاي وغيرها'
  },
  {
    id: 'software',
    name: 'برامج وتطبيقات',
    icon: Monitor,
    description: 'ويندوز، أوفيس، برامج أدوبي'
  },
  {
    id: 'courses',
    name: 'دورات تعليمية',
    icon: GraduationCap,
    description: 'التجارة الإلكترونية، التسويق، البرمجة'
  },
  {
    id: 'games',
    name: 'ألعاب وبطاقات',
    icon: Gamepad2,
    description: 'شحن ألعاب، ستيم، بلايستيشن'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'اشتراك Netflix Premium - شهر واحد',
    price: 35,
    oldPrice: 65,
    category: 'streaming',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80',
    description: 'استمتع بمشاهدة أفلامك ومسلسلاتك المفضلة بجودة 4K Ultra HD. حساب خاص، يدعم الترجمة العربية، وضمان كامل المدة.',
    features: ['جودة 4K UHD', 'بدون إعلانات', 'ضمان 30 يوم', 'يعمل على التلفاز والهاتف']
  },
  {
    id: '2',
    title: 'Windows 11 Pro - مفتاح أصلي',
    price: 99,
    oldPrice: 250,
    category: 'software',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80',
    description: 'مفتاح تفعيل ويندوز 11 برو أصلي مدى الحياة. يدعم التحديثات الرسمية من مايكروسوفت وجميع اللغات.',
    features: ['تفعيل مدى الحياة', 'يدعم التحديثات', 'نسخة أصلية 100%', 'دعم النواتين 32/64']
  },
  {
    id: '3',
    title: 'دورة التجارة الإلكترونية الشاملة (Local E-com)',
    price: 499,
    oldPrice: 1500,
    category: 'courses',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    description: 'تعلم كيف تبدأ مشروعك في التجارة الإلكترونية في المغرب من الصفر حتى الاحتراف. تتضمن الدورة شرح التخزين، التوصيل، وفيسبوك أدس.',
    features: ['+20 ساعة فيديو', 'دعم فني وتوجيه', 'ملفات وخطط عمل', 'جروب خاص للمتدربين']
  },
  {
    id: '4',
    title: 'Microsoft Office 365 - سنة كاملة',
    price: 150,
    oldPrice: 400,
    category: 'software',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80',
    description: 'حزمة أوفيس 365 كاملة (Word, Excel, PowerPoint) مع مساحة تخزين سحابية 1TB على OneDrive.',
    features: ['5 أجهزة لنفس الحساب', 'مساحة 1TB سحابية', 'تحديثات مستمرة', 'يدعم الماك والويندوز']
  },
  {
    id: '5',
    title: 'Canva Pro - اشتراك مدى الحياة',
    price: 69,
    oldPrice: 200,
    category: 'software',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=800&q=80',
    description: 'احصل على جميع ميزات كانفا برو. قوالب غير محدودة، إزالة الخلفية، وصور احترافية. تفعيل على بريدك الإلكتروني الشخصي.',
    features: ['تفعيل على ايميلك', 'ضمان مدى الحياة', 'وصول كامل للمكتبة', 'Magic Resize']
  },
  {
    id: '6',
    title: 'دورة فيسبوك أدس المتقدمة 2024',
    price: 299,
    oldPrice: 600,
    category: 'courses',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'احترف إعلانات الفيسبوك وانستغرام. تعلم كيفية استهداف الجمهور الصحيح، كتابة المحتوى الإعلاني، وتحليل النتائج لزيادة المبيعات.',
    features: ['استراتيجيات الاستهداف', 'Scaling للحملات', 'حل مشاكل الحظر', 'تحديثات 2024']
  },
  {
    id: '7',
    title: 'IPTV Smarters - اشتراك 12 شهر',
    price: 200,
    oldPrice: 350,
    category: 'streaming',
    image: 'https://images.unsplash.com/photo-1593784991095-a20506948430?auto=format&fit=crop&w=800&q=80',
    description: 'أكثر من 10,000 قناة عالمية وعربية مشفرة ومفتوحة. مكتبة ضخمة من الأفلام والمسلسلات بجودة عالية وثبات في البث.',
    features: ['جميع القنوات الرياضية', 'مكتبة VOD ضخمة', 'ثبات 100%', 'دعم فني 24/7']
  },
  {
    id: '8',
    title: 'Adobe Creative Cloud - اشتراك 3 أشهر',
    price: 450,
    category: 'software',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
    description: 'اشتراك رسمي في جميع تطبيقات أدوبي (Photoshop, Illustrator, Premiere, etc). سحابة تخزينية وتحديثات رسمية.',
    features: ['كل تطبيقات أدوبي', 'تحديثات أصلية', 'مساحة سحابية', 'تفعيل رسمي']
  }
];