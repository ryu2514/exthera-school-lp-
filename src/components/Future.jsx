import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Future = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const items = [
    {
      num: '01',
      before: '評価は揃ったのに、次の一手が出てこない',
      after: '所見から、次に確認することを整理できる',
      text: '評価で終わらず、仮説と運動選択までを一つの流れで考えられる。',
      image: '/assets/image2/future/01.jpg',
    },
    {
      num: '02',
      before: '気づけば毎回「鉄板メニュー」',
      after: '目の前の人に合わせて運動を選べる',
      text: '年齢、生活背景、目標を踏まえ、定番メニューから一歩先へ進める。',
      image: '/assets/image2/future/02.jpg',
    },
    {
      num: '03',
      before: '痛みが出た瞬間、代替案が浮かばない',
      after: '痛みが出た時も、安全に調整できる',
      text: '何を減らし、何を変えるか。反応を見ながら代替案を考えられる。',
      image: '/assets/image2/future/03.jpg',
    },
    {
      num: '04',
      before: '負荷量・回数・頻度が決めきれない',
      after: '回数と負荷を、理由とともに決められる',
      text: '目的と反応から負荷を組み立て、患者さんにも分かる言葉で説明できる。',
      image: '/assets/image2/future/04.jpg',
    },
    {
      num: '05',
      before: '続けるか変えるか、判断できない',
      after: '再評価から、継続と変更を判断できる',
      text: '所見の変化を確かめ、続ける理由と次へ進む基準を持てる。',
      image: '/assets/image2/future/05.jpg',
    },
    {
      num: '06',
      before: '対象者ごとにアレンジできず、テンプレ処方に',
      after: '自分の考えを、相手とチームに伝えられる',
      text: '症例に合わせた見方を整理し、患者さんや同僚と共有できる。',
      image: '/assets/image2/future/06.jpg',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getCardAnimation = (index) => {
    if (reduceMotion) return { opacity: 1, transform: 'none' };
    const isVisible = visibleCards.includes(index);
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? 'translate3d(0, 0, 0) scale(1)'
        : 'translate3d(0, 40px, 0) scale(0.96)',
      transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`,
    };
  };

  return (
      <section className="future-v2" id="future">
        <div className="container">
          <div className="future-v2__head">
            <p>学んだ先にあるのは、種目の暗記ではありません。</p>
            <h2 className="section-title">
              <span>症例ごとに考える。</span>
              <span>自分の言葉で伝える。</span>
            </h2>
            <p className="future-v2__lead">
              先ほどの6つの迷いが、判断の流れを持つことでこう変わります。
            </p>
          </div>

          <div className="future-v2__grid">
            {items.map((it, i) => (
              <article
                key={it.num}
                ref={(el) => (cardRefs.current[i] = el)}
                data-index={i}
                className="future-card"
                style={getCardAnimation(i)}
              >
                <div className="future-card__image">
                  <img
                    src={it.image}
                    alt={it.after}
                    loading="lazy"
                    width="768"
                    height="768"
                  />
                </div>
                <div className="future-card__body">
                  <span>変化 {it.num}</span>
                  <p className="future-card__before">{it.before}</p>
                  <h3>{it.after}</h3>
                  <p className="future-card__text">{it.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Future;
