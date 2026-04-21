import React, { useEffect, useState } from 'react';
import { campaign, getDaysRemaining, isCampaignActive } from '../config/campaign';

const StickyCTA = () => {
  const [daysRemaining, setDaysRemaining] = useState(getDaysRemaining());

  useEffect(() => {
    const timer = setInterval(() => setDaysRemaining(getDaysRemaining()), 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const active = isCampaignActive();

  return (
    <div className="sticky-cta">
      <div className="container sticky-cta__inner">
        <span className="sticky-cta__label">
          Exthera-School
          {active && (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginLeft: '10px',
              background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
              color: '#fff',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              verticalAlign: 'middle',
              boxShadow: '0 2px 6px rgba(30, 58, 138, 0.35)',
            }}>
              残<span style={{ fontSize: '1.05rem', fontWeight: 900 }}>{daysRemaining}</span>日
              <span style={{ opacity: 0.7 }}>|</span>
              残席<span style={{ fontSize: '1.05rem', fontWeight: 900 }}>{campaign.remainingCount}</span>名
            </span>
          )}
        </span>
        <a href="#" onClick={(e) => { e.preventDefault(); window.open('https://exthera-school.com/in-school/', '_blank'); }} className="btn btn-primary">7日間無料体験</a>
      </div>
    </div>
  );
};

export default StickyCTA;

