import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Benefits = () => {
  const benefits = [
    {
      title: '週1回以上更新',
      description: '記事・動画・ツールで習得が難しい運動療法を体系化',
      icon: '📚'
    },
    {
      title: '実践的コンテンツ',
      description: '明日から患者指導に使える評価＆エクササイズ。累計30回以上のライブセミナー録画も見放題',
      icon: '🎯'
    },
    {
      title: '地方勤務でも学べる',
      description: '完全オンライン、スマホでいつでも視聴',
      icon: '📱'
    },
    {
      title: '150名超のクローズドコミュニティ',
      description: '講師＆仲間に質問し放題',
      icon: '👥'
    },
    {
      title: '22大特典・238分のセミナー動画を無料プレゼント',
      description: 'まずは0円で価値を体験',
      icon: '🎁'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exthera-Schoolが選ばれる5つの理由
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-brand mr-2" />
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;