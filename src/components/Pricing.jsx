import React from 'react';

const Pricing = () => {
  const features = [
    '記事・動画・ツール集への無制限アクセス',
    '質問BOXでの講師への質問し放題',
    'ライブセミナー無料参加',
    'アーカイブ動画見放題',
    '150名超のコミュニティ参加',
    '専用評価アプリの利用',
    '毎月の新コンテンツ追加'
  ];

  const annualPlanBenefits = [
    '7日間無料体験',
    '16%割引（4,760円お得）',
    '年1回決済で支払い管理が楽',
    '月額換算2,083円の圧倒的コスパ',
    '学習継続率が向上',
    '月額プランへの変更可能'
  ];

  const handleStartTrial = () => {
    // Redirect to signup page or modal
    console.log('Starting free trial...');
  };

  return (
    <>
      <style jsx>{`
        .pricing-card {
          background: var(--white);
          border-radius: 1.5rem;
          box-shadow: var(--shadow-xl);
          overflow: hidden;
          max-width: 600px;
          margin: 0 auto;
          border: 1px solid var(--gray-200);
        }

        .pricing-header {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white);
          padding: 1.5rem;
          text-align: center;
          font-weight: 600;
        }

        .pricing-body {
          padding: 3rem 2.5rem;
        }

        .price-display {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .price-amount {
          font-size: 3rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .price-period {
          color: var(--text-secondary);
          margin-left: 0.5rem;
          font-size: 1.125rem;
        }

        .highlight-box {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 1px solid #f59e0b;
          border-radius: var(--border-radius);
          padding: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .highlight-title {
          color: #92400e;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .highlight-text {
          color: #b45309;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li {
          padding: 0.75rem 0;
          display: flex;
          align-items: flex-start;
          border-bottom: 1px solid var(--gray-100);
        }

        .feature-list li:last-child {
          border-bottom: none;
        }

        .feature-list li::before {
          content: "✓";
          color: var(--primary-color);
          font-weight: bold;
          margin-right: 0.75rem;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }
      `}</style>
      
      <section id="pricing" className="section section-gray">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.25rem, 5vw, 3rem)', 
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1rem'
            }}>
              料金プラン
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              シンプルで分かりやすい月額制
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem', 
            maxWidth: '800px', 
            margin: '0 auto' 
          }}>
            {/* 年間プラン（推奨） */}
            <div 
              className="pricing-card" 
              style={{ 
                position: 'relative', 
                border: '3px solid var(--primary-color)', 
                transform: 'scale(1.02)' 
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                padding: '0.5rem 2rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '0.875rem',
                boxShadow: 'var(--shadow-lg)'
              }}>
                🏆 最もお得・推奨プラン
              </div>
              
              <div className="pricing-header" style={{
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)'
              }}>
                <span style={{ fontSize: '1.125rem', fontWeight: '700' }}>
                  年間プラン - 圧倒的にお得！
                </span>
              </div>

              <div className="pricing-body">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    marginBottom: '1rem' 
                  }}>
                    Exthera-School 年間メンバーシップ
                  </h3>
                  
                  <div style={{
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--border-radius)',
                    padding: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        textDecoration: 'line-through',
                        color: 'var(--text-light)',
                        fontSize: '1.25rem'
                      }}>
                        ¥29,760
                      </div>
                      <div style={{
                        background: '#dc2626',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '50px',
                        fontSize: '0.875rem',
                        fontWeight: '700'
                      }}>
                        16%OFF
                      </div>
                    </div>
                    <div className="price-display">
                      <span className="price-amount" style={{ fontSize: '4rem' }}>¥25,000</span>
                      <span className="price-period" style={{ fontSize: '1.25rem' }}>/年</span>
                    </div>
                    <p style={{
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                      marginTop: '0.5rem'
                    }}>
                      月額換算：わずか¥2,083/月
                    </p>
                  </div>
                </div>

                <div className="highlight-box" style={{
                  background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                  borderColor: '#10b981'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <h4 style={{
                      color: '#065f46',
                      fontWeight: '700',
                      marginBottom: '1rem'
                    }}>
                      💰 年間プランがお得な理由
                    </h4>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem',
                      textAlign: 'left'
                    }}>
                      <div style={{
                        background: 'rgba(255,255,255,0.7)',
                        padding: '1rem',
                        borderRadius: '8px'
                      }}>
                        <div style={{
                          color: '#059669',
                          fontWeight: '700',
                          fontSize: '1.125rem',
                          marginBottom: '0.5rem'
                        }}>
                          💳 支払いの手間削減
                        </div>
                        <p style={{
                          color: '#065f46',
                          fontSize: '0.875rem',
                          margin: '0'
                        }}>
                          年1回の決済で完了<br />毎月の課金通知なし
                        </p>
                      </div>
                      <div style={{
                        background: 'rgba(255,255,255,0.7)',
                        padding: '1rem',
                        borderRadius: '8px'
                      }}>
                        <div style={{
                          color: '#059669',
                          fontWeight: '700',
                          fontSize: '1.125rem',
                          marginBottom: '0.5rem'
                        }}>
                          📈 学習継続率UP
                        </div>
                        <p style={{
                          color: '#065f46',
                          fontSize: '0.875rem',
                          margin: '0'
                        }}>
                          年間契約で解約を忘れて<br />しっかり学習継続
                        </p>
                      </div>
                      <div style={{
                        background: 'rgba(255,255,255,0.7)',
                        padding: '1rem',
                        borderRadius: '8px'
                      }}>
                        <div style={{
                          color: '#059669',
                          fontWeight: '700',
                          fontSize: '1.125rem',
                          marginBottom: '0.5rem'
                        }}>
                          💰 圧倒的コスパ
                        </div>
                        <p style={{
                          color: '#065f46',
                          fontSize: '0.875rem',
                          margin: '0'
                        }}>
                          月額換算2,083円<br />コーヒー1杯分で専門学習
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-2" style={{ marginBottom: '2rem' }}>
                  <div>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      marginBottom: '1rem'
                    }}>
                      全コンテンツ利用可能
                    </h4>
                    <ul className="feature-list">
                      {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      marginBottom: '1rem'
                    }}>
                      年間プランのメリット
                    </h4>
                    <ul className="feature-list">
                      {annualPlanBenefits.map((benefit, index) => (
                        <li key={index} style={{ color: '#059669' }}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button 
                    onClick={handleStartTrial}
                    className="btn btn-primary" 
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      marginBottom: '1rem',
                      fontSize: '1.125rem',
                      padding: '1.25rem 2rem'
                    }}
                  >
                    年間プランで7日間無料体験を始める
                  </button>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem'
                  }}>
                    クレジットカード不要・7日以内なら完全無料
                  </p>
                </div>
              </div>
            </div>

            {/* 月額プラン */}
            <div className="pricing-card" style={{ opacity: '0.85' }}>
              <div className="pricing-header" style={{
                background: 'var(--gray-100)',
                color: 'var(--text-primary)'
              }}>
                <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>月額プラン</span>
              </div>

              <div className="pricing-body" style={{ padding: '2rem 2.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    marginBottom: '1rem'
                  }}>
                    月額メンバーシップ
                  </h3>
                  <div className="price-display">
                    <span style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)'
                    }}>
                      ¥2,480
                    </span>
                    <span className="price-period">/月</span>
                  </div>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    marginTop: '0.5rem'
                  }}>
                    年間合計：¥29,760
                  </p>
                </div>

                <div style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: 'var(--border-radius)',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  <p style={{
                    color: '#dc2626',
                    fontSize: '0.875rem',
                    margin: '0'
                  }}>
                    年間プランと比較して<strong>4,760円高く</strong>なります
                  </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button 
                    onClick={handleStartTrial}
                    className="btn btn-secondary"
                    style={{ width: '100%', maxWidth: '400px' }}
                  >
                    月額プランで開始
                  </button>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem'
              }}>
                ※どちらのプランでも7日間の無料体験が可能です
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;