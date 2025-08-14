# 🔍 Google Analytics 4 設定ガイド

## 📋 手順概要

1. **Google Analytics 4でプロパティ作成**
2. **測定IDを取得** 
3. **Vercelで環境変数設定**
4. **動作確認**

## 🚀 1. Google Analytics 4 設定

### Google Analytics アカウント作成・ログイン
1. [Google Analytics](https://analytics.google.com/) にアクセス
2. Googleアカウントでログイン
3. 「測定を開始」をクリック

### プロパティ作成
1. **アカウント名**: 「Exthera School」
2. **プロパティ名**: 「Exthera School LP」
3. **レポートのタイムゾーン**: 「日本」
4. **通貨**: 「日本円（JPY）」

### データストリーム設定
1. **プラットフォーム**: 「ウェブ」を選択
2. **ウェブサイトのURL**: `https://lp.exthera-school.com`
3. **ストリーム名**: 「Exthera School LP」

### 測定ID取得
- 作成完了後、**測定ID**（G-XXXXXXXXXX）をコピー

## 🔧 2. Vercel環境変数設定

### Vercelダッシュボードで設定
1. [Vercelダッシュボード](https://vercel.com/dashboard) にアクセス
2. `exthera-school-lp` プロジェクトを選択
3. **Settings** → **Environment Variables**

### 環境変数を追加
**1つ目:**
- **Name**: `VITE_GA_MEASUREMENT_ID`
- **Value**: `G-XXXXXXXXXX` (取得した測定ID)
- **Environment**: `Production`, `Preview`, `Development` 全てチェック

**2つ目:**
- **Name**: `VITE_ENABLE_ANALYTICS`
- **Value**: `true`
- **Environment**: `Production` のみチェック（本番環境のみ有効化）

### 再デプロイ
環境変数設定後、**Deployments** → **Redeploy** で最新デプロイを再実行

## ✅ 3. 動作確認

### リアルタイムレポート確認
1. Google Analytics → **レポート** → **リアルタイム**
2. `https://lp.exthera-school.com` にアクセス
3. リアルタイムでユーザー数が表示されるか確認

### トラッキング確認
**ブラウザの開発者ツールで:**
1. F12でデベロッパーツールを開く
2. **Network**タブ
3. `gtag/js` や `collect` へのリクエストを確認

## 📊 4. 設定可能な追跡項目

### 基本トラッキング（自動）
- ページビュー
- セッション時間
- ユーザー数
- 地域・デバイス情報

### カスタムイベント（今後追加可能）
- ボタンクリック追跡
- フォーム送信追跡
- スクロール深度
- 動画視聴時間

## 🎯 重要なメトリクス

### コンバージョン設定
- **無料体験申込み**ボタンクリック
- **詳細を見る**ボタンクリック
- **料金プラン**セクションへのスクロール

### 目標設定
- 滞在時間: 2分以上
- ページビュー: 3ページ以上
- 特定ボタンのクリック率

## 🔒 プライバシー対応

### Cookie同意（将来的に）
- Cookie使用の同意バナー
- プライバシーポリシー更新
- データ収集の説明

## 📈 レポート活用

### 週次確認項目
- ユーザー数・セッション数
- 人気ページ
- 流入元（検索、SNS、直接アクセス）
- デバイス別アクセス

### 月次分析
- コンバージョン率
- 離脱ページ分析
- A/Bテスト結果（今後）

---

## ⚡ クイックスタート

1. **GA4でプロパティ作成** → 測定IDをコピー
2. **Vercel環境変数設定** → 2つの変数を追加
3. **再デプロイ実行** → 新しい設定で反映
4. **リアルタイムレポート確認** → 動作テスト

設定完了後、約30分でデータ収集が開始されます！