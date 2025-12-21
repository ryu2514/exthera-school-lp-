import React from 'react';
import { AnimatedTitle } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const testimonials = [
    {
      name: '理学療法士 A様',
      experience: '臨床経験 2年目',
      quote: 'わかりやすい記事と様々な運動方法について学ぶことができます！',
      initial: 'A'
    },
    {
      name: '理学療法士 B様',
      experience: '臨床経験 3年目',
      quote: '情報が整理されていてとても分かりやすく日々の臨床とつながる感じがしました。自分で運動療法を組み立てて考えられるようになりたくて入会しました。',
      initial: 'B'
    },
    {
      name: '理学療法士 C様',
      experience: '臨床経験 1年目',
      quote: '1年目の時に勉強方法がわからなかった。見やすいかつわかりやすく、記事や講義で勉強したい！と思い入会を決意しました。',
      initial: 'C'
    }
  ];

  return (
    <section style={{
      background: '#ffffff',
      padding: '5rem 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '0.9rem',
            marginBottom: '1rem',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
          }}>💬 受講生の声</div>
          <h2 className="section-title" style={{
            color: '#1e293b',
            marginTop: '1rem',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)'
          }}>
            <AnimatedTitle style={{
              background: 'linear-gradient(transparent 60%, #86efac 60%)',
              fontWeight: '900'
            }}>スクール生徒</AnimatedTitle>の声
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#475569',
            textAlign: 'center',
            marginTop: '1rem'
          }}>実際に学ばれている理学療法士の方々からいただいた声をご紹介します</p>
        </div>

        <div className="grid grid-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card"
              style={{
                borderLeft: '5px solid #10b981',
                background: '#fff',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.15)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  marginRight: '1rem',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                }}>
                  {testimonial.initial}
                </div>
                <div>
                  <div style={{
                    fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
                    lineHeight: 1.35,
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'var(--text-secondary)'
                  }}>
                    {testimonial.experience}
                  </div>
                </div>
              </div>
              <blockquote style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                「{testimonial.quote}」
              </blockquote>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{
            fontSize: '0.95rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)'
          }}>
            ※個人の感想であり、効果を保証するものではありません
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
