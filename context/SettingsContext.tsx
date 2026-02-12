import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

interface SettingsContextType {
  facebookPixelId: string;
  setFacebookPixelId: (id: string) => void;
  googleSheetUrl: string;
  setGoogleSheetUrl: (url: string) => void;
  bannerText: string;
  setBannerText: (text: string) => void;
  testEventCode: string;
  setTestEventCode: (code: string) => void;
  trackEvent: (eventName: string, data?: any) => void;
  sendOrderToSheet: (orderData: any) => Promise<void>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

// Helper to safe get from localStorage
const getStorageItem = (key: string, defaultValue: string) => {
  try {
    return localStorage.getItem(key) || defaultValue;
  } catch (e) {
    console.warn('LocalStorage access denied', e);
    return defaultValue;
  }
};

// Helper to safe set to localStorage
const setStorageItem = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn('LocalStorage access denied', e);
  }
};

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [facebookPixelId, setFacebookPixelIdState] = useState(() => getStorageItem('fb_pixel_id', ''));
  const [googleSheetUrl, setGoogleSheetUrlState] = useState(() => getStorageItem('google_sheet_url', ''));
  const [bannerText, setBannerTextState] = useState(() => getStorageItem('banner_text', '🚀 تسليم فوري لجميع الأكواد والاشتراكات عبر واتساب بعد الدفع مباشرة'));
  const [testEventCode, setTestEventCodeState] = useState(() => getStorageItem('test_event_code', ''));

  const setFacebookPixelId = (id: string) => {
    setFacebookPixelIdState(id);
    setStorageItem('fb_pixel_id', id);
  };

  const setGoogleSheetUrl = (url: string) => {
    setGoogleSheetUrlState(url);
    setStorageItem('google_sheet_url', url);
  };

  const setBannerText = (text: string) => {
    setBannerTextState(text);
    setStorageItem('banner_text', text);
  };

  const setTestEventCode = (code: string) => {
    setTestEventCodeState(code);
    setStorageItem('test_event_code', code);
  };

  // Initialize Facebook Pixel
  useEffect(() => {
    if (facebookPixelId) {
      // Standard Facebook Pixel Code
      // @ts-ignore
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');
      
      try {
        window.fbq('init', facebookPixelId);
        window.fbq('track', 'PageView');
        console.log('✅ Facebook Pixel Initialized:', facebookPixelId);
      } catch (e) {
        console.error('Error initializing Pixel:', e);
      }
    }
  }, [facebookPixelId]);

  const trackEvent = (eventName: string, data: any = {}) => {
    if (facebookPixelId && window.fbq) {
      // Combine existing data with test_event_code if present
      const eventData = { ...data };
      if (testEventCode) {
         eventData.test_event_code = testEventCode;
         console.log(`🧪 Adding Test Event Code to payload: ${testEventCode}`);
      }
      
      window.fbq('track', eventName, eventData);
      console.log(`📡 Pixel Event: ${eventName}`, eventData);
    } else {
      console.log(`⚠️ Pixel Event (Mock): ${eventName}`, data);
    }
  };

  const sendOrderToSheet = async (orderData: any) => {
    if (!googleSheetUrl) {
        console.warn('⚠️ No Google Sheet URL configured');
        return;
    }

    try {
      console.log('📝 Sending order to sheet...', orderData);
      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      console.log('✅ Order sent to Google Sheet (no-cors)');
    } catch (error) {
      console.error('❌ Failed to send to Google Sheet', error);
    }
  };

  return (
    <SettingsContext.Provider value={{
      facebookPixelId,
      setFacebookPixelId,
      googleSheetUrl,
      setGoogleSheetUrl,
      bannerText,
      setBannerText,
      testEventCode,
      setTestEventCode,
      trackEvent,
      sendOrderToSheet
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};