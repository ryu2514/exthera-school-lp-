import React from 'react';
import { TRIAL_URL } from '../config/links';

const CTA = ({ variant = 'primary' }) => {
  const isPrimary = variant === 'primary';

  return (
    <section style={{ background: 'var(--soft)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            background: 'var(--brand-soft)',
            color: 'var(--brand-dark)',
            border: '1px solid var(--brand-border)',
            padding: '8px 20px',
            borderRadius: '999px',
            fontWeight: 700,
            fontSize: '0.85rem',
            marginBottom: '1.5rem',
          }}>{isPrimary ? '無料体験受付中' : 'まずは体験から'}</div>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            lineHeight: 1.3,
            fontWeight: 900,
            color: 'var(--ink)',
            marginBottom: '1.5rem',
            whiteSpace: 'pre-line',
          }}>
            {isPrimary ? '今すぐ7日間無料体験を\n始めましょう' : '運動療法のスキルアップを\n始めませんか'}
          </h2>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: 'var(--muted)',
            marginBottom: '2.5rem',
          }}>
            {isPrimary ?
              'いつでも解約可能。まずは中身を確認してください。' :
              'Exthera-Schoolで、臨床・施術・運動指導の現場で迷わない運動療法を身につけましょう。'
            }
          </p>

          <div style={{ maxWidth: '460px', margin: '0 auto 2rem' }}>
            <a
              href={TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--brand)',
                color: '#fff',
                width: '100%',
                padding: '1.2rem 2rem',
                borderRadius: 'var(--r-cta)',
                fontSize: '1.15rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: 'var(--shadow-brand)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'var(--brand-dark)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--brand)'; }}
            >
              7日間無料体験を始める
            </a>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--muted)', marginTop: '0.9rem' }}>
              7日間完全無料でお試しいただけます
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {['7日間完全無料', '300本超のコンテンツ', 'いつでも解約可能'].map((text, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                background: '#fff',
                color: 'var(--muted)',
                padding: '10px 18px',
                borderRadius: '999px',
                border: '1px solid var(--line)',
                fontWeight: 700,
                fontSize: '0.875rem',
              }}>
                <span style={{ width: '7px', height: '7px', background: 'var(--brand)', borderRadius: '50%', marginRight: '8px' }}></span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
