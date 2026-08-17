---
repo: "daig0rian/epcltvapp"
name: "epcltvapp"
description: "Android TV / Fire TV 向け EPGStation クライアントアプリ"
readmeQualityOk: true
url: "https://github.com/daig0rian/epcltvapp"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["android-tv", "epgstation", "leanback", "fire-tv"]
stars: 61
forks: 16
openIssues: 6
closedIssues: 20
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2021-06-06T02:04:51Z"
lastCommitAt: "2026-08-17T04:18:28Z"
lastReleaseAt: "2021-09-26T23:23:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 51
maintainers: ["daig0rian", "imaiworks"]
openGraphImageUrl: "https://opengraph.githubassets.com/7944c7ae015692002e689444e8c604f9a8ecb0d54ad11ebc7885bb49c360428f/daig0rian/epcltvapp"
---

# EPGStation の録画を見る
"EPGStation の録画を見る" は Android TV / Fire TV 向けに設計された EPGStation クライアントアプリです。

リモコンの↑↓←→キー操作が基本となる Android TV から EPGStation の録画を見るために開発されました。

## 特徴
- Android TV 向け標準 UI の Leanback テーマを使用
- Android TV のリモコンだけで操作が完結
- Android TV のリモコン内蔵マイクから録画済番組を声で検索
- MX Player や VLC といった外部動画プレーヤーに対応
- 内蔵プレーヤーで ARIB STD-B24 字幕に対応（v1.28〜）

## 使い方
画面ごとの操作方法は **[操作マニュアル](https://github.com/daig0rian/epcltvapp/blob/HEAD/MANUAL.md)** を参照してください。

## 必要な環境
- EPGStation Version 1.x.x または 2.x.x（Version 1.x.x については動作確認が限定的です）
- Android 5.1 以上の Android TV / Fire TV

## テスト環境
- SONY ブラビア KJ-43X8000H（ Android TV / Android 10 / 4K )
- Google TV Streamer (4K)
- Fire TV Stick 第3世代
- EPGStation Version 2.10.0

## インストール方法

### Downloader by AFTVnews を使う

1. Fire TV / Android TV の App Store から **[Downloader by AFTVnews](https://www.aftvnews.com/downloader/)** をインストールする。
2. [Releases](https://github.com/daig0rian/epcltvapp/releases) の最新リリースノートに記載された **ショートコード（数字6桁）** を確認する。
3. Downloader を起動し、ショートコードを入力すると APK が自動的にダウンロードされる。
4. ダウンロード完了後、画面の案内に従ってインストールする。

### APK を直接転送する

[Releases](https://github.com/daig0rian/epcltvapp/releases) の最新 `app-release.apk` をadbコマンドなどで TV に送信しインストール。

## ストアへの公開状況
-…
