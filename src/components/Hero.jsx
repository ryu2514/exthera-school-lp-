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
                <p className="school-hero__eyebrow">臨床1-3年目で、運動療法に迷うあなたへ</p>
                <h1 className="school-hero__title">
                  <span>評価の次に、</span>
                  <span>何を見るかが分かる。</span>
                </h1>
                <p className="school-hero__lead">
                  種目を覚えるだけで終わらない。評価・仮説・運動選択を、症例の順番で学べます。
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
