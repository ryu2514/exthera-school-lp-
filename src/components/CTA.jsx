import React from 'react';

const CTA = ({ variant = 'primary' }) => {
  const isPrimary = variant === 'primary';
  
  const handleStartTrial = () => {
    window.open('https://utage-system.com/page/acfwKIRNjmv7', '_blank');
  };

  return (
    <>
      <style jsx="true">{`
        .features-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .feature-badge {
          display: flex;
          align-items: center;
          color: rgba(255,255,255,0.8);
          font-size: 0.875rem;
        }

        .feature-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
      `}</style>
      
      <section className={`section ${isPrimary ? 'section-blue' : 'section-dark'}`}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.25rem, 5vw, 3rem)', 
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '2rem'
            }}>
              {isPrimary ? 
                '今すぐ7日間無料体験を始めましょう' : 
                '運動療法のスキルアップを始めませんか？'
              }
            </h2>
            
            <p style={{ 
              color: 'rgba(255,255,255,0.8)', 
              marginBottom: '2rem',
              fontSize: '1.125rem'
            }}>
              {isPrimary ? 
                'いつでも解約可能。まずは価値を体験してください。' :
                'Exthera-Schoolで、臨床現場で迷わない理学療法を身につけましょう。'
              }
            </p>

            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
              <button 
                onClick={handleStartTrial}
                className="btn" 
                style={{
                  background: isPrimary ? 'var(--white)' : 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
                  color: isPrimary ? 'var(--primary-color)' : 'var(--white)',
                  width: '100%', 
                  marginBottom: '1rem', 
                  fontSize: '1.125rem', 
                  fontWeight: '700'
                }}
              >
                7日間無料体験を始める
              </button>
              <p style={{ 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: '0.875rem' 
              }}>
                ※7日間完全無料でお試しいただけます
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-badge">
                <span className="feature-dot"></span>
                <span>7日間完全無料</span>
              </div>
              <div className="feature-badge">
                <span className="feature-dot"></span>
                <span>300本超のコンテンツ</span>
              </div>
              <div className="feature-badge">
                <span className="feature-dot"></span>
                <span>いつでも解約可能</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;