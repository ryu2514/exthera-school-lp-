import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-600 overflow-hidden section-spacing">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-6 py-4">
        <div className="text-white font-bold text-2xl">
          <span className="text-yellow-300">Exthera</span>-School
        </div>
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('features')} className="text-white hover:text-yellow-300 transition-colors">特徴</button>
          <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-yellow-300 transition-colors">料金</button>
          <button onClick={() => scrollToSection('faq')} className="text-white hover:text-yellow-300 transition-colors">FAQ</button>
        </div>
      </nav>

      <div className="container mx-auto container-padding py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm mb-8"
          >
            🎉 限定キャンペーン実施中！22大特典プレゼント
          </motion.div>

          <h1 className="text-hero text-white mb-8">
            <span className="block mb-2">📚 臨床1年目から</span>
            <span className="block text-yellow-300 mb-2">患者さんに喜ばれる</span>
            <span className="block">理学療法士になる</span>
          </h1>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-5xl mx-auto shadow-2xl border border-white/20">
            <div className="text-center mb-6">
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⚠️ よくある悩み
              </div>
              <h2 className="text-2xl md:text-3xl text-gray-900 mb-2 font-bold">
                こんな経験ありませんか？
              </h2>
              <p className="text-gray-600">理学療法士1年目によくある4つの悩み</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-400">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl mt-1">😰</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">教科書通りでも効果が出ない</h3>
                    <p className="text-gray-700 text-sm">学んだ通りにやっているのに、患者さんの症状が改善しない...</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-400">
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 text-2xl mt-1">🤔</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">何を指導すべきか迷う</h3>
                    <p className="text-gray-700 text-sm">患者さんに適切なエクササイズを選択できない...</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-400">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-2xl mt-1">😅</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">先輩に質問しづらい</h3>
                    <p className="text-gray-700 text-sm">忙しい先輩に何度も質問するのが申し訳ない...</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-2xl border-l-4 border-purple-400">
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 text-2xl mt-1">😔</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">技術に自信が持てない</h3>
                    <p className="text-gray-700 text-sm">自分の評価や治療が正しいのか不安...</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl">
              <div className="text-3xl mb-2">✨</div>
              <p className="text-xl font-bold mb-2">
                月額2,980円で全ての悩みを解決！
              </p>
              <p className="text-green-100">
                150名の仲間と一緒に、確実にスキルアップできます
              </p>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">19,000+</div>
              <div className="text-blue-200 text-sm">Instagram フォロワー</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">150+</div>
              <div className="text-blue-200 text-sm">スクール会員</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">30+</div>
              <div className="text-blue-200 text-sm">ライブセミナー</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 hover:scale-105 transform"
            >
              🚀 今すぐ7日間無料で始める
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300"
            >
              📚 詳細を見る
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 text-white text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>クレジットカード不要</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>いつでも解約可能</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>238分のセミナー動画プレゼント</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;