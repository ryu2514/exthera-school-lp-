import React from 'react';

const Problems = () => {
  const items = [
    {
      num: '01',
      title: '評価から介入がつながらない',
      text: '評価データはあるのに、\nなぜその運動を選ぶのか説明できない。\n根拠の言語化に不安がある。',
    },
    {
      num: '02',
      title: '患者さんへ上手く説明できない',
      text: '「なぜこの運動療法なのか？」に対して\n図と言葉で納得感のある説明ができない。',
    },
    {
      num: '03',
      title: 'ケースごとの再現性が低い',
      text: '同じ所見でも判断がブレる。\n思考プロセスが可視化できていない。',
    },
    {
      num: '04',
      title: '症例発表・指導が苦手',
      text: '「どう考えたか」を\n整理して人に伝えるのが難しい。',
    },
  ];

  const styles = {
    problems: {
      background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)',
      padding: '4.5rem 0',
      position: 'relative',
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      maxWidth: '900px',
      margin: '0 auto',
    },
    card: {
      background: '#0284c7',
      borderRadius: '30px',
      padding: '2rem 1.5rem',
      boxShadow: '0 8px 20px rgba(2, 132, 199, 0.3)',
      position: 'relative',
      transition: 'all 0.3s ease',
    },
    cardArrow: {
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '15px solid transparent',
      borderRight: '15px solid transparent',
      borderTop: '15px solid #0284c7',
    },
    numbadge: {
      display: 'inline-block',
      background: '#fbbf24',
      color: '#78350f',
      padding: '8px 20px',
      borderRadius: '50px',
      fontWeight: 800,
      fontSize: '1rem',
      marginBottom: '1rem',
      boxShadow: '0 4px 10px rgba(251, 191, 36, 0.4)',
    },
    title: {
      fontWeight: 700,
      marginBottom: '1rem',
      color: '#ffffff',
      fontSize: '1.25rem',
      lineHeight: '1.4',
    },
    text: {
      color: '#e0f2fe',
      lineHeight: '1.8',
      whiteSpace: 'pre-line',
      fontSize: '0.95rem',
    },
  };

  return (
    <>
      <style>{`
        .problem-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 30px rgba(2, 132, 199, 0.4);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section style={styles.problems} id="problems">
        {/* Decorative elements */}
        <div className="decorative-circle" style={{
          width: '100px',
          height: '100px',
          top: '10%',
          left: '5%',
          animationDelay: '0s'
        }}></div>
        <div className="decorative-circle" style={{
          width: '60px',
          height: '60px',
          top: '70%',
          right: '8%',
          animationDelay: '1s'
        }}></div>

        <div className="container">
          <div style={styles.head}>
            <div style={styles.headSmall}>理学療法に携わる皆さんへ</div>
            <h2 className="section-title" style={{
              color: '#0369a1',
              marginTop: '0.5rem',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)'
            }}>
              あなたも<span style={{
                background: 'linear-gradient(transparent 60%, #fbbf24 60%)',
                fontWeight: '900'
              }}>こんなお悩み</span>、<br />ありませんか？
            </h2>
          </div>
          <div style={styles.grid}>
            {items.map((it, i) => (
              <div style={styles.card} className="problem-card" key={i}>
                <div style={styles.cardArrow}></div>
                <span style={styles.numbadge}>{it.num}</span>
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
