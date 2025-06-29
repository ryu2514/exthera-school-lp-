import React, { useState } from 'react';

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
    console.log('Starting free trial...');
  };

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
            よくある質問
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openFAQ === index ? '−' : '+'}
                </span>
              </button>
              <div className={`faq-answer ${openFAQ === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
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
          >
            お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;