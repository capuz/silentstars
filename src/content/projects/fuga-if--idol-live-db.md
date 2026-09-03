---
repo: "fuga-if/idol-live-db"
name: "idol-live-db"
description: "アイドルライブデータベース iOS版"
readmeQualityOk: true
url: "https://github.com/fuga-if/idol-live-db"
language: "Swift"
languages: ["Swift", "Kotlin", "Rust"]
languagePcts: [38, 29, 22]
stars: 19
forks: 3
openIssues: 8
closedIssues: 86
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2026-03-24T04:55:10Z"
lastCommitAt: "2026-09-03T08:14:18Z"
lastReleaseAt: "2026-09-01T09:06:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 52
maintainers: ["fuga-if"]
openGraphImageUrl: "https://opengraph.githubassets.com/eabf9cff72fa301b59b718b5aa5fb427425f1cb5936544d40edf274e2b23e61e/fuga-if/idol-live-db"
---

# ImasLiveDB

アイドルライブのセットリストを記録・検索する非公式ファンメイドのデータベースアプリ。
iOS / Android ネイティブアプリと、それを支える Cloudflare Worker バックエンドで構成される。

> **非公式・ファンメイド** — 本プロジェクトはいかなる公式運営とも関係がありません。
> キャラクター画像・歌詞・公式ロゴは一切収録せず、ジャケット画像は Apple MusicKit API 経由でのみ表示します。

---

## ライセンス / 利用条件

- **非商用ライセンス（[PolyForm Noncommercial 1.0.0](https://github.com/fuga-if/idol-live-db/blob/HEAD/LICENSE.md)）** — 個人利用・改変・再配布は自由ですが、**商用利用は許可しません**（非公式ファンプロジェクトのため）。
- ソースは公開（source-available）ですが OSI 準拠の OSS ではありません。
- コントリビューション方法は [CONTRIBUTING.md](https://github.com/fuga-if/idol-live-db/blob/HEAD/CONTRIBUTING.md) を参照してください。

---

## 構成

| コンポーネント | ディレクトリ | スタック |
|---|---|---|
| iOS アプリ | `ImasLiveDB/` | SwiftUI (iOS 17+), GRDB, Nuke, MusicKit, xcodegen |
| Android アプリ | `ImasLiveDB-Android/` | Jetpack Compose, Retrofit, Coil, Firebase |
| バックエンド API | `imas-live-api/` | Cloudflare Workers, D1 (SQLite), CloudKit S2S |
| データ整備ツール | `tools/` | Python / Ruby (CloudKit seed・Apple Music 補完・整合性チェック) |

iOS と Android はファイル/コンポーネント構成を意図的に揃えており、片方の変更はもう片方に 1:1 で横展開する運用です。

各コンポーネントの設計方針: [iOS](https://github.com/fuga-if/idol-live-db/blob/HEAD/docs/ARCHITECTURE.md) /…
