---
repo: "ci7lus/kiririn"
name: "kiririn"
description: "macOS/iOS 向けデジタル放送視聴プログラム実装研究資料"
readmeQualityOk: true
url: "https://github.com/ci7lus/kiririn"
homepage: "https://scrapbox.io/ci7lus/kiririn"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
topics: ["dtv", "epgstation", "isdb", "konomitv", "mirakurun", "vlckit", "swift", "ios", "macos", "arib"]
stars: 7
forks: 1
openIssues: 10
closedIssues: 27
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2026-06-01T14:38:54Z"
lastCommitAt: "2026-08-09T04:48:06Z"
lastReleaseAt: "2026-07-27T09:55:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 62
maintainers: ["ci7lus", "rokoucha"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1256184356/73236692-8a8d-4aec-8622-fde05d0d0a3b"
---

# kiririn

kiririn は macOS/iOS 上において、デジタル放送の視聴を行うプログラムの実装を研究する目的で頒布される研究資料です。<br>
本アプリに CAS 処理は含まれていないため、暗号化された放送データを視聴することはできません。<br>
放送視聴機能を利用するには利用者自身が管理する [Chinachu/Mirakurun](https://github.com/Chinachu/Mirakurun) または [l3tnun/EPGStation](https://github.com/l3tnun/EPGStation) が必要です。

## 機能

アプリの主な機能は次のとおりです。

- 番組情報の表示 (MPEG2-TS のみ)
- 番組表の表示 (Mirakurun / EPGStation 接続時)
- 録画の再生 (EPGStation / KonomiTV / Google Drive 接続時)
- キャプチャ画像の簡易管理
- [プラグイン](#プラグイン)による機能拡張
- データ放送 (web-bml・Mahiron 接続時)

動画再生周りの機能は次のとおりです。(VLCKit 由来)

- MPEG2-TS の再生
- ARIB STD-B24 形式の字幕表示 (libaribcaption)
- デュアルモノ対応
- 5.1ch 音声の仮想サラウンド化
- MMT/TLV の再生 (部分的なサポート・superfashi/FFmpeg)
- HDR 表示
- PiP (iOS のみ)

## 実行方法

> [!NOTE]
> 本アプリを実行すると、一部のログやパフォーマンス情報・クラッシュ情報が Sentry を通じて収集されます。

### macOS

[Releases](https://github.com/ci7lus/kiririn/releases) から最新のリリースをダウンロードできます。<br>
macOS 15.4 (Sequoia) 以上での実行に対応しているはずです。動作確認は 26.5.2 で行っています。

### iOS

プレリリース版を TestFlight にて配布しています。<br>
TestFlight 参加リンクは [Releases](https://github.com/ci7lus/kiririn/releases) に記載しています。<br>
iOS 18.4 以上での実行に対応しているはずです。動作確認は 26.5.2 で行っています。

## プラグイン

仕様は [Plugin/README.md](https://github.com/ci7lus/kiririn/blob/HEAD/Plugin/README.md)…
