---
repo: "daiki-beppu/youtube-automation"
name: "youtube-automation"
description: "YouTube チャンネル自動化 共有コア"
url: "https://github.com/daiki-beppu/youtube-automation"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 28]
stars: 157
forks: 2
openIssues: 243
closedIssues: 529
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-03-22T10:22:52Z"
lastCommitAt: "2026-06-28T01:44:32Z"
lastReleaseAt: "2026-04-27T05:10:59Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 93
undervaluedScore: 31
maintainers: ["daiki-beppu"]
openGraphImageUrl: "https://opengraph.githubassets.com/1054ddc6d690c39a59637827c178c97b3491894436b48c9d8dbe524b8f6e7fee/daiki-beppu/youtube-automation"
fundingLinks: ["GITHUB:https://github.com/daiki-beppu"]
---

# youtube-channels-automation

YouTube チャンネル運営を自動化するツールキット。Analytics データ収集、AI コンテンツ生成、動画アップロード、メタデータ管理をまとめて提供します。

> **新規利用者の方へ**: セットアップ手順は [`ONBOARDING.md`](ONBOARDING.md) を参照してください。

## Features

- **Analytics 収集・分析** - YouTube Analytics API からデータを自動収集し、CTR・エンゲージメント分析レポートを生成
- **AI 音楽生成** - Google Lyria RealTime API / Suno プロンプト生成で楽曲を自動作成
- **AI 動画生成** - Google Veo で動画を生成、FFmpeg で静止画＋音声から MP4 を合成
- **AI 画像生成** - Gemini API でサムネイル・カバー画像を自動生成
- **YouTube 自動アップロード** - 動画・サムネイル・メタデータを一括アップロード
- **メタデータ生成** - チャンネル設定に基づくタイトル・説明文・タグ・多言語ローカライゼーションの自動生成
- **ベンチマーク分析** - 競合チャンネルのパフォーマンス比較
- **プレイリスト管理** - プレイリストの自動作成・動画追加

> **個別 skill のカタログ**: `yt-skills sync` で配布される全 43 skill の「なにができるか」一覧は [`docs/features.md`](docs/features.md) を参照。
>
> **workflow 系 skill の使い分け**: `/wf-new` `/wf-next` `/wf-status` `/collection-ideate` と `workflow-state.json` の扱いは [`docs/workflow-cheatsheet.md`](docs/workflow-cheatsheet.md) を参照。

## Architecture

```
youtube-channels-automation/      # ← このリポジトリ
├── src/
│   └── youtube_automation/       # インストール対象パッケージ
│       ├── utils/                # コアユーティリティ
│       ├── agents/               # 自動化エージェント
│       ├── auth/                 # OAuth 2.0 認証
│…
