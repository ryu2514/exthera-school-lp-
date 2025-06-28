import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  const features = [
    '記事・動画・ツール集への無制限アクセス',
    '質問BOXでの講師への質問し放題',
    'ライブセミナー無料参加',
    'アーカイブ動画見放題',
    '150名超のコミュニティ参加',
    '専用評価アプリの利用',
    '月1回の新コンテンツ追加'
  ];

  const bonuses = [
    '7日間無料体験',
    '肩関節ガイドブックPDF',
    '腰部ガイドブックPDF',
    '今だけ限定：募集期間内入会で2冊プレゼント（計20,000字）'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-gray-600 text-lg">
            シンプルで分かりやすい月額制
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-brand text-white text-center py-4">
              <span className="text-sm font-semibold">🎉 今だけ限定キャンペーン 🎉</span>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Exthera-School メンバーシップ
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-brand">
                    ¥&lt;&lt;FIXME&gt;&gt;
                  </span>
                  <span className="text-gray-600 ml-2">/月</span>
                </div>
                <p className="text-gray-600">
                  月額制で安心・シンプル
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    📚 提供内容
                  </h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-brand mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    🎁 特典
                  </h4>
                  <ul className="space-y-3">
                    {bonuses.map((bonus, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{bonus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-yellow-800 mb-2">
                    ⏰ 今だけ限定
                  </h4>
                  <p className="text-yellow-700">
                    募集期間内の入会でガイドブック2冊（計20,000字）をプレゼント！
                  </p>
                  <p className="text-sm text-yellow-600 mt-1">
                    締切：&lt;&lt;FIXME: 締切日&gt;&gt;
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-brand hover:brightness-90 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl mb-4">
                  7日間無料体験を始める
                </button>
                <p className="text-sm text-gray-600">
                  クレジットカード不要・いつでも解約可能
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;