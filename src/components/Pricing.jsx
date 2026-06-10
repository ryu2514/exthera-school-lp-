import React from 'react';
import { TRIAL_URL } from '../config/links';

const features = [
  '記事・動画・ツール集への無制限アクセス',
  '質問BOXで講師に質問し放題',
  '月1回のライブセミナー無料参加',
  'アーカイブ動画 見放題',
  '150名超のコミュニティ参加',
  '会員限定の評価アプリ利用',
];

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
       style={{ flexShrink: 0, marginTop: '0.2rem' }}>
    <circle cx="12" cy="12" r="12" fill="var(--brand)" />
    <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.4-1.4z" fill="#fff" transform="translate(0.5 0)" />
  </svg>
);

const Pricing = () => {
  return (
    <section id="pricing" style={{ background: '#fff', padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        {/* head */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--brand-dark)',
            background: 'var(--brand-soft)',
            border: '1px solid var(--brand-border)',
            padding: '7px 18px',
            borderRadius: '999px',
            marginBottom: '1.25rem',
          }}>縛りなし・いつでも解約可能</span>

          <h2 className="section-title" style={{ color: 'var(--ink)', lineHeight: 1.4 }}>
            合わなければ
            <span style={{ boxShadow: 'inset 0 -10px 0 #d8eef9' }}>7日以内の解約で料金は0円</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '1rem', fontSize: '1rem' }}>
            まずは中身をすべて確認してから、続けるか決められます。
          </p>
        </div>

        {/* plans */}
        <style>{`
          .pricing-plans { display: grid; grid-template-columns: 1fr; gap: 1.5rem; align-items: center; }
          @media (min-width: 760px) {
            .pricing-plans { grid-template-columns: 1.25fr 0.75fr; gap: 1rem; }
            .plan-annual { transform: scale(1.05); z-index: 1; }
            .plan-monthly { transform: scale(0.99); }
          }
        `}</style>
        <div className="pricing-plans">
          {/* 年間プラン（推奨） */}
          <div className="plan-annual" style={{
            position: 'relative',
            background: 'linear-gradient(180deg, #eef8fe 0%, #ffffff 55%)',
            border: '2.5px solid var(--brand)',
            borderRadius: 'var(--r-card)',
            padding: '2.5rem 1.9rem 2.1rem',
            boxShadow: '0 26px 60px rgba(26, 152, 213, 0.30)',
          }}>
            <div style={{
              position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              fontSize: '0.8rem', fontWeight: 800, color: '#fff', letterSpacing: '0.02em',
              background: 'var(--brand)', padding: '6px 18px', borderRadius: '999px',
              boxShadow: '0 6px 16px rgba(26, 152, 213, 0.35)',
            }}>いちばん選ばれているプラン</div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--ink)', margin: '0.5rem 0 0.9rem' }}>
              年間メンバーシップ
            </h3>
            <div style={{ marginBottom: '0.4rem' }}>
              <span style={{ textDecoration: 'line-through', color: '#a9b6bf', fontSize: '1rem', marginRight: '8px' }}>¥29,760</span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-dark)', background: 'var(--brand-soft)', padding: '3px 10px', borderRadius: '6px' }}>16%OFF</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '3.25rem', fontWeight: 900, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1 }}>25,000</span>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--muted)' }}>円 / 年</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '0.9rem' }}>
              月額換算 2,083円。臨床で迷う時間を減らすための投資です。
            </p>
            <div style={{
              display: 'inline-block', fontSize: '0.85rem', fontWeight: 700,
              color: 'var(--brand-dark)', background: 'var(--brand-soft)',
              border: '1px solid var(--brand-border)', borderRadius: '8px',
              padding: '7px 12px', marginBottom: '1.5rem',
            }}>月額プランより 年間4,760円おトク</div>

            <a href={TRIAL_URL} target="_blank" rel="noopener noreferrer"
               style={{
                 display: 'block', textAlign: 'center', fontWeight: 700, fontSize: '1.05rem',
                 color: '#fff', background: 'var(--brand)', padding: '16px',
                 borderRadius: 'var(--r-cta)', textDecoration: 'none', marginBottom: '0.9rem',
                 boxShadow: '0 10px 24px rgba(26, 152, 213, 0.28)',
               }}>
              年間プランで無料体験を始める
            </a>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', textAlign: 'center', lineHeight: 1.6 }}>
              入会金・違約金 0円／7日以内の解約で課金なし
            </p>
          </div>

          {/* 月額プラン（サブ） */}
          <div className="plan-monthly" style={{
            background: 'var(--soft)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--r-card)',
            padding: '1.75rem 1.5rem',
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--muted)', marginBottom: '0.3rem' }}>
              月額メンバーシップ
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.9rem' }}>
              まず短期で試したい方向け
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--muted)', letterSpacing: '-0.02em', lineHeight: 1 }}>2,480</span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--muted)' }}>円 / 月</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '1.6rem' }}>
              年間合計 29,760円（年間プランより4,760円割高）。
            </p>

            <a href={TRIAL_URL} target="_blank" rel="noopener noreferrer"
               style={{
                 display: 'block', textAlign: 'center', fontWeight: 700, fontSize: '1rem',
                 color: 'var(--brand-dark)', background: '#fff', border: '1.5px solid var(--brand-border)',
                 padding: '14px', borderRadius: 'var(--r-cta)', textDecoration: 'none', marginBottom: '0.9rem',
               }}>
              月額プランで無料体験を始める
            </a>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', textAlign: 'center', lineHeight: 1.6 }}>
              入会金・違約金 0円／7日以内の解約で課金なし
            </p>
          </div>
        </div>

        {/* 共通サービス内容 */}
        <div style={{
          marginTop: '1.5rem',
          background: 'var(--soft)',
          border: '1px solid var(--line)',
          borderRadius: '14px',
          padding: '1.75rem 1.75rem 1.5rem',
        }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--muted)', marginBottom: '1.1rem', textAlign: 'center' }}>
            どちらのプランでも利用できるもの
          </h4>
          <ul style={{
            listStyle: 'none', padding: 0, margin: 0,
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.7rem 1.5rem',
          }}>
            {features.map((f, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.92rem', color: 'var(--ink)' }}>
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.75rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
          7日以内に解約すれば料金は発生しません。退会はマイページからワンクリックです。
        </p>
      </div>
    </section>
  );
};

export default Pricing;
