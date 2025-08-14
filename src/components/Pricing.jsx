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
    window.open('https://utage-system.com/page/acfwKIRNjmv7', '_blank');
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
              年間プランなら<strong style={{ color: 'var(--primary-color)' }}>16%OFF</strong>・<strong style={{ color: 'var(--primary-color)' }}>4,760円もお得</strong>に学習できます
            </p>
          </div>


          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
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
                width: '100%',
                maxWidth: '500px'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                padding: '0.4rem 1.5rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '0.8rem',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 10
              }}>
                🏆 最もお得
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

                <div style={{
                  background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                  border: '2px solid #10b981',
                  borderRadius: 'var(--border-radius)',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  <h4 style={{
                    color: '#065f46',
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    marginBottom: '1rem'
                  }}>
                    🏆 年間プランだけの特別メリット
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    textAlign: 'left'
                  }}>
                    <div style={{
                      background: 'rgba(255,255,255,0.8)',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid #bbf7d0'
                    }}>
                      <div style={{
                        color: '#059669',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        💰 <span>4,760円お得</span>
                      </div>
                      <p style={{
                        color: '#065f46',
                        fontSize: '0.875rem',
                        margin: '0'
                      }}>
                        月額プランより16%割引<br/>
                        コーヒー約16杯分の節約
                      </p>
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.8)',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid #bbf7d0'
                    }}>
                      <div style={{
                        color: '#059669',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        📱 <span>支払い管理が楽</span>
                      </div>
                      <p style={{
                        color: '#065f46',
                        fontSize: '0.875rem',
                        margin: '0'
                      }}>
                        年1回の決済で完了<br/>
                        毎月の課金通知なし
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                  border: '1px solid #10b981',
                  borderRadius: 'var(--border-radius)',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  <h4 style={{
                    color: '#065f46',
                    fontWeight: '700',
                    marginBottom: '1rem'
                  }}>
                    💰 年間プラン特典
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    textAlign: 'left'
                  }}>
                    {annualPlanBenefits.map((benefit, index) => (
                      <li key={index} style={{
                        color: '#059669',
                        padding: '0.5rem 0',
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}>
                        <span style={{
                          color: '#10b981',
                          fontWeight: 'bold',
                          marginRight: '0.75rem',
                          flexShrink: 0
                        }}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
                    7日以内なら完全無料
                  </p>
                </div>
              </div>
            </div>

            {/* 月額プラン */}
            <div className="pricing-card" style={{
              width: '100%',
              maxWidth: '500px'
            }}>
              <div className="pricing-header" style={{
                background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                color: 'white'
              }}>
                <span style={{ fontSize: '1.125rem', fontWeight: '700' }}>月額プラン</span>
              </div>

              <div className="pricing-body">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem'
                  }}>
                    Exthera-School 月額メンバーシップ
                  </h3>
                  
                  <div style={{
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--border-radius)',
                    padding: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div className="price-display">
                      <span style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)'
                      }}>
                        ¥2,480
                      </span>
                      <span className="price-period" style={{ fontSize: '1.25rem' }}>/月</span>
                    </div>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem'
                    }}>
                      年間合計：¥29,760
                    </p>
                  </div>
                </div>


                <div style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: 'var(--border-radius)',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  <h4 style={{
                    color: '#dc2626',
                    fontWeight: '700',
                    marginBottom: '0.5rem'
                  }}>
                    ⚠️ 年間プランとの比較
                  </h4>
                  <p style={{
                    color: '#dc2626',
                    fontSize: '0.875rem',
                    margin: '0'
                  }}>
                    年間プランより<strong>4,760円高く</strong>なります<br/>
                    月額換算で<strong>約400円の差</strong>
                  </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button 
                    onClick={handleStartTrial}
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      marginBottom: '1rem',
                      fontSize: '1.125rem',
                      padding: '1.25rem 2rem'
                    }}
                  >
                    月額プランで7日間無料体験
                  </button>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem'
                  }}>
                    7日以内なら完全無料
                  </p>
                </div>
              </div>
            </div>

            {/* 共通サービス内容 */}
            <div style={{
              background: 'var(--gray-50)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginTop: '2rem',
              border: '1px solid var(--gray-200)'
            }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                textAlign: 'center'
              }}>
                📋 どちらのプランでも利用できるサービス
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.5rem',
                fontSize: '0.875rem'
              }}>
                {features.map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--text-secondary)',
                    padding: '0.25rem 0'
                  }}>
                    <span style={{
                      color: 'var(--primary-color)',
                      marginRight: '0.5rem',
                      fontSize: '0.75rem'
                    }}>✓</span>
                    {feature}
                  </div>
                ))}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--text-secondary)',
                  padding: '0.25rem 0'
                }}>
                  <span style={{
                    color: 'var(--primary-color)',
                    marginRight: '0.5rem',
                    fontSize: '0.75rem'
                  }}>✓</span>
                  7日間無料体験
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;