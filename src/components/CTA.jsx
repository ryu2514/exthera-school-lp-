import { motion } from 'framer-motion';
import { useState } from 'react';

const CTA = ({ variant = 'primary' }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/your-webhook-id/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPrimary = variant === 'primary';
  const bgClass = isPrimary ? 'bg-brand' : 'bg-gray-900';
  const textClass = isPrimary ? 'text-white' : 'text-white';

  return (
    <section className={`section-spacing ${bgClass}`}>
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🎉 先着100名限定キャンペーン実施中
          </div>
          
          <h2 className={`text-section-title ${textClass} mb-6`}>
            {isPrimary ? 
              <>無料で7日間<br /><span className="text-yellow-300">プロの技術を体験</span></> : 
              '患者さんに喜ばれる理学療法士になりませんか？'
            }
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <p className={`text-body-large mb-4 ${isPrimary ? 'text-white' : 'text-gray-200'} font-medium`}>
              {isPrimary ? 
                '無料体験でこれらを全てお試しいただけます：' :
                'Exthera-Schoolなら、こんなことが可能になります：'
              }
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              <div className="flex items-start gap-2">
                <span className="text-yellow-300 font-bold mt-1">✓</span>
                <span className={`text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-300'}`}>患者さんの症状を正確に評価</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-300 font-bold mt-1">✓</span>
                <span className={`text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-300'}`}>効果的なエクササイズを選択</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-300 font-bold mt-1">✓</span>
                <span className={`text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-300'}`}>臨床で自信を持って治療に取り組む</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-300 font-bold mt-1">✓</span>
                <span className={`text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-300'}`}>患者さんから「効果が出た」と感謝される</span>
              </div>
            </div>
          </div>

          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="お名前"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-900"
                />
                <input
                  type="email"
                  placeholder="メールアドレス"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-900"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </>
                ) : (
                  <>
                    🚀 今すぐ7日間無料で始める
                  </>
                )}
              </button>
              
              <p className={`text-sm mt-4 ${isPrimary ? 'text-blue-100' : 'text-gray-400'}`}>
                ※メールアドレスは厳重に管理し、スパムメールを送ることはありません
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="text-4xl mb-4">🎉</div>
              <h3 className={`text-2xl font-bold ${textClass} mb-4`}>
                ありがとうございます！
              </h3>
              <p className={`${isPrimary ? 'text-blue-100' : 'text-gray-300'}`}>
                登録が完了しました。間もなく詳細情報をお送りします。
              </p>
            </motion.div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className={`flex items-center ${isPrimary ? 'text-blue-100' : 'text-gray-300'}`}>
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span className="text-sm">22大特典付き</span>
            </div>
            <div className={`flex items-center ${isPrimary ? 'text-blue-100' : 'text-gray-300'}`}>
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span className="text-sm">238分のセミナー動画</span>
            </div>
            <div className={`flex items-center ${isPrimary ? 'text-blue-100' : 'text-gray-300'}`}>
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span className="text-sm">いつでも解約可能</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;