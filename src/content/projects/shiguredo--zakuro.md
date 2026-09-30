---
repo: "shiguredo/zakuro"
name: "zakuro"
description: "WebRTC Load Testing Tool Zakuro"
readmeQualityOk: true
url: "https://github.com/shiguredo/zakuro"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [61, 37]
stars: 47
forks: 4
openIssues: 0
closedIssues: 0
watchers: 11
contributors: 7
recentReleases: 0
createdAt: "2020-09-07T03:16:44Z"
lastCommitAt: "2026-09-30T09:56:14Z"
lastReleaseAt: "2021-05-17T12:15:38Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 47
maintainers: ["voluntas", "github-actions[bot]", "Hexa"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9b58f033207a61acf77080b67769fc8b285e88db6f028880e38791aafca4909/shiguredo/zakuro"
---

# WebRTC Load Testing Tool Zakuro

## About Shiguredo's open source software

We will not respond to PRs or issues that have not been discussed on Discord. Also, Discord is only available in Japanese.

Please read <https://github.com/shiguredo/oss> before use.

## 時雨堂のオープンソースソフトウェアについて

利用前に <https://github.com/shiguredo/oss> をお読みください。

## WebRTC Load Testing Tool Zakuro について

WebRTC Load Testing Tool Zakuro は [libwebrtc](https://webrtc.googlesource.com/src.git/) を利用した [WebRTC SFU Sora](https://sora.shiguredo.jp/) 向けの WebRTC 負荷試験ツールです。

## 特徴

- 最新の WebRTC SFU Sora に対応
- JSONC によるシナリオファイルへ対応
- 動的インスタンス作成へ対応
- クラスター機能への対応
  - 複数シグナリング URL を指定できる
- フェイク音声/映像に対応
- リアルタイムメッセージング機能へ対応
- シグナリングのクライアント証明書 (mTLS) へ対応
- 最新の libwebrtc へ対応
- [OpenH264](https://www.openh264.org/) を利用した H.264 コーデックに対応
- [Sora C++ SDK](https://github.com/shiguredo/sora-cpp-sdk) ベース
  - ハードウェアアクセラレーターが利用できる
- 期間繰り返し対応
  - 30 秒負荷かけて切断を繰り返すなど

## 動作環境

- macOS 15 arm64
- Ubuntu 26.04 x86_64
- Ubuntu 26.04 arm64
- Ubuntu 24.04 x86_64
- Ubuntu 22.04 x86_64

## 使ってみる

Zakuro を使ってみたい人は [USE.md](https://github.com/shiguredo/zakuro/blob/HEAD/doc/USE.md) をお読みください。

## ビルドする

Zakuro のビルドしたい人は…
