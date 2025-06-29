import { motion } from 'framer-motion';

const Pricing = () => {
  const features = [
    { icon: '📚', text: '毎週更新の記事・動画・ツール集' },
    { icon: '💬', text: '講師への質問し放題（24時間以内回答）' },
    { icon: '🎥', text: 'ライブセミナー無料参加（月1回開催）' },
    { icon: '📼', text: '過去30本超のセミナー見放題' },
    { icon: '👥', text: '150名超の専門コミュニティ参加' },
    { icon: '📱', text: '専用評価アプリ利用権' },
    { icon: '🔄', text: '新コンテンツ優先アクセス' },
    { icon: '📋', text: '実践チェックリスト・ツール集' }
  ];

  const bonuses = [
    { icon: '🎁', text: '7日間完全無料体験', highlight: true },
    { icon: '📖', text: '肩関節完全ガイドブック（PDF・50ページ）', highlight: true },
    { icon: '📖', text: '腰部疾患対応ガイドブック（PDF・45ページ）', highlight: true },
    { icon: '⏰', text: '限定！238分特別セミナー動画', highlight: true }
  ];

  return (
    <section id="pricing" className="section-spacing bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💰 お得な料金プラン
          </div>
          <h2 className="text-section-title text-gray-900 mb-6">
            <span className="text-indigo-600">月額たった2,980円</span>で
            <br />プロの技術が身につく
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            コーヒー1杯分の値段で、一生使える専門スキルを習得
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                🏆 最も人気のプラン
              </span>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-indigo-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-10">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-4xl font-bold mb-3">Exthera-School プレミアム</h3>
                <p className="text-indigo-100 text-xl mb-4">理学療法士のための実践スキル習得プラン</p>
                <div className="bg-white/20 rounded-xl p-4 inline-block">
                  <p className="text-lg font-bold">✨ 臨床で即使える技術が身につく唯一のスクール</p>
                </div>
              </div>
              
              {/* Pricing */}
              <div className="p-10 text-center border-b border-gray-100">
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-gray-500 text-2xl line-through">¥9,800</span>
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold animate-pulse">🔥 70%OFF</span>
                  </div>
                  <p className="text-gray-600">通常価格から大幅割引中！</p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-7xl font-extrabold text-indigo-600">¥2,980</span>
                    <span className="text-gray-600 ml-3 text-2xl">/月</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-xl border border-indigo-200">
                      <p className="text-indigo-600 font-bold text-lg">わずか1日あたり</p>
                      <p className="text-3xl font-bold text-indigo-600">99円</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-green-200">
                      <p className="text-green-600 font-bold text-lg">コーヒー1杯分で</p>
                      <p className="text-lg text-green-600">一生使える技術を習得</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl mb-4 w-full max-w-md"
                >
                  🚀 今すぐ7日間無料で始める
                </motion.button>
                <p className="text-sm text-gray-500">
                  クレジットカード不要・いつでも解約可能
                </p>
              </div>

              {/* Features Grid */}
              <div className="p-10 grid md:grid-cols-2 gap-10">
                <div>
                  <div className="bg-indigo-50 p-6 rounded-2xl mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                      <span className="bg-indigo-100 text-indigo-600 p-3 rounded-xl mr-4 text-2xl">📚</span>
                      月額2,980円で利用できる全サービス
                    </h4>
                    <p className="text-gray-600 text-base">
                      通常の参考書1冊分の料金で、これだけのサービスが使い放題：
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-4 rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{feature.icon}</span>
                          <span className="text-gray-800 font-medium text-base">{feature.text}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-yellow-50 p-6 rounded-2xl mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                      <span className="bg-yellow-100 text-yellow-600 p-3 rounded-xl mr-4 text-2xl">🎁</span>
                      今だけの特典
                    </h4>
                    <p className="text-gray-600 text-base">
                      入会と同時に、これらを全てプレゼント：
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {bonuses.map((bonus, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`p-4 rounded-xl border-2 ${bonus.highlight ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{bonus.icon}</span>
                          <span className={`font-medium text-base ${bonus.highlight ? 'text-green-800' : 'text-gray-800'}`}>
                            {bonus.text}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Urgency Section */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 border-t border-gray-100 p-8">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-red-800 mb-4 flex items-center justify-center">
                    <span className="animate-pulse mr-2">⚡</span>
                    限定キャンペーン実施中
                    <span className="animate-pulse ml-2">⚡</span>
                  </h4>
                  <p className="text-red-700 text-lg mb-4">
                    先着<span className="font-bold text-2xl text-red-600">100名限定</span>で70%OFF！
                  </p>
                  <div className="bg-white rounded-lg p-4 inline-block">
                    <div className="text-sm text-gray-600 mb-2">キャンペーン終了まで</div>
                    <div className="text-3xl font-bold text-red-600">あと48時間</div>
                  </div>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="bg-gray-50 p-6 text-center">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center">
                    <span className="text-green-500 text-xl mr-2">✓</span>
                    <span className="text-gray-700 font-medium">7日間返金保証</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-xl mr-2">✓</span>
                    <span className="text-gray-700 font-medium">いつでも解約OK</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-xl mr-2">✓</span>
                    <span className="text-gray-700 font-medium">継続率98%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;