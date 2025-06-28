<?php
/*
Template Name: Exthera School Landing Page
*/

// WordPressヘッダーなしで完全な独立ページとして表示
?>
<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="<?php echo get_template_directory_uri(); ?>/landing/assets/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>Exthera-School｜運動療法オンラインスクール｜臨床1年目でも再現できる学びを</title>
    <meta name="description" content="難しい運動療法を体系化。毎週更新の記事と動画で基礎から応用まで学べる。7日間無料体験＆22大特典付き。" />
    <meta name="keywords" content="理学療法,運動療法,オンラインスクール,リハビリ,エクササイズ" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="Exthera-School｜運動療法オンラインスクール" />
    <meta property="og:description" content="臨床1年目でも再現できる運動療法を体系的に学べるオンラインスクール" />
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/landing/assets/og.png" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Exthera-School" />
    
    <!-- ビルド済みCSSファイルの読み込み -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/landing/assets/index-CvjQrg2t.css">
    
    <!-- Schema.org FAQ structured data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "初学者でもついていけますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "評価→エクササイズ処方をステップ化しているので安心です。基礎から応用まで段階的に学習できるよう設計されており、1年目の理学療法士でも無理なく習得できます。"
          }
        }
      ]
    }
    </script>
</head>
<body>
    <div id="root"></div>
    
    <!-- ビルド済みJSファイルの読み込み -->
    <script type="module" src="<?php echo get_template_directory_uri(); ?>/landing/assets/index-Bec5LVlZ.js"></script>
    
    <!-- Google Analytics など必要なトラッキングコード -->
    <?php if (function_exists('wp_head')) wp_head(); ?>
</body>
</html>