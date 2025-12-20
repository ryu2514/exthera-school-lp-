import React from 'react';

const SocialProof = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 768 ? '1fr 1.5fr' : '1fr',
      gap: '3rem',
      alignItems: 'center',
    },
    imageWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    instructorImage: {
      width: '280px',
      height: '280px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '5px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
    },
    content: {
      textAlign: window.innerWidth > 768 ? 'left' : 'center',
    },
    name: {
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      fontWeight: 700,
      color: '#fff',
      marginBottom: '0.5rem',
    },
    title: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: '1.1rem',
      marginBottom: '1.5rem',
    },
    bio: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: '1rem',
      lineHeight: 1.8,
      marginBottom: '1.5rem',
    },
    stats: {
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      justifyContent: window.innerWidth > 768 ? 'flex-start' : 'center',
    },
    statItem: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#fff',
      display: 'block',
    },
    statLabel: {
      fontSize: '0.85rem',
      color: 'rgba(255,255,255,0.7)',
    },
  };

  return (
    <section id="social-proof" className="section section-blue">
      <div className="container">
        <div style={styles.container}>
          <div style={styles.imageWrapper}>
            <img
              src="/assets/instructor.png"
              alt="小林龍二"
              style={styles.instructorImage}
            />
          </div>
          <div style={styles.content}>
            <h2 style={styles.name}>小林 龍樹</h2>
            <p style={styles.title}>理学療法士 / Exthera-School 代表</p>
            <p style={styles.bio}>
              整形外科クリニック勤務を経て、運動療法に特化したオンラインスクールを設立。
              「現場で使える運動療法」をテーマに、体系化された学びを提供しています。
              SNSでは理学療法に関する情報発信を行い、多くのセラピストに支持されています。
            </p>
            <div style={styles.stats}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>35,000+</span>
                <span style={styles.statLabel}>SNS総フォロワー</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>2,500+</span>
                <span style={styles.statLabel}>年間セミナー受講者</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>150+</span>
                <span style={styles.statLabel}>スクール会員</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;