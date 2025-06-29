import React from 'react';

const SocialProof = () => {
  return (
    <>
      <style jsx>{`
        .stats-card {
          text-align: center;
          background: rgba(255,255,255,0.1);
          border-radius: var(--border-radius);
          padding: 2.5rem 2rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .stats-number {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          display: block;
        }

        .stats-label {
          color: rgba(255,255,255,0.8);
          font-weight: 500;
        }
      `}</style>
      
      <section className="section section-blue">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.25rem, 5vw, 3rem)', 
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1rem'
            }}>
              多くの理学療法士に選ばれています
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              信頼できる実績とコミュニティ
            </p>
          </div>

          <div className="grid grid-3">
            <div className="stats-card">
              <span className="stats-number">19,000+</span>
              <div className="stats-label">Instagramフォロワー</div>
            </div>

            <div className="stats-card">
              <span className="stats-number">30本超</span>
              <div className="stats-label">有料ライブセミナー累計</div>
            </div>

            <div className="stats-card">
              <span className="stats-number">150名超</span>
              <div className="stats-label">オンラインスクール会員</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ 
              color: 'rgba(255,255,255,0.8)', 
              fontSize: '0.875rem' 
            }}>
              ※2023年時点のデータです
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialProof;