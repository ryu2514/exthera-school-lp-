import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: '記',
      title: '週1回以上更新',
      description: '記事・動画・ツールで習得が難しい運動療法を体系化'
    },
    {
      icon: '実',
      title: '実践的コンテンツ',
      description: '明日から患者指導に使える評価＆エクササイズ。累計30回以上のライブセミナー録画も見放題'
    },
    {
      icon: '学',
      title: '地方勤務でも学べる',
      description: '完全オンライン、スマホでいつでも視聴'
    },
    {
      icon: 'コ',
      title: '150名超のクローズドコミュニティ',
      description: '講師＆仲間に質問し放題'
    },
    {
      icon: '特',
      title: '22大特典・238分のセミナー動画を無料プレゼント',
      description: 'まずは0円で価値を体験'
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
              <div className="card-icon">{benefit.icon}</div>
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