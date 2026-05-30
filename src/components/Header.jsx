import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { TRIAL_URL } from '../config/links';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isCompact = useMediaQuery('(max-width: 480px)');
  const hideNav = useMediaQuery('(max-width: 860px)');

  const styles = {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#fff',
      borderBottom: '1px solid var(--gray-200)',
      backdropFilter: 'saturate(150%) blur(4px)',
    },
    headerRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px',
      gap: '0.75rem',
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontWeight: 800,
      letterSpacing: '.2px',
      minWidth: 0,
      flexShrink: 1,
    },
    brandMark: {
      width: '26px',
      height: '26px',
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px',
      fontSize: '14px',
    },
    navLink: {
      color: 'var(--text-secondary)',
      textDecoration: 'none',
    },
    login: {
      display: isMobile ? 'none' : 'inline-flex',
      padding: '8px 14px',
      borderRadius: '9999px',
      border: '2px solid #cfe3ff',
      color: '#2563eb',
      background: '#f0f6ff',
      fontWeight: 700,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      fontSize: '14px',
    },
    ctaPill: {
      padding: isMobile ? '8px 10px' : '10px 16px',
      borderRadius: '9999px',
      color: '#fff',
      background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
      boxShadow: 'var(--shadow-md)',
      fontWeight: 700,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      fontSize: isMobile ? '12px' : '14px',
    },
    navActions: {
      display: 'flex',
      gap: isCompact ? '6px' : '10px',
      alignItems: 'center',
      flexShrink: 0,
    },
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.headerRow}>
        <div style={styles.brand}>
          <img src="/assets/logo.png" alt="Exthera-School" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          <span>Exthera-School</span>
        </div>
        <nav style={{ ...styles.nav, ...(hideNav && { display: 'none' }) }}>
          <a href="#curriculum" style={styles.navLink}>コース一覧</a>
          <a href="#benefits" style={styles.navLink}>選ばれる理由</a>
          <a href="#faq" style={styles.navLink}>よくある質問</a>
        </nav>
        <div style={styles.navActions}>
          <a
            style={styles.login}
            href="https://exthera-school.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ログイン
          </a>
          <a
            style={styles.ctaPill}
            href={TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => {
              e.target.style.boxShadow = 'var(--shadow-lg)';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = 'var(--shadow-md)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {isMobile ? '無料体験' : '無料で体験する'}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
