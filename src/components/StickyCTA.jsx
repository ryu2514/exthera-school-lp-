import React, { useEffect, useState } from 'react';
import { campaign, isCampaignActive } from '../config/campaign';
import { TRIAL_URL } from '../config/links';

const StickyCTA = () => {
  const active = isCampaignActive();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.school-hero');
    if (!hero) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0.08 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`sticky-cta${isVisible ? ' sticky-cta--visible' : ''}`}>
      <div className="container sticky-cta__inner">
        <span className="sticky-cta__label">
          Exthera-School
          {active && (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginLeft: '10px',
              background: 'var(--brand)',
              color: '#fff',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              verticalAlign: 'middle',
              boxShadow: '0 2px 6px rgba(26, 152, 213, 0.35)',
            }}>
              残席<span style={{ fontSize: '1.05rem', fontWeight: 900 }}>{campaign.remainingCount}</span>名
            </span>
          )}
        </span>
        <a href={TRIAL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">7日間無料体験</a>
      </div>
    </div>
  );
};

export default StickyCTA;
