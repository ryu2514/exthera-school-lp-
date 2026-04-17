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
    '16%割引（4,760円お得）',
    '年1回決済で支払い管理が楽',
    '月額換算2,083円の圧倒的コスパ',
    '学習継続率が向上'
  ];

  const handleStartTrial = () => {
    window.open('https://exthera-school.com/seminar-special/', '_blank');
  };

  const styles = {
    pricingCard: {
      background: 'var(--white)',
      borderRadius: '1.5rem',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid var(--gray-200)',
    },
    pricingHeader: {
      background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
      color: 'var(--white)',
      padding: '1.5rem',
      textAlign: 'center',
      fontWeight: 600,
    },
    pricingBody: {
      padding: '3rem 2.5rem',
    },
    priceDisplay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
    },
  };

  return (
    <section id="pricing" style={{
      background: '#ffffff',
      padding: '5rem 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-block',
            background: '#ffffff',
            color: '#10b981',
            padding: '14px 32px',
            borderRadius: '50px',
            fontWeight: 800,
            fontSize: '1.1rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)',
            border: '3px solid #10b981'
          }}>✓ 縛りなし・いつでも解約可能</div>

          <h2 style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            lineHeight: 1.4,
            fontWeight: 700,
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            合わなければ<br />
            <span style={{
              background: 'linear-gradient(transparent 60%, #fbbf24 60%)',
              fontWeight: '900',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)'
            }}>7日以内で解約してもOK</span>です
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: '#64748b',
            textAlign: 'center',
            marginTop: '1.5rem',
            fontWeight: 500
          }}>完全無料でお試しいただけます。</p>
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
            style={{
              ...styles.pricingCard,
              position: 'relative',
              border: '3px solid var(--primary-color)',
              width: '100%',
              maxWidth: '500px'
            }}
          >

            <div style={{
              ...styles.pricingHeader,
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            }}>
              <span style={{ fontSize: '1.125rem', fontWeight: '700' }}>
                ⭐ 年間プラン - 圧倒的にお得！
              </span>
            </div>

            <div style={styles.pricingBody}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  Exthera-School 年間メンバーシップ
                </h3>

                <div style={{
                  background: '#f8fafc',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      textDecoration: 'line-through',
                      color: '#94a3b8',
                      fontSize: '1.5rem',
                      fontWeight: '600'
                    }}>
                      ¥29,760
                    </div>
                    <div style={{
                      background: '#dc2626',
                      color: 'white',
                      padding: '0.35rem 1rem',
                      borderRadius: '50px',
                      fontSize: '1rem',
                      fontWeight: '800'
                    }}>
                      16%OFF
                    </div>
                  </div>
                  <div style={{
                    textAlign: 'center',
                    margin: '1rem 0',
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                      fontWeight: '900',
                      color: '#1e293b',
                      lineHeight: '0.9',
                      letterSpacing: '-0.02em'
                    }}>
                      25,000
                    </span>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#64748b'
                      }}>円</span>
                      <span style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: '#94a3b8'
                      }}>/年</span>
                    </div>
                  </div>
                  <div style={{
                    display: 'inline-block',
                    background: '#e0f2fe',
                    color: '#0369a1',
                    padding: '8px 20px',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    marginBottom: '0.75rem'
                  }}>
                    💰 1日あたり 約69円
                  </div>
                  <p style={{
                    color: '#10b981',
                    fontWeight: '700',
                    fontSize: '1.15rem',
                    marginTop: '0.5rem'
                  }}>
                    月額換算：わずか¥2,083/月
                  </p>
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.95rem',
                    marginTop: '0.5rem'
                  }}>
                    ☕ コーヒー1杯分以下の投資
                  </p>
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                border: '2px solid #10b981',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                marginBottom: '2rem'
              }}>
                <h4 style={{
                  color: '#065f46',
                  fontWeight: '800',
                  fontSize: '1.3rem',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  🏆 年間プランだけの特別メリット
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {annualPlanBenefits.map((benefit, index) => (
                    <li key={index} style={{
                      color: '#065f46',
                      padding: '0.75rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      borderBottom: index < annualPlanBenefits.length - 1 ? '1px solid rgba(16, 185, 129, 0.2)' : 'none'
                    }}>
                      <span style={{
                        color: '#10b981',
                        fontWeight: 'bold',
                        marginRight: '1rem',
                        fontSize: '1.25rem',
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
                    marginBottom: '1.5rem',
                    fontSize: '1.125rem',
                    padding: '1.25rem 2rem'
                  }}
                >
                  ▶ 年間プランで7日間無料体験を始める
                </button>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#f1f5f9',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '0.875rem',
                    color: '#475569',
                    fontWeight: '600'
                  }}>
                    🛡️ 入会金・違約金 0円
                  </div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#f1f5f9',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '0.875rem',
                    color: '#475569',
                    fontWeight: '600'
                  }}>
                    ⏰ 24時間 申し込み受付中
                  </div>
                </div>

                <p style={{
                  color: '#64748b',
                  fontSize: '0.875rem',
                  marginTop: '0.5rem'
                }}>
                  ✨ 7日以内なら完全無料
                </p>
              </div>
            </div>
          </div>

          {/* 月額プラン */}
          <div style={{
            ...styles.pricingCard,
            width: '100%',
            maxWidth: '500px'
          }}>
            <div style={{
              ...styles.pricingHeader,
              background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
              color: 'white'
            }}>
              <span style={{ fontSize: '1.125rem', fontWeight: '700' }}>📅 月額プラン</span>
            </div>

            <div style={styles.pricingBody}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  Exthera-School 月額メンバーシップ
                </h3>

                <div style={{
                  background: '#f8fafc',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    textAlign: 'center',
                    margin: '1rem 0',
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                      fontWeight: '900',
                      color: '#1e293b',
                      lineHeight: '0.9',
                      letterSpacing: '-0.02em'
                    }}>
                      2,480
                    </span>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#64748b'
                      }}>円</span>
                      <span style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: '#94a3b8'
                      }}>/月</span>
                    </div>
                  </div>
                  <div style={{
                    display: 'inline-block',
                    background: '#e0f2fe',
                    color: '#0369a1',
                    padding: '8px 20px',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    marginBottom: '0.75rem'
                  }}>
                    💰 1日あたり 約83円
                  </div>
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.95rem',
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
                  年間プランより<strong>4,760円高く</strong>なります<br />
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
                    marginBottom: '1.5rem',
                    fontSize: '1.125rem',
                    padding: '1.25rem 2rem'
                  }}
                >
                  ▶ 月額プランで7日間無料体験を始める
                </button>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#f1f5f9',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '0.875rem',
                    color: '#475569',
                    fontWeight: '600'
                  }}>
                    🛡️ 入会金・違約金 0円
                  </div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#f1f5f9',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '0.875rem',
                    color: '#475569',
                    fontWeight: '600'
                  }}>
                    ⏰ 24時間 申し込み受付中
                  </div>
                </div>

                <p style={{
                  color: '#64748b',
                  fontSize: '0.875rem',
                  marginTop: '0.5rem'
                }}>
                  ✨ 7日以内なら完全無料
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
  );
};

export default Pricing;
