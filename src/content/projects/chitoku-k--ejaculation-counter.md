---
repo: "chitoku-k/ejaculation-counter"
name: "ejaculation-counter"
description: "ぴゅっ♡"
url: "https://github.com/chitoku-k/ejaculation-counter"
homepage: "https://xn--y2wx43a.chitoku.jp"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 17
forks: 2
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2015-09-22T07:51:29Z"
lastCommitAt: "2026-06-26T23:40:40Z"
lastReleaseAt: "2020-05-03T16:44:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 71
maintainers: ["renovate[bot]", "chitoku-k", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d816a004bf90522821089e58964176f4396604cd21551a47419814b5152eb5c4/chitoku-k/ejaculation-counter"
---

ぴゅっぴゅカウンター
====================

[ぴゅっぴゅカウンター](https://xn--y2wx43a.chitoku.jp) はぴゅっぴゅ回数をカウントして毎日真夜中にトゥートします。

## 機能

- 日々のぴゅっぴゅ回数をデータベースに記録
- 毎日真夜中にカウンターとデータベースを更新
- 「ぴゅっ♡」を含むトゥートでぴゅっぴゅカウンターを更新

## おまけ

- だいたい以下のようなトゥートで診断メーカーの結果をリプライ
  - 「ぴゅっぴゅしていい？」
  - 「おふとん入っていい？」
  - 「ちんぽに勝ちたい」
  - 「ちんぽチャレンジ」
  - 「おちんぽ挿入チャレンジ」
  - 「おちんちん握って」
  - 「ちんぽ揃えゲーム」
  - 「○○のAV」
  - 「法律ギリギリチャレンジ」
  - 「ブルーアーカイブはエッチ」
- 「through ガチャ」
- 「doublet ガチャ」

## アーキテクチャー

### Web

Grafana または REST API へのリクエストの振り分けを行います。

### Supplier

Mastodon から WebSocket でトゥートを取得して MQ へ送信します。

### Reactor

MQ から取得したトゥートに対し、Mastodon でのリプライ送信や DB の更新などの処理を行います。  
また、REST API を実装しています。

## 設定方法

データベースの作成とテーブルの設定を行います。  
スキーマ: [database/](./database)

環境変数に値の設定を行います。

```bash
# ログレベル（trace/debug/info/warn/error/fatal/panic）
LOG_LEVEL=

# Web TLS 証明書（指定した場合は Web サーバーは HTTPS）
TLS_CERT=/path/to/tls/cert
TLS_KEY=/path/to/tls/key

# DB ユーザー ID（数値）
USER_ID=

# Mastodon ユーザー ID（数値）
MASTODON_USER_ID=

# Mastodon ユーザー トークン
MASTODON_ACCESS_TOKEN=

# Mastodon サーバー URL
MASTODON_SERVER_URL=

# Mastodon ストリーム
# 設定値: https://docs.joinmastodon.org/methods/timelines/streaming/#websocket-a-idwebsocketa
MASTODON_STREAM=user

# データベース 接続情報
DB_HOST=…
