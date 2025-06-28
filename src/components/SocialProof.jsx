import { motion } from 'framer-motion';

const SocialProof = () => {
  const stats = [
    {
      number: '19,000+',
      label: 'Instagramフォロワー',
      icon: '📸'
    },
    {
      number: '30本超',
      label: '有料ライブセミナー累計',
      icon: '🎥'
    },
    {
      number: '150名超',
      label: 'オンラインスクール会員',
      icon: '👨‍🎓'
    }
  ];

  return (
    <section className="py-20 bg-brand">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            多くの理学療法士に選ばれています
          </h2>
          <p className="text-blue-100 text-lg">
            信頼できる実績とコミュニティ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-blue-100 text-sm">
            ※2023年時点のデータです
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;