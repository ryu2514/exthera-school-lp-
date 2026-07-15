import React from 'react';
import { TRIAL_URL } from '../config/links';

const Hero = () => {
  return (
    <>
      <section className="school-hero">
        <div className="container">
          <div className="school-hero__panel">
            <div className="school-hero__content">
              <div className="school-hero__copy">
                <p className="school-hero__eyebrow">若手セラピストのための実践学習</p>
                <h1 className="school-hero__title">
                  <span>運動療法が学べる</span>
                  <span>オンラインスクール</span>
                </h1>
                <p className="school-hero__lead">
                  <span>評価から運動選択・負荷設定まで。</span>
                  <span>症例動画、月1ライブ、質問コミュニティで学べます。</span>
                </p>

                <div className="school-hero__actions">
                  <a className="school-hero__primary" href={TRIAL_URL} target="_blank" rel="noopener noreferrer">
                    7日間無料で体験
                  </a>
                  <a className="school-hero__secondary" href="#interactive-demo">
                    1分デモを見る
                  </a>
                </div>
              </div>
            </div>
            <img
              className="school-hero__mobile-media"
              src="/assets/seminar-lumbar-flex-breathing.jpg"
              alt="Exthera-Schoolのオンラインセミナー画面"
            />
          </div>
        </div>
      </section>

      <section className="school-proof" aria-label="Exthera-Schoolの実績">
        <div className="container school-proof__inner">
          <p>若手から経験者まで、運動療法を学ぶ専門職が参加</p>
          <dl className="school-proof__stats">
            <div><dt>会員数</dt><dd>150+</dd></div>
            <div><dt>セミナー</dt><dd>40+</dd></div>
            <div><dt>累計受講</dt><dd>5,000+</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
};

export default Hero;
