import React from 'react';

const SocialProof = () => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      color: '#E4405F'
    },
    {
      name: 'TikTok', 
      color: '#FF0050'
    },
    {
      name: 'X (Twitter)',
      color: '#1DA1F2'
    },
    {
      name: 'YouTube',
      color: '#FF0000'
    },
    {
      name: 'Threads',
      color: '#000000'
    }
  ];

  return (
    <>
      <style jsx="true">{`
        .platform-card {
          text-align: center;
          background: rgba(255,255,255,0.15);
          border-radius: var(--border-radius);
          padding: 1.5rem 1rem;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .platform-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .platform-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--platform-color, rgba(255,255,255,0.3));
        }

        .platform-name {
          color: rgba(255,255,255,0.9);
          font-weight: 600;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .platform-card {
            padding: 1rem 0.75rem;
          }
          .platform-name {
            font-size: 0.9rem;
          }
        }
      `}</style>
      
      <section id="social-proof" className="section section-blue">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.25rem, 5vw, 3rem)', 
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1rem'
            }}>
              各SNSプラットフォームで<br />理学療法士コミュニティを形成
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              最新情報をお届けしています
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {socialPlatforms.map((platform, index) => (
              <div 
                key={platform.name} 
                className="platform-card"
                style={{ 
                  '--platform-color': platform.color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="platform-name">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialProof;