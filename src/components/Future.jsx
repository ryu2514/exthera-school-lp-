import React, { useEffect, useRef, useState } from 'react';
import { AnimatedTitle } from '../hooks/useScrollAnimation';

const Future = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const items = [
    {
      num: '01',
      before: '評価は揃ったのに、次の一手が出てこない',
      after: '評価後、迷わず3つの介入候補が浮かぶ',
      text: '機能解剖と運動連鎖から、\n「なぜこの運動か」を即答できる。\n所見がそのまま処方につながる。',
      image: '/assets/future/01.png',
    },
    {
      num: '02',
      before: '気づけば毎回「鉄板メニュー」',
      after: 'その人の状態に合わせて、毎回組み立てられる',
      text: '教科書の定番から脱却し、\n年齢・生活背景・目標に応じて\nオーダーメイドできる。',
      image: '/assets/future/02.png',
    },
    {
      num: '03',
      before: '痛みが出た瞬間、代替案が浮かばない',
      after: '痛みが出ても、即座に代替案に切り替えられる',
      text: '何を減らし、何に替えるかの\n判断軸が身につく。\n患者を不安にさせない。',
      image: '/assets/future/03.png',
    },
    {
      num: '04',
      before: '負荷量・回数・頻度が決めきれない',
      after: '負荷設定を「根拠」を持って決められる',
      text: '「なぜ10回×3セットなのか」を\n説明できる。\n患者から信頼される処方ができる。',
      image: '/assets/future/04.png',
    },
    {
      num: '05',
      before: '続けるか変えるか、判断できない',
      after: '経過を見て、続ける/変える を即決できる',
      text: '判断基準を持っているから、\n所見の変化に対して\n次の一手が自然に出てくる。',
      image: '/assets/future/05.png',
    },
    {
      num: '06',
      before: '患者ごとにアレンジできず、テンプレ処方に',
      after: '「あなたのための運動」を提案できる',
      text: '同僚や後輩から\n「あの症例どう考える？」と\n相談される側になる。',
      image: '/assets/future/06.png',
    },
  ];

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
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getCardAnimation = (index) => {
    const isVisible = visibleCards.includes(index);
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? 'translate3d(0, 0, 0) scale(1)'
        : 'translate3d(0, 40px, 0) scale(0.96)',
      transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`,
    };
  };

  const styles = {
    section: {
      background: 'linear-gradient(180deg, #fffbeb 0%, #fef3c7 100%)',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden',
    },
    head: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    headSmall: {
      color: '#b45309',
      fontWeight: 700,
      letterSpacing: '.2px',
      fontSize: '0.95rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '1.75rem',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    card: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '1.75rem',
      boxShadow: '0 12px 30px rgba(245, 158, 11, 0.18)',
      position: 'relative',
      border: '1px solid rgba(245, 158, 11, 0.18)',
    },
    imageWrapper: {
      width: '70%',
      maxWidth: '220px',
      aspectRatio: '1 / 1',
      borderRadius: '14px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
      margin: '0 auto 1rem',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    numbadge: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
      color: '#ffffff',
      padding: '6px 16px',
      borderRadius: '50px',
      fontWeight: 800,
      fontSize: '0.8rem',
      marginBottom: '1rem',
      boxShadow: '0 3px 8px rgba(234, 88, 12, 0.35)',
      letterSpacing: '0.05em',
    },
    beforeRow: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.6rem',
      marginBottom: '0.6rem',
      color: '#94a3b8',
      fontSize: '0.85rem',
      lineHeight: 1.5,
      textDecoration: 'line-through',
      textDecorationColor: '#cbd5e1',
    },
    arrow: {
      textAlign: 'center',
      color: '#f59e0b',
      fontSize: '1.4rem',
      marginBottom: '0.6rem',
      lineHeight: 1,
    },
    afterTitle: {
      fontWeight: 800,
      color: '#9a3412',
      fontSize: '1.1rem',
      lineHeight: 1.45,
      marginBottom: '0.75rem',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.5rem',
    },
    checkIcon: {
      flexShrink: 0,
      color: '#10b981',
      fontWeight: 900,
      fontSize: '1.15rem',
      lineHeight: 1.3,
    },
    text: {
      color: '#475569',
      lineHeight: 1.8,
      whiteSpace: 'pre-line',
      fontSize: '0.92rem',
      margin: 0,
    },
  };

  return (
    <>
      <style>{`
        .future-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .future-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 22px 45px rgba(245, 158, 11, 0.28) !important;
        }
        @keyframes futureFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .future-deco {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          animation: futureFloat 3s ease-in-out infinite;
        }
      `}</style>

      <section style={styles.section} id="future">
        <div className="future-deco" style={{
          width: '110px', height: '110px', top: '10%', right: '5%', animationDelay: '0s'
        }}></div>
        <div className="future-deco" style={{
          width: '70px', height: '70px', bottom: '10%', left: '6%', animationDelay: '1.2s'
        }}></div>

        <div className="container">
          <div style={styles.head}>
            <div style={styles.headSmall}>BEFORE → AFTER</div>
            <h2 className="section-title" style={{
              color: '#9a3412',
              marginTop: '0.5rem',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)'
            }}>
              <AnimatedTitle style={{
                background: 'linear-gradient(transparent 60%, #fbbf24 60%)',
                fontWeight: '900'
              }}>迷わない臨床</AnimatedTitle>を手にした、<br />
              3〜6ヶ月後のあなた。
            </h2>
            <p style={{
              color: '#78350f',
              marginTop: '1rem',
              fontSize: '1rem',
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '1rem auto 0'
            }}>
              さっきの6つの「困った場面」が、こう変わります。
            </p>
          </div>

          <div style={styles.grid}>
            {items.map((it, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                data-index={i}
                className="future-card"
                style={{ ...styles.card, ...getCardAnimation(i) }}
              >
                <div style={styles.imageWrapper}>
                  <img
                    src={it.image}
                    alt={it.after}
                    style={styles.image}
                    loading="lazy"
                  />
                </div>
                <span style={styles.numbadge}>AFTER {it.num}</span>
                <div style={styles.beforeRow}>{it.before}</div>
                <div style={styles.arrow}>↓</div>
                <div style={styles.afterTitle}>
                  <span style={styles.checkIcon}>✓</span>
                  <span>{it.after}</span>
                </div>
                <p style={styles.text}>{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Future;
