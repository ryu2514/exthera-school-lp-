import React, { useState } from 'react';

const Curriculum = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const curriculumItems = [
    {
      icon: '記',
      title: 'Weekly Articles',
      description: '機能解剖・運動連鎖・評価手順',
      features: ['週1回以上の新記事', '体系的な学習構成', '実践的な内容'],
      hasVideo: true,
      vimeoId: '1097080751',
      videoTitle: '記事・ショートセミナー'
    },
    {
      icon: '動',
      title: 'Video Library',
      description: '部位別エクササイズ解説（肩・腰・骨盤帯…）',
      features: ['部位別の詳細解説', '動画による実技指導', '繰り返し学習可能'],
      hasVideo: false
    },
    {
      icon: 'ツ',
      title: 'Tool Kit',
      description: 'マインドマップ・評価チェックリスト',
      features: ['実践的なツール', 'ダウンロード可能', '臨床での活用'],
      hasVideo: true,
      vimeoId: '1097080842',
      videoTitle: 'セミナー/マインドマップ'
    },
    {
      icon: 'ラ',
      title: 'Live Seminars',
      description: '月1回 Zoom＋アーカイブ',
      features: ['月1回のライブ開催', 'アーカイブ見放題', 'リアルタイム質疑応答'],
      hasVideo: true,
      vimeoId: '1097080842',
      videoTitle: 'セミナー/マインドマップ'
    },
    {
      icon: 'コ',
      title: 'Community',
      description: '限定Instagram/@exthera.school & 質問BOX',
      features: ['150名超のコミュニティ', '講師への質問し放題', '仲間との情報交換'],
      hasVideo: false
    },
    {
      icon: 'ア',
      title: '評価アプリ',
      description: '腰痛タイプ評価・呼吸機能不全・足関節捻挫評価',
      features: ['専用評価アプリ', '臨床での活用', '効率的な評価'],
      hasVideo: true,
      vimeoId: '1097081032',
      videoTitle: '呼吸アプリ・足関節捻挫アプリ'
    }
  ];

  const openVideo = (vimeoId, title) => {
    console.log('Opening video:', vimeoId, title);
    setActiveVideo({ vimeoId, title });
  };
  
  // Debug: Log curriculum items
  console.log('Curriculum items:', curriculumItems);

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <style jsx="true">{`
        .content-features {
          list-style: none;
          padding: 0;
        }

        .content-features li {
          font-size: 0.875rem;
          color: var(--text-light);
          margin: 0.5rem 0;
          display: flex;
          align-items: center;
          padding-left: 1rem;
          position: relative;
        }

        .content-features li::before {
          content: "";
          width: 4px;
          height: 4px;
          background: var(--primary-color);
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .video-preview {
          position: relative;
          background: linear-gradient(135deg, #1a98d5 0%, #1565c0 100%);
          border-radius: 12px;
          padding: 1rem;
          margin-top: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid #1a98d5;
        }

        .video-preview:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(26, 152, 213, 0.3);
          background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);
        }

        .play-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .play-icon {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }

        .video-preview:hover .play-icon {
          background: rgba(255, 255, 255, 0.3);
        }

        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          aspect-ratio: 16/9;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
        }

        .video-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .close-button {
          position: absolute;
          top: -50px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          z-index: 1001;
        }

        @media (max-width: 768px) {
          .video-modal {
            padding: 1rem;
          }
          .close-button {
            top: -40px;
            font-size: 1.5rem;
          }
        }
      `}</style>
      
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
            
            {/* テスト用動画ボタン */}
            <div style={{ 
              background: '#1a98d5', 
              color: 'white', 
              padding: '1rem', 
              borderRadius: '8px', 
              cursor: 'pointer',
              marginBottom: '2rem',
              display: 'inline-block'
            }} onClick={() => openVideo('1097080751', 'テスト動画')}>
              🎥 テスト動画ボタン - クリックしてください
            </div>
            <p style={{ 
              color: 'var(--text-secondary)', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              体系的に設計された学習プログラムで、確実にスキルアップできます
            </p>
          </div>

          <div className="grid grid-3">
            {curriculumItems.map((item, index) => (
              <div key={index} className="card">
                <div className="card-icon">{item.icon}</div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '700', 
                  marginBottom: '1rem' 
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: '1rem' 
                }}>
                  {item.description}
                </p>
                <ul className="content-features">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                
                {item.hasVideo && (
                  <div 
                    className="video-preview"
                    onClick={() => openVideo(item.vimeoId, item.videoTitle)}
                  >
                    <div className="play-button">
                      <div className="play-icon">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                          <path d="M12 7L0 14V0L12 7Z" fill="white"/>
                        </svg>
                      </div>
                      <span>プレビュー動画を再生</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.5rem' }}>
                      {item.videoTitle}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Video Modal */}
          {activeVideo && (
            <div className="video-modal" onClick={closeVideo}>
              <div className="video-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeVideo}>
                  ×
                </button>
                <iframe
                  src={`https://player.vimeo.com/video/${activeVideo.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={activeVideo.title}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Curriculum;