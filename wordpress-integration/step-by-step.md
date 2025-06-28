# 📋 WordPress実装 - ステップバイステップ

## 🎯 今すぐできること

### 1. WordPress管理画面にアクセス
```
URL: https://exthera-school.com/wp-admin/
ID: test
パスワード: 2ismh8cu5u
```

### 2. 準備するファイル

以下のファイルをダウンロード準備：
```
exthera-school-landing/dist/
├── index.html
├── assets/
│   ├── index-CvjQrg2t.css
│   ├── index-Bec5LVlZ.js
│   └── (画像ファイル)
```

## 🚀 実装オプション

### オプション1: 最も簡単（推奨）
**新しい固定ページとして追加**

1. **外観 > テーマエディター**
2. **新しいファイル作成**: `page-landing.php`
3. **コードをコピペ**（下記参照）
4. **固定ページ作成**
5. **完了！**

### オプション2: カスタムHTML
**既存ページに埋め込み**

1. **固定ページ > 新規追加**
2. **ブロック: カスタムHTML**
3. **コードを貼り付け**
4. **完了！**

## 💻 コピペ用コード

### A. `page-landing.php` 用
```php
<?php
/*
Template Name: Exthera School Landing
*/
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exthera-School｜運動療法オンラインスクール</title>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/landing/assets/index-CvjQrg2t.css">
</head>
<body>
    <div id="root"></div>
    <script type="module" src="<?php echo get_template_directory_uri(); ?>/landing/assets/index-Bec5LVlZ.js"></script>
</body>
</html>
```

### B. functions.php に追加
```php
function add_landing_template($templates) {
    $templates['page-landing.php'] = 'Exthera School Landing';
    return $templates;
}
add_filter('theme_page_templates', 'add_landing_template');
```

## 📁 ファイルアップロード場所

### WordPressファイルマネージャーで：
```
/wp-content/themes/あなたのテーマ名/landing/
```

### FTPで：
```
public_html/wp-content/themes/テーマ名/landing/
```

## ⚡ 緊急時の簡単な方法

もし上記が難しい場合は：

1. **固定ページ > 新規追加**
2. **タイトル**: "ランディングページ"
3. **本文（HTMLモード）**に以下を貼り付け：

```html
<style>
/* ここにCSS内容をコピペ */
</style>

<div id="root">
<!-- ここにHTML内容をコピペ -->
</div>

<script>
/* ここにJS内容をコピペ */
</script>
```

## 🎯 確認方法

実装後、以下でアクセス：
- `https://exthera-school.com/landing/`

## 📞 サポート

実装でお困りの際は：
1. スクリーンショットを撮影
2. エラーメッセージをコピー
3. 詳細をお教えください

**推定実装時間**: 5-10分