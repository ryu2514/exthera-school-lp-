import React from 'react';
import { TRIAL_URL } from '../config/links';

const Hero = () => {
  return (
    <section className="school-hero">
      <div className="container">
        <div className="school-hero__panel">
          <div className="school-hero__content">
            <div className="school-hero__copy">
              <p className="school-hero__eyebrow">運動療法を学ぶ専門職へ</p>
              <h1 className="school-hero__title">
                <span>運動療法を、</span>
                <span>現場で迷わず</span>
                <span>組み立てる。</span>
              </h1>
              <p className="school-hero__lead">
                評価、エクササイズ選択、負荷設定、伝え方まで。
                現場で使える判断軸を、動画・ライブ・コミュニティで順番に学べます。
              </p>

              <div className="school-hero__actions">
                <a className="school-hero__primary" href={TRIAL_URL} target="_blank" rel="noopener noreferrer">
                  7日間無料体験を始める
                </a>
                <span>まずは中身を確認できます</span>
              </div>

              <div className="school-hero__stats" aria-label="Exthera-School track record">
                <strong>150+<small>会員数</small></strong>
                <strong>40+<small>セミナー</small></strong>
                <strong>5000+<small>累計受講</small></strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
