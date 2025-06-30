import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style jsx global>{`
        .hero {
          min-height: 100vh;
          background-image: url('/assets/1.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
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
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .hero .container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 3rem 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.3);
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.2;
          color: #1a98d5;
        }

        .hero h2 {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          margin-bottom: 3rem;
          color: #333;
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
          <div className="hero-content">
            <h1>
              臨床1年目でも再現できる運動療法を、<br />
              体系的に・継続的に学べる<br />
              <span style={{ color: '#1a98d5' }}>オンラインスクール</span>
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

            <p style={{ 
              color: '#666', 
              fontSize: '1.1rem',
              marginTop: '1rem'
            }}>
              22大特典・238分のセミナー動画を無料プレゼント
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;