import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, rgba(26, 152, 213, 0.08) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(26, 152, 213, 0.05) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a98d5' fill-opacity='0.03'%3E%3Ccircle cx='9' cy='9' r='1'/%3E%3Ccircle cx='49' cy='49' r='1'/%3E%3Ccircle cx='29' cy='29' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.2;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary-color) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero h2 {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          margin-bottom: 3rem;
          color: var(--text-secondary);
          font-weight: 400;
        }

        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          margin-bottom: 2rem;
        }

        @media (min-width: 640px) {
          .hero-cta {
            flex-direction: row;
            justify-content: center;
          }
        }
      `}</style>
      
      <section className="hero">
        <div className="container">
          <div className="hero-content" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '3rem', 
            alignItems: 'center' 
          }}>
            <div>
              <h1>
                臨床1年目でも再現できる運動療法を、<br />
                体系的に・継続的に学べる<br />
                <span style={{ color: 'var(--primary-color)' }}>オンラインスクール</span>
              </h1>

              <h2>
                "現場で迷わない" 理学療法を、最短ルートで手に入れる。
              </h2>

              <div className="hero-cta">
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="btn btn-primary"
                >
                  7日間無料体験を始める
                </button>
                <button 
                  onClick={() => scrollToSection('benefits')} 
                  className="btn btn-secondary"
                >
                  詳細を見る
                </button>
              </div>

              <p style={{ color: 'var(--text-secondary)' }}>
                22大特典・238分のセミナー動画を無料プレゼント
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/assets/1.png" 
                alt="Exthera School オンラインスクール" 
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;