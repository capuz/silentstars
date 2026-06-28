---
repo: "aikawame/rsslovers"
name: "rsslovers"
description: "RSS feed delivery service."
url: "https://github.com/aikawame/rsslovers"
homepage: "https://rss.wor.jp/"
language: "Ruby"
languages: ["Ruby", "TypeScript"]
languagePcts: [55, 37]
topics: ["rss", "typescript", "clasp", "google-apps-script", "nextjs", "rails", "ruby"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-02-06T05:57:29Z"
lastCommitAt: "2026-06-28T03:07:58Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 74
maintainers: ["aikawame", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/317fb629e0185ee06c4d11ec391286db82ad6ca274ac1fdda0426d5905d2a697/aikawame/rsslovers"
---

# RSS愛好会

## 概要

[RSS愛好会](https://rss.wor.jp/) は、新聞社等のサイトでRSSフィードが配信されていない場合に代わりにフィード配信を行うためのサービスです。

ウェブサイトのフロントエンド、管理システム、クローラーの3つに大きく機能分割されています。

### フロントエンド

RSS愛好会のウェブサイト本体です。

- 言語: TypeScript 4.7
- フレームワーク: Next.js 12.x
- Linter: ESLint
- CI/CD: Vercel
- インフラ: Vercel

### 管理システム

フィードの管理システムです。

[Googleスプレッドシート](https://docs.google.com/spreadsheets/d/1TZf0LKn42hoE-5Q2y0gnhJY4Gsju_wcVw4zW6CLBbU8/edit?usp=sharing) 上のフィードデータをJSONに変換し、Amazon S3にアップロードします。

アップロードされたJSONファイルはフロントエンドから呼び出されます。

- 言語: TypeScript 4.7
- Linter: ESLint
- CI/CD: GitHub Actions
- デプロイ: Clasp
- インフラ: Google App Script

### クローラー

RSS愛好会で配信するためのフィードを各外部サイトから収集するためのクローラーです。

- 言語: Ruby 3.4
- フレームワーク: Ruby on Rails 8.0
- テスト: RSpec
- Linter: RuboCop
- CI/CD: GitHub Actions
- デプロイ: Serverless Framework
- インフラ: AWS Lambda

## コントリビュート

### 手順

1. ソースコードを [フォーク](https://github.com/aikawame/rsslovers/fork) します。
2. ブランチを切ります。 ( `git checkout -b feature/hogehoge` )
3. 変更をコミットします。 ( `git commit -am ':sparkles: 何やらを追加する'` )
4. ブランチをプッシュします。 ( `git push origin feature/hogehoge` )
5. プルリクエストを作成します。

### コミット

- コミットメッセージの先頭に [gitmoji](https://gitmoji.dev/) を使用してください。
- コミットメッセージは「○○する」といった動詞で記述してください。

### テスト…
