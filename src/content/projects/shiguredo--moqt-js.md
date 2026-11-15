---
repo: "shiguredo/moqt-js"
name: "moqt-js"
description: "MOQT (Media over QUIC Transport) client library"
originalDescription: "MOQT (Media over QUIC Transport) client library"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/shiguredo/moqt-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["zero-dependency", "media-over-quic"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-06T12:04:40Z"
lastCommitAt: "2026-11-15T11:21:54Z"
lastReleaseAt: "2026-05-13T02:58:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["voluntas", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e33baef078ffa801f4727ab01c2f27cac35d0d00a059bd1179a1ed084ad7c1a/shiguredo/moqt-js"
---

> [!WARNING]
> このライブラリは開発中であり、仕様が積極的に変更される場合があります。

> [!WARNING]
> このライブラリは時雨堂が開発している Sora MoQ とのみ疎通確認を行っています。
> 他の MOQT Relay サーバーとの疎通確認は行っておらず、今後も予定はありません。

## About Shiguredo's open source software

We will not respond to PRs or issues that have not been discussed on Discord. Also, Discord is only available in Japanese.

Please read <https://github.com/shiguredo/oss/blob/master/README.en.md> before use.

## 時雨堂のオープンソースソフトウェアについて

利用前に <https://github.com/shiguredo/oss> をお読みください。

## moqt-js について

`moqt-js` はブラウザ向けの Media over QUIC Transport (MOQT) クライアントライブラリです。

## 特徴

- ブラウザ向け MOQT クライアント
  - WebTransport API を利用
  - Publisher / Subscriber 対応
  - 高レベル API (WebCodecs / MediaStream 対応)
  - 音声と映像の同期再生
  - 受信側の再生 (playout) の実装 (jitter buffer、時間圧縮 / 時間伸長、補間、追いつき)
  - 音声の配送経路の選択 (Subgroup / Datagram)
- Media over QUIC Transport (MOQT) 対応
  - [Media over QUIC Transport](https://datatracker.ietf.org/doc/html/draft-ietf-moq-transport-23)
  - `draft-23` 対応 (接続時のプロトコル識別子は `moqt-23`)
- Low Overhead Media Container (LOC) 対応
  - [Low Overhead Media Container](https://datatracker.ietf.org/doc/html/draft-ietf-moq-loc-05)
  - `draft-05` 対応
- MOQT Streaming Format (MSF) 対応
  - [MOQT…
