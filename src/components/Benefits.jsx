import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: '圧倒的な満足度 4.60 / 5.0',
      description: '200件以上の受講レビューが証明',
      color: '#10b981',
      icon: '⭐'
    },
    {
      title: '国内唯一の"評価→運動"一体型アプリ',
      description: 'エビデンスを用いて最適な運動療法を',
      color: '#f59e0b',
      icon: '📱'
    },
    {
      title: '運動療法スキルが伸びる300本超のコンテンツ',
      description: '基礎→応用を3ステップで網羅',
      color: '#8b5cf6',
      icon: '📚'
    },
    {
      title: '2024年セミナー受講人数2500名超',
      description: '圧倒的な参加人数と継続率',
      color: '#ef4444',
      icon: '👥'
    },
    {
      title: '質問24h以内解決 + 専門家サポート',
      description: '「何から始めればいい？」をすぐ解決、迷わず学習継続',
      color: '#0ea5e9',
      icon: '💬'
    }
  ];

  const styles = {
    section: {
      background: '#ffffff',
      padding: '5rem 0',
      position: 'relative',
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    badge: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      color: '#78350f',
      padding: '10px 24px',
      borderRadius: '50px',
      fontWeight: 700,
      fontSize: '0.9rem',
      marginBottom: '1rem',
      boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
    },
    imageWrapper: {
      marginTop: '2rem',
      marginBottom: '3rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      background: '#fff',
      borderRadius: '24px',
      padding: '2rem',
      border: '3px solid',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    iconWrapper: {
      fontSize: '3rem',
      marginBottom: '1rem',
      display: 'block',
    },
    checkBadge: {
      display: 'inline-block',
      background: '#10b981',
      color: '#fff',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      textAlign: 'center',
      lineHeight: '32px',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      marginBottom: '1rem',
    },
  };

  return (
    <>
      <style>{`
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: inherit;
          border-radius: 24px 24px 0 0;
        }
      `}</style>

      <section id="benefits" style={styles.section}>
        <div className="container">
          <div style={styles.header}>
            <span style={styles.badge}>🎯 選ばれる理由</span>
            <h2 className="section-title" style={{
              color: '#1e293b',
              marginTop: '1rem',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)'
            }}>
              Exthera-Schoolが<br />
              <span style={{
                background: 'linear-gradient(transparent 60%, #86efac 60%)',
                fontWeight: '900'
              }}>選ばれる5つの理由</span>
            </h2>

            <div style={styles.imageWrapper}>
              <img
                src="/assets/3.png"
                alt="選ばれる5つの理由"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                }}
              />
            </div>
          </div>

          <div style={styles.grid}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card"
                style={{
                  ...styles.card,
                  borderColor: benefit.color,
                }}
              >
                <div style={styles.checkBadge}>✓</div>
                <h3 style={{
                  fontSize: '1.25rem',
                  lineHeight: 1.4,
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '0.75rem'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: '#64748b'
                }}>
                  {benefit.description}
                </p>
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  fontSize: '3rem',
                  opacity: 0.1,
                }}>
                  {benefit.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
