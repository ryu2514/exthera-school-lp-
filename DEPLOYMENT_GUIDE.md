# Exthera-School LP デプロイメントガイド

## 🚀 Vercelへのデプロイ手順

### 前提条件
- GitHubアカウント
- Vercelアカウント（無料）

### ステップ1: GitHubにプッシュ

1. **GitHubで新しいリポジトリを作成**
   - リポジトリ名: `exthera-school-lp`
   - パブリック/プライベートどちらでもOK

2. **ローカルプロジェクトをGitHubにプッシュ**
   ```bash
   cd exthera-school-landing
   git init
   git add .
   git commit -m "Initial commit: Exthera-School landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/exthera-school-lp.git
   git push -u origin main
   ```

### ステップ2: Vercelでデプロイ

1. **Vercelにアクセス**: https://vercel.com/
2. **「New Project」をクリック**
3. **GitHubリポジトリをインポート**
   - `exthera-school-lp` を選択
4. **設定確認**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. **「Deploy」をクリック**

### ステップ3: カスタムドメイン設定

1. **Vercelプロジェクトの「Settings」**
2. **「Domains」セクション**
3. **「Add Domain」をクリック**
4. **`lp.exthera-school.com` を入力**
5. **DNS設定指示に従う**

## 🌐 DNS設定（お名前.comやムームードメインなど）

### CNAMEレコード追加
```
Type: CNAME
Name: lp
Value: cname.vercel-dns.com
```

### Aレコード設定（代替案）
```
Type: A
Name: lp
Value: 76.76.19.123
```

## 📋 デプロイ後の確認項目

### ✅ 動作確認
- [ ] `https://your-project.vercel.app` でアクセス可能
- [ ] レスポンシブデザインが正常動作
- [ ] フォーム送信テスト
- [ ] アニメーション動作確認
- [ ] FAQ展開/収納動作

### ✅ カスタムドメイン確認
- [ ] `https://lp.exthera-school.com` でアクセス可能
- [ ] SSL証明書が自動発行される
- [ ] モバイル表示確認

## 🔧 更新・修正方法

### コード修正後の更新
1. **ローカルで修正**
2. **GitHubにプッシュ**
   ```bash
   git add .
   git commit -m "Update: 修正内容"
   git push
   ```
3. **Vercelが自動でビルド・デプロイ**

## 📊 パフォーマンス最適化

### Lighthouse目標スコア
- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

### 最適化済み要素
✅ 画像最適化（WebP対応）
✅ CSS/JS最小化
✅ フォント最適化
✅ レスポンシブ画像
✅ メタタグ完備

## 🎯 完成後のURL

- **メインサイト**: https://exthera-school.com
- **ランディングページ**: https://lp.exthera-school.com

## 🔄 今後の運用

### A/Bテスト
- 異なるヘッドライン
- CTA文言の変更
- 価格表示の最適化

### 分析ツール設置
- Google Analytics
- Google Tag Manager
- Facebook Pixel（必要に応じて）

## 📞 サポート

デプロイ中に問題が発生した場合：
1. エラーメッセージをスクリーンショット
2. Vercelのビルドログを確認
3. DNSレコードの設定を再確認

---

**推定作業時間**: 30分〜1時間
**難易度**: 初級〜中級