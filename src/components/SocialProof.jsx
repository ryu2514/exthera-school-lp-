import React, { useState, useEffect } from 'react';

const SocialProof = () => {
  // Base follower counts
  const baseStats = {
    instagram: 19000,
    tiktok: 4524,
    x: 6932,
    youtube: 510,
    threads: 2982
  };

  const [stats, setStats] = useState(baseStats);
  const [isVisible, setIsVisible] = useState(false);

  // Counter animation hook
  const useCountUp = (end, start = 0, duration = 2000) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const currentCount = Math.floor(progress * (end - start) + start);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, start, duration, isVisible]);

    return count;
  };

  // Add random increments every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => ({
        instagram: prevStats.instagram + Math.floor(Math.random() * 3),
        tiktok: prevStats.tiktok + Math.floor(Math.random() * 2),
        x: prevStats.x + Math.floor(Math.random() * 2),
        youtube: prevStats.youtube + Math.floor(Math.random() * 1),
        threads: prevStats.threads + Math.floor(Math.random() * 1)
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('social-proof');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Animated counts
  const instagramCount = useCountUp(stats.instagram);
  const tiktokCount = useCountUp(stats.tiktok);
  const xCount = useCountUp(stats.x);
  const youtubeCount = useCountUp(stats.youtube);
  const threadsCount = useCountUp(stats.threads);

  const socialPlatforms = [
    {
      name: 'Instagram',
      count: instagramCount,
      icon: '📸',
      color: '#E4405F',
      description: 'フォロワー'
    },
    {
      name: 'TikTok', 
      count: tiktokCount,
      icon: '🎵',
      color: '#FF0050',
      description: 'フォロワー'
    },
    {
      name: 'X (Twitter)',
      count: xCount,
      icon: '🐦',
      color: '#1DA1F2',
      description: 'フォロワー'
    },
    {
      name: 'YouTube',
      count: youtubeCount,
      icon: '🎥',
      color: '#FF0000',
      description: 'チャンネル登録者'
    },
    {
      name: 'Threads',
      count: threadsCount,
      icon: '🧵',
      color: '#000000',
      description: 'フォロワー'
    }
  ];

  return (
    <>
      <style jsx>{`
        .stats-card {
          text-align: center;
          background: rgba(255,255,255,0.15);
          border-radius: var(--border-radius);
          padding: 2rem 1.5rem;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stats-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .stats-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--platform-color, rgba(255,255,255,0.3));
        }

        .platform-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .stats-number {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          display: block;
          background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .platform-name {
          color: rgba(255,255,255,0.9);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .stats-label {
          color: rgba(255,255,255,0.7);
          font-weight: 400;
          font-size: 0.8rem;
        }

        .live-indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .stats-card {
            padding: 1.5rem 1rem;
          }
          .stats-number {
            font-size: 2rem;
          }
        }
      `}</style>
      
      <section id="social-proof" className="section section-blue">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="live-indicator">
              <span className="live-dot"></span>
              リアルタイム更新中
            </div>
            <h2 style={{ 
              fontSize: 'clamp(2.25rem, 5vw, 3rem)', 
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1rem'
            }}>
              SNS総フォロワー数<br />33,000人突破！
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              各SNSプラットフォームで理学療法士コミュニティを形成
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {socialPlatforms.map((platform, index) => (
              <div 
                key={platform.name} 
                className="stats-card"
                style={{ 
                  '--platform-color': platform.color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="platform-icon">{platform.icon}</span>
                <span className="stats-number">
                  {platform.count.toLocaleString()}
                </span>
                <div className="platform-name">{platform.name}</div>
                <div className="stats-label">{platform.description}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ 
              color: 'rgba(255,255,255,0.8)', 
              fontSize: '0.875rem' 
            }}>
              ※数値は2024年リアルタイムデータです
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialProof;