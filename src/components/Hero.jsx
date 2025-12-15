import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        .hero {
          padding: 3rem 0 5rem;
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.10) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(59, 130, 246, 0.06) 100%);
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          width: 420px; height: 420px;
          right: -120px; top: -120px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(59,130,246,.12), transparent);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 2rem;
          align-items: center;
        }
        .prehead { color: var(--text-secondary); font-weight: 700; letter-spacing: .2px; }
        .title { font-size: clamp(2.2rem, 3.8vw, 3.2rem); font-weight: 800; line-height: 1.2; margin: .75rem 0 1rem; color: var(--text-primary); }
        .title .em { background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .subtitle { color: var(--text-secondary); font-size: clamp(1.05rem, 1.5vw, 1.15rem); }
        .hero-cta { display:flex; gap:12px; align-items:center; margin: 1.5rem 0 1rem; flex-wrap: wrap; }
        .btn-pill { border-radius: 9999px; padding: 12px 18px; font-weight: 800; }
        .btn-grad { color:#fff; background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%); box-shadow: var(--shadow-lg); }
        .btn-grad:hover { transform: translateY(-2px); box-shadow: var(--shadow-xl); }
        .btn-outline { border:2px solid #cfe3ff; color:#2563eb; background:#f0f6ff; }
        .badges { display:flex; gap:14px; flex-wrap: wrap; margin-top: 2rem; }
        .badge-circle { width: 140px; height: 140px; border-radius: 9999px; border: 3px solid #cfe3ff; background: #fff; box-shadow: var(--shadow-sm); display:grid; place-items:center; text-align:center; padding: 8px; }
        .badge-circle strong { color:#2563eb; font-size: 1.35rem; }
        .visual { position: relative; }
        .visual .frame { border-radius: 24px; border: 10px solid #e6f0ff; overflow: hidden; box-shadow: var(--shadow-xl); }
        @media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr; } .badges { justify-content: center; } }
      `}</style>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="prehead">業界最適価の運動療法オンラインスクール</div>
            <h1 className="title">
              実務力が身につくカリキュラムで<br />
              <span className="em">現場で使える運動療法</span>を<br />
              身につけよう！
            </h1>
            <p className="subtitle">体系化×ライブ×コミュニティで、迷わない臨床を最短ルートで。</p>
            <div className="hero-cta">
              <button onClick={() => window.open('https://utage-system.com/page/acfwKIRNjmv7', '_blank')} className="btn btn-pill btn-grad">無料で講座を体験する</button>
              <button onClick={() => scrollToSection('benefits')} className="btn btn-pill btn-outline">選ばれる理由を見る</button>
            </div>
            <div className="badges">
              <div className="badge-circle"><div>業界<br /><strong>最適価</strong></div></div>
              <div className="badge-circle"><div>会員<br /><strong>150名+</strong></div></div>
              <div className="badge-circle"><div>アーカイブ<br /><strong>見放題</strong></div></div>
            </div>
          </div>
          <div className="visual">
            <div className="frame">
              <img src="/assets/1.png" alt="Exthera School オンラインスクール" style={{ display:'block', width:'100%', height:'auto' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
