import React from 'react';

const CTA = ({ variant = 'primary' }) => {
  const isPrimary = variant === 'primary';

  const handleStartTrial = () => {
    window.open('https://exthera-school.com/seminar-special/', '_blank');
  };

  const styles = {
    featuresGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem',
    },
    featureBadge: {
      display: 'flex',
      alignItems: 'center',
      color: 'rgba(255,255,255,0.8)',
      fontSize: '0.875rem',
    },
    featureDot: {
      width: '8px',
      height: '8px',
      background: '#10b981',
      borderRadius: '50%',
      marginRight: '0.5rem',
    },
  };

  return (
    <section style={{
      background: '#f8fafc',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            background: isPrimary ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
            boxShadow: isPrimary ? '0 4px 12px rgba(16, 185, 129, 0.3)' : '0 4px 12px rgba(245, 158, 11, 0.3)',
          }}>🎉 {isPrimary ? '無料体験受付中' : 'まずは体験から'}</div>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            lineHeight: 1.3,
            fontWeight: 900,
            color: '#1e293b',
            marginBottom: '1.5rem'
          }}>
            {isPrimary ?
              '今すぐ7日間無料体験を\n始めましょう！' :
              '運動療法のスキルアップを\n始めませんか？'
            }
          </h2>

          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: '#475569',
            marginBottom: '2.5rem',
            fontWeight: 600
          }}>
            {isPrimary ?
              'いつでも解約可能。まずは価値を体験してください。' :
              'Exthera-Schoolで、臨床現場で迷わない理学療法を身につけましょう。'
            }
          </p>

          <div style={{ maxWidth: '450px', margin: '0 auto 2rem' }}>
            <button
              onClick={handleStartTrial}
              style={{
                background: isPrimary ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#fff',
                width: '100%',
                padding: '1.25rem 2rem',
                borderRadius: '50px',
                fontSize: '1.25rem',
                fontWeight: '800',
                border: 'none',
                cursor: 'pointer',
                boxShadow: isPrimary ? '0 10px 30px rgba(16, 185, 129, 0.3)' : '0 10px 30px rgba(245, 158, 11, 0.3)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = isPrimary ? '0 15px 40px rgba(16, 185, 129, 0.4)' : '0 15px 40px rgba(245, 158, 11, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = isPrimary ? '0 10px 30px rgba(16, 185, 129, 0.3)' : '0 10px 30px rgba(245, 158, 11, 0.3)';
              }}
            >
              ▶ 7日間無料体験を始める
            </button>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: '#64748b',
              marginTop: '1rem',
              fontWeight: 600
            }}>
              ✨ 7日間完全無料でお試しいただけます
            </p>
          </div>

          <div style={{
            ...styles.featuresGrid,
            justifyContent: 'center',
            gap: '1.5rem'
          }}>
            {['7日間完全無料', '300本超のコンテンツ', 'いつでも解約可能'].map((text, i) => (
              <div key={i} style={{
                ...styles.featureBadge,
                background: '#fff',
                color: '#475569',
                padding: '12px 20px',
                borderRadius: '50px',
                border: '2px solid #e2e8f0',
                fontWeight: 700,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <span style={{
                  ...styles.featureDot,
                  background: isPrimary ? '#10b981' : '#f59e0b',
                  marginRight: '8px'
                }}></span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
