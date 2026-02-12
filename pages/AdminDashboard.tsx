import React, { useState, useEffect } from 'react';
import { Save, LayoutDashboard, Facebook, FileSpreadsheet, Type, CheckCircle, Code } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

export const AdminDashboard: React.FC = () => {
  const { 
    facebookPixelId, setFacebookPixelId,
    googleSheetUrl, setGoogleSheetUrl,
    bannerText, setBannerText,
    testEventCode, setTestEventCode
  } = useSettings();

  // Local state for form inputs
  const [localPixelId, setLocalPixelId] = useState('');
  const [localSheetUrl, setLocalSheetUrl] = useState('');
  const [localBannerText, setLocalBannerText] = useState('');
  const [localTestEventCode, setLocalTestEventCode] = useState('');
  const [saved, setSaved] = useState(false);

  // Initialize local state from context
  useEffect(() => {
    setLocalPixelId(facebookPixelId || '');
    setLocalSheetUrl(googleSheetUrl || '');
    setLocalBannerText(bannerText || '');
    setLocalTestEventCode(testEventCode || '');
  }, [facebookPixelId, googleSheetUrl, bannerText, testEventCode]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to Context (which saves to LocalStorage)
    setFacebookPixelId(localPixelId);
    setGoogleSheetUrl(localSheetUrl);
    setBannerText(localBannerText);
    setTestEventCode(localTestEventCode);

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 animate-fade-in">
      <div className="max-w-3xl mx-auto mb-20 md:mb-0"> {/* Added bottom margin for mobile button space */}
        <div className="flex items-center gap-3 mb-8">
          <LayoutDashboard className="text-brand-600 w-8 h-8" />
          <h1 className="text-3xl font-black text-gray-900">لوحة التحكم</h1>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          
          {/* Facebook Pixel Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4 text-[#1877F2]">
              <Facebook size={24} />
              <h2 className="text-xl font-bold text-gray-900">Facebook Pixel</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pixel ID</label>
                <input
                  type="text"
                  value={localPixelId}
                  onChange={(e) => setLocalPixelId(e.target.value)}
                  placeholder="Ex: 123456789012345"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1877F2] focus:border-[#1877F2] outline-none transition-all"
                />
                <p className="text-xs text-gray-500 mt-1">أدخل معرف البيكسل (ID) فقط. سيتم تفعيل التتبع تلقائياً.</p>
              </div>

              {/* Test Event Code Field */}
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-2 text-purple-600">
                   <Code size={18} />
                   <label className="block text-sm font-bold text-gray-700">Test Event Code</label>
                </div>
                <input
                  type="text"
                  value={localTestEventCode}
                  onChange={(e) => setLocalTestEventCode(e.target.value)}
                  placeholder="Ex: TEST12345"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                />
                <p className="text-xs text-gray-500 mt-1">كود اختبار الأحداث من فيسبوك (اختياري).</p>
              </div>
            </div>
          </div>

          {/* Google Sheets Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4 text-[#0F9D58]">
              <FileSpreadsheet size={24} />
              <h2 className="text-xl font-bold text-gray-900">Google Sheets Integration</h2>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Web App URL</label>
              <input
                type="text"
                value={localSheetUrl}
                onChange={(e) => setLocalSheetUrl(e.target.value)}
                placeholder="Ex: https://script.google.com/macros/s/..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0F9D58] focus:border-[#0F9D58] outline-none transition-all"
              />
              <p className="text-xs text-gray-500">رابط "Web App" من Google Apps Script. سيتم إرسال تفاصيل الطلب إليه عند ضغط الزبون على زر واتساب.</p>
            </div>
          </div>

          {/* Text Events / Banner Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4 text-brand-600">
              <Type size={24} />
              <h2 className="text-xl font-bold text-gray-900">Text Event (الشريط العلوي)</h2>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">نص الإعلان</label>
              <input
                type="text"
                value={localBannerText}
                onChange={(e) => setLocalBannerText(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
              />
              <p className="text-xs text-gray-500">النص الذي يظهر في الشريط العلوي للموقع.</p>
            </div>
          </div>

          <button
            type="submit"
            className="fixed bottom-6 left-6 right-6 md:relative md:bottom-auto md:left-auto md:right-auto md:w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-2 z-[100]"
          >
            {saved ? (
              <>
                <CheckCircle className="text-green-400" /> تم الحفظ بنجاح
              </>
            ) : (
              <>
                <Save /> حفظ الإعدادات
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};