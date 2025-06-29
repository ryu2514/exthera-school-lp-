import React from 'react';

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
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3rem)', 
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '1rem'
          }}>
            スクール生徒の声
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            実際に学ばれている理学療法士の方々からいただいた声をご紹介します
          </p>
        </div>

        <div className="grid grid-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card" 
              style={{ borderLeft: '4px solid var(--primary-color)' }}
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
                  background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  marginRight: '1rem'
                }}>
                  {testimonial.initial}
                </div>
                <div>
                  <div style={{ 
                    fontWeight: '600', 
                    color: 'var(--text-primary)' 
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--text-secondary)' 
                  }}>
                    {testimonial.experience}
                  </div>
                </div>
              </div>
              <blockquote style={{ 
                fontStyle: 'italic', 
                color: 'var(--text-secondary)', 
                lineHeight: '1.6', 
                margin: '0' 
              }}>
                「{testimonial.quote}」
              </blockquote>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '0.875rem' 
          }}>
            ※個人の感想であり、効果を保証するものではありません
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;