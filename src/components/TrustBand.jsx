import React from 'react';

const TrustBand = () => {
  const items = [
    { label: '会員数', value: '150名+' },
    { label: 'セミナー本数', value: '30本+' },
    { label: 'アーカイブ視聴', value: '見放題' },
    { label: '更新頻度', value: '毎週' },
  ];

  return (
    <section className="trust-band">
      <div className="container trust-band__grid">
        {items.map((s, i) => (
          <div key={i} className="trust-band__item">
            <div className="trust-band__value">{s.value}</div>
            <div className="trust-band__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBand;

