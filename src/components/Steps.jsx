import React from 'react';

const Steps = () => {
  const steps = [
    { title: '申込み', desc: '募集期間中にフォームから申込み' },
    { title: '案内を受け取る', desc: '会員サイト・コミュニティのご案内をメールで受領' },
    { title: '学習開始', desc: '今日からアーカイブ視聴・今週のライブに参加' },
    { title: '質問・適用', desc: '質問BOXや症例検討で定着させる' },
  ];

  return (
    <section id="steps" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="section-title">入会後の流れ</h2>
        </div>
        <div className="grid grid-4 steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="card step-card">
              <div className="step-number">Step {i + 1}</div>
              <h3 style={{ marginTop: '0.5rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
