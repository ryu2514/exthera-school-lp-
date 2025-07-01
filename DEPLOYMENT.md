# Exthera-School デプロイメントガイド

## Vercelへのデプロイ手順

### 1. 前提条件
- Node.js (v18以上)
- Vercelアカウント
- exthera-school.comドメインへのアクセス

### 2. ビルド確認
```bash
npm run build
```

### 3. Vercelにデプロイ
```bash
npx vercel login
npx vercel --prod
```

### 4. カスタムドメイン設定

**Vercelダッシュボードで:**
1. プロジェクト → Settings → Domains
2. exthera-school.com を追加
3. DNS設定をVercelのネームサーバーに向ける

**DNS設定 (ドメイン管理画面で):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

### 5. 環境設定
- SSL証明書: 自動設定
- キャッシュ: 24時間設定済み
- セキュリティヘッダー: 設定済み

### 6. 自動デプロイ設定
GitHubリポジトリと連携すれば、pushする度に自動デプロイされます。

## 運営チェックリスト

### 技術面
- [x] プロダクションビルド成功
- [x] Vercel設定完了
- [ ] カスタムドメイン設定
- [ ] SSL証明書確認
- [ ] Google Analytics設定

### コンテンツ面
- [x] LP内容最適化
- [x] 画像配置完了
- [x] レスポンシブ対応
- [x] 特典表記修正

### 運営面
- [ ] 利用規約作成
- [ ] プライバシーポリシー作成
- [ ] 特定商取引法表記
- [ ] 返金・キャンセルポリシー

## パフォーマンス最適化

### 実装済み
- 画像最適化 (WebP対応)
- CSS/JS圧縮
- キャッシュ設定
- セキュリティヘッダー

### 今後の改善案
- 画像の遅延読み込み
- Critical CSS インライン化
- Service Worker導入
- CDN最適化

## モニタリング

### 推奨ツール
- Google Analytics 4
- Google Search Console
- Vercel Analytics
- PageSpeed Insights

## サポート情報
- Vercelドキュメント: https://vercel.com/docs
- 緊急時連絡: Vercelサポート
- バックアップ: GitHubリポジトリ