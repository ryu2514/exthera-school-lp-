import React, { useState, useEffect } from 'react';

const Curriculum = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scrollContainer = document.getElementById('curriculum-scroll');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const cardWidth = 320 + 32; // カード幅 + ギャップ
      const currentIndex = Math.round(scrollContainer.scrollLeft / cardWidth);
      setActiveIndex(currentIndex);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

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
      vimeoId: '1110000982',
      videoTitle: '腰椎分析アプリ'
    }
  ];


  return (
    <>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              letterSpacing: '1px'
            }}>
              CURRICULUM
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              学習コンテンツ
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #3b82f6 0%, #0ea5e9 100%)',
              margin: '0 auto 1.5rem',
              borderRadius: '2px'
            }}></div>
            <p style={{
              fontSize: '1.1rem',
              color: '#64748b',
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto',
              marginBottom: '3rem',
              lineHeight: 1.8
            }}>
              記事・動画・ライブ・コミュニティ・ツールが、<br />
              <span style={{ fontWeight: 600, color: '#1e40af' }}>迷わない臨床を再現可能にする一本の流れ</span>になっています
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
                        src={`https://player.vimeo.com/video/${item.vimeoId}?badge=0&autopause=0&autoplay=0&loop=1&muted=1&title=0&byline=0&portrait=0&controls=1&playsinline=1`}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none'
                        }}
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                        webkitAllowFullScreen
                        mozAllowFullScreen
                        loading="lazy"
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
                    src={`https://player.vimeo.com/video/1097081089?badge=0&autopause=0&autoplay=0&loop=1&muted=1&title=0&byline=0&portrait=0&controls=1&playsinline=1`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    webkitAllowFullScreen
                    mozAllowFullScreen
                    loading="lazy"
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
        </div>
      </section>
    </>
  );
};

export default Curriculum;
