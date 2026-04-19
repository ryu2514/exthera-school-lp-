import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

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
      marginBottom: '0.5rem',
    },
    animatedLine: {
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '6px',
    },
    underline: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      height: '4px',
      background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
      borderRadius: '2px',
      width: animate ? '100%' : '0%',
      transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    underlineBlue: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      height: '5px',
      background: 'linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)',
      borderRadius: '3px',
      width: animate ? '100%' : '0%',
      transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDelay: '0.2s',
    },
    underlineLast: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      height: '4px',
      background: 'linear-gradient(90deg, #1d4ed8 0%, #3b82f6 100%)',
      borderRadius: '2px',
      width: animate ? '100%' : '0%',
      transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDelay: '0.4s',
    },
    titleEm: {
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
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
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '10px',
      marginTop: '1.5rem',
    },
    badgeCircle: {
      borderRadius: '16px',
      background: 'linear-gradient(145deg, #ffffff 0%, #e8f0fe 100%)',
      boxShadow: '10px 10px 20px rgba(37, 99, 235, 0.2), -6px -6px 16px rgba(255, 255, 255, 1), inset 0 2px 0 rgba(255, 255, 255, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      textAlign: 'center',
      padding: '14px 12px',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '0.8rem',
      border: '1px solid rgba(59, 130, 246, 0.1)',
      whiteSpace: 'nowrap',
    },
    badgeAnimated: (index) => ({
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(20px)',
      transitionDelay: `${0.6 + index * 0.1}s`,
    }),
    badgeStrong: {
      color: '#2563eb',
      fontSize: window.innerWidth <= 480 ? '1.4rem' : '1.5rem',
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
            fontSize: window.innerWidth <= 480 ? '1.85rem' : 'clamp(2.2rem, 3.8vw, 3.2rem)',
            lineHeight: 1.4,
            fontWeight: 800,
            color: '#1e293b',
            margin: '.75rem 0 1rem',
          }}>
            <span style={styles.animatedLine}>
              評価から介入まで、
              <span style={styles.underline} />
            </span>
            <br />
            <span style={{ ...styles.animatedLine, paddingBottom: '8px' }}>
              <span style={styles.titleEm}>迷わない臨床</span>を
              <span style={styles.underlineBlue} />
            </span>
            <br />
            <span style={styles.animatedLine}>
              若手のうちに習得する。
              <span style={styles.underlineLast} />
            </span>
          </h1>
          <p style={{
            ...styles.subtitle,
            color: 'var(--text-secondary)'
          }}>体系化された学び × ライブ × コミュニティ。若手でも、根拠を持って運動療法を組み立てられる。</p>
          <div style={styles.heroCta}>
            <button
              onClick={() => window.open('https://exthera-school.com/in-school/', '_blank')}
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
            <div style={{ ...styles.badgeCircle, ...styles.badgeAnimated(0) }}>
              <strong style={styles.badgeStrong}>150名+</strong>
              <span style={{ color: '#64748b' }}>会員数</span>
            </div>
            <div style={{ ...styles.badgeCircle, ...styles.badgeAnimated(1) }}>
              <strong style={styles.badgeStrong}>40本+</strong>
              <span style={{ color: '#64748b' }}>セミナー</span>
            </div>
            <div style={{ ...styles.badgeCircle, ...styles.badgeAnimated(2) }}>
              <strong style={styles.badgeStrong}>見放題</strong>
              <span style={{ color: '#64748b' }}>アーカイブ</span>
            </div>
            <div style={{ ...styles.badgeCircle, ...styles.badgeAnimated(3) }}>
              <strong style={styles.badgeStrong}>5000人+</strong>
              <span style={{ color: '#64748b', fontSize: '0.75rem' }}>累計受講</span>
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
