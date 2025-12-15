import React from 'react';

const Footer = () => {
  return (
    <>
      <style jsx="true">{`
        .footer {
          background: var(--section-dark);
          color: var(--white);
          padding: 4rem 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }

        .footer-description {
          color: var(--text-light);
          line-height: 1.7;
        }

        .footer-section h4 {
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--white);
        }

        .footer-links {
          color: var(--text-light);
          line-height: 2;
        }

        .footer-links a {
          color: var(--text-light);
          text-decoration: none;
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--primary-color);
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: var(--text-light);
        }
      `}</style>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-title">Exthera-School</div>
              <p className="footer-description">
                臨床1〜5年目のための運動療法オンラインスクール。体系化×ライブ×コミュニティで、現場の再現性を高めます。
              </p>
            </div>
            <div className="footer-section">
              <h4>リンク</h4>
              <div className="footer-links">
                <p><a href="#benefits">選ばれる理由</a></p>
                <p><a href="#pricing">料金</a></p>
                <p><a href="#faq">よくある質問</a></p>
              </div>
            </div>
            <div className="footer-section">
              <h4>サポート</h4>
              <div className="footer-links">
                <p><a href="#" onClick={(e)=>{e.preventDefault(); window.open('mailto:support@example.com');}}>お問い合わせ</a></p>
                <p><a href="#" onClick={(e)=>e.preventDefault()}>特定商取引法に基づく表記</a></p>
                <p><a href="#" onClick={(e)=>e.preventDefault()}>プライバシーポリシー</a></p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Exthera-School
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
