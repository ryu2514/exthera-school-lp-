import React from 'react';

const SocialProof = () => {
  return (
    <>
      <style jsx="true">{`
        .follower-count {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
          display: block;
        }

        .follower-label {
          color: rgba(255,255,255,0.9);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .follower-description {
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .follower-label {
            font-size: 1.1rem;
          }
          .follower-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
      
      <section id="social-proof" className="section section-blue">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="follower-count">35,000</div>
            <div className="follower-label">SNS総フォロワー数</div>
            <p className="follower-description">
              各SNSプラットフォームで理学療法士コミュニティを形成
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialProof;