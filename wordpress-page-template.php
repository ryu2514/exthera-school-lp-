<?php
/*
Template Name: Exthera School Landing Page
*/
?>
<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>Exthera-School｜運動療法オンラインスクール｜臨床1年目でも再現できる学びを</title>
    <meta name="description" content="難しい運動療法を体系化。毎週更新の記事と動画で基礎から応用まで学べる。7日間無料体験＆22大特典付き。" />
    <meta name="keywords" content="理学療法,運動療法,オンラインスクール,リハビリ,エクササイズ" />
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <style>
/* TailwindCSS Base Reset */
*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,"Consolas","Liberation Mono","Menlo",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}

/* Custom Styles */
body {
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.6;
    color: #1f2937;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.hero {
    min-height: 100vh;
    background: linear-gradient(135deg, rgba(26, 152, 213, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 0;
}

.hero h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero h2 {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #4b5563;
}

.btn {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 9999px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background-color: #1a98d5;
    color: white;
}

.btn-primary:hover {
    filter: brightness(0.9);
}

.btn-secondary {
    border: 2px solid #1a98d5;
    color: #1a98d5;
    background: transparent;
}

.btn-secondary:hover {
    background-color: #1a98d5;
    color: white;
}

.section {
    padding: 5rem 0;
}

.section-gray {
    background-color: #f9fafb;
}

.section-blue {
    background-color: #1a98d5;
    color: white;
}

.grid {
    display: grid;
    gap: 2rem;
}

.grid-2 {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.text-center {
    text-align: center;
}

.mb-4 { margin-bottom: 1rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-16 { margin-bottom: 4rem; }

.text-3xl {
    font-size: 1.875rem;
    font-weight: 700;
}

.text-4xl {
    font-size: 2.25rem;
    font-weight: 700;
}

@media (min-width: 768px) {
    .hero h1 {
        font-size: 3.75rem;
    }
    
    .hero h2 {
        font-size: 1.5rem;
    }
    
    .text-4xl {
        font-size: 2.5rem;
    }
}

.faq-item {
    background: #f9fafb;
    border-radius: 1rem;
    margin-bottom: 1rem;
    overflow: hidden;
}

.faq-question {
    width: 100%;
    padding: 1.5rem;
    text-align: left;
    background: none;
    border: none;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.faq-answer {
    padding: 0 1.5rem 1.5rem;
    border-top: 1px solid #e5e7eb;
    color: #4b5563;
    display: none;
}

.faq-answer.show {
    display: block;
}

.form-group {
    margin-bottom: 1rem;
}

.form-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 9999px;
    font-size: 1rem;
}

.form-input:focus {
    outline: none;
    border-color: #1a98d5;
    box-shadow: 0 0 0 3px rgba(26, 152, 213, 0.1);
}

.pricing-card {
    background: white;
    border-radius: 1.5rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    overflow: hidden;
    max-width: 600px;
    margin: 0 auto;
}

.pricing-header {
    background: #1a98d5;
    color: white;
    padding: 1rem;
    text-align: center;
}

.pricing-body {
    padding: 3rem 2rem;
}

.feature-list {
    list-style: none;
    padding: 0;
}

.feature-list li {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
}

.feature-list li:before {
    content: "✓";
    color: #1a98d5;
    font-weight: bold;
    margin-right: 0.5rem;
}

.footer {
    background: #111827;
    color: white;
    padding: 3rem 0;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-bottom {
    border-top: 1px solid #374151;
    padding-top: 2rem;
    text-align: center;
    color: #9ca3af;
}
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>
                臨床1年目でも再現できる運動療法を、<br>
                体系的に・継続的に学べる<br>
                <span style="color: #1a98d5;">オンラインスクール</span>
            </h1>
            
            <h2>
                "現場で迷わない" 理学療法を、最短ルートで手に入れる。
            </h2>
            
            <div style="margin-bottom: 2rem;">
                <a href="#pricing" class="btn btn-primary" style="margin-right: 1rem; margin-bottom: 1rem;">7日間無料体験を始める</a>
                <a href="#benefits" class="btn btn-secondary" style="margin-bottom: 1rem;">詳細を見る</a>
            </div>
            
            <p style="color: #6b7280;">22大特典・238分のセミナー動画を無料プレゼント</p>
        </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="section section-gray">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-4xl mb-4">Exthera-Schoolが選ばれる5つの理由</h2>
            </div>

            <div class="grid grid-3">
                <div class="card">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📚</div>
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: #1a98d5; margin-right: 0.5rem;">✓</span>
                        週1回以上更新
                    </h3>
                    <p style="color: #6b7280;">記事・動画・ツールで習得が難しい運動療法を体系化</p>
                </div>

                <div class="card">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🎯</div>
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: #1a98d5; margin-right: 0.5rem;">✓</span>
                        実践的コンテンツ
                    </h3>
                    <p style="color: #6b7280;">明日から患者指導に使える評価＆エクササイズ。累計30回以上のライブセミナー録画も見放題</p>
                </div>

                <div class="card">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📱</div>
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: #1a98d5; margin-right: 0.5rem;">✓</span>
                        地方勤務でも学べる
                    </h3>
                    <p style="color: #6b7280;">完全オンライン、スマホでいつでも視聴</p>
                </div>

                <div class="card">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">👥</div>
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: #1a98d5; margin-right: 0.5rem;">✓</span>
                        150名超のクローズドコミュニティ
                    </h3>
                    <p style="color: #6b7280;">講師＆仲間に質問し放題</p>
                </div>

                <div class="card">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🎁</div>
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: #1a98d5; margin-right: 0.5rem;">✓</span>
                        22大特典・238分のセミナー動画を無料プレゼント
                    </h3>
                    <p style="color: #6b7280;">まずは0円で価値を体験</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Social Proof Section -->
    <section class="section section-blue">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-4xl mb-4">多くの理学療法士に選ばれています</h2>
                <p style="color: rgba(255,255,255,0.8);">信頼できる実績とコミュニティ</p>
            </div>

            <div class="grid grid-3">
                <div style="text-align: center; background: rgba(255,255,255,0.1); border-radius: 1rem; padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📸</div>
                    <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">19,000+</div>
                    <div style="color: rgba(255,255,255,0.8);">Instagramフォロワー</div>
                </div>

                <div style="text-align: center; background: rgba(255,255,255,0.1); border-radius: 1rem; padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🎥</div>
                    <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">30本超</div>
                    <div style="color: rgba(255,255,255,0.8);">有料ライブセミナー累計</div>
                </div>

                <div style="text-align: center; background: rgba(255,255,255,0.1); border-radius: 1rem; padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">👨‍🎓</div>
                    <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">150名超</div>
                    <div style="color: rgba(255,255,255,0.8);">オンラインスクール会員</div>
                </div>
            </div>

            <div class="text-center" style="margin-top: 3rem;">
                <p style="color: rgba(255,255,255,0.8); font-size: 0.875rem;">※2023年時点のデータです</p>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="section section-gray">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-4xl mb-4">料金プラン</h2>
                <p style="color: #6b7280;">シンプルで分かりやすい月額制</p>
            </div>

            <div class="pricing-card">
                <div class="pricing-header">
                    <span style="font-size: 0.875rem; font-weight: 600;">🎉 今だけ限定キャンペーン 🎉</span>
                </div>
                
                <div class="pricing-body">
                    <div class="text-center mb-8">
                        <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">Exthera-School メンバーシップ</h3>
                        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <span style="font-size: 3rem; font-weight: 700; color: #1a98d5;">¥9,800</span>
                            <span style="color: #6b7280; margin-left: 0.5rem;">/月</span>
                        </div>
                        <p style="color: #6b7280;">月額制で安心・シンプル</p>
                    </div>

                    <div class="text-center">
                        <button onclick="openForm()" class="btn btn-primary" style="width: 100%; max-width: 400px; margin-bottom: 1rem;">7日間無料体験を始める</button>
                        <p style="color: #6b7280; font-size: 0.875rem;">クレジットカード不要・いつでも解約可能</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section section-blue">
        <div class="container">
            <div class="text-center">
                <h2 class="text-4xl mb-8">今すぐ7日間無料体験を始めましょう</h2>
                <p style="color: rgba(255,255,255,0.8); margin-bottom: 2rem;">クレジットカード不要・いつでも解約可能。まずは22大特典を受け取って価値を体験してください。</p>

                <div id="cta-form" style="max-width: 400px; margin: 0 auto;">
                    <form onsubmit="submitForm(event)">
                        <div class="form-group">
                            <input type="text" class="form-input" placeholder="お名前" required id="name">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-input" placeholder="メールアドレス" required id="email">
                        </div>
                        <button type="submit" class="btn" style="background: white; color: #1a98d5; width: 100%; margin-bottom: 1rem;">7日間無料体験を始める</button>
                    </form>
                    <p style="color: rgba(255,255,255,0.8); font-size: 0.875rem;">※メールアドレスは厳重に管理し、スパムメールを送ることはありません</p>
                </div>

                <div id="success-message" style="display: none; background: rgba(255,255,255,0.1); border-radius: 1rem; padding: 2rem; max-width: 400px; margin: 0 auto;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
                    <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">ありがとうございます！</h3>
                    <p style="color: rgba(255,255,255,0.8);">登録が完了しました。間もなく詳細情報をお送りします。</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="section">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-4xl mb-4">よくある質問</h2>
                <p style="color: #6b7280;">ご不明な点がございましたら、お気軽にお問い合わせください</p>
            </div>

            <div style="max-width: 800px; margin: 0 auto;">
                <div class="faq-item">
                    <button class="faq-question" onclick="toggleFAQ(0)">
                        <span>Q. 初学者でもついていけますか？</span>
                        <span id="icon-0">+</span>
                    </button>
                    <div class="faq-answer" id="answer-0">
                        <p>A. 評価→エクササイズ処方をステップ化しているので安心です。基礎から応用まで段階的に学習できるよう設計されており、1年目の理学療法士でも無理なく習得できます。</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" onclick="toggleFAQ(1)">
                        <span>Q. 退会は簡単ですか？</span>
                        <span id="icon-1">+</span>
                    </button>
                    <div class="faq-answer" id="answer-1">
                        <p>A. マイページからワンクリックでいつでも解約できます。面倒な手続きや引き止めは一切ありません。</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" onclick="toggleFAQ(2)">
                        <span>Q. ライブセミナー参加費は？</span>
                        <span id="icon-2">+</span>
                    </button>
                    <div class="faq-answer" id="answer-2">
                        <p>A. 会員はすべて無料・アーカイブ見放題です。月1回開催されるライブセミナーは追加費用なしで参加でき、録画も無制限で視聴できます。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2024 Exthera-School by Ryuju Kobayashi, PT. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        function toggleFAQ(index) {
            const answer = document.getElementById(`answer-${index}`);
            const icon = document.getElementById(`icon-${index}`);
            
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                icon.textContent = '+';
            } else {
                document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('show'));
                document.querySelectorAll('[id^="icon-"]').forEach(ic => ic.textContent = '+');
                
                answer.classList.add('show');
                icon.textContent = '−';
            }
        }

        function submitForm(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // ここにZapier webhook URLを設定してください
            const webhookUrl = 'https://hooks.zapier.com/hooks/catch/YOUR-WEBHOOK-ID/';
            
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    timestamp: new Date().toISOString(),
                }),
            })
            .then(response => {
                document.getElementById('cta-form').style.display = 'none';
                document.getElementById('success-message').style.display = 'block';
            })
            .catch(error => {
                alert('送信に失敗しました。しばらく後にもう一度お試しください。');
            });
        }

        function openForm() {
            document.querySelector('#pricing').scrollIntoView({
                behavior: 'smooth'
            });
        }
    </script>
</body>
</html>