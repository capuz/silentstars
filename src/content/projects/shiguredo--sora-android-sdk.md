---
repo: "shiguredo/sora-android-sdk"
name: "sora-android-sdk"
description: "WebRTC SFU Sora Android SDK"
readmeQualityOk: true
url: "https://github.com/shiguredo/sora-android-sdk"
homepage: "https://sora-android-sdk.shiguredo.jp"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["android", "webrtc"]
stars: 34
forks: 8
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 9
recentReleases: 0
createdAt: "2017-08-24T06:40:03Z"
lastCommitAt: "2026-09-17T08:50:21Z"
lastReleaseAt: "2022-09-16T08:58:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 55
maintainers: ["voluntas", "t-miya", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9c8469ff1b5f4efd16c6d3d21d9d1a7a3a5484f75b16eee02cd88f028b5c24c/shiguredo/sora-android-sdk"
---

# Sora Android SDK

Sora Android SDK は [WebRTC SFU Sora](https://sora.shiguredo.jp) の Android クライアントアプリケーションを開発するためのライブラリです。

## About Shiguredo's open source software

We will not respond to PRs or issues that have not been discussed on Discord. Also, Discord is only available in Japanese.

Please read https://github.com/shiguredo/oss before use.

## 時雨堂のオープンソースソフトウェアについて

利用前に https://github.com/shiguredo/oss をお読みください。

## 特徴

- [libwebrtc](https://webrtc.googlesource.com/src/) を利用した Sora 向け Android SDK
- [WebRTC 統計情報](https://www.w3.org/TR/webrtc-stats/) の取得に対応
- 回線が不安定になった際、解像度とフレームレートどちらを維持するかの設定をする [DegradationPreference](https://w3c.github.io/mst-content-hint/#degradation-preference-when-encoding) に対応
  - `MAINTAIN_FRAMERATE` / `MAINTAIN_RESOLUTION` / `BALANCED` が指定できる
- 映像コーデック `VP8` / `VP9` / `AV1` / `H.264` / `H.265` に対応
  - `H.264` と `H.265` はハードウェアデコーダー/エンコーダーに対応
  - `VP9` と `AV1` は対応端末であればハードウェアデコーダー/エンコーダーを利用可能
- 音声トラックを無効にし、デジタルサイレンスパケットを送出するミュート(ソフトミュート)を利用できる
- 映像トラックを無効にし、黒塗りの映像パケットを送出するミュート(ソフトミュート)を利用できる
- 音声・映像のプライバシーインジケーターを消灯するミュート(ハードミュート)を利用できる
- フロント / リアカメラ切り替えとキャプチャフォーマット変更に対応
- 各種カメラ設定を利用できる
  - 解像度・フレームレート・フロントカメラ優先・初期ハードミュート
- ステレオ音声の送信・受信に対応
  - 送信は…
