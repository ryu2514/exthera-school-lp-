import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        .hero {
          padding: 4rem 0;
          background: linear-gradient(135deg, rgba(26, 152, 213, 0.08) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(26, 152, 213, 0.05) 100%);
        }

        .hero-image {
          text-align: center;
          margin-bottom: 4rem;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
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

        .desktop-title {
          display: block;
        }
        
        .mobile-title {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-title {
            display: none;
          }
          
          .mobile-title {
            display: block;
          }
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
          <div className="hero-image">
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
          
          <div className="hero-content">
            <h1>
              <span className="desktop-title">
                臨床1年目でも再現できる運動療法を、<br />
                体系的に・継続的に学べる<br />
                <span style={{ color: 'var(--primary-color)' }}>オンラインスクール</span>
              </span>
              <span className="mobile-title">
                臨床1年目でも<br />
                再現できる<br />
                運動療法を、<br />
                体系的・継続的に<br />
                学べる<span style={{ color: 'var(--primary-color)' }}>スクール</span>
              </span>
            </h1>

            <h2>
              "現場で迷わない" 理学療法を、最短ルートで手に入れる。
            </h2>

            <div className="hero-cta">
              <button 
                onClick={() => window.open('https://utage-system.com/page/acfwKIRNjmv7', '_blank')} 
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
              理学療法の専門知識を体系的に学べるオンラインスクール
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;