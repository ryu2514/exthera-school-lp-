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
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${textClass} mb-6`}>
            {isPrimary ? 
              '今すぐ7日間無料体験を始めましょう' : 
              '運動療法のスキルアップを始めませんか？'
            }
          </h2>
          
          <p className={`text-lg mb-8 ${isPrimary ? 'text-blue-100' : 'text-gray-300'}`}>
            {isPrimary ? 
              'クレジットカード不要・いつでも解約可能。まずは22大特典を受け取って価値を体験してください。' :
              'Exthera-Schoolで、臨床現場で迷わない理学療法を身につけましょう。'
            }
          </p>

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
                className="w-full bg-white text-brand hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? '送信中...' : '7日間無料体験を始める'}
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