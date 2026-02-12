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
  trackEvent: (eventName: string, data?: any) => void;
  sendOrderToSheet: (orderData: any) => Promise<void>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Load settings from localStorage or use defaults
  const [facebookPixelId, setFacebookPixelIdState] = useState(() => localStorage.getItem('fb_pixel_id') || '');
  const [googleSheetUrl, setGoogleSheetUrlState] = useState(() => localStorage.getItem('google_sheet_url') || '');
  const [bannerText, setBannerTextState] = useState(() => localStorage.getItem('banner_text') || '🚀 تسليم فوري لجميع الأكواد والاشتراكات عبر واتساب بعد الدفع مباشرة');

  // Update localStorage when state changes
  const setFacebookPixelId = (id: string) => {
    setFacebookPixelIdState(id);
    localStorage.setItem('fb_pixel_id', id);
  };

  const setGoogleSheetUrl = (url: string) => {
    setGoogleSheetUrlState(url);
    localStorage.setItem('google_sheet_url', url);
  };

  const setBannerText = (text: string) => {
    setBannerTextState(text);
    localStorage.setItem('banner_text', text);
  };

  // Initialize Facebook Pixel
  useEffect(() => {
    if (facebookPixelId) {
      // @ts-ignore
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');
      
      window.fbq('init', facebookPixelId);
      window.fbq('track', 'PageView');
    }
  }, [facebookPixelId]);

  const trackEvent = (eventName: string, data?: any) => {
    if (facebookPixelId && window.fbq) {
      window.fbq('track', eventName, data);
      console.log(`📡 Pixel Event: ${eventName}`, data);
    }
  };

  const sendOrderToSheet = async (orderData: any) => {
    if (!googleSheetUrl) return;

    try {
      // Using no-cors mode for Google Apps Script Web App
      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      console.log('📝 Order sent to Google Sheet');
    } catch (error) {
      console.error('Failed to send to Google Sheet', error);
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