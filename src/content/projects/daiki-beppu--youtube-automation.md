---
repo: "daiki-beppu/youtube-automation"
name: "youtube-automation"
description: "YouTube チャンネル自動化 共有コア"
readmeQualityOk: true
url: "https://github.com/daiki-beppu/youtube-automation"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [76, 21]
stars: 161
forks: 8
openIssues: 18
closedIssues: 2465
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-22T10:22:52Z"
lastCommitAt: "2026-08-19T04:08:52Z"
lastReleaseAt: "2026-04-27T05:10:59Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 29
maintainers: ["daiki-beppu", "ykubota1227-blip", "morijiriyuichi-ops"]
openGraphImageUrl: "https://opengraph.githubassets.com/194cc0b083a7cdbe9d4d7a8eaac31acb738c09adf52ad7b805753eca2b994abd/daiki-beppu/youtube-automation"
fundingLinks: ["GITHUB:https://github.com/daiki-beppu"]
---

# youtube-channels-automation

YouTube チャンネル運営を自動化するツールキット。Analytics データ収集、AI コンテンツ生成、動画アップロード、メタデータ管理をまとめて提供します。

> [!WARNING]
> **移行告知（2026-07-02 / 2026-07-08 改訂）**: 本 Python 版は**メンテナンスモード**（バグ修正のみ、新機能なし）です。後継の TypeScript 製 **`tayk`**（npm パッケージ）は別リポジトリで開発中で、実運用カバレッジに達した時点で cutover（main ブランチからの Python コード削除）を判断します。**具体的な期日は設けません**。cutover 実施後は branch 参照の `uv add git+https://` は取得不可になります（git tag は残ります）。詳細・マイルストーン・移行手順は [`docs/migration/python-to-tayk.md`](https://github.com/daiki-beppu/youtube-automation/blob/HEAD/docs/migration/python-to-tayk.md) を参照してください。

> **新規利用者の方へ**: セットアップ手順は [`ONBOARDING.md`](https://github.com/daiki-beppu/youtube-automation/blob/HEAD/ONBOARDING.md) を参照してください。

## Features

- **Analytics 収集・分析** - YouTube Analytics API からデータを自動収集し、CTR・エンゲージメント分析レポートを生成
- **AI 音楽生成** - Google Lyria RealTime API / Suno プロンプト生成で楽曲を自動作成
- **AI 動画生成** - Google Veo で動画を生成、FFmpeg で静止画＋音声から MP4 を合成
- **AI 画像生成** - Gemini API でサムネイル・カバー画像を自動生成
- **YouTube 自動アップロード** - 動画・サムネイル・メタデータを一括アップロード
- **メタデータ生成** - チャンネル設定に基づくタイトル・説明文・タグ・多言語ローカライゼーションの自動生成
- **ベンチマーク分析** - 競合チャンネルのパフォーマンス比較
- **プレイリスト管理** - プレイリストの自動作成・動画追加
- **Analytics dashboard** - `yt-dashboard`…
