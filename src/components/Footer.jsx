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

        </div>
      </footer>
    </>
  );
};

export default Footer;