import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Problems = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const items = [
    {
      num: '01',
      title: '所見は取れた。でも次の一手が出ない',
      text: '評価項目は埋まったのに、どの情報を運動選択につなげるかが曖昧。',
      image: '/assets/image2/problems/01.jpg',
    },
    {
      num: '02',
      title: 'いつも同じ運動を選んでしまう',
      text: '腰痛ならこの種目、膝ならこの種目。目の前の人に合わせる余裕がない。',
      image: '/assets/image2/problems/02.jpg',
    },
    {
      num: '03',
      title: '痛みが出ると、そこで止まる',
      text: '負荷を下げるのか、動きを変えるのか。安全な代替案をすぐに判断できない。',
      image: '/assets/image2/problems/03.jpg',
    },
    {
      num: '04',
      title: '回数と負荷に根拠が持てない',
      text: '10回3セットを何となく選び、患者さんに理由を説明しきれない。',
      image: '/assets/image2/problems/04.jpg',
    },
    {
      num: '05',
      title: '続けるか変えるか迷う',
      text: '再評価しても、何を基準に継続や変更を決めるか整理できない。',
      image: '/assets/image2/problems/05.jpg',
    },
    {
      num: '06',
      title: '症例ごとの考え方がまとまらない',
      text: '年齢、生活、目標が違うのに、同じ見方と運動になってしまう。',
      image: '/assets/image2/problems/06.jpg',
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
    const fromLeft = index % 2 === 0;
    const hiddenTransform = isMobile
      ? 'translate3d(0, 24px, 0) scale(0.98)'
      : `translate3d(${fromLeft ? '-60px' : '60px'}, 30px, 0) scale(0.95)`;

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? 'translate3d(0, 0, 0) scale(1)'
        : hiddenTransform,
      transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`,
    };
  };

  return (
      <section className="problems-v2" id="problems">
        <div className="container">
          <div className="problems-v2__head">
            <p>知識は増えた。でも、現場では迷う。</p>
            <h2 className="section-title">
              <span>その迷いは、</span>
              <span>学び方で変えられる。</span>
            </h2>
          </div>
          <div className="problems-v2__grid">
            {items.map((it, i) => (
              <article
                key={it.num}
                ref={(el) => (cardRefs.current[i] = el)}
                data-index={i}
                className="problem-card"
                style={getCardAnimation(i)}
              >
                <div className="problem-card__image">
                  <img
                    src={it.image}
                    alt={it.title}
                    loading="lazy"
                    width="768"
                    height="768"
                  />
                </div>
                <div className="problem-card__body">
                  <span>悩み {it.num}</span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Problems;
