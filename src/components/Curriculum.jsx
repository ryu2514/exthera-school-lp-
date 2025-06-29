import React from 'react';

const Curriculum = () => {
  const curriculumItems = [
    {
      icon: '記',
      title: 'Weekly Articles',
      description: '機能解剖・運動連鎖・評価手順',
      features: ['週1回以上の新記事', '体系的な学習構成', '実践的な内容']
    },
    {
      icon: '動',
      title: 'Video Library',
      description: '部位別エクササイズ解説（肩・腰・骨盤帯…）',
      features: ['部位別の詳細解説', '動画による実技指導', '繰り返し学習可能']
    },
    {
      icon: 'ツ',
      title: 'Tool Kit',
      description: 'マインドマップ・評価チェックリスト',
      features: ['実践的なツール', 'ダウンロード可能', '臨床での活用']
    },
    {
      icon: 'ラ',
      title: 'Live Seminars',
      description: '月1回 Zoom＋アーカイブ',
      features: ['月1回のライブ開催', 'アーカイブ見放題', 'リアルタイム質疑応答']
    },
    {
      icon: 'コ',
      title: 'Community',
      description: '限定Instagram/@exthera.school & 質問BOX',
      features: ['150名超のコミュニティ', '講師への質問し放題', '仲間との情報交換']
    },
    {
      icon: 'ア',
      title: '評価アプリ',
      description: '腰痛タイプ評価・呼吸機能不全・足関節捻挫評価',
      features: ['専用評価アプリ', '臨床での活用', '効率的な評価']
    }
  ];

  return (
    <>
      <style jsx>{`
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Curriculum;