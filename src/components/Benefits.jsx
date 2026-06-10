import React, { useEffect, useState, useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Benefits = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const brand = '#1a98d5';
  const benefits = [
    {
      title: '体系化された学びで迷わない',
      description: '基礎→応用まで学ぶ順番が整理されている。バラバラの知識が臨床で一本化される',
      color: brand,
    },
    {
      title: '評価→運動指導までつながる思考が身につく',
      description: '「なぜその運動か」を根拠を持って説明できる。判断がブレなくなる',
      color: brand,
    },
    {
      title: 'ライブ・質問・コミュニティで実践に落ちる',
      description: '学んで終わらない。質問は24h以内に解決、現場にそのまま接続できる',
      color: brand,
    },
    {
      title: '累計5000名が受講した実績',
      description: '継続率の高さが、学びの厚みと現場での使いやすさを裏付けます',
      color: brand,
    },
    {
      title: '会員限定アプリ・ツールで実装を加速',
      description: '学んだ内容を現場で使いやすくする会員特典。思考整理と評価を補助します',
      color: brand,
    }
  ];

  const getCardAnimation = (index) => {
    const isVisible = visibleCards.includes(index);
    const fromLeft = index % 2 === 0;
    const hiddenTransform = isMobile
      ? 'translate3d(0, 24px, 0)'
      : `translateX(${fromLeft ? '-50px' : '50px'})`;

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate3d(0, 0, 0)' : hiddenTransform,
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
    };
  };

  const styles = {
    section: {
      background: '#ffffff',
      padding: '5rem 0',
      position: 'relative',
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    badge: {
      display: 'inline-block',
      background: 'var(--brand-soft)',
      color: 'var(--brand-dark)',
      border: '1px solid var(--brand-border)',
      padding: '8px 20px',
      borderRadius: '999px',
      fontWeight: 700,
      fontSize: '0.85rem',
      marginBottom: '1rem',
    },
    imageWrapper: {
      marginTop: '2rem',
      marginBottom: '3rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.25rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      background: '#fff',
      borderRadius: '20px',
      padding: '1.25rem 1.5rem',
      border: '3px solid',
      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    iconWrapper: {
      fontSize: '3rem',
      marginBottom: '1rem',
      display: 'block',
    },
    checkBadge: {
      display: 'inline-block',
      background: 'var(--brand)',
      color: '#fff',
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      textAlign: 'center',
      lineHeight: '28px',
      fontWeight: 'bold',
      fontSize: '1rem',
      marginBottom: '0.75rem',
    },
  };

  return (
    <>
      <style>{`
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: inherit;
          border-radius: 24px 24px 0 0;
        }
      `}</style>

      <section id="benefits" style={styles.section}>
        <div className="container">
          <div style={styles.header}>
            <span style={styles.badge}>選ばれる理由</span>
            <h2 className="section-title" style={{
              color: '#1e293b',
              marginTop: '1rem',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)'
            }}>
              Exthera-Schoolが<br />
              <AnimatedTitle style={{ background: 'linear-gradient(transparent 60%, #d8eef9 60%)', fontWeight: '900' }}>
                選ばれる5つの理由
              </AnimatedTitle>
            </h2>

            <div style={styles.imageWrapper}>
              <img
                src="/assets/3.png"
                alt="選ばれる5つの理由"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                }}
              />
            </div>
          </div>

          <div style={styles.grid}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className="benefit-card"
                style={{
                  ...styles.card,
                  borderColor: benefit.color,
                  ...getCardAnimation(index),
                }}
              >
                <div style={styles.checkBadge}>✓</div>
                <h3 style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.35,
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '0.5rem'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: '#64748b',
                  margin: 0
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
