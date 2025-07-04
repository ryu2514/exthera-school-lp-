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
            <div>
              <div className="footer-title">Exthera-School</div>
              <p className="footer-description">
                臨床1年目でも再現できる運動療法を、体系的に・継続的に学べるオンラインスクール
              </p>
            </div>

            <div>
              <h4>サービス</h4>
              <ul className="footer-links">
                <li><a href="#">記事・動画コンテンツ</a></li>
                <li><a href="#">ライブセミナー</a></li>
                <li><a href="#">コミュニティ</a></li>
                <li><a href="#">評価アプリ</a></li>
              </ul>
            </div>

            <div>
              <h4>お問い合わせ</h4>
              <ul className="footer-links">
                <li><a href="#">よくある質問</a></li>
                <li><a href="#">利用規約</a></li>
                <li><a href="#">プライバシーポリシー</a></li>
                <li><a href="#">特定商取引法に基づく表記</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Exthera-School by Ryuju Kobayashi, PT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;