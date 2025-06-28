import { motion } from 'framer-motion';

const Curriculum = () => {
  const curriculumItems = [
    {
      title: 'Weekly Articles',
      description: '機能解剖・運動連鎖・評価手順',
      icon: '📝',
      features: ['週1回以上の新記事', '体系的な学習構成', '実践的な内容']
    },
    {
      title: 'Video Library',
      description: '部位別エクササイズ解説（肩・腰・骨盤帯…）',
      icon: '🎬',
      features: ['部位別の詳細解説', '動画による実技指導', '繰り返し学習可能']
    },
    {
      title: 'Tool Kit',
      description: 'マインドマップ・評価チェックリスト',
      icon: '🛠️',
      features: ['実践的なツール', 'ダウンロード可能', '臨床での活用']
    },
    {
      title: 'Live Seminars',
      description: '月1回 Zoom＋アーカイブ',
      icon: '🎯',
      features: ['月1回のライブ開催', 'アーカイブ見放題', 'リアルタイム質疑応答']
    },
    {
      title: 'Community',
      description: '限定Instagram/@exthera.school & 質問BOX',
      icon: '💬',
      features: ['150名超のコミュニティ', '講師への質問し放題', '仲間との情報交換']
    },
    {
      title: '評価アプリ',
      description: '腰痛タイプ評価・呼吸機能不全・足関節捻挫評価',
      icon: '📱',
      features: ['専用評価アプリ', '臨床での活用', '効率的な評価']
    }
  ];

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
            学習コンテンツ
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            体系的に設計された学習プログラムで、確実にスキルアップできます
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {curriculumItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;