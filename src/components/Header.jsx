import React from 'react';

const Header = () => {
  const openTrial = (e) => {
    e.preventDefault();
    window.open('https://exthera-school.com/in-school/', '_blank');
  };

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
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontWeight: 800,
      letterSpacing: '.2px',
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
      padding: window.innerWidth <= 480 ? '6px 10px' : '8px 14px',
      borderRadius: '9999px',
      border: '2px solid #cfe3ff',
      color: '#2563eb',
      background: '#f0f6ff',
      fontWeight: 700,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      fontSize: window.innerWidth <= 480 ? '12px' : '14px',
    },
    ctaPill: {
      padding: window.innerWidth <= 480 ? '8px 12px' : '10px 16px',
      borderRadius: '9999px',
      color: '#fff',
      background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
      boxShadow: 'var(--shadow-md)',
      fontWeight: 700,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      fontSize: window.innerWidth <= 480 ? '12px' : '14px',
    },
    navActions: {
      display: 'flex',
      gap: window.innerWidth <= 480 ? '6px' : '10px',
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
        <nav style={{ ...styles.nav, ...(window.innerWidth <= 860 && { display: 'none' }) }}>
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
            href="#"
            onClick={openTrial}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = 'var(--shadow-lg)';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = 'var(--shadow-md)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            無料で体験する
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

