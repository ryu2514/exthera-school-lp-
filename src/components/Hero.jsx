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
                <p className="school-hero__eyebrow">若手セラピスト向けのオンラインスクール</p>
                <h1 className="school-hero__title">
                  <span>運動療法を、</span>
                  <span>症例から学ぶ。</span>
                </h1>
                <p className="school-hero__lead">
                  <span>評価から運動選択・負荷設定まで。</span>
                  <span>実際の症例に沿って、考え方を一つずつ整理します。</span>
                </p>

                <div className="school-hero__actions">
                  <a className="school-hero__primary" href={TRIAL_URL} target="_blank" rel="noopener noreferrer">
                    7日間無料で体験
                  </a>
                  <a className="school-hero__secondary" href="#interactive-demo">
                    授業デモを見る
                  </a>
                </div>
              </div>
            </div>
            <img
              className="school-hero__mobile-media"
              src="/assets/hero-training-bg.jpg"
              alt="講師がセラピストへ実技指導を行う様子"
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
