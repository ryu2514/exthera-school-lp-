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

  return (
    <>
      <style jsx>{`
        .problems {
          background: #ecfeff; /* light cyan */
          background: linear-gradient(180deg, #f0f9ff 0%, #ecfeff 100%);
          padding: 4.5rem 0;
          border-top: 1px solid #e5f0ff;
          border-bottom: 1px solid #e5f0ff;
        }
        .head { text-align: center; margin-bottom: 2rem; }
        .head small { color: var(--text-secondary); font-weight: 700; letter-spacing: .2px; }
        .grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
        .card { background:#fff; border-radius: 16px; border:1px solid var(--gray-200); padding: 18px; box-shadow: var(--shadow-sm); display:grid; grid-template-columns: 64px 1fr; gap: 12px; align-items: start; }
        .numbadge { width:64px; height:64px; border-radius: 9999px; display:grid; place-items:center; background:#eaf2ff; color:#2563eb; font-weight: 800; }
        .title { font-weight: 700; margin-bottom: 6px; }
        .hl { background: linear-gradient(transparent 60%, #fff59d 60%); }
        .text { color: var(--text-secondary); line-height: 1.8; white-space: pre-line; }
      `}</style>

      <section className="problems" id="problems">
        <div className="container">
          <div className="head">
            <small>理学療法に携わる皆さんへ</small>
            <h2 className="section-title">こんなお悩み、ありませんか？</h2>
          </div>
          <div className="grid">
            {items.map((it, i) => (
              <div className="card" key={i}>
                <div className="numbadge">{it.num}</div>
                <div>
                  <div className="title heading-3">{it.title}</div>
                  <p className="text body-sm">
                    {it.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Problems;
