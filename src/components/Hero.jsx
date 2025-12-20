import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const styles = {
    hero: {
      padding: '3rem 0 5rem',
      background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.10) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(59, 130, 246, 0.06) 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    heroBefore: {
      content: '""',
      position: 'absolute',
      width: '420px',
      height: '420px',
      right: '-120px',
      top: '-120px',
      borderRadius: '50%',
      background: 'radial-gradient(closest-side, rgba(59,130,246,.12), transparent)',
      pointerEvents: 'none',
    },
    heroGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 960 ? '1.1fr .9fr' : '1fr',
      gap: '2rem',
      alignItems: 'center',
    },
    prehead: {
      color: 'var(--text-secondary)',
      fontWeight: 700,
      letterSpacing: '.2px',
    },
    title: {
      margin: '.75rem 0 1rem',
      color: 'var(--text-primary)',
    },
    titleEm: {
      background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: {
      color: 'var(--text-secondary)',
      fontSize: 'clamp(1.05rem, 1.5vw, 1.15rem)',
    },
    heroCta: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      margin: '1.5rem 0 1rem',
      flexWrap: 'wrap',
    },
    btnPill: {
      borderRadius: '9999px',
      padding: '12px 18px',
      fontWeight: 800,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    btnGrad: {
      color: '#fff',
      background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
      boxShadow: 'var(--shadow-lg)',
    },
    btnOutline: {
      border: '2px solid #cfe3ff',
      color: '#2563eb',
      background: '#f0f6ff',
    },
    badges: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 480 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: window.innerWidth <= 480 ? '10px' : '12px',
      marginTop: '2rem',
    },
    badgeCircle: {
      width: window.innerWidth <= 480 ? '90px' : '110px',
      height: window.innerWidth <= 480 ? '90px' : '110px',
      borderRadius: '9999px',
      border: window.innerWidth <= 480 ? '3px solid #60a5fa' : '4px solid #60a5fa',
      background: 'linear-gradient(145deg, #ffffff 0%, #f0f6ff 100%)',
      boxShadow: '0 8px 24px rgba(59, 130, 246, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.9), 0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: window.innerWidth <= 480 ? '6px' : '8px',
      transform: 'translateY(0)',
      transition: 'all 0.3s ease',
      fontSize: window.innerWidth <= 480 ? '0.7rem' : '0.8rem',
    },
    badgeStrong: {
      color: '#2563eb',
      fontSize: window.innerWidth <= 480 ? '1.1rem' : '1.5rem',
      fontWeight: 800,
      textShadow: '0 1px 2px rgba(37, 99, 235, 0.2)',
    },
    visual: {
      position: 'relative',
    },
    frame: {
      borderRadius: '24px',
      border: '10px solid #e6f0ff',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
    },
  };

  return (
    <section style={styles.hero}>
      <div style={styles.heroBefore} />
      <div className="container" style={styles.heroGrid}>
        <div>
          <div style={styles.prehead}>セラピスト向け運動療法オンラインスクール</div>
          <h1 style={{
            ...styles.title,
            fontSize: window.innerWidth <= 480 ? '1.6rem' : 'clamp(2.2rem, 3.8vw, 3.2rem)',
            lineHeight: 1.3,
            fontWeight: 800
          }}>
            臨床力が身につく<br />
            <span style={styles.titleEm}>体系化された学び</span>で<br />
            運動療法を習得しよう！
          </h1>
          <p style={{
            ...styles.subtitle,
            color: 'var(--text-secondary)'
          }}>体系化×ライブ×コミュニティで、迷わない臨床を最短ルートで。</p>
          <div style={styles.heroCta}>
            <button
              onClick={() => window.open('https://utage-system.com/page/dMEvmGc3X5Rz', '_blank')}
              style={{ ...styles.btnPill, ...styles.btnGrad }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'var(--shadow-lg)';
              }}
            >
              無料で体験する
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              style={{ ...styles.btnPill, ...styles.btnOutline }}
            >
              選ばれる理由を見る
            </button>
          </div>
          <div style={styles.badges}>
            <div style={styles.badgeCircle}>
              <div><strong style={styles.badgeStrong}>150名+</strong><br />会員数</div>
            </div>
            <div style={styles.badgeCircle}>
              <div><strong style={styles.badgeStrong}>40本+</strong><br />セミナー本数</div>
            </div>
            <div style={styles.badgeCircle}>
              <div><strong style={styles.badgeStrong}>見放題</strong><br />アーカイブ</div>
            </div>
            <div style={styles.badgeCircle}>
              <div><strong style={styles.badgeStrong}>2500人+</strong><br /><span style={{ fontSize: '0.7rem' }}>年間セミナー受講</span></div>
            </div>
          </div>
        </div>
        <div style={styles.visual}>
          <div style={styles.frame}>
            <img src="/assets/1.png" alt="Exthera School オンラインスクール" style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
