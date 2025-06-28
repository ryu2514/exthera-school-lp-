# Exthera-School WordPress実装ガイド

## 📋 実装手順（10分で完了）

### ステップ1: ファイルのアップロード

1. **FTPまたはWordPress管理画面でファイルアップロード**
   ```
   /wp-content/themes/あなたのテーマ名/
   └── landing/
       ├── index.html
       └── assets/
           ├── index-CvjQrg2t.css
           ├── index-Bec5LVlZ.js
           ├── logo.svg
           ├── hero-exercise-therapy.png
           └── og.png
   ```

2. **アップロードするファイル**
   - `dist/` フォルダの中身をすべて `landing/` フォルダに配置

### ステップ2: WordPressページテンプレート追加

1. **WordPress管理画面にログイン**
   - URL: https://exthera-school.com/wp-admin/
   - ID: test
   - パスワード: 2ismh8cu5u

2. **テーマエディター**で以下のファイルを作成：

#### A. `page-landing.php` を作成
```php
<?php
/*
Template Name: Exthera School Landing Page
*/

// 現在のテーマディレクトリを取得
$theme_dir = get_template_directory_uri();
?>
<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="<?php echo $theme_dir; ?>/landing/assets/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>Exthera-School｜運動療法オンラインスクール｜臨床1年目でも再現できる学びを</title>
    <meta name="description" content="難しい運動療法を体系化。毎週更新の記事と動画で基礎から応用まで学べる。7日間無料体験＆22大特典付き。" />
    
    <!-- CSS読み込み -->
    <link rel="stylesheet" href="<?php echo $theme_dir; ?>/landing/assets/index-CvjQrg2t.css">
    
    <!-- Schema.org構造化データ -->
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
            "text": "評価→エクササイズ処方をステップ化しているので安心です。"
          }
        }
      ]
    }
    </script>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="<?php echo $theme_dir; ?>/landing/assets/index-Bec5LVlZ.js"></script>
</body>
</html>
```

#### B. `functions.php` に以下を追加
```php
// ランディングページ用の設定
function exthera_landing_setup() {
    // カスタムページテンプレートを登録
    add_theme_support('custom-page-templates');
}
add_action('after_setup_theme', 'exthera_landing_setup');

// ページテンプレートを追加
function exthera_add_page_templates($templates) {
    $templates['page-landing.php'] = 'Exthera School Landing Page';
    return $templates;
}
add_filter('theme_page_templates', 'exthera_add_page_templates');
```

### ステップ3: 固定ページ作成

1. **固定ページ > 新規追加**
2. **設定内容**：
   - タイトル: `ランディングページ`
   - スラッグ: `landing`
   - ページテンプレート: `Exthera School Landing Page`
   - 本文: 空のまま

3. **公開**をクリック

### ステップ4: 確認

- アクセス先: `https://exthera-school.com/landing/`
- ランディングページが表示されることを確認

### ステップ5: カスタマイズ

#### A. Zapier webhook URL設定
`assets/index-Bec5LVlZ.js` 内の以下を変更：
```javascript
// 変更前
'https://hooks.zapier.com/hooks/catch/your-webhook-id/'

// 変更後（実際のZapier URLに変更）
'https://hooks.zapier.com/hooks/catch/実際のID/'
```

#### B. 料金情報更新
以下のファイルで `<<FIXME>>` を実際の情報に変更：
- 月額料金
- 締切日
- 募集期間

## 🔧 トラブルシューティング

### 問題1: ページが表示されない
- **解決**: パーマリンク設定を更新
  1. 設定 > パーマリンク
  2. 「変更を保存」をクリック

### 問題2: スタイルが適用されない
- **解決**: ファイルパスを確認
  1. ブラウザの開発者ツールでエラーを確認
  2. CSS/JSファイルのパスが正しいか確認

### 問題3: フォームが動作しない
- **解決**: Zapier webhook URLを設定
  1. Zapierでwebhook URLを生成
  2. JSファイル内のURLを更新

## 📞 サポート

実装中に問題が発生した場合は、エラーメッセージとともにお知らせください。

## 🎯 完了後の確認項目

- [ ] ランディングページが表示される
- [ ] レスポンシブデザインが動作する
- [ ] フォーム送信ができる
- [ ] アニメーションが動作する
- [ ] SEO設定が反映されている

---

**所要時間**: 約10-15分
**難易度**: 初級〜中級