import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: '圧倒的な満足度 4.60 / 5.0',
      description: '200件以上の受講レビューが証明'
    },
    {
      title: '国内唯一の"評価→運動"一体型アプリ',
      description: 'エビデンスを用いて最適な運動療法を'
    },
    {
      title: '運動療法スキルが伸びる300本超のコンテンツ',
      description: '基礎→応用を3ステップで網羅'
    },
    {
      title: '2024年セミナー受講人数2500名超',
      description: '圧倒的な参加人数と継続率'
    },
    {
      title: '質問24h以内解決 + 22大無料特典',
      description: '「何から始めればいい？」をすぐ解決、ノーリスクで学習スタート'
    }
  ];

  return (
    <section id="benefits" className="section section-gray">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3rem)', 
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '1rem'
          }}>
            Exthera-Schoolが選ばれる5つの理由
          </h2>
        </div>

        <div className="grid grid-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="card">
              <h3>
                <span className="check-icon">✓</span>
                {benefit.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;