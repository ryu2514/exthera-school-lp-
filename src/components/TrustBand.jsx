import React, { useState, useEffect } from 'react';

const TrustBand = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ members: 0, seminars: 0, attendees: 0 });

  useEffect(() => {
    setIsVisible(true);

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        members: Math.floor(150 * progress),
        seminars: Math.floor(40 * progress),
        attendees: Math.floor(5000 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts({ members: 150, seminars: 40, attendees: 5000 });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      label: '会員数',
      value: `${counts.members}名+`,
    },
    {
      label: 'セミナー本数',
      value: `${counts.seminars}本+`,
    },
    {
      label: 'アーカイブ',
      value: '見放題',
    },
    {
      label: '累計セミナー受講',
      value: `${counts.attendees}人+`,
    },
  ];

  const styles = {
    section: {
      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #0ea5e9 100%)',
      padding: '4rem 0',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '0 1.5rem',
      position: 'relative',
      zIndex: 1,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s ease-out',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '2rem 1rem',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
    },
    value: {
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      fontWeight: '800',
      color: '#ffffff',
      marginBottom: '0.5rem',
    },
    label: {
      fontSize: '0.85rem',
      color: 'rgba(255, 255, 255, 0.9)',
      fontWeight: '500',
    },
  };

  return (
    <>
      <style>{`
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .trust-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.15);
        }
        @media (max-width: 768px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem;
          }
        }
      `}</style>

      <section style={styles.section}>
        <div style={styles.container}>
          <div className="trust-grid" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.8s ease-out' }}>
            {items.map((item, i) => (
              <div
                key={i}
                className="trust-card"
                style={styles.card}
              >
                <div style={styles.value}>{item.value}</div>
                <div style={styles.label}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustBand;
