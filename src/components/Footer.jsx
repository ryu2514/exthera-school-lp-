import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
      color: 'var(--white)',
      padding: '4rem 0 2rem',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem',
    },
    footerTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
      color: 'var(--primary-color)',
    },
    footerDescription: {
      color: 'var(--text-light)',
      lineHeight: 1.7,
    },
    sectionH4: {
      fontWeight: 600,
      marginBottom: '1rem',
      color: 'var(--white)',
    },
    footerLinks: {
      color: 'var(--text-light)',
      lineHeight: 2,
    },
    footerLink: {
      color: 'var(--text-light)',
      textDecoration: 'none',
      transition: 'var(--transition)',
    },
    footerBottom: {
      borderTop: '1px solid #374151',
      paddingTop: '2rem',
      textAlign: 'center',
      color: 'var(--text-light)',
    },
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.footerGrid}>
          <div>
            <div style={styles.footerTitle}>Exthera-School</div>
            <p style={styles.footerDescription}>
              臨床1〜5年目のための運動療法オンラインスクール。体系化×ライブ×コミュニティで、現場の再現性を高めます。
            </p>
          </div>
          <div>
            <h4 style={styles.sectionH4}>リンク</h4>
            <div style={styles.footerLinks}>
              <p>
                <a
                  href="#benefits"
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-light)'}
                >
                  選ばれる理由
                </a>
              </p>
              <p>
                <a
                  href="#pricing"
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-light)'}
                >
                  料金
                </a>
              </p>
              <p>
                <a
                  href="#faq"
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-light)'}
                >
                  よくある質問
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 style={styles.sectionH4}>サポート</h4>
            <div style={styles.footerLinks}>
              <p>
                <a
                  href="https://ryuju-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-light)'}
                >
                  お問い合わせ
                </a>
              </p>
              <p>
                <a
                  href="https://exthera-school.com/specified/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-light)'}
                >
                  特定商取引法に基づく表記
                </a>
              </p>
              <p>
                <a
                  href="https://exthera-school.com/privacy-policy-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-light)'}
                >
                  プライバシーポリシー
                </a>
              </p>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          &copy; {new Date().getFullYear()} Exthera-School
        </div>
      </div>
    </footer>
  );
};

export default Footer;
