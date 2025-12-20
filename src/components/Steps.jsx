import React from 'react';

const Steps = () => {
  const steps = [
    {
      title: '申込み',
      desc: '募集期間中にフォームから申込み'
    },
    {
      title: '案内を受け取る',
      desc: '会員サイト・コミュニティの案内をメールで受領'
    },
    {
      title: '学習開始',
      desc: 'アーカイブ視聴・ライブセミナーに参加'
    },
    {
      title: '質問・実践',
      desc: '質問BOXや症例検討で臨床に活かす'
    },
  ];

  const styles = {
    section: {
      padding: '5rem 0',
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
    },
    title: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    titleText: {
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      fontWeight: 700,
      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    stepsContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
    stepWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    card: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '2rem 1.5rem',
      textAlign: 'center',
      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.1)',
      border: '2px solid #e0e7ff',
      transition: 'all 0.3s ease',
      width: '200px',
      minHeight: '180px',
    },
    stepNumber: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
      color: '#fff',
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: '1.1rem',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
      margin: '0 auto 1rem',
    },
    cardTitle: {
      fontSize: '1.1rem',
      fontWeight: 700,
      color: '#1e293b',
      marginBottom: '0.5rem',
    },
    cardDesc: {
      color: '#64748b',
      fontSize: '0.9rem',
      lineHeight: 1.6,
    },
    arrow: {
      color: '#3b82f6',
      fontSize: '2rem',
      fontWeight: 700,
      margin: '0 0.5rem',
      opacity: 0.8,
    },
    arrowMobile: {
      display: 'none',
    },
  };

  // Check if mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  if (isMobile) {
    // Vertical layout for mobile
    return (
      <section id="steps" style={styles.section}>
        <div className="container">
          <div style={styles.title}>
            <h2 style={styles.titleText}>入会後の流れ</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div
                  style={{ ...styles.card, width: '90%', maxWidth: '300px', minHeight: 'auto' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.borderColor = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.1)';
                    e.currentTarget.style.borderColor = '#e0e7ff';
                  }}
                >
                  <div style={styles.stepNumber}>{i + 1}</div>
                  <h3 style={styles.cardTitle}>{s.title}</h3>
                  <p style={styles.cardDesc}>{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ color: '#3b82f6', fontSize: '1.5rem', fontWeight: 700 }}>↓</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Horizontal layout for desktop
  return (
    <section id="steps" style={styles.section}>
      <div className="container">
        <div style={styles.title}>
          <h2 style={styles.titleText}>入会後の流れ</h2>
        </div>
        <div style={styles.stepsContainer}>
          {steps.map((s, i) => (
            <div key={i} style={styles.stepWrapper}>
              <div
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.borderColor = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.1)';
                  e.currentTarget.style.borderColor = '#e0e7ff';
                }}
              >
                <div style={styles.stepNumber}>{i + 1}</div>
                <h3 style={styles.cardTitle}>{s.title}</h3>
                <p style={styles.cardDesc}>{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div style={styles.arrow}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
