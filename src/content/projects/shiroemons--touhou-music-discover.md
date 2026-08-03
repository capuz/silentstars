---
repo: "shiroemons/touhou_music_discover"
name: "touhou_music_discover"
description: "東方同人音楽流通の楽曲情報を収集するアプリ"
readmeQualityOk: true
url: "https://github.com/shiroemons/touhou_music_discover"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [75]
stars: 10
forks: 0
openIssues: 3
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-07-26T10:54:59Z"
lastCommitAt: "2026-08-03T06:44:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 67
maintainers: ["shiroemons"]
openGraphImageUrl: "https://opengraph.githubassets.com/263a7b41c97dd55b3bd50a49d1327c1c80aa20ac7fad2ceea4851110be9f1521/shiroemons/touhou_music_discover"
---

# touhou_music_discover
東方同人音楽流通の楽曲を収集するWebアプリ

## 開発環境のセットアップ

### 前提条件

- [devbox](https://www.jetify.com/devbox) がインストールされていること
- [direnv](https://direnv.net/) がインストールされていること（推奨）

### 初回セットアップ

1. devbox環境に入る
   ```shell
   devbox shell
   ```

2. 依存パッケージをインストール
   ```shell
   make setup
   ```

3. データベースの初期化
   ```shell
   make dbinit
   ```

4. マスターデータの投入
   ```shell
   make dbseed
   ```

### サーバーの起動

全サービス（PostgreSQL, Redis, Rails, Solid Queue worker, JS/CSS）をまとめて起動:

```shell
make tui
```

バックグラウンドで起動する場合:

```shell
make up
```

実行すると http://127.0.0.1:3000 でアクセスできる。

SpotifyがOAuthのリダイレクトURIに `localhost` を許可していないため開発環境ではループバックIPを使用しており、`localhost` でアクセスした場合は自動的に `127.0.0.1` へリダイレクトされる。

管理画面のアクション処理はSolid Queue経由の非同期ジョブとして実行される。`make up` / `make tui` では `jobs` サービスも起動するため、管理画面のアクションを動かす場合はRailsだけでなく `jobs` も起動していることを確認する。

サービス状態の確認:

```shell
make status
```

Solid Queueのジョブ実行状況を確認:

```shell
devbox run -- bin/rails runner 'SolidQueue::Job.order(id: :desc).limit(5).each { |job| p [job.id, job.queue_name, job.class_name, job.finished_at, job.created_at] }'
```

サービスの停止:

```shell
make down
```

### bundle install

```shell
make bundle
```

### DB関連

このアプリはRails本体用の…
