import { useEffect } from 'react';

const GoogleAnalytics = ({ measurementId }) => {
  useEffect(() => {
    if (!measurementId) return;

    // Google Analytics script を動的に追加
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // gtag function を初期化
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId);

    // cleanup
    return () => {
      document.head.removeChild(script1);
    };
  }, [measurementId]);

  return null;
};

export default GoogleAnalytics;