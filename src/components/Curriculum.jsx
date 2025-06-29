import React from 'react';

const Curriculum = () => {

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
      hasVideo: false
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
      title: '呼吸評価アプリ',
      description: '呼吸機能不全の評価アプリ',
      features: ['専用評価アプリ', '臨床での活用', '効率的な評価'],
      hasVideo: true,
      vimeoId: '1097081032',
      videoTitle: '呼吸評価アプリ'
    },
    {
      icon: '足',
      title: '足関節捻挫アプリ',
      description: '足関節捻挫の評価アプリ',
      features: ['専用評価アプリ', '臨床での活用', '効率的な評価'],
      hasVideo: true,
      vimeoId: '1097081089',
      videoTitle: '足関節捻挫アプリ'
    }
  ];


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
            </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Curriculum;