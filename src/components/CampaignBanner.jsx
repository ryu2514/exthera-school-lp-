import React from 'react';
import { campaign, isCampaignActive } from '../config/campaign';

const CampaignBanner = () => {
  if (!isCampaignActive()) return null;

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const lowCapacity = campaign.remainingCount <= 10;

  const styles = {
    wrapper: {
      background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 45%, #2563eb 100%)',
      color: '#fff',
      padding: '14px 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 14px rgba(30, 58, 138, 0.35)',
      cursor: 'pointer',
      borderBottom: '3px solid #fbbf24',
    },
    inner: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px 24px',
      textAlign: 'center',
    },
    label: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: '#fbbf24',
      color: '#7c2d12',
      padding: '6px 14px',
      borderRadius: '999px',
      fontWeight: 900,
      fontSize: '0.95rem',
      letterSpacing: '0.02em',
      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    },
    tile: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px',
      background: 'rgba(0,0,0,0.18)',
      padding: '6px 16px',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.25)',
    },
    tileUrgent: {
      background: 'rgba(251, 191, 36, 0.25)',
      border: '1px solid #fbbf24',
      animation: 'campaignPulse 1.8s ease-in-out infinite',
    },
    tileLabel: {
      fontSize: '0.78rem',
      fontWeight: 700,
      opacity: 0.92,
      letterSpacing: '0.04em',
    },
    tileNumber: {
      fontSize: '1.9rem',
      fontWeight: 900,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      textShadow: '0 2px 6px rgba(0,0,0,0.25)',
    },
    tileUnit: {
      fontSize: '0.9rem',
      fontWeight: 800,
      opacity: 0.95,
    },
  };

  return (
    <>
      <style>{`
        @keyframes campaignPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.55); }
          50% { transform: scale(1.04); box-shadow: 0 0 0 8px rgba(251, 191, 36, 0); }
        }
      `}</style>
      <div style={styles.wrapper} onClick={scrollToPricing} role="button" tabIndex={0}>
        <div className="container" style={styles.inner}>
          <span style={styles.label}>{campaign.label}</span>
          <div style={{ ...styles.tile, ...(lowCapacity ? styles.tileUrgent : {}) }}>
            <span style={styles.tileLabel}>残席</span>
            <span style={styles.tileNumber}>{campaign.remainingCount}</span>
            <span style={styles.tileUnit}>/ {campaign.capacityTotal}名</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignBanner;
