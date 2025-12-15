import React from 'react';

const Header = () => {
  const openTrial = (e) => {
    e.preventDefault();
    window.open('https://utage-system.com/page/acfwKIRNjmv7', '_blank');
  };

  return (
    <>
      <style jsx="true">{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #fff;
          border-bottom: 1px solid var(--gray-200);
          backdrop-filter: saturate(150%) blur(4px);
        }
        .header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          letter-spacing: .2px;
        }
        .brand-mark {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
        }
        nav a { color: var(--text-secondary); text-decoration: none; }
        .nav {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 14px;
        }
        .login {
          padding: 8px 14px;
          border-radius: 9999px;
          border: 2px solid #cfe3ff;
          color: #2563eb;
          background: #f0f6ff;
          font-weight: 700;
        }
        .cta-pill {
          padding: 10px 16px;
          border-radius: 9999px;
          color: #fff;
          background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%);
          box-shadow: var(--shadow-md);
          font-weight: 700;
        }
        .cta-pill:hover { box-shadow: var(--shadow-lg); transform: translateY(-1px); }
        .nav-actions { display: flex; gap: 10px; align-items: center; }
        @media (max-width: 860px) {
          .nav { display: none; }
        }
      `}</style>

      <header className="site-header">
        <div className="container header-row">
          <div className="brand">
            <span className="brand-mark" />
            <span>Exthera-School</span>
          </div>
          <div className="nav">
            <a href="#curriculum">コース一覧</a>
            <a href="#benefits">選ばれる理由</a>
            <a href="#faq">よくある質問</a>
          </div>
          <div className="nav-actions">
            <a className="login" href="#" onClick={(e)=>e.preventDefault()}>ログイン</a>
            <a className="cta-pill" href="#" onClick={openTrial}>無料で体験する</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

