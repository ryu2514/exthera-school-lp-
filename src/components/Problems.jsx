import React, { useEffect, useRef, useState } from 'react';
import { AnimatedTitle } from '../hooks/useScrollAnimation';

const Problems = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const items = [
    {
      num: '01',
      title: '評価は揃ったのに、次の一手が出てこない',
      text: 'ROM制限・筋力低下・動作の崩れ…\n所見は取れたのに、\n「で、何をやらせよう？」で止まる。',
      image: '/assets/problems/01.png?v=3',
    },
    {
      num: '02',
      title: '気づけば毎回「鉄板メニュー」',
      text: '腰痛ならドローイン、\n膝ならパテラセッティング…\n教科書の定番から抜け出せない。',
      image: '/assets/problems/02.png?v=3',
    },
    {
      num: '03',
      title: '痛みが出た瞬間、代替案が浮かばない',
      text: '「この運動で痛い」と言われると\nそこで思考停止。\n何を減らし、何に替えるか決められない。',
      image: '/assets/problems/03.png?v=3',
    },
    {
      num: '04',
      title: '負荷量・回数・頻度が決めきれない',
      text: '「10回×3セット」を\nとりあえず出している。\nその人の適正負荷かの根拠がない。',
      image: '/assets/problems/04.png?v=3',
    },
    {
      num: '05',
      title: '続けるか変えるか、判断できない',
      text: '2週経ったけど合ってる？\n所見が変わったとき、\n次の一手が浮かばない。',
      image: '/assets/problems/05.png?v=3',
    },
    {
      num: '06',
      title: '患者ごとにアレンジできず、テンプレ処方に',
      text: '年齢も生活背景も違うのに、\n同じような処方。\n「その人だけの運動」にできない。',
      image: '/assets/problems/06.png?v=3',
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
    const fromLeft = index % 2 === 0;
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? 'translate3d(0, 0, 0) scale(1)'
        : `translate3d(${fromLeft ? '-60px' : '60px'}, 30px, 0) scale(0.95)`,
      transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`,
    };
  };

  const styles = {
    problems: {
      background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)',
      padding: '4.5rem 0',
      position: 'relative',
      overflow: 'hidden',
    },
    head: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    headSmall: {
      color: '#0369a1',
      fontWeight: 700,
      letterSpacing: '.2px',
      fontSize: '0.95rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    card: {
      background: '#ffffff',
      borderRadius: '24px',
      padding: '1.5rem',
      boxShadow: '0 10px 30px rgba(2, 132, 199, 0.15)',
      position: 'relative',
      border: '1px solid rgba(2, 132, 199, 0.1)',
    },
    imageWrapper: {
      width: '70%',
      maxWidth: '220px',
      aspectRatio: '1 / 1',
      borderRadius: '14px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
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
      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      color: '#78350f',
      padding: '6px 16px',
      borderRadius: '50px',
      fontWeight: 800,
      fontSize: '0.85rem',
      marginBottom: '0.75rem',
      boxShadow: '0 3px 8px rgba(251, 191, 36, 0.35)',
      letterSpacing: '0.05em',
    },
    title: {
      fontWeight: 800,
      marginBottom: '0.75rem',
      color: '#0c4a6e',
      fontSize: '1.15rem',
      lineHeight: '1.45',
    },
    text: {
      color: '#475569',
      lineHeight: '1.8',
      whiteSpace: 'pre-line',
      fontSize: '0.92rem',
      margin: 0,
    },
  };

  return (
    <>
      <style>{`
        .problem-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .problem-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 20px 40px rgba(2, 132, 199, 0.25) !important;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section style={styles.problems} id="problems">
        <div className="decorative-circle" style={{
          width: '120px', height: '120px', top: '8%', left: '4%', animationDelay: '0s'
        }}></div>
        <div className="decorative-circle" style={{
          width: '70px', height: '70px', top: '70%', right: '6%', animationDelay: '1s'
        }}></div>

        <div className="container">
          <div style={styles.head}>
            <div style={styles.headSmall}>理学療法に携わる皆さんへ</div>
            <h2 className="section-title" style={{
              color: '#0369a1',
              marginTop: '0.5rem',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)'
            }}>
              運動療法の組み立てで、<br />
              <AnimatedTitle style={{
                background: 'linear-gradient(transparent 60%, #fbbf24 60%)',
                fontWeight: '900'
              }}>こんな場面</AnimatedTitle>、ありませんか？
            </h2>
          </div>
          <div style={styles.grid}>
            {items.map((it, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                data-index={i}
                className="problem-card"
                style={{ ...styles.card, ...getCardAnimation(i) }}
              >
                <div style={styles.imageWrapper}>
                  <img
                    src={it.image}
                    alt={it.title}
                    style={styles.image}
                    loading="lazy"
                  />
                </div>
                <span style={styles.numbadge}>CASE {it.num}</span>
                <div style={styles.title}>{it.title}</div>
                <p style={styles.text}>{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Problems;
