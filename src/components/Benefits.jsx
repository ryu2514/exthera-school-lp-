import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      title: '毎週新コンテンツ追加',
      description: '肉離れ・骨盤・呼吸等の運動療法を毎週更新。新しい知識と技術が継続的に学べる',
      result: '→ 新しい症例に対応できるスキルが身につく',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: '明日から使える実践技術',
      description: '患者さんの状態を正確に評価し、適切なエクササイズを選択できる具体的な手法',
      result: '→ 患者さんから「効果が出た」と感謝される',
      icon: '💪',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      title: '隙間時間で効率学習',
      description: 'スマホで動画視聴、電車で記事読み、休憩時間にツールダウンロードで学習進捗',
      result: '→ 忙しい日常でも着実にスキルアップ',
      icon: '📱',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'プロに24時間以内質問',
      description: '臨床での疑問、患者さんへの対応、効果的なエクササイズを経験豊富な講師に直接相談',
      result: '→ 一人で悩まず、自信を持って治療に取り組める',
      icon: '👨‍⚕️',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      title: '入会特典＆無料体験',
      description: '238分の特別セミナー動画、肩関節・腰部ガイドブック、チェックリストをプレゼント',
      result: '→ 初日から価値あるコンテンツで学習スタート',
      icon: '🎁',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ なぜ選ばれるのか？
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Exthera-Schoolが
            <span className="text-blue-600">選ばれる5つの理由</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            1年目でも確実に結果を出せる理由があります
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${benefit.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer border border-white/50`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed text-base mb-3">
                {benefit.description}
              </p>
              
              <p className="text-indigo-600 font-semibold text-sm">
                {benefit.result}
              </p>

              {/* Hover Effect Arrow */}
              <div className="flex items-center mt-6 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">詳しく見る</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🏆 理学療法士が認める実績
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">満足度</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                <div className="text-gray-600">アクティブ会員</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
                <div className="text-gray-600">専門セミナー</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;