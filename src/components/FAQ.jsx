import React, { useState } from 'react';
import { AnimatedTitle } from '../hooks/useScrollAnimation';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: 'Q. 初学者でもついていけますか？',
      answer: 'A. 評価→エクササイズ処方をステップ化しているので安心です。基礎から応用まで段階的に学習できるよう設計されており、1年目の理学療法士でも無理なく習得できます。'
    },
    {
      question: 'Q. 退会は簡単ですか？',
      answer: 'A. マイページからワンクリックでいつでも解約できます。面倒な手続きや引き止めは一切ありません。'
    },
    {
      question: 'Q. ライブセミナー参加費は？',
      answer: 'A. 会員はすべて無料・アーカイブ見放題です。月1回開催されるライブセミナーは追加費用なしで参加でき、録画も無制限で視聴できます。'
    },
    {
      question: 'Q. スマートフォンでも学習できますか？',
      answer: 'A. はい、完全対応しています。通勤時間や休憩時間など、いつでもどこでもスマートフォンで学習できるよう最適化されています。'
    },
    {
      question: 'Q. 地方在住でも問題ありませんか？',
      answer: 'A. 完全オンラインなので、日本全国どこからでも受講可能です。インターネット環境があれば場所を選びません。'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleStartTrial = () => {
    window.open('https://www.instagram.com/ryuju.pt', '_blank');
  };

  return (
    <section style={{
      background: '#f8fafc',
      padding: '5rem 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '0.9rem',
            marginBottom: '1rem',
            boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
          }}>❓ よくある質問</div>
          <h2 className="section-title" style={{
            color: '#1e293b',
            marginTop: '1rem',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)'
          }}>
            <AnimatedTitle style={{
              background: 'linear-gradient(transparent 60%, #fbbf24 60%)',
              fontWeight: '900'
            }}>よくある質問</AnimatedTitle>
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#475569',
            textAlign: 'center',
            marginTop: '1rem'
          }}>ご不明な点がございましたら、お気軽にお問い合わせください</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" style={{
              background: '#fff',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                style={{
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
                  lineHeight: 1.35,
                  fontWeight: 700
                }}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openFAQ === index ? '−' : '+'}
                </span>
              </button>
              <div className={`faq-answer ${openFAQ === index ? 'show' : ''}`}>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)'
                }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem'
          }}>
            その他のご質問がございましたら、お気軽にお問い合わせください
          </p>
          <button
            onClick={handleStartTrial}
            className="btn btn-primary"
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#fff',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem'
            }}
          >
            📧 お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
