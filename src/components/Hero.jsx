import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 152, 213, 0.1), rgba(255, 255, 255, 0.9)), url('/assets/hero-exercise-therapy.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            臨床1年目でも再現できる運動療法を、<br />
            体系的に・継続的に学べる<br />
            <span className="text-brand">オンラインスクール</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            "現場で迷わない" 理学療法を、最短ルートで手に入れる。
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-brand hover:brightness-90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              7日間無料体験を始める
            </button>
            <button className="border-2 border-brand text-brand hover:bg-brand hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              詳細を見る
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-sm text-gray-600"
          >
            <p>22大特典・238分のセミナー動画を無料プレゼント</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;