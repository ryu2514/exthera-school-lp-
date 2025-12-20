import React from 'react';

const LatestRelease = () => {
    const styles = {
        section: {
            padding: '5rem 0',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
            position: 'relative',
            overflow: 'hidden',
        },
        badge: {
            display: 'inline-block',
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            color: 'white',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            letterSpacing: '1px',
            boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)',
        },
        title: {
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.2,
        },
        titleHighlight: {
            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        subtitle: {
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.8,
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 900 ? '1fr 1.2fr' : '1fr',
            gap: '3rem',
            alignItems: 'center',
        },
        content: {
            textAlign: window.innerWidth > 900 ? 'left' : 'center',
        },
        videoWrapper: {
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
            border: '4px solid rgba(59, 130, 246, 0.3)',
        },
        videoContainer: {
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            background: '#000',
        },
        iframe: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
        },
        features: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginTop: '2rem',
            justifyContent: window.innerWidth > 900 ? 'flex-start' : 'center',
        },
        featureTag: {
            background: 'rgba(59, 130, 246, 0.2)',
            color: '#60a5fa',
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '600',
            border: '1px solid rgba(59, 130, 246, 0.3)',
        },
        cta: {
            marginTop: '2rem',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: window.innerWidth > 900 ? 'flex-start' : 'center',
        },
        btn: {
            padding: '14px 28px',
            borderRadius: '50px',
            fontWeight: '700',
            fontSize: '1rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
        },
        btnPrimary: {
            background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
            color: '#fff',
            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.4)',
        },
        btnSecondary: {
            background: 'transparent',
            color: '#60a5fa',
            border: '2px solid rgba(96, 165, 250, 0.5)',
        },
    };

    return (
        <section id="latest-release" style={styles.section}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={styles.badge}>🚀 NEW RELEASE</div>
                    <h2 style={styles.title}>
                        会員限定<span style={styles.titleHighlight}>最新アプリ</span>
                    </h2>
                    <p style={styles.subtitle}>
                        会員の皆様に無料で提供される最新の評価アプリをご紹介します
                    </p>
                </div>

                <div style={styles.grid}>
                    <div style={styles.content}>
                        <h3 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>
                            GaitKnee-View
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                            膝関節のラテラルスラストを定量的に評価できる歩行分析アプリ。<br />
                            スマホで撮影した動画をアップロードするだけで、AIが自動で解析します。
                        </p>

                        <div style={styles.features}>
                            <span style={styles.featureTag}>📊 定量評価</span>
                            <span style={styles.featureTag}>📱 スマホ対応</span>
                            <span style={styles.featureTag}>🤖 AI解析</span>
                            <span style={styles.featureTag}>⚡ 即時結果</span>
                        </div>

                        <div style={styles.cta}>
                            <a
                                href="https://gaitknee-view.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ ...styles.btn, ...styles.btnPrimary }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 12px 25px rgba(37, 99, 235, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
                                }}
                            >
                                アプリを試す
                            </a>
                            <button
                                style={{ ...styles.btn, ...styles.btnSecondary }}
                                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                会員になる
                            </button>
                        </div>
                    </div>

                    <div style={styles.videoWrapper}>
                        <div style={styles.videoContainer}>
                            <iframe
                                src="https://player.vimeo.com/video/1148296410?badge=0&autopause=0&autoplay=0&loop=1&muted=1&title=0&byline=0&portrait=0&controls=1&playsinline=1"
                                style={styles.iframe}
                                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                allowFullScreen
                                title="GaitKnee-View デモ"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestRelease;
