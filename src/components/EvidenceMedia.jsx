import React from 'react';

const proofItems = [
  {
    value: '見る',
    label: '実際の講義シーン',
  },
  {
    value: '整理する',
    label: 'スライドで判断軸を確認',
  },
  {
    value: '試す',
    label: '1ケースで体験',
  },
];

const EvidenceMedia = () => {
  return (
    <section className="evidence-media" id="evidence-media">
      <div className="container">
        <div className="evidence-media__layout">
          <div className="evidence-media__copy">
            <span>ACTUAL LEARNING SCENE</span>
            <h2>講義の空気感と、スライドの整理を見てから体験する。</h2>
            <p>
              Exthera-Schoolでは、セミナーで実際の身体の見方を確認し、
              スライドで評価から運動処方までの判断を整理します。
              その流れを、下の1分デモでそのまま触れる構成にしています。
            </p>
            <div className="evidence-media__proofs" aria-label="体験の流れ">
              {proofItems.map((item) => (
                <div className="evidence-media__proof" key={item.value}>
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
            <a className="evidence-media__link" href="#interactive-demo">
              1分デモを試す
            </a>
          </div>

          <div className="evidence-media__stage" aria-label="講義と教材のプレビュー">
            <figure className="evidence-media__photo">
              <img src="/assets/seminar-lumbar-flex-breathing.jpg" alt="実際のオンラインセミナーで運動療法の実技と解説を行っている様子" loading="lazy" />
              <figcaption>
                <span>LIVE SEMINAR</span>
                実技とスライドを見ながら、評価から運動療法へのつなげ方を確認する
              </figcaption>
            </figure>

            <figure className="evidence-media__slide">
              <img src="/assets/slide-breath-exercise-progression.png" alt="段階的な呼吸エクササイズを整理した講義スライド" loading="lazy" />
              <figcaption>
                <span>SLIDE SAMPLE</span>
                エクササイズの段階づけを、あとで見返せる形にする
              </figcaption>
            </figure>

            <div className="evidence-media__note">
              <span>次の体験へ</span>
              <p>
                画像で雰囲気を掴んだあと、評価所見をどう運動処方へつなげるかを1ケースで確認できます。
              </p>
            </div>
          </div>
        </div>

        <div className="evidence-media__review-strip">
          <div className="evidence-media__review-copy">
            <span>SEMINAR FEEDBACK</span>
            <p>実際のセミナーは、受講後の声まで含めて学習内容を確認できます。</p>
          </div>
          <div className="evidence-media__review-images">
            <img src="/assets/7.png" alt="腰椎分離症セミナーと膝OAセミナーの受講後評価" loading="lazy" />
            <img src="/assets/9.png" alt="腰痛セミナーと呼吸セミナーの受講後評価" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceMedia;
