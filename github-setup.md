# 🚀 GitHub リポジトリ作成手順（自動化版）

## 📋 実行手順

### 1. GitHub Web UI でリポジトリ作成

**以下のリンクをクリックして新しいリポジトリを作成：**
👉 **https://github.com/new**

**設定内容：**
- Repository name: `exthera-school-lp`
- Description: `🏥 Professional landing page for Exthera-School - Japanese online exercise therapy academy`
- Visibility: **Public** を選択
- Initialize repository: **チェックを外す**（既存のコードがあるため）

### 2. GitHubユーザー名確認

**あなたのGitHubユーザー名を教えてください。**
例：`your-username` の部分を実際のユーザー名に変更します。

### 3. 自動プッシュコマンド

**リポジトリ作成完了後、以下のコマンドを実行：**

```bash
# リモートリポジトリのURL設定
git remote set-url origin https://github.com/YOUR_USERNAME/exthera-school-lp.git

# メインブランチをpush
git push -u origin main
```

### 4. GitHub Personal Access Token が必要な場合

**認証エラーが出る場合：**

1. **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. **「Generate new token (classic)」をクリック**
3. **Note**: `Exthera School LP Deploy`
4. **Expiration**: `30 days`
5. **Select scopes**: `repo` にチェック
6. **「Generate token」をクリック**
7. **トークンをコピー**（一度しか表示されません）

**プッシュ時：**
- Username: GitHubユーザー名
- Password: コピーしたトークン

## 🎯 完了確認

リポジトリ作成とプッシュが完了したら：

1. **https://github.com/YOUR_USERNAME/exthera-school-lp** でコードが表示される
2. **README.md** が美しく表示される
3. **32ファイル**がアップロードされている

## 📞 次のステップ：Vercel デプロイ

GitHubプッシュ完了後、Vercelでの自動デプロイを実行します。

**準備完了の合図を教えてください！**