import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '初学者でもついていけますか？',
      answer: '評価→エクササイズ処方をステップ化しているので安心です。基礎から応用まで段階的に学習できるよう設計されており、1年目の理学療法士でも無理なく習得できます。'
    },
    {
      question: '退会は簡単ですか？',
      answer: 'マイページからワンクリックでいつでも解約できます。面倒な手続きや引き止めは一切ありません。'
    },
    {
      question: 'ライブセミナー参加費は？',
      answer: '会員はすべて無料・アーカイブ見放題です。月1回開催されるライブセミナーは追加費用なしで参加でき、録画も無制限で視聴できます。'
    },
    {
      question: 'スマートフォンでも学習できますか？',
      answer: 'はい、完全対応しています。通勤時間や休憩時間など、いつでもどこでもスマートフォンで学習できるよう最適化されています。'
    },
    {
      question: '地方在住でも問題ありませんか？',
      answer: '完全オンラインなので、日本全国どこからでも受講可能です。インターネット環境があれば場所を選びません。'
    },
    {
      question: '質問への回答はどのくらいで返ってきますか？',
      answer: '通常1-2営業日以内に講師が回答します。緊急性の高い質問については可能な限り迅速に対応いたします。'
    },
    {
      question: '無料体験期間中に退会したら料金はかかりますか？',
      answer: '7日間の無料体験期間中に退会された場合、料金は一切発生しません。クレジットカードの登録も不要です。'
    },
    {
      question: 'コンテンツはどのくらいの頻度で更新されますか？',
      answer: '週1回以上の頻度で新しい記事や動画を追加しています。また、月1回のライブセミナーで最新の情報をお届けします。'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-gray-600 text-lg">
            ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    Q. {faq.question}
                  </span>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed">
                            A. {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            その他のご質問がございましたら、お気軽にお問い合わせください
          </p>
          <button className="bg-brand hover:brightness-90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            お問い合わせ
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;