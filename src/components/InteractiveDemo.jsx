import React, { useMemo, useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import { TRIAL_URL } from '../config/links';

const demoSteps = [
  {
    label: 'STEP 01',
    title: '評価所見を整理',
    prompt: '股関節伸展制限があり、立脚後期で腰椎伸展が強く出るケース。次に何を確認しますか？',
    finding: 'Thomas test 陽性 / 腸腰筋の伸張感あり / 歩行で骨盤前傾が増える',
    options: [
      {
        text: '股関節伸展の可動性と骨盤制御を分けて確認する',
        correct: true,
        feedback: 'OK。可動性だけでなく、代償を止められるかを分けると処方が決めやすくなります。',
      },
      {
        text: 'とりあえず腸腰筋ストレッチを毎日出す',
        correct: false,
        feedback: '惜しいです。伸張だけで終えると、代償パターンが残るケースがあります。',
      },
      {
        text: '痛みがないので歩行練習だけ増やす',
        correct: false,
        feedback: '歩行練習の前に、必要な可動域と制御がそろっているかを確認したい場面です。',
      },
    ],
  },
  {
    label: 'STEP 02',
    title: '仮説を立てる',
    prompt: '伸展可動域は少し改善するが、片脚支持で骨盤前傾が強くなる。次の仮説は？',
    finding: 'ストレッチ後 ROM は改善 / 片脚支持で腰椎伸展 / 腹圧保持が不安定',
    options: [
      {
        text: '可動域不足に加えて、骨盤を保つ制御課題がある',
        correct: true,
        feedback: 'OK。ROM改善だけでなく、獲得した可動域を動作で使えるかが次の分岐です。',
      },
      {
        text: '股関節伸展制限だけが原因と考える',
        correct: false,
        feedback: 'ROMだけでは説明しきれません。支持中の骨盤制御も見たい所見です。',
      },
      {
        text: '筋力低下だけを優先して高負荷を入れる',
        correct: false,
        feedback: '高負荷の前に、代償を抑えた低負荷の再学習が合う可能性があります。',
      },
    ],
  },
  {
    label: 'STEP 03',
    title: '運動処方へつなぐ',
    prompt: '初回に出すなら、どの流れが現場で使いやすいですか？',
    finding: '目的：股関節伸展を出しながら腰椎代償を減らす / 自主トレに落とし込む',
    options: [
      {
        text: '伸展モビリティ → 骨盤中間位の保持 → 片脚支持へ段階づける',
        correct: true,
        feedback: 'OK。評価、仮説、処方が一本でつながると説明もしやすくなります。',
      },
      {
        text: 'まず強いストレッチだけを2週間続ける',
        correct: false,
        feedback: '継続は必要ですが、動作への接続がないと変化が現場で見えにくくなります。',
      },
      {
        text: '細かい評価はせず、全員同じメニューにする',
        correct: false,
        feedback: 'テンプレ処方から抜けるには、所見に応じた分岐が必要です。',
      },
    ],
  },
];

const routeItems = ['評価', '仮説', '運動選択', '負荷設定', '伝え方'];

const InteractiveDemo = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const step = demoSteps[stepIndex];
  const selected = selectedIndex === null ? null : step.options[selectedIndex];
  const isLastStep = stepIndex === demoSteps.length - 1;

  const completedCount = useMemo(() => {
    return stepIndex + (selected?.correct ? 1 : 0);
  }, [selected, stepIndex]);

  const handleSelect = (optionIndex) => {
    setSelectedIndex(optionIndex);
  };

  const handleNext = () => {
    if (!selected?.correct) return;
    if (isLastStep) {
      document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setStepIndex((current) => current + 1);
    setSelectedIndex(null);
  };

  return (
    <section className="interactive-demo" id="interactive-demo">
      <div className="container">
        <div className="interactive-demo__layout">
          <div className="interactive-demo__intro">
            <span>1 MINUTE DEMO</span>
            <h2>評価から運動療法まで、どうつなげるかを1ケースで体験する。</h2>
            <p>
              Exthera-Schoolで扱うのは、単なるエクササイズ集ではありません。
              所見をどう解釈し、どの運動療法へつなげるかを、現場の順番で学びます。
            </p>
            <div className="interactive-demo__route" aria-label="学習の流れ">
              {routeItems.map((item, index) => (
                <React.Fragment key={item}>
                  <span className={index <= stepIndex ? 'is-active' : ''}>{item}</span>
                  {index < routeItems.length - 1 && <ArrowRightIcon aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="interactive-demo__panel">
            <div className="interactive-demo__top">
              <div>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
              </div>
              <div className="interactive-demo__progress" aria-label={`進行度 ${completedCount} / ${demoSteps.length}`}>
                <strong>{Math.min(completedCount, demoSteps.length)}</strong>
                <small>/ {demoSteps.length}</small>
              </div>
            </div>

            <div className="interactive-demo__case">
              <span>CASE</span>
              <p>{step.finding}</p>
            </div>

            <p className="interactive-demo__prompt">{step.prompt}</p>

            <div className="interactive-demo__options">
              {step.options.map((option, optionIndex) => {
                const isSelected = selectedIndex === optionIndex;
                return (
                  <button
                    className={`interactive-demo__option${isSelected ? ' is-selected' : ''}${isSelected && option.correct ? ' is-correct' : ''}${isSelected && !option.correct ? ' is-wrong' : ''}`}
                    key={option.text}
                    onClick={() => handleSelect(optionIndex)}
                    type="button"
                  >
                    <span>{option.text}</span>
                    {isSelected && option.correct && <CheckCircleIcon aria-hidden="true" />}
                  </button>
                );
              })}
            </div>

            <div className={`interactive-demo__feedback${selected ? ' is-visible' : ''}`}>
              <strong>{selected?.correct ? '判断の流れがつながっています' : 'もう一段、所見を分けて考えます'}</strong>
              <p>{selected?.feedback ?? '選択肢を押すと、判断の根拠が表示されます。'}</p>
            </div>

            <button
              className="interactive-demo__next"
              disabled={!selected?.correct}
              onClick={handleNext}
              type="button"
            >
              <PlayCircleIcon aria-hidden="true" />
              <span>{isLastStep ? '学び方と料金を見る' : '次の判断へ進む'}</span>
            </button>
          </div>
        </div>

        <div className="interactive-demo__bridge">
          <div>
            <span>POINT</span>
            <h3>重要なのは、評価で終わらず運動療法までつなげること。</h3>
            <p>
              ROM、動作、代償、痛みの情報を集めても、運動選択・負荷設定・伝え方まで落とし込めなければ現場では使い切れません。
              Exthera-Schoolでは、その接続の仕方をケースごとに学べます。
            </p>
          </div>
          <a href={TRIAL_URL} target="_blank" rel="noopener noreferrer">
            7日間無料体験で確認する
          </a>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
