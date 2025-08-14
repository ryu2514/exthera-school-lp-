import React from 'react';

const Curriculum = () => {

  const curriculumItems = [
    {
      title: '週刊記事配信',
      description: '機能解剖・運動連鎖・評価手順',
      features: ['週1回以上の新記事', '体系的な学習構成', '実践的な内容'],
      hasVideo: true,
      vimeoId: '1097080751',
      videoTitle: '記事・ショートセミナー'
    },
    {
      title: '動画ライブラリ',
      description: '部位別エクササイズ解説（肩・腰・骨盤帯…）',
      features: ['部位別の詳細解説', '動画による実技指導', '繰り返し学習可能'],
      hasVideo: false
    },
    {
      title: 'ライブセミナー',
      description: '月1回 Zoom＋アーカイブ',
      features: ['月1回のライブ開催', 'アーカイブ見放題', 'リアルタイム質疑応答'],
      hasVideo: true,
      vimeoId: '1097080842',
      videoTitle: 'セミナー/マインドマップ'
    },
    {
      title: 'コミュニティ',
      description: '限定オープンチャットと質問BOX',
      features: ['150名超のコミュニティ', '講師への質問し放題', '仲間との情報交換'],
      hasVideo: false
    },
    {
      title: '呼吸評価アプリ',
      description: '呼吸機能不全・足関節捻挫・腰痛の3つの評価を統合したアプリ',
      features: ['3つの評価機能を統合', '臨床での活用', '効率的な評価', '一つのアプリで複数対応'],
      hasVideo: true,
      vimeoId: '1097081032',
      videoTitle: '評価アプリ（呼吸・足関節・腰痛）'
    },
    {
      title: '腰椎分析アプリ',
      description: '腰椎の詳細な分析機能を搭載したアプリ',
      features: ['腰椎専門の分析機能', '詳細な評価レポート', '臨床での活用', '効率的な腰椎評価'],
      hasVideo: true,
      vimeoId: '1110000982/c8acf1e778',
      videoTitle: '腰椎分析アプリ'
    }
  ];


  return (
    <>
      
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.25rem, 5vw, 3rem)', 
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1rem'
            }}>
              学習コンテンツ
            </h2>
            <p style={{ 
              color: 'var(--text-secondary)', 
              maxWidth: '600px', 
              margin: '0 auto',
              marginBottom: '3rem'
            }}>
              体系的に設計された学習プログラムで、確実にスキルアップできます
            </p>

            {/* 動画セクション */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {/* 既存の動画 */}
              {curriculumItems
                .filter(item => item.hasVideo)
                .map((item, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div style={{
                      position: 'relative',
                      paddingBottom: '56.25%', // 16:9 aspect ratio
                      height: 0,
                      background: '#000'
                    }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&background=1`}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none'
                        }}
                        allow="autoplay; fullscreen"
                        title={item.videoTitle}
                      />
                    </div>
                    <div style={{
                      padding: '1.5rem',
                      textAlign: 'center'
                    }}>
                      <h4 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        color: '#1a98d5'
                      }}>
                        {item.videoTitle}
                      </h4>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#666',
                        margin: 0
                      }}>
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              
              {/* 足関節捻挫アプリの追加動画 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%', // 16:9 aspect ratio
                  height: 0,
                  background: '#000'
                }}>
                  <iframe
                    src={`https://player.vimeo.com/video/1097081089?autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&background=1`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    allow="autoplay; fullscreen"
                    title="足関節捻挫アプリ"
                  />
                </div>
                <div style={{
                  padding: '1.5rem',
                  textAlign: 'center'
                }}>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#1a98d5'
                  }}>
                    足関節捻挫アプリ
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#666',
                    margin: 0
                  }}>
                    評価アプリ
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '2rem',
            paddingBottom: '1rem',
            scrollSnapType: 'x mandatory'
          }}>
            {curriculumItems.map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                minWidth: '320px',
                maxWidth: '320px',
                scrollSnapAlign: 'start',
                flex: '0 0 auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,152,213,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #1a98d5 0%, #2196f3 100%)'
                }}></div>
                <h3 style={{ 
                  fontSize: '1.375rem', 
                  fontWeight: '700', 
                  marginBottom: '1rem',
                  color: '#1e293b'
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#64748b', 
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {item.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={{
                      fontSize: '0.9rem',
                      color: '#475569',
                      margin: '0.75rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '8px',
                        height: '8px',
                        background: 'linear-gradient(135deg, #1a98d5 0%, #2196f3 100%)',
                        borderRadius: '50%'
                      }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Curriculum;